import _ from "lodash";
import React from "react";
import tw, {css, theme, TwStyle} from 'twin.macro';
/** Local imports */
import {
  Facebook,
  Google,
  Logo,
  MonogramLogo,
  Kmember,
  Reward,
  Delivery,
  Watch,
  Basket,
  Vegan,
  Vegetarian,
  Lactose,
  Sugar,
  Gluten,
  Fats,
  Oils,
  Cruelty,
  Salt,
  France,
  Favorite,
  Instagram,
  Fb,
  Vimeo,
  Spotify,
  Twitter,
  Youtube,
  Mastercard,
  Maestro,
  Visa,
  Paypal,
  Bancontact,
  Organic,
  Award,
  BCorporation
} from "./svg";
import {iconName} from './constants';

export type SvgIconType = keyof typeof iconName;

type IconProps = {
  name: SvgIconType,
  width: string | number,
  height?: string | number,
  inline?: boolean,
  className?: string
};

const iconComponents = {
  Facebook,
  Google,
  Logo,
  MonogramLogo,
  Kmember,
  Reward,
  Delivery,
  Watch,
  Basket,
  Vegan,
  Vegetarian,
  Lactose,
  Sugar,
  Gluten,
  Fats,
  Oils,
  Cruelty,
  Salt,
  France,
  Favorite,
  Instagram,
  Fb,
  Vimeo,
  Spotify,
  Twitter,
  Youtube,
  Mastercard,
  Maestro,
  Visa,
  Paypal,
  Bancontact,
  Organic,
  Award,
  BCorporation
}

const Index: React.FC<IconProps> = ({
                                      name,
                                      width,
                                      height,
                                      inline,
                                      className,
                                      ...otherProps
                                    }: IconProps) => {

  const Element: (props: React.SVGProps<SVGSVGElement>) => JSX.Element =
    iconComponents[name];

  return (
    <Element width={width}
             height={height || width}
             className={className}
             {...otherProps}
    />
  );
};

Index.defaultProps = {
  inline: true
}
export default Index;
