import React from 'react';
import { cn } from '../lib/utils';

interface LogoProps {
  className?: string;
  isFooter?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, isFooter = false }) => {
  const normalLogoSrc = '/files/file_00000000f40871fda93d9c281d3fe5c2_mw9zig';
  const glowingLogoSrc = '/files/file_0000000021bc71fda0fc864f5a7e3c9e_fhmgf4';

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
