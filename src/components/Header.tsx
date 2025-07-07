import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/TLOlogo.png';
import '../index.css';

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const navItems = [
    {
      name: 'About Us',
      submenu: [
        { name: 'Firm Background', path: '/aboutus' },
        { name: 'Principal Values', path: '/principal-values' },
      ],
    },
    {
      name: 'Practice Areas',
      path: '/practice-areas',
      submenu: [
        { name: 'Corporate Finance and banking matters', path: '/practice/corporate-finance' },
        { name: 'Mergers & acquisitions', path: '/practice/mergers-acquisitions' },
        { name: 'Capital markets', path: '/practice/capital-markets' },
        { name: 'Corporate/Commercial', path: '/practice/corporate-commercial' },
        { name: 'Restructuring and Insolvency', path: '/practice/restructuring-insolvency' },
      ],
    },
    { name: 'Lawyers', path: '/lawyers' },
    { name: 'News', path: '/news' },
    { name: 'Careers', path: '/careers' }, 
    { name: 'Contact Us', path: '/contact' },
    { name: 'Admn', path: '/admin' },
  ];


  useEffect(() => {
    const checkMobile = () => {
      const screenWidthThreshold = window.screen.width * 0.45;
      const isPortrait = window.innerHeight > window.innerWidth;
      const isNarrow = window.innerWidth < screenWidthThreshold;
      setIsMobile(isPortrait || isNarrow || window.innerWidth < 900);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setOpenSubmenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="w-full h-[96px] bg-[#9B999A] px-6 flex items-center sticky top-0 z-50">
      <div className="max-w-[1440px] w-full flex items-center justify-between mx-auto relative">
        {/* Logo */}
        <NavLink to="/" className="shrink-0">
          <img
            src={logo}
            alt="Tiendas Law Offices Logo"
            className="w-[240px] h-[100px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </NavLink>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center space-x-10">
            {navItems.map((item) => {
              const hasSubmenu = !!item.submenu;
              const isActive = item.submenu?.some((sub) => location.pathname === sub.path) || location.pathname === item.path;

              return (
                <div key={item.name} className="relative group">
                  {!hasSubmenu ? (
                    <NavLink
                      to={item.path ?? '#'}
                      className={({ isActive: navActive }) =>
                        `text-[15px] font-semibold font-dmsans hover:underline ${
                          navActive || isActive ? 'text-white' : 'text-black'
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <>
                      <div
                        className={`flex items-center text-[15px] font-semibold font-dmsans gap-1 cursor-default ${
                          isActive ? 'text-white' : 'text-black'
                        }`}
                      >
                        {item.name}
                        <ChevronDown size={18} />
                      </div>

                      {/* Hover bridge */}
                      <div className="absolute top-full left-0 w-full h-5 bg-transparent z-40" />

                      {/* Submenu */}
                      <div
                        className="absolute left-0 top-full mt-1 bg-[#9B999A]/50 backdrop-blur-md rounded shadow-md z-50
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible
                          transition-opacity duration-200 delay-150"
                      >
                        {item.submenu.map((sub) => (
                          <NavLink
                            key={sub.name}
                            to={sub.path}
                            className={({ isActive: subActive }) =>
                              `block px-4 py-2 text-[14px] font-dmsans whitespace-nowrap ${
                                subActive ? 'bg-[#8A8888]/80 text-white' : 'text-black hover:bg-[#8A8888]/70'
                              }`
                            }
                          >
                            {sub.name}
                          </NavLink>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              );
            })}
          </nav>
        )}

        {/* Mobile Hamburger Toggle */}
        {isMobile && (
          <button
            className="text-black"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}

        {/* Mobile Dropdown Menu */}
        {isMobile && (
          <div
            ref={menuRef}
            className={`absolute top-full left-0 w-full bg-[#9B999A]/50 backdrop-blur-md flex flex-col items-start gap-6 p-6 z-50 transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            {navItems.map((item) => {
              const hasSubmenu = !!item.submenu;
              const isSubmenuOpen = openSubmenu === item.name;

              return (
                <div key={item.name} className="w-full group relative">
                  {!hasSubmenu ? (
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `text-[16px] font-dmsans hover:underline ${isActive ? 'text-white' : 'text-black'}`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </NavLink>
                  ) : (
                    <div className="flex flex-col w-full">
                      <div
                        className="text-[16px] font-dmsans text-black flex items-center justify-between w-full hover:underline cursor-pointer"
                        onClick={() => setOpenSubmenu(isSubmenuOpen ? null : item.name)}
                      >
                        {item.name}
                        <ChevronDown
                          size={16}
                          className={`ml-2 transition-transform duration-300 ${
                            isSubmenuOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </div>

                      {isSubmenuOpen && (
                        <div className="ml-4 mt-2 flex flex-col gap-2">
                          {item.submenu.map((sub) => (
                            <NavLink
                              key={sub.name}
                              to={sub.path}
                              className="text-[14px] font-dmsans text-black hover:underline"
                              onClick={() => {
                                setIsOpen(false);
                                setOpenSubmenu(null);
                              }}
                            >
                              {sub.name}
                            </NavLink>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
