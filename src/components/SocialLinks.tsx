import GitHubIcon from "../assets/logos/github.svg";
import LinkedInIcon from "../assets/logos/linkedin.svg";

type SocialLinksProps = {
  iconSize?: "sm" | "md";
};

export function SocialLinks({ iconSize = "sm" }: SocialLinksProps) {
  const iconSizeClass = iconSize === "sm" ? "w-5 h-5" : 'w-6 h-6"';

  return (
    <div className="flex justify-center gap-3">
      <a
        href="https://github.com/LukasV3/"
        className="opacity-80 hover:opacity-100 duration-500"
        target="_blank"
      >
        <img src={GitHubIcon} className={iconSizeClass} />
      </a>
      <a
        href="https://www.linkedin.com/in/lukasvolk3/"
        className="opacity-80 hover:opacity-100 duration-500"
        target="_blank"
      >
        <img src={LinkedInIcon} className={iconSizeClass} />
      </a>
    </div>
  );
}
