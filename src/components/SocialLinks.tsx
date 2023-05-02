import GitHubIcon from "../assets/icons/github.svg";
import LinkedInIcon from "../assets/icons/linkedin.svg";

type SocialLinksProps = {
  iconSize?: "sm" | "md";
};

export function SocialLinks({ iconSize = "sm" }: SocialLinksProps) {
  const iconAttributes =
    iconSize === "sm"
      ? { className: "w-5 h-5", width: 20, height: 20 }
      : { className: "w-6 h-6", width: 24, height: 24 };

  return (
    <div className="flex justify-center gap-3">
      <a
        href="https://github.com/LukasV3/"
        className="opacity-80 hover:opacity-100 duration-500"
        target="_blank"
      >
        <img src={GitHubIcon} alt="GitHub logo" {...iconAttributes} />
      </a>

      <a
        href="https://www.linkedin.com/in/lukasvolk3/"
        className="opacity-80 hover:opacity-100 duration-500"
        target="_blank"
      >
        <img src={LinkedInIcon} alt="LinkedIn logo" {...iconAttributes} />
      </a>
    </div>
  );
}
