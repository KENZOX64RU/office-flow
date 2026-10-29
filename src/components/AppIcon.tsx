import React from 'react';
import * as Icons from 'lucide-react';

interface AppIconProps {
  name: string;
  className?: string;
  size?: number;
  color?: string;
}

export const AppIcon: React.FC<AppIconProps> = ({ name, className = 'w-5 h-5', size, color }) => {
  // Try direct lookup in lucide-react
  // @ts-expect-error dynamic lucide icon lookup
  const IconComponent = Icons[name] || Icons.Box;

  return <IconComponent className={className} size={size} color={color} />;
};
