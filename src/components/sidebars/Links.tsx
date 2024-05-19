import { FC } from "react";
import Link from "next/link";
import { IconType } from "react-icons";

export type navProps = {
  text: string;
  icon: React.ElementType;
  route: string;
  style?: string;
};

const NavLink: FC<navProps> = ({ text, icon: Icon, route, style }) => {
  return (
    <div>
      <Link
        href={route}
        className={`flex items-center justify-center gap-2 hover:scale-[1.09] transition-all ease-in duration-150  `}
      >
        {/* icon */}
        <p className={`${style} text-xl mb-[0.17rem] pl-1 `}>{<Icon />}</p>

        {/* nav */}
        <p className={`${style} max-lg:hidden text-sm`}>{text}</p>
      </Link>
    </div>
  );
};

export default NavLink;
