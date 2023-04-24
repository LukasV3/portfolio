export default function Navbar() {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="my-16">
      <ul className="flex items-center justify-center gap-4">
        {navigation.map((item) => (
          <a key={item.href} href={item.href} className="text-sm">
            {item.name}
          </a>
        ))}
      </ul>
    </nav>
  );
}
