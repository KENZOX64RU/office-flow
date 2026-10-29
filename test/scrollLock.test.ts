import { test, describe, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { scrollLockManager } from '../src/utils/scrollLock.ts';

describe('ScrollLockManager Unit Tests', () => {
  beforeEach(() => {
    // Mock minimal browser globals for testing logic
    (global as any).window = {
      scrollY: 350,
      pageYOffset: 350,
      innerWidth: 1200,
      scrollTo: ({ top }: { top: number }) => {
        (global as any).window.scrollY = top;
      }
    };

    (global as any).document = {
      documentElement: {
        scrollTop: 350,
        clientWidth: 1185
      },
      body: {
        scrollTop: 350,
        style: {
          overflow: '',
          paddingRight: ''
        }
      }
    };

    scrollLockManager.forceReleaseAll();
  });

  test('Acquires first lock, saves scroll position and locks body overflow', () => {
    assert.equal(scrollLockManager.getActiveLockCount(), 0);
    scrollLockManager.acquire('sidebar');

    assert.equal(scrollLockManager.getActiveLockCount(), 1);
    assert.equal(scrollLockManager.getSavedScrollY(), 350);
    assert.equal((global as any).document.body.style.overflow, 'hidden');
    // Scrollbar compensation (1200 - 1185 = 15px)
    assert.equal((global as any).document.body.style.paddingRight, '15px');
  });

  test('Multiple locks maintain body lock until all layers are released', () => {
    scrollLockManager.acquire('sidebar');
    scrollLockManager.acquire('task-guide');
    assert.equal(scrollLockManager.getActiveLockCount(), 2);
    assert.equal((global as any).document.body.style.overflow, 'hidden');

    // Release one layer
    scrollLockManager.release('sidebar');
    assert.equal(scrollLockManager.getActiveLockCount(), 1);
    assert.equal((global as any).document.body.style.overflow, 'hidden');

    // Release second layer -> restores overflow and position
    scrollLockManager.release('task-guide');
    assert.equal(scrollLockManager.getActiveLockCount(), 0);
    assert.equal((global as any).document.body.style.overflow, '');
    assert.equal((global as any).document.body.style.paddingRight, '');
    assert.equal((global as any).window.scrollY, 350);
  });

  test('Releasing with resetToTop=true scrolls window to top (for navigation)', () => {
    scrollLockManager.acquire('sidebar');
    assert.equal(scrollLockManager.getSavedScrollY(), 350);

    // User selected a new program
    scrollLockManager.release('sidebar', { resetToTop: true });
    assert.equal(scrollLockManager.getActiveLockCount(), 0);
    assert.equal((global as any).document.body.style.overflow, '');
    assert.equal((global as any).window.scrollY, 0);
  });

  test('forceReleaseAll clears all locks cleanly', () => {
    scrollLockManager.acquire('sidebar');
    scrollLockManager.acquire('search');
    scrollLockManager.acquire('suggest');
    assert.equal(scrollLockManager.getActiveLockCount(), 3);

    scrollLockManager.forceReleaseAll({ resetToTop: true });
    assert.equal(scrollLockManager.getActiveLockCount(), 0);
    assert.equal((global as any).document.body.style.overflow, '');
    assert.equal((global as any).window.scrollY, 0);
  });
});
