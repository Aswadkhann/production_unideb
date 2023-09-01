import React, { useState, useEffect, useRef } from "react";
import { FaTimes, FaBars, FaPlus } from "react-icons/fa";
import Link from "next/link";

interface MenuItem {
  id: string;
  title: string;
  link: string;
  subLinks?: SubMenuItem[];
}

interface SubMenuItem {
  id: string;
  title: string;
  link: string;
}

const SmallHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<Record<string, boolean>>({});
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsMenu(!isMenu);
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsMenu(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const menuItems: MenuItem[] = [
    { id: "home", title: "HOME", link: "/" },
    { id: "about", title: "ABOUT", link: "/", subLinks: [
        { id: "history", title: "HISTORY", link: "/history" },
        { id: "accreditation", title: "ACCREDITATION & RANKING", link: "/ranking" },
        { id: "services", title: "OUR SERVICES", link: "/service" },
        { id: "representative", title: "REPRESENTATIVE", link: "/representative" },
      ] },
    { id: "admissions", title: "ADMISSIONS", link: "/", subLinks: [
        { id: "application", title: "APPLICATION PROCESS", link: "/application" },
        { id: "medical", title: "MEDICAL PROGRAM ENTRANCE PROCEDURE", link: "/medical-entrance" },
        { id: "nonmedical", title: "NON-MEDICAL PROGRAM ENTRANCE PROCEDURE", link: "/non-medical-entrance" },
        { id: "scholarship", title: "SCHOLARSHIP", link: "/scholarships" },
      ] },
    { id: "academics", title: "ACADEMICS", link: "/academics" },
    { id: "faculties", title: "FACULTIES", link: "/faculties" },
    { id: "downloads", title: "DOWNLOADS", link: "/", subLinks: [
        { id: "sample", title: "SAMPLE PAPERS", link: "/sample-papers" },
        { id: "brouchers", title: "BROUCHERS", link: "/brouchers" },
      ] },
    { id: "contact", title: "CONTACT US", link: "/contact" },
    { id: "media", title: "MEDIA", link: "/", subLinks: [
        { id: "blog", title: "BLOG", link: "/blog" },
        { id: "event", title: "EVENTS_GALLERY", link: "/event" },
      ] },
  ];

  const handleSubmenuToggle = (itemId: string) => {
    setSubmenuOpen((prev) => ({
      ...prev,
      [itemId]: !prev[itemId], // Toggle submenu visibility for the clicked item
    }));
  };

  return (
    <div className="text-white font-nunito text-[12px] font-light items-center relative">
      <div className="flex justify-between items-center">
        <div className="container py-4 gap-16 flex items-center">
          <div className="pl-6">
            <Link href="/">
              <button>
                <img src="/unideb-logo.png" width={155} alt="uni-logo" />
              </button>
            </Link>
          </div>
        </div>
        <div className="flex py-4">
          <div className="flex">
            <div
              className="rounded-full text-xs items-center cursor-pointer justify-center  flex pr-6"
              onClick={handleMenuToggle}
            >
              {isMenuOpen ? (
                <FaTimes size={30} />
              ) : (
                <FaBars size={30} />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden relative -top-[73px] bg-[#8E8E8E] w-full`}
        ref={dropdownRef}
        style={{ marginTop: isMenuOpen ? "60px" : 0 }}
      >
        <ul className="text-white">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className=" cursor-pointer font-medium capitalize hover:bg-gray-700 border-b border-black"
            >
              <div className="flex items-center justify-between w-full">
                <button className="flex p-4 justify-between items-center w-full" onClick={() => handleSubmenuToggle(item.id)}>
                  {item.title}{" "}
                  {item.subLinks && (
                    <FaPlus
                      size={18}
                      className={` transition-transform ${
                        submenuOpen[item.id] ? "rotate-45" : ""
                      }`}
                    />
                  )}
                </button>
              </div>
              {item.subLinks && submenuOpen[item.id] && (
                <ul className="bg-[#8E8E9E]">
                  {item.subLinks.map((subLink) => (
                    <li
                      key={subLink.id}
                      className=" py-2 pl-12 cursor-pointer font-medium  border-t capitalize border-black hover:bg-gray-700 "
                    >
                      <Link href={subLink.link}>
                        <div className="flex space-x-2"><span>&#8226;</span> <button className="block">{subLink.title}</button></div>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SmallHeader;
