
import Link from "next/link";
import { FaFacebookF,FaGithub,FaLinkedin} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

type Socials = {
  name: string;
  url: string;
  icon: React.ReactElement;
}[];
 
export default function Socials() {
  const socials: Socials = [
    { name: "facebook", url: "https://www.facebook.com/hoodaa11", icon: <FaFacebookF /> },
    { name: "github", url: "https://github.com/mahmoudSElsebaey", icon: <FaGithub /> },
    { name: "linkedin", url: "https://www.linkedin.com/in/mahmoud-elsebaey-888797223/", icon: <FaLinkedin /> },
    { name: "Gmail", url: "https://mail.google.com/mail/?view=cm&to=mahmoudsalahelsebaey@gmail.com", icon: <MdEmail /> },
  ];
  return (
    <div>
      <ul className="flex items-center justify-center gap-5">
        {socials.map((item) => (
          <li
            key={item.name}
            className="w-10 h-10 rounded-full flex items-center justify-center
          border border-primary-1000 text-primary-1000
           hover:border-primary-1000 hover:bg-primary-100
           hover:text-white transition-all duration-300
           social-icon
          "
          >
            <Link href={item.url} className="text-xl" target="_blank" rel="noopener noreferrer"> 
              {item.icon}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
