import React, {HTMLProps} from "react";
import {theme, TwStyle} from 'twin.macro';
import IcoMoon from "react-icomoon";
import type {
  ElementType,
} from 'react';
/** Local imports */
import iconSet from "assets/icons.json";

type AnchorProps =
  | {
  href?: undefined;
  rel?: never;
  target?: never;
}
  | {
  href: string;
  rel?: HTMLProps<HTMLAnchorElement>['rel'];
  target?: HTMLProps<HTMLAnchorElement>['target'];
};

export type IconType = {
  color?: string;
  size?: string | number;
  name: string;
  className?: string;
  onClick?: () => void;
} & AnchorProps;

const Icon: React.FC<IconType> = props => {
  const {color, size = "100%", name, className = "", onClick, href, ...others} = props;

  const renderElement = () => (
    <IcoMoon
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={name}
      {...others}
    />
  )

  return (
    onClick ?
      <button onClick={onClick}>
        {renderElement()}
      </button>:
    href ?
      <a href={href}>
        {renderElement()}
      </a>:
      renderElement()
  )
};

Icon.defaultProps = {
  color: theme`colors.grey.base`,
  size: '16px'
}

export default Icon;
