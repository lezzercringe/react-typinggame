import { Link } from "react-router-dom";
import { Link as LinkType } from "types/Link";
import { AppNavLink } from "./AppNavLink";
import { Icon } from "@iconify/react/dist/iconify.js";

type Props = {
  links: LinkType[];
};

export const Header = (props: Props) => {
  return (
    <div className="flex h-16 w-full items-center justify-between  px-20">
      <div className="image">
        <Icon
          opacity={0.5}
          icon="material-symbols:keyboard-outline"
          width={32}
          height={32}
        />
      </div>
      <nav className="space-x-5">
        {props.links.map((link) => (
          <AppNavLink key={link.id} link={link} />
        ))}
      </nav>
    </div>
  );
};
