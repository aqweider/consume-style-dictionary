/** @jsxImportSource @emotion/react */
import tw, {css} from 'twin.macro';
import React from "react";
import Rate from "rc-rate";
import "rc-rate/assets/index.css";
/** Local imports */

export type StyledRateType = {
  defaultValue?: number;
  value: number;
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
  allowHalf?: boolean;
};

const StyledRate: React.FC<StyledRateType> = props => {
  const {value, defaultValue, size, ...others} = props;

  return (
    <Rate defaultValue={defaultValue || 4}
          character={(props: any) => props.index >= value ? "☆" : "★"}
          className={`rate-style ${size}-rate`}
          {...others}
    />
  )
};

StyledRate.defaultProps = {
  size: 'md',
  disabled: false,
  allowHalf: false
}

export default StyledRate;
