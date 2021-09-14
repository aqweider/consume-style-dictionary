/** @jsxImportSource @emotion/react */
import _ from 'lodash';
import tw, { css, theme, TwStyle }  from 'twin.macro';
import React, {useEffect} from "react";
import type {
  FocusEvent,
  MouseEvent as ReactMouseEvent,
  FocusEventHandler,
  MouseEventHandler,
  ElementType,
} from 'react';
/** Local imports */
import {useHover} from '@/hooks';
import Icon, {IconType} from '../Icon';

type FabProps = {
  layout:
    | 'primary'
    | 'secondary'
    | 'quantity'
  icon: IconType;
  /**
   * Defines if the button is disabled
   */
  shadow?: boolean;
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean;
  /**
   * The size of the button
   */
  size?: 'small' | 'regular' | 'large';
  onClick?: MouseEventHandler;
  onBlur?: FocusEventHandler;
  onHoverChange?: (isHovered: boolean) => void;
  /**
   * Container tailwind style
   */
  containerStyle?: TwStyle;
};

const iconSizesMap = {
  large: '16px',
  regular: '14px',
  small: '10px',
}

const sizeVariants: TwStyle = {
  large: tw`w-9 h-9`, // 36px
  regular: tw`w-8 h-8`, //32px
  small: tw`w-7 h-7`, //28px
}

const layoutVariants: TwStyle = {
  primary: tw`hover:bg-brand`,
  quantity: tw`hover:bg-brand`,
}

const shadowVariants: TwStyle = {
  quantity: tw`active:shadow-sActive`,
  primary: tw`shadow-sBase hover:shadow-sHover active:shadow-sActive`,
  secondary: tw`shadow-elevation`,
}

const Fab: React.FC<FabProps> = (props: FabProps) => {
  const {
    layout,
    icon,
    size,
    shadow,
    disabled,
    containerStyle,
    onBlur,
    onClick,
    onHoverChange,
  } = props;
  const [hoverRef, isHovered] = useHover<HTMLButtonElement>()

  useEffect(() => {
    if(onHoverChange) {
      onHoverChange(isHovered)
    }
  }, [isHovered]);

  return (
    <button
      ref={hoverRef}
      onBlur={(e: FocusEvent) => {
        e.persist();
        if (onBlur && !disabled) {
          onBlur(e);
        }
      }}
      onClick={(e: ReactMouseEvent) => {
        e.persist();
        if (onClick && !disabled) {
          onClick(e);
        }
      }}
      css={[
        tw`bg-white focus:outline-none rounded-full`,
        layoutVariants[layout],
        shadow && shadowVariants[layout],
        sizeVariants[size!],
        containerStyle
    ]}>
      <Icon className="btn-fab"
            size={icon.size || iconSizesMap[size!] }
            name={icon.name}
            color={icon.color}
      />
    </button>
  );
};

Fab.defaultProps = {
  size: 'regular',
  shadow: true
};

export default Fab;
