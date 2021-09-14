/** @jsxImportSource @emotion/react */
import React from "react";
import tw, {css, theme, TwStyle} from 'twin.macro';
/** Local imports */
import { setTheme } from '@/themes/utils';

export type MenuItemType = {
  theme: string;
  text: string;
  children: React.ReactNode;
};

const MenuItem: React.FC<MenuItemType> = props => {
  const {text, theme, children} = props;

  const hoverableStyles = css`
    position: static;
    &:hover {
      .mega-menu {
        display: block;
      }
    }
  `

  const onItemClick = () => {
    setTheme(theme)
  }

  return (
    <li className="hoverable" css={hoverableStyles}>
      <a href="#"
         tw="relative block pr-7 text-bs-4"
         onClick={onItemClick}
      >
        {text}
      </a>
      <div className="mega-menu" tw="hidden absolute left-0 z-10 w-full text-left">
        {children}
      </div>
    </li>

  )
};

export default MenuItem;
