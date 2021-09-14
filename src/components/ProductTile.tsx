import React, {useState} from "react";
import tw, {css, theme, TwStyle} from 'twin.macro';
import {isMobile} from 'react-device-detect';
/** Local imports */
import {Icon, StyledRate, SvgIcon, Button} from '@/components';
import Placeholder from "assets/images/placeholder.png";

export type IconType = {
  layout:
    | 'large'
    | 'medium'
    | 'small'
    | 'header'
    | 'upsell';

  new?: boolean;
  bestSeller?: boolean;
  containerStyle?: TwStyle;
}

const style = {
  container: tw`relative p-4 bg-tile rounded-t text-grey-base`,
  layout: {
    large: tw`min-w-[120px] lg:max-w-[288px] lg:min-w-[256px]`,
    medium: tw`min-w-[120px] lg:max-w-[288px] lg:min-w-[216px]`,
    small: tw`min-w-[120px] lg:max-w-[176px] lg:min-w-[152px]`,
    header: tw`min-w-[120px] lg:max-w-[288px] lg:min-w-[216px]`,
    upsell: tw`min-w-[120px] min-w-[120px] lg:max-w-[176px] lg:min-w-[152px]`,
  },
  title: (layout) => {
    const hidden = layout !== 'large';

    return [
      tw`capitalize font-atlas-l text-bs-3 mb-3`,
      hidden && tw`hidden`
    ]
  }
};

const ProductTile: React.FC<IconType> = props => {
  const {layout, containerStyle} = props;
  const [favourite, setFavourite] = useState(false)

  const onFavourite = () => {
    setFavourite((prevState) => !prevState);
  }

  const renderDescription = () => {
    const maxCharacters = isMobile ? 38 : layout === 'large'? 82 : 66;
    const txt = 'Full Brand Name, Title consisting of in excess of eight words, 999g'

    return (
      <h3 tw="font-atlas-r text-bs-5 mb-2">
        {
          txt.substr(0, maxCharacters + 1)
        }
      </h3>
    )
  }

  const renderLabels = () => {
    return (
      <div tw="absolute left-1 top-px"
           css={css`transform: rotate(-90deg) translate(-88%, 0); transform-origin: 0;`}>
        { props.new && <span tw="inline-block uppercase font-atlas-m text-bs-0 bg-white py-1 px-1.5 rounded-sm mx-0.5">New</span> }
        { props.bestSeller && <span tw="inline-block uppercase font-atlas-m text-bs-0 bg-white py-1 px-1.5 rounded-sm ml-0.5">Best Seller</span> }
      </div>
    )
  }

  return (
    <div css={[style.container, style.layout[layout], containerStyle]}>
      <div tw="h-full relative mb-4">

        {
          renderLabels()
        }
        <div tw="pr-6 pl-[18px]">
          <img
            src={Placeholder.src}
            alt=""
          />
        </div>
        <div tw="absolute -top-1 right-0">
          <Icon name={favourite? 'Heart-Filled' : 'Heart'}
                size='24'
                onClick={onFavourite}
          />
        </div>
      </div>
      <div>
        <h5 css={style.title(layout)}>Full brand name</h5>
        {
          renderDescription()
        }
        <div tw="flex justify-between mb-1.5">
          <div>
            <StyledRate disabled allowHalf value={4} size="xs"/>
            <span tw="font-atlas-l text-bs-0">(123)</span>
          </div>
          <div tw="inline-flex items-center font-atlas-m text-bs-5 bg-white py-0.5 px-2.5 rounded">
            <SvgIcon name="Kmember" width={24} height={24}/>
            <span tw="mt-1 ml-1">9,99 €</span>
          </div>
        </div>
        <div tw="flex justify-between items-center">
          <Button layout="secondary" size="regular" layOn="dark" containerStyle={tw`shadow-elevation`}>Add to
            basket</Button>
          <h2 tw="font-atlas-m text-bs-8">99,95 €</h2>
        </div>
      </div>
    </div>
  )
};

ProductTile.defaultProps = {
  layout: 'large',
  new: false,
  bestSeller: false
}

export default ProductTile;
