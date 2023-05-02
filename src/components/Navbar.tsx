import { navigation } from "../content";

export default function Navbar() {
  return (
    <nav className="my-16 animate-fade-in">
      <ul className="flex items-center justify-center gap-4">
        {navigation.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
          >
            {item.title}
          </a>
        ))}
      </ul>
    </nav>
  );
}
