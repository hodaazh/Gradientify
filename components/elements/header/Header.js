import { useState } from "react";
import Link from "next/link";
import cn from "classnames";

import s from "./Header.module.css";
import { HEADER_CONST } from "../../../constants";
import { useMobile } from "../../../hooks";

const Header = () => {
  const { navItems } = HEADER_CONST;
  const [toggle, setToggle] = useState(false);
  const isTablet = useMobile("tablet");

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav
      className={cn("flex-column", s.container, {
        [s.toggleActive]: isTablet && toggle,
      })}
    >
      <div
        className={cn("container", "flex-row", "justify-between", "align-base")}
      >
        <Link href="/">
          <a>Gradientify</a>
        </Link>
        {!isTablet && (
          <>
            <ul>
              {navItems.map(({ title, id, href }) => (
                <li key={id}>
                  <Link href={href}>
                    <a>{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="https://github.com/hodaazh/Gradientify">
              <a>GitHub</a>
            </Link>
          </>
        )}
        {isTablet && <HamburgerMenu {...{ toggle, handleToggle }} />}
      </div>
      {isTablet && <ResponsiveMenu {...{ navItems }} />}
    </nav>
  );
};

export { Header };

const ResponsiveMenu = ({ navItems }) => {
  return (
    <ul className={cn("container", "flex-column", s.responsiveContainer)}>
      {navItems.map(({ title, id, href }) => (
        <li key={id}>
          <Link href={href}>
            <a>{title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

const HamburgerMenu = ({ toggle, handleToggle }) => {
  return (
    <div
      onClick={handleToggle}
      className={cn(s.HamburgerMenuContainer, { [s.toggleActive]: toggle })}
    >
      <div className={s.line1}></div>
      <div className={s.line2}></div>
      <div className={s.line3}></div>
    </div>
  );
};
