/** @jsxImportSource @emotion/react */
import tw, { css, theme, TwStyle } from "twin.macro";
import { ReactNode, useState } from 'react';
/** Local imports **/
import {SvgIcon, Icon} from '@/components';

interface Props {
  children: ReactNode;
  headerComponent?: ReactNode;
  footerComponent?: ReactNode;
  open: boolean;
  onclose: () => void;
}

interface LinkProps {
  href: string;
  onClick?: () => void;
  hasBorder?: boolean;
  children: ReactNode;
}

interface ContentProps {
  children: ReactNode;
}

const style = {
  menu: {
    default: tw`overflow-x-hidden md:overflow-hidden transition-all duration-500 fixed z-10 top-0 left-0 bg-white font-atlas-r text-navigation`,
    transition: {
      open: tw`h-full w-full `,
      close: tw`w-0 h-full`,
    },
  },
  content: tw`relative w-full`,
  item: tw`block text-grey-base cursor-pointer ml-2.5 pr-2.5 py-2.5`,
  divider: tw`w-full h-[0.5px] bg-grey-star`,
  sectionBorder: tw`border-b-[0.5px] border-grey-star`,
  itemBorder: tw`border-b-[0.5px] border-grey-bright`,

};

const Divider = () => (
  <div css={style.divider} />
)

/* You can wrap the a tag with Link and pass href to Link if you are using either Create-React-App, Next.js or Gatsby */
const MenuItem = ({ children, onClick, hasBorder, href }: LinkProps) => {
  return (
    <div tw="">
      <a css={[
          style.item,
          hasBorder && style.itemBorder
        ]}
         href={href}
         onClick={onClick}
      >
        {children}
      </a>
    </div>
  );
}

const MenuContent = ({ children }: ContentProps) => {
  return (
    <div>
      {children}
    </div>
  );
}

const CurtainMenu =  ({ open, onclose, headerComponent, footerComponent, children }: Props) => {
  return (
      <div
        css={[
          style.menu.default,
          open
            ? style.menu.transition.open
            : style.menu.transition.close
        ]}
      >
        {headerComponent}
        <Divider />
        <div css={style.content}>
          {children}
        </div>
        {
          footerComponent
        }
      </div>
  )
}

CurtainMenu.Content = MenuContent;
CurtainMenu.Item = MenuItem;
CurtainMenu.Divider = Divider;

export default CurtainMenu;