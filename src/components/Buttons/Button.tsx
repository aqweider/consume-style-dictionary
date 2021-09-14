/** @jsxImportSource @emotion/react */
import _ from 'lodash';
import tw, {css, theme, TwStyle} from 'twin.macro';
import React from "react";
import type {ElementType} from 'react';
/** Local imports */
import Icon, {IconType} from '../Icon';
import SvgIcon, {SvgIconType} from '../SvgIcon';

type ButtonProps = {
  children?: React.ReactNode,
  /**
   * Shows only icon inside the button
   */
  icon?: IconType,
  /**
   * Shows an icon inside the button, left aligned
   */
  iconLeft?: IconType;
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean
  /**
   * The size of the button
   */
  size?: 'small' | 'regular' | 'large';
  /**
   * Shows only one icon inside the button; defaults to left
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * If the button is on dark / light background
   */
  layOn?: | 'dark' | 'light' | undefined,
  layout:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'inactive'
    | 'facebook'
    | 'google',
  containerStyle?: TwStyle,
  /**
   * Shows the button as a block (full width)
   */
  block?: boolean,
  onClick?: () => void;
};

const layoutVariants: TwStyle = {
  primary_on_dark: tw`bg-primary--on-dark p-2.5 rounded-full`,
  primary_on_light: tw`bg-primary--on-light p-2.5 rounded-full`,
  secondary_on_dark: tw`bg-secondary--on-dark p-2.5 rounded-full`,
  secondary_on_light: tw`bg-secondary--on-light p-2.5 rounded-full`,
  tertiary_on_dark: tw`text-cta-0`,
  tertiary_on_Light: tw`text-cta-0`,
  inactive: tw`bg-grey-warm rounded-full p-2.5`,
  google: tw`bg-white rounded-full w-58 h-12`,
  facebook: tw`bg-facebook rounded-full w-58 h-12`,
}

const sizeVariants: TwStyle = {
  primary_large: tw`w-50`, // 200px
  secondary_large: tw`w-50`, // 200px
  primary_regular: tw`w-34`, //136px
  secondary_regular: tw`w-34`, //136px
  primary_small: tw`w-27`, //106px
  secondary_small: tw`w-27`, //106px
  inactive_large: tw`w-50`, // 200px
  inactive_regular: tw`w-34`, //136px
  inactive_small: tw`w-27`, //106px
  facebook_large: tw`w-58 h-12`, // width: 232px, height: 48
  google_large: tw`w-58 h-12`, // width: 232px, height: 48
}

const twStyles = {
  base: () => {
    return tw`text-center 
            font-atlas-r 
            text-bs-4 
            transition 
            duration-150 
            focus:outline-none`
  },
  background: (layout: string, layOn: any) => (
    layoutVariants[`${layout}${layOn ? `_on_${layOn}` : ''}`]
  ),
  btnSize: (layout: string, size: string) => (
    sizeVariants[`${layout}_${size}`]
  ),
  shadow: (layout: string) => {
    switch (layout) {
      case 'tertiary':
      case 'inactive':
        return ''
      case 'facebook':
      case 'google':
        return tw`shadow-elevation`;
      default:
        return tw`shadow-sBase  active:shadow-sActive`
    }
  },
  hover: (layout: string) => {
    switch (layout) {
      case 'inactive':
      case 'facebook':
      case 'google':
        return ''
      case 'tertiary':
        return css`
          :hover:after {
            width: 100%;
          }
        `
      default:
        return tw`hover:bg-brand`
    }
  },
  focus: (layout: string) => {
    switch (layout) {
      case 'inactive':
      case 'facebook':
      case 'google':
        return ''
      case 'tertiary':
        return css`
          :focus:after {
            width: 100%;
            background: ${theme`colors.grey.base`};
          }
        `
      default:
        return tw`focus:bg-brand`
    }
  },
  tertiary: (layOn: any) => {
    const underlingBgColor = layOn === 'dark' ? theme`colors.tint.24` : theme`colors.header`;

    return css`
      position: relative;

      :after {
        content: '';
        display: block;
        width: 75%;
        transition: .15s;
        background: ${underlingBgColor};
        height: 1px;
        border-radius: 30px;
        margin-top: 4px;
      }
      
      :active:after {
        width: 100%;
        background: ${theme`colors.grey.base`};
      }`
  },
}

const renderSocial = (icon: SvgIconType, title: string) => (
  <div tw="relative">
    <SvgIcon name={icon}
             width={24}
             height={24}
             className="btn-social--icon"
    />
    <span css={[
      tw`leading-6`,
      icon === 'Facebook' ?
        tw`text-white` :
        tw`text-grey-base`
    ]} tw="leading-6">{title}</span>
  </div>
)

const renderChildren = (props: ButtonProps) => {
  const {iconLeft, disabled, children} = props;

  if (iconLeft) {
    return (
      <div>
        <Icon name={iconLeft.name}
              size={iconLeft.size}
              color={
                disabled ?
                  theme`colors.grey.star` :
                  iconLeft.color
              }
              tw="mr-2"
        />
        {children}
      </div>
    )
  }

  return children
}

const renderContent = (props: ButtonProps) => {
  const {layout} = props;

  switch (layout) {
    case 'facebook':
      return renderSocial('Facebook', 'Facebook')
    case 'google':
      return renderSocial('Google', 'Google')
    default:
      return renderChildren(props)
  }
}

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children,
    layout,
    layOn,
    size,
    containerStyle,
    onClick = () => {
    },
  } = props;
  const Element: ElementType = layout === 'tertiary' ? 'a' : 'button';
  const textColor = props.disabled ? tw`text-grey-star`: tw`text-grey-base`;
  const className = `btn-${layout}--on-${layOn}`

  return (
    <Element type="button"
             className={className}
             onClick={() => onClick()}
             css={[
               textColor,
               twStyles.base(),
               twStyles.background(layout, layOn),
               twStyles.btnSize(layout, size!),
               twStyles.shadow(layout),
               twStyles.hover(layout),
               twStyles.focus(layout),
               layout === 'tertiary' &&
               twStyles.tertiary(layOn),
               containerStyle
             ]}
    >
      {
        renderContent(props)
      }
    </Element>
  );
};

Button.defaultProps = {
  layout: 'primary',
  size: 'large',
  layOn: undefined
};

export default Button;
