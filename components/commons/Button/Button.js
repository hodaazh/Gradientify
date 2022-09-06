import cn from "classnames";
import Link from "next/link";
// import Loader from "react-loader-spinner";

import s from "./Button.module.css";

const Button = ({
  type = "button",
  buttonType = "button",
  href,
  className,
  theme = 1,
  loading,
  reverse,
  disable,
  primary,
  large,
  withBorder,
  highlight,
  onClick = () => false,
  onMouseOver = () => false,
  onMouseLeave = () => false,
  icon,
  iconClassName,
  title,
  titleClassName,
  link,
  defaultColor,
  titleType,
}) => {
  const Container = { link: "a", a: "a", button: "button" }[
    type === "link" && !href ? "a" : type
  ];
  const themeClass = `-theme-${theme}`;

  const _render = () => {
    return (
      <Container
        className={cn(s.container, className, {
          [s.default]: withBorder,
        })}
        onClick={(e) => {
          if (disable || loading) {
            e.preventDefault();
            return;
          }
          onClick(e);
        }}
        onMouseOver={(e) => {
          if (disable || loading) {
            e.preventDefault();
            return;
          }
          onMouseOver(e);
        }}
        onMouseLeave={(e) => {
          if (disable || loading) {
            e.preventDefault();
            return;
          }
          onMouseLeave(e);
        }}
        href={href}
        type={buttonType}
      >
        {icon && (
          <i
            className={cn(`icon-${icon}`, iconClassName)}
            style={{ color: defaultColor }}
          />
        )}
        {icon && title ? <span className={s.space}></span> : null}
        {title ? (
          <span
            className={cn(titleType, s.title, titleClassName)}
            style={{ color: defaultColor }}
          >
            {title}
          </span>
        ) : null}
        {loading && (
          <div className={s.loadingIndicator}>
            <Loader type="TailSpin" width={20} height={20} color={"#fff"} />
          </div>
        )}
      </Container>
    );
  };

  return type === "link" && href ? (
    <Link href={href}>{_render()}</Link>
  ) : (
    _render()
  );
};

export { Button };
