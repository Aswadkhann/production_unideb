import React, { ReactNode } from 'react';
import Link from "next/link";

interface SocialLinkProps {
  icon: ReactNode;
  name: string;
  redirect: string;
  hoverBg: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ icon, name, redirect, hoverBg }) => {
  const divclass = `h-full   flex items-center px-3 hover:w-[100px] transition-all duration-300 delay-100 relative group`;
  const divStyle: React.CSSProperties = {
    backgroundColor: hoverBg,
  };

  return (
    <div className={divclass} style={divStyle}>
      <Link target="_blank" href={redirect}>
        <div className="flex items-center">
          {icon}
        </div>

        <div className="absolute top-[12px] right-0 opacity-0 group-hover:opacity-100 uppercase font-semibold text-white text-[10px] px-2 py-1">
          {name}
        </div>
      </Link>
    </div>
  );
};

export default SocialLink;
