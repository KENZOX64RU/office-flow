/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * ScrollLockManager - Coordinates independent scrolling of layers
 * (Sidebar, TaskGuideDrawer, GlobalSearchModal, SuggestModal)
 * while locking background page scrolling, preventing scroll chaining (overscroll),
 * preserving exact scroll position upon closing, and restoring clean document flow.
 */

interface ScrollLockOptions {
  resetToTop?: boolean;
}

class ScrollLockManager {
  private activeLocks = new Set<string>();
  private savedScrollY = 0;
  private originalOverflow = '';
  private originalPaddingRight = '';

  /**
   * Acquire a scroll lock for a specific layer.
   * On first lock, captures window scroll position and locks document.body scroll.
   */
  acquire(lockId: string): void {
    if (typeof window === 'undefined' || typeof document === 'undefined' || !document.body) {
      return;
    }

    if (this.activeLocks.size === 0) {
      // Capture current scroll position before locking
      this.savedScrollY =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;

      this.originalOverflow = document.body.style.overflow;
      this.originalPaddingRight = document.body.style.paddingRight;

      // Compensate for disappearing scrollbar on desktop to prevent horizontal layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }

      document.body.style.overflow = 'hidden';
    }

    this.activeLocks.add(lockId);
  }

  /**
   * Release a scroll lock for a specific layer.
   * When all locks are cleared, restores document.body overflow and scroll position.
   */
  release(lockId: string, options?: ScrollLockOptions): void {
    if (typeof window === 'undefined' || typeof document === 'undefined' || !document.body) {
      return;
    }

    this.activeLocks.delete(lockId);

    if (this.activeLocks.size === 0) {
      this.restoreStylesAndPosition(options?.resetToTop);
    }
  }

  /**
   * Force release all active locks (e.g. on navigation transitions)
   */
  forceReleaseAll(options?: ScrollLockOptions): void {
    if (typeof window === 'undefined' || typeof document === 'undefined' || !document.body) {
      return;
    }

    this.activeLocks.clear();
    this.restoreStylesAndPosition(options?.resetToTop);
  }

  private restoreStylesAndPosition(resetToTop = false): void {
    document.body.style.overflow = this.originalOverflow || '';
    document.body.style.paddingRight = this.originalPaddingRight || '';

    if (resetToTop) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      this.savedScrollY = 0;
    } else {
      const targetY = this.savedScrollY;
      window.scrollTo({ top: targetY, left: 0, behavior: 'instant' as ScrollBehavior });
    }
  }

  getActiveLockCount(): number {
    return this.activeLocks.size;
  }

  getSavedScrollY(): number {
    return this.savedScrollY;
  }

  setSavedScrollY(y: number): void {
    this.savedScrollY = y;
  }
}

export const scrollLockManager = new ScrollLockManager();
