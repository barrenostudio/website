// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
// } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

// Navigation items data
const navItems = [
  { label: "Know Us", href: "/home#about-us" },
  { label: "Our Best Work", href: "/home#projects" },
  { label: "Services", href: "/home#services" },
  { label: "Contact", href: "/home#contact" },
  { label: "Login", href: "/login", isUnderlined: true },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full mix-blend-difference">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="z-50 hidden w-full items-center justify-between px-3 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`flex rounded-md px-3 py-1 font-paragraph text-off-blanco transition-colors duration-200 hover:bg-white/10 ${item.isUnderlined ? "underline" : ""}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-white md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mt-4 rounded-md bg-opacity-95 py-4 md:hidden">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-white transition-colors hover:text-gray-300 ${
                    item.isUnderlined ? "underline underline-offset-4" : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// const Navbar = () => {
//   return (
//     <div className="fixed top-0 z-50 py-4">
//       <NavigationMenu className="z-10 flex items-center justify-center">
//         <NavigationMenuList>
//           {navItems.map((item, index) => (
//             <NavigationMenuItem key={index}>
//               <NavigationMenuLink
//                 href={item.href}
//     className={`flex font-paragraph text-off-blanco text-paragraph rounded-md px-3 py-1 transition-colors duration-200 hover:bg-white/10
//    ${item.isUnderlined ? "underline" : ""}`}
//               >
//                 {item.label}
//               </NavigationMenuLink>
//             </NavigationMenuItem>
//           ))}
//         </NavigationMenuList>
//       </NavigationMenu>
//     </div>
//   );
// };

// export default Navbar;
