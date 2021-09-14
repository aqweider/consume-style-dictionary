/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import React from "react";
/** Local imports **/
import {Sidebar} from '@/components';

const Palette = () => {
  return (
    <div tw="m-20">
      <div>
        <div tw="my-5">
          <span tw="text-hs-2 font-faro">Generic / theme: base</span>
        </div>
        <div tw="flex-col">
          <div tw="flex">
            <div tw="w-32 h-10 rounded-lg bg-[#FFC24F] mr-6" />
            <div>
              <span>Lowlight </span>
              <span>theme: base </span>
              <span>class: bg-lowlight</span>
            </div>
          </div>
          <div tw="flex mt-4">
            <div tw="w-32 h-32 rounded-lg bg-brand mr-6" />
            <div>
              <span>Base </span>
              <span>theme: base </span>
              <span>class: bg-brand</span>
            </div>
          </div>
          <div tw="my-5">
            <span tw="text-hs-2 font-faro">Generic/ Opacity</span>
          </div>
          <div tw="flex mt-4">
            <div tw="w-32 h-10 mr-10 rounded-lg bg-brand opacity-80 mr-6" />
            <span>classes: bg-brand opacity-80</span>
          </div>
          <div tw="flex mt-4">
            <div tw="w-32 h-10 mr-10 rounded-lg bg-brand opacity-72 mr-6" />
            <span>classes: bg-brand opacity-72</span>
          </div>
          <div tw="flex mt-4">
            <div tw="w-32 h-10 mr-10 rounded-lg bg-brand opacity-48 mr-6" />
            <span>classes: bg-brand opacity-48</span>
          </div>
          <div tw="flex mt-4">
            <div tw="w-32 h-10 mr-10 rounded-lg bg-brand opacity-24 mr-6" />
            <span>classes: bg-brand opacity-24</span>
          </div>
          <div tw="flex mt-4">
            <div tw="w-32 h-10 mr-10 rounded-lg bg-brand opacity-12 mr-6" />
            <span>classes: bg-brand opacity-12</span>
          </div>
          <div tw="my-5">
            <span tw="text-hs-2 font-faro">Generic/ Tint</span>
          </div>

          <div tw="flex mt-4">
            <div tw="w-32 h-10 rounded-lg bg-[#FFD78B] mr-6" />
            <span>classes: bg-tint-72</span>
          </div>

          <div tw="flex mt-4">
            <div tw="w-32 h-10 rounded-lg bg-[#FFE5B2] mr-6" />
            <span>classes: bg-tint-48</span>
          </div>
          <div tw="flex mt-4">
            <div tw="w-32 h-10 rounded-lg bg-[#FFF2D9] mr-6" />
            <span>classes: bg-tint-24</span>
          </div>
          <div tw="flex mt-4">
            <div tw="w-32 h-10 rounded-lg bg-[#FFF9EB] mr-6" />
            <span>classes: bg-tint-12</span>
          </div>
        </div>
      </div>

      <div tw="mt-10">
        <div tw="flex flex-wrap overflow-hidden">
          <div tw="w-32 mr-10 mb-5" />
          <div tw="w-32 mr-10 mb-5">
            <span>theme: food</span>
          </div>
          <div tw="w-32 mr-10 mb-5">
            <span>theme: drink</span>
          </div>
          <div tw="w-32 mr-10 mb-5">
            <span>theme: beauty</span>
          </div>
          <div tw="w-32 mr-10 mb-5">
            <span>theme: home</span>
          </div>
          <div tw="w-32 mr-10 mb-5">
            <span>theme: health</span>
          </div>
          <div tw="w-32 mr-10 mb-5">
            <span>theme: baby</span>
          </div>
        </div>
        <div tw="flex flex-wrap overflow-hidden">
          <div tw="w-32 mr-10 mb-10">
            <span>Lowlight</span>
            <span tw="block">class: bg-lowlight</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 content-center rounded-lg bg-[#FF6239]" />
            <span tw="text-center">#FF6239</span>
          </div>

          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#BFD6FF]" />
            <span tw="text-center">#BFD6FF</span>
          </div>

          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#B9A58F]" />
            <span tw="text-center">#B9A58F</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#F2C6E2]" />
            <span tw="text-center">#F2C6E2</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#33A571]" />
            <span tw="text-center">#33A571</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#BCAAFA]" />
            <span tw="text-center">#BCAAFA</span>
          </div>
        </div>
        <div tw="flex flex-wrap overflow-hidden">
          <div tw="w-32 mr-10 mb-10">
            <span>Header</span>
            <span tw="block">class: bg-header</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#FF7052]" />
            <span tw="text-center">#FF7052</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#CBDEFF]" />
            <span tw="text-center">#CBDEFF</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#BFAE9B]" />
            <span tw="text-center">#BFAE9B</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#F1D2E7]" />
            <span tw="text-center">#F1D2E7</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#53AE7E]" />
            <span tw="text-center">#53AE7E</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#C1B6F5]" />
            <span tw="text-center">#C1B6F5</span>
          </div>
        </div>
        <div tw="flex flex-wrap overflow-hidden">
          <div tw="w-32 mr-10 mb-10">
            <span>Highlight</span>
            <span tw="block">class: bg-highlight</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#FFB4A4]" />
            <span tw="text-center">#FFB4A4</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#DBE8FF]" />
            <span tw="text-center">#DBE8FF</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#D6CBBF]" />
            <span tw="text-center">#D6CBBF</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#FCE4F3]" />
            <span tw="text-center">#FCE4F3</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#A1D0B6]" />
            <span tw="text-center">#A1D0B6</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#D8D2F9]" />
            <span tw="text-center">#D8D2F9</span>
          </div>
        </div>
        <div tw="flex flex-wrap overflow-hidden">
          <div tw="w-32 mr-10 mb-10">
            <span>Product Background</span>
            <span tw="block">class: bg-product</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#FFE6E0]" />
            <span tw="text-center">#FFE6E0</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#E3EDFF]" />
            <span tw="text-center">#E3EDFF</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#E2D9D1]" />
            <span tw="text-center">#E2D9D1</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#FCF4F8]" />
            <span tw="text-center">#FCF4F8</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#CFE7DA]" />
            <span tw="text-center">#CFE7DA</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#E8E4FB]" />
            <span tw="text-center">#E8E4FB</span>
          </div>
        </div>
        <div tw="flex flex-wrap overflow-hidden">
          <div tw="w-32 mr-10 mb-10">
            <span>Product Tiles</span>
            <span tw="block">class: bg-tile</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#FBECEA]" />
            <span tw="text-center">#FBECEA</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#EAF1FF]" />
            <span tw="text-center">#EAF1FF</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#ECE6E1]" />
            <span tw="text-center">#ECE6E1</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#FAECF4]" />
            <span tw="text-center">#FAECF4</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#E7F2EC]" />
            <span tw="text-center">#E7F2EC</span>
          </div>
          <div tw="mr-10 mb-10">
            <div tw="w-32 h-32 rounded-lg bg-[#F0EDFD]" />
            <span tw="text-center">#F0EDFD</span>
          </div>
        </div>
      </div>
      <div tw="mt-10">
        <div tw="flex flex-wrap overflow-hidden">
          <div tw="w-32 mr-10 mb-5">
            <span>Greyscale</span>
          </div>
          <div tw="w-32 mr-10 mb-5">
            <span>Off-Black</span>
            <div tw="mt-5">
              <div tw="w-32 h-32 content-center rounded-lg bg-grey-off" />
              <span tw="text-center">#0F0F0F/bg-grey-off</span>
            </div>
          </div>
          <div tw="w-32 mr-10 mb-5">
            <span>Soot</span>
            <div tw="mt-5">
              <div tw="w-32 h-32 content-center rounded-lg bg-grey-soot" />
              <span tw="text-center">#2B2B2B/bg-soot</span>
            </div>
          </div>
          <div tw="w-32 mr-10 mb-5">
            <span>Charcoal</span>
            <div tw="mt-5">
              <div tw="w-32 h-32 content-center rounded-lg bg-grey-charcoal" />
              <span tw="text-center">#3F3F3F/bg-grey-charcoal</span>
            </div>
          </div>
          <div tw="w-32 mr-10 mb-5">
            <span>Dove</span>
            <div tw="mt-5">
              <div tw="w-32 h-32 content-center rounded-lg bg-grey-dove" />
              <span tw="text-center">#6F6F6F/bg-grey-dove</span>
            </div>
          </div>
          <div tw="w-32 mr-10 mb-5">
            <span>Star</span>
            <div tw="mt-5">
              <div tw="w-32 h-32 content-center rounded-lg bg-grey-star" />
              <span tw="text-center">#9F9F9F/bg-grey-star</span>
            </div>
          </div>
          <div tw="w-32 mr-10 mb-5">
            <span>Light</span>
            <div tw="mt-5">
              <div tw="w-32 h-32 content-center rounded-lg bg-grey-light" />
              <span tw="text-center">#CFCFCF/bg-grey-light</span>
            </div>
          </div>
        </div>
        <div tw="flex flex-wrap overflow-hidden">
          <div tw="w-32 mr-10 mb-5" />
          <div tw="w-32 mr-10 mb-5">
            <span>Bright</span>
            <div tw="mt-5">
              <div tw="w-32 h-32 content-center rounded-lg bg-grey-bright" />
              <span tw="text-center">#F0F0F0/bg-grey-bright</span>
            </div>
          </div>
          <div tw="w-32 mr-10 mb-5">
            <span>Warm Grey</span>
            <div tw="mt-5">
              <div tw="w-32 h-32 content-center rounded-lg bg-grey-warm" />
              <span tw="text-center">#FAF9F8/bg-grey-warm</span>
            </div>
          </div>
          <div tw="w-32 mr-10 mb-5">
            <span>Near White</span>
            <div tw="mt-5">
              <div tw="w-32 h-32 content-center rounded-lg bg-grey-near-white" />
              <span tw="text-center">#FBFBFB/bg-grey-near-white</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Palette.getLayout = function getLayout(page) {
  return (
    <Sidebar>
      {page}
    </Sidebar>
  )
}

export default Palette;
