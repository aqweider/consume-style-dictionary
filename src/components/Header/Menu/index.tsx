/** @jsxImportSource @emotion/react */
import React, {useState} from "react";
import tw, {css, theme, TwStyle} from 'twin.macro';
/** Local imports */
import MenuItem from './MenuItem';
import SubMenu from './SubMenu';


export type MenuType = {
  options: {
    key: string,
    theme: string,
    value: string,
    children?: {
      key: string,
      value: string,
      description: string
    }[]
  }[]
};

const Menu: React.FC<MenuType> = props => {
  const {options, children} = props;
  const [activeKey, setActiveKey] = useState(-1)


  return (
    <ul tw="flex items-center">
      {
        options.map((item, i) => (
          <MenuItem key={item.key} theme={item.theme} text={item.value}>
            {
              item.children &&
              <SubMenu active={false} items={item.children} />
            }
          </MenuItem>
        ))
      }
    </ul>
  )
};

export default Menu;
