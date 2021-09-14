/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import React from "react";
import Image from 'next/image'
/** Local imports **/
import {Icon, SvgIcon, Sidebar} from '@/components';
import iconSet from "assets/icons.json";
import {SvgIconType} from '@/components/SvgIcon'
import {iconName as svgList} from '@/components/SvgIcon/constants'
import bancontact from '@/assets/images/bancontact.png';
import bcorporation from '@/assets/images/bcorporation.png';
import organicCertification from '@/assets/images/organic-certification.png';
import maestro from '@/assets/images/maestro.png';
import mastercard from '@/assets/images/mastercard.png';
import paypal from '@/assets/images/paypal.png';
import tapi from '@/assets/images/tapi.png';
import visa from '@/assets/images/visa.png';
import winner from '@/assets/images/winner.png';

const Graphics = () => {
  return (
    <div tw="m-20">
      <div tw="mb-4">
        <span tw="text-hs-3 font-faro">Icons</span>
      </div>
      <div>
        {
          iconSet.icons.map((icon, index) => (
            <div key={`key_${index}`} tw="w-1/3 inline-flex  mb-4">
              <Icon name={icon.properties.name} size={28}/>
              <span tw="ml-3 text-hs-2 font-atlas-r">{icon.properties.name}</span>
            </div>
          ))
        }
      </div>

      <div tw="mb-4 mt-5">
        <span tw="text-hs-3 font-faro">SVG Icons</span>
      </div>

      <div>
        {
          Object.keys(svgList).map((icon, index) => {
            const iconName = icon as SvgIconType;

            return (
              <div key={`key_${index}`} tw="w-1/3 inline-flex mb-4">
                <SvgIcon name={iconName!} width={30}/>
                <span tw="ml-3 text-hs-2 font-atlas-r">{icon}</span>
              </div>
            )
          })
        }
      </div>

      <div tw="mb-4 mt-5">
        <span tw="text-hs-3 font-faro">Kazidomi</span>
      </div>

      <div>
        <div tw="w-2/5 inline-flex items-end mb-4">
          <SvgIcon name="Logo" width={500} height={75}/>
          <span tw="ml-3 text-hs-2 font-atlas-r">Logo</span>
        </div>
        <div tw="w-2/5 inline-flex items-end mb-4">
          <SvgIcon name="MonogramLogo" width={70} height={74}/>
          <span tw="ml-3 text-hs-2 font-atlas-r">MonogramLogo</span>
        </div>
      </div>

      <div tw="mb-4 mt-5">
        <span tw="text-hs-3 font-faro">Social</span>
      </div>

      <div>
        <div tw="w-1/6 inline-flex mb-4">
          <SvgIcon name="Fb" width={25} height={50}/>
          <span tw="ml-3 text-hs-2 font-atlas-r">FB</span>
        </div>
        <div tw="w-1/6 inline-flex mb-4">
          <SvgIcon name="Instagram" width={50}/>
          <span tw="ml-3 text-hs-2 font-atlas-r">instagram</span>
        </div>
        <div tw="w-1/6 inline-flex mb-4">
          <SvgIcon name="Vimeo" width={60} height={50}/>
          <span tw="ml-3 text-hs-2 font-atlas-r">vimeo</span>
        </div>
        <div tw="w-1/6 inline-flex mb-4">
          <SvgIcon name="Spotify" width={50}/>
          <span tw="ml-3 text-hs-2 font-atlas-r">Spotify</span>
        </div>
        <div tw="w-1/6 inline-flex mb-4">
          <SvgIcon name="Youtube" width={66.7} height={50}/>
          <span tw="ml-3 text-hs-2 font-atlas-r">Youtube</span>
        </div>
      </div>

      <div tw="mb-4 mt-5">
        <span tw="text-hs-3 font-faro">Third Party</span>
      </div>

      <div tw="flex justify-between items-center">
        <div tw="w-2/6 mb-4">
          <Image src={mastercard} alt="Mastercard" />
          <span tw="ml-3 text-hs-2 font-atlas-r block">Mastercard</span>
        </div>
        <div tw="w-2/6 mb-4">
          <Image src={maestro} alt="Maestro" />
          <span tw="ml-3 text-hs-2 font-atlas-r block">Maestro</span>
        </div>
        <div tw="w-2/6 mb-4">
          <Image src={visa} alt="Visa" />
          <span tw="ml-3 text-hs-2 font-atlas-r block">Visa</span>
        </div>
        <div tw="w-2/6 mb-4">
          <Image src={paypal} alt="Paypal" />
          <span tw="ml-3 text-hs-2 font-atlas-r block">Paypal</span>
        </div>
        <div tw="w-2/6 mb-4">
          <Image src={bancontact} alt="Bancontact" />
          <span tw="ml-3 text-hs-2 font-atlas-r block">Bancontact</span>
        </div>
      </div>
      <div tw="flex justify-between items-center">
        <div tw="w-2/6 mb-4">
          <Image src={organicCertification} alt="Organic" />
          <span tw="ml-3 text-hs-2 font-atlas-r block">Europe Organic Certification</span>
        </div>
        <div tw="w-2/6 mb-4">
          <Image src={winner} alt="Winnder" />
          <span tw="ml-3 text-hs-2 font-atlas-r block">BeCommerce Award</span>
        </div>
        <div tw="w-2/6 mb-4">
          <Image src={bcorporation} alt="Europe Organic Certification" />
          <span tw="ml-3 text-hs-2 font-atlas-r block">Certified B Corporation</span>
        </div>
        <div tw="w-2/6 mb-4">
          <Image src={tapi} alt="TAPIO Certification" />
          <span tw="ml-3 text-hs-2 font-atlas-r block">TAPIO Certification</span>
        </div>
      </div>
    </div>
  )
}

Graphics.getLayout = function getLayout(page) {
  return (
    <Sidebar>
      {page}
    </Sidebar>
  )
}

export default Graphics;
