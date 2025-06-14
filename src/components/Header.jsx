import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "/new-logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const location = useLocation();

  const isBooksActive = location.pathname.startsWith("/book");
  const isMoreItemActive = ["/media", "/gallery"].includes(location.pathname);

  const mainNavItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Speaking", href: "/speaking" },
    { label: "Consulting", href: "/consulting" },
    { label: "Contact", href: "/contact" },
  ];

  const moreNavItems = [
    { label: "Media", href: "/media" },
    { label: "Blogs", href: "/blogs" },
    { label: "Gallery", href: "/gallery" },
  ];

  const allNavItems = [...mainNavItems, ...moreNavItems];

  const toggleMoreDropdown = () => {
    setIsMoreOpen(!isMoreOpen);
  };

  const handleClickOutside = () => {
    if (isMoreOpen) {
      setIsMoreOpen(false);
    }
  };

  return (
    <header className="bg-black text-white text-[20px]">
      <div className="container mx-auto px-4 py-3 flex flex-wrap justify-between items-center">
        {/* Logo */}
        <Link to='/' className="flex items-center mr-4">
          <div className="h-16 md:h-20 w-auto">
            <img
              src={logo}
              alt="PV Logo"
              className="h-full w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/placeholder.svg?height=80&width=80";
              }}
            />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4 flex-grow justify-end">
          {mainNavItems.map((link) => {
            const isActive = location.pathname === link.href || (link.label === "Books" && isBooksActive);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-2 lg:px-3 py-2 transition duration-300 text-[20px] ${isActive ? "text-yellow-500" : "hover:text-yellow-500"}`}
              >
                {link.label}
                {isActive && <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></div>}
              </a>
            );
          })}

          {/* More Dropdown */}
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={toggleMoreDropdown}
              className={`flex items-center px-2 lg:px-3 py-2 transition duration-300 text-[20px] cursor-pointer ${isMoreItemActive ? "text-yellow-500" : "hover:text-yellow-500"}`}
            >
              Media kit <ChevronDown size={16} className="ml-1" />
              {isMoreItemActive && <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-500"></div>}
            </button>

            {isMoreOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded shadow-lg z-10">
                {moreNavItems.map((link) => {
                  const isActive = location.pathname === link.href;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-2 transition duration-300 text-[20px] ${isActive ? "text-yellow-500" : "hover:text-yellow-500 hover:bg-gray-900"}`}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden flex flex-col items-center bg-black py-4 px-4 text-center space-y-3">
          {allNavItems.map((link) => {
            const isActive = location.pathname === link.href || (link.label === "Books" && isBooksActive);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative block px-4 py-2 transition duration-300 text-[20px] ${isActive ? "text-yellow-500" : "hover:text-yellow-500"}`}
              >
                {link.label}
                {isActive && (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-yellow-500"></div>
                )}
              </a>
            );
          })}
        </nav>
      )}

      {/* Outside Click Handler for Dropdown */}
      {isMoreOpen && (
        <div
          className="fixed inset-0 z-0"
          onClick={handleClickOutside}
        />
      )}
    </header>
  );
};

export default Header;
