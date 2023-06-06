import { Link as LinkType } from "types/Link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useUserStore } from "store/useUserStore";
import { AppNavigation } from "./AppNavigation";

type Props = {
  links: LinkType[];
};

export const Header = (props: Props) => {
  const isAuth = useUserStore((state) => state.isAuth);

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
      {isAuth !== null && <AppNavigation links={props.links} />}
    </div>
  );
};
