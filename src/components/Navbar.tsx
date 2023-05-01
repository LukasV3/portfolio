export default function Navbar() {
  const navigation = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="my-16 animate-fade-in">
      <ul className="flex items-center justify-center gap-4">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
          >
            {item.name}
          </a>
        ))}
      </ul>
    </nav>
  );
}
