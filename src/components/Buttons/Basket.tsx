/** @jsxImportSource @emotion/react */
import _ from 'lodash';
import tw, { css, theme, TwStyle }  from 'twin.macro';
import React from "react";
/** Local imports */
import {SvgIcon} from '@/components';

type BasketProps = {
  count: number;
  containerStyle?: TwStyle;
};

const Basket: React.FC<BasketProps> = (props: BasketProps) => {
  const {
    count,
    containerStyle
  } = props;

  return (
    <div  css={[
      tw`relative`,
      containerStyle
    ]}>
      <span tw="bg-grey-base text-badge text-white absolute rounded-full -right-1 -top-1 px-0.5 pt-px">{count}</span>
      <SvgIcon name="Basket"
               width="1.5rem"
               height="1.063rem"
      />
    </div>
  );
};

export default Basket;
