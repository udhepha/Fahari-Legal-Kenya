import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, isFooter = false }) => {
  const normalLogoSrc = '/logos/fahari-legal-normal.png';
  const glowingLogoSrc = '/logos/fahari-legal-glowing.png';

  const logoSrc = isFooter ? glowingLogoSrc : normalLogoSrc;

  return (
    <img 
      src={logoSrc}
      alt="Fahari Legal Kenya Logo"
      className={cn(
        "h-auto",
        isFooter ? "w-[120px] md:w-[150px]" : "w-[150px] md:w-[180px]",
        className
      )}
      referrerPolicy="no-referrer"
    />
  );
};

export default Logo;
