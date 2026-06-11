import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Projects" },
  // { href: "#stack", label: "Skills" },
  // { href: "#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const linkClass = "relative text-zinc-200 transition-colors duration-200 hover:text-teal-400 after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-px after:w-0 after:bg-teal-400 after:transition-all after:duration-300 hover:after:w-full";
export default function Navbar() {
  return (
    <nav className="sticky top-3 z-50 bg-white/3 backdrop-blur-md flex h-16 items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 gap-80 rounded-full">
      <Link href="/">
        <text className="font-dancing text-3xl font-semibold hover:text-teal-400 transition-colors duration-200">Umair Malik</text>
      </Link>
      <div className="flex items-center font-inter font-semibold gap-6 text-md text-zinc-200">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className={linkClass}>
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}