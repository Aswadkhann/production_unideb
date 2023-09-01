import React from 'react';

interface Link {
  href: string;
  label: string;
}

const linkData: Link[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/admissions', label: 'Admissions' },
  { href: '/academics', label: 'Academics' },
  { href: '/faculties', label: 'Faculties' },
  { href: '/downloads', label: 'Downloads' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/media', label: 'Media' },
];

const Footer: React.FC = () => {
  return (
    <footer className="text-white w-full bg-[#155744]">
      <div className="w-full h-[180px] mx-auto max-w-screen-xl p-4 pt-8 md:flex-col md:items-center md:justify-between">
        <ul className="flex flex-wrap justify-center pb-18 items-center gap-y-4 mt-3 text-sm font-medium  sm:mt-0">
          {linkData.map((link, index) => (
            <li
              key={index}
              className={`${
                index < linkData.length - 1 ? 'border-r px-3 ' : ''
              }`}
            >
              <a
                href={link.href}
                className={`hover:  px-2 py-1`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="text-sm flex items-center lg:pt-16 justify-center">
          Copyright © 2023 . All rights reserved.
        </span>
        <span className="text-sm flex items-center justify-center">
          University of Debrecen, Hungary (Regional Office South Asia)
        </span>
      </div>
    </footer>
  );
};

export default Footer;
