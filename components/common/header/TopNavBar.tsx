import React, { useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

interface DropdownItem {
  href: string;
  label: string;
}

interface LinkItem {
  href: string;
  label: string;
  dropdownItems: (string | DropdownItem)[];
}

const linkData: LinkItem[] = [
  { href: "/", label: "HOME", dropdownItems: [] },
  {
    href: "/about",
    label: "ABOUT",
    dropdownItems: [
      { href: "/history", label: "History" },
      { href: "/ranking", label: "Accreditation & Ranking" },
      { href: "/services", label: "Our Services" },
      { href: "/representative", label: "Representatives" },
    ],
  },
  {
    href: "",
    label: "ADMISSIONS",
    dropdownItems: [
      { href: "/application", label: "Application Process" },
      { href: "/medical-program", label: "Medical Program Entrance Procedure" },
      { href: "/non-medical-program", label: "Non-Medical Program Entrance Procedure" },
      { href: "/scholarship", label: "Scholarships" },
    ],
  },
  { href: "/academics", label: "ACADEMICS", dropdownItems: [] },
  { href: "/faculties", label: "FACULTIES", dropdownItems: [] },
  {
    href: "",
    label: "DOWNLOADS",
    dropdownItems: [
      { href: "/sample-paper", label: "Sample Paper" },
      { href: "/brouchers", label: "Brouchers" }
    ],
  },
  { href: "/contact", label: "CONTACT US", dropdownItems: [] },
  {
    href: "",
    label: "MEDIA",
    dropdownItems: [
      { href: "/blog", label: "Blog" },
      { href: "/event-gallery", label: "Event" }
    ],
  },
];

const TopNavBar: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownEnter = (index: number) => {
    setOpenDropdown(index);
  };

  const handleDropdownLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <div className="flex justify-center  h-full">
      {linkData.map((link, index) => (
        <Link key={index} href={link.href}>
          <div
            className={`relative group h-full min-w-[120px] justify-center hover:text-white hover:border-t-[8px] border-black py-2 px-4  flex items-center`}
            onMouseEnter={() => handleDropdownEnter(index)}
            onMouseLeave={handleDropdownLeave}
          >
            <div className="flex items-center cursor-pointer">
              {link.label}{" "}
              {link.dropdownItems.length > 0 && (
                <FiChevronDown className="ml-1" />
              )}
            </div>
            {link.dropdownItems.length > 0 && openDropdown === index && (
              <div className="absolute left-0 right-0 top-[94%] mt-1 bg-[#FFFFFF]">
                <div className="w-[200px] text-[#144438]">
                  {link.dropdownItems.map((item, i) => (
                    <div key={i}>
                      {typeof item === "string" ? (
                        <Link key={i} href={`/${item.toLowerCase()}`}>
                          <button
                            onClick={() => setOpenDropdown(null)}
                            className={`block py-3 px-4 border-x bg-[#FFFFFF] border-b border-[#F5B418] hover:bg-gray-200`}
                          >
                            {item}
                          </button>
                        </Link>
                      ) : (
                        <Link key={item.href} href={item.href}>
                          <button
                            onClick={() => setOpenDropdown(null)}
                            className={`block py-3 px-4 border-x bg-[#FFFFFF] border-b w-full text-left border-[#F5B418] hover:bg-gray-200`}
                          >
                            {(item as DropdownItem).label}
                          </button>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default TopNavBar;
