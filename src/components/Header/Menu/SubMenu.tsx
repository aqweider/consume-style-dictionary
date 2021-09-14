/** @jsxImportSource @emotion/react */
import React from "react";
import _ from 'lodash';
import tw, {css, theme, TwStyle} from 'twin.macro';
/** Local imports **/
import {Icon} from 'components';
import placeholderImg from 'assets/images/placeholder.png';

export type SubMenuType = {
  active: boolean,
  items: {
    key: string,
    value: string,
    description: string
  }[],
};

const SubMenu: React.FC<SubMenuType> = props => {
  const { items } = props;

  const chunkArr = (size = 3) => {
    if(!items) return  []

    return _.chunk(items, size)
  }

  const renderListItem = (item, i) => (
    <li key={i} tw="mb-6">
      <a href="#">
        <span tw="text-grey-base block mb-1.5">{item.value}</span>
        <span tw="text-grey-dove text-bs-3">{item.description}</span>
      </a>
    </li>
  )

  return (
    <div tw="w-full text-bs-4">
      <div tw="bg-transparent h-6 w-full"/>
      <div tw="bg-white shadow-mega-menu py-11 px-8">
        <div tw="flex">
          <div tw="flex flex-wrap justify-between w-3/5">
            {
              chunkArr(3).map((list, i) => (
                <ul key={i} tw="w-full sm:w-1/2 lg:w-4/12 pr-9">
                  {
                    list.map(renderListItem)
                  }
                </ul>
              ))
            }
          </div>
          <div tw="w-133.5">
            <div tw="flex flex-wrap justify-between">
              <span tw="text-bs-7">Featured</span>
              <a href="">View all lifestyle</a>
            </div>
            <a href="#">
              <div tw="flex justify-between">
                <div tw="mr-2.5 overflow-hidden">
                  <div tw="relative w-64 h-36">
                    <img src={placeholderImg.src} tw="w-64 h-36 object-cover"/>
                    <span className="text-center" tw="text-white font-faro text-hs-3">Lorem Ipsum</span>
                  </div>
                  <div tw="mt-2.5">
                    <span>Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</span>
                  </div>
                </div>
                <div  tw="ml-2.5 overflow-hidden">
                  <div tw="relative w-64 h-36">
                    <img src={placeholderImg.src} tw="w-64 h-36 object-cover"/>
                    <span className="text-center" tw="text-white font-faro text-hs-3">Lorem Ipsum</span>
                  </div>
                  <div tw="mt-2.5">
                    <span tw="underline">Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</span>
                    <Icon name="Full-Arrow-Right" size={24} />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
        <a href="#">View all alimentation</a>
      </div>
    </div>
  )
};

export default SubMenu;
