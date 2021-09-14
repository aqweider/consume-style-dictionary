/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import React from "react";
/** Local imports **/
import {Sidebar} from '@/components';

const Typography = () => {
  return (
    <div tw="m-20">
      <div>
        <span tw="block">Headings</span>
        <span tw="text-hs-9 font-faro block"><span tw="text-ss-4 mr-10">text-hs-9 font-faro</span>120 Display</span>
        <span tw="text-hs-8 font-faro block"><span tw="text-ss-4 mr-10">text-hs-8 font-faro</span>96 Display</span>
        <span tw="text-hs-7 font-faro block"><span tw="text-ss-4 mr-10">text-hs-7 font-faro</span>72 Display</span>
        <span tw="text-hs-6 font-faro block"><span tw="text-ss-4 mr-10">text-hs-6 font-faro</span>60 Display</span>
        <span tw="text-hs-5 font-faro block"><span tw="text-ss-4 mr-10">text-hs-5 font-faro</span>42 Display</span>
        <span tw="text-hs-4 font-faro block"><span tw="text-ss-4 mr-10">text-hs-4 font-faro</span>36 Display</span>
        <span tw="text-hs-3 font-faro block"><span tw="text-ss-4 mr-10">text-hs-3 font-faro</span>30 Display</span>
        <span tw="text-hs-2 font-faro block"><span tw="text-ss-4 mr-10">text-hs-2 font-faro</span>24 Display</span>
        <span tw="text-hs-1 font-faro block"><span tw="text-ss-4 mr-10">text-hs-1 font-faro</span>21 Display</span>
        <span tw="text-hs-0 font-faro block"><span tw="text-ss-4 mr-10">text-hs-0 font-faro</span>18 Display</span>
      </div>
      <div tw="mt-10">
        <span tw="block">Sub-Headings</span>
        <span tw="text-ss-4 font-atlas-m block"><span tw="text-bs-6 mr-10">text-ss-4 font-atlas-m</span>21 Medium</span>
        <span tw="text-ss-3 font-atlas-m block"><span tw="text-bs-6 mr-10">text-ss-3 font-atlas-m</span>19 Medium</span>
        <span tw="text-ss-2 font-atlas-m block"><span tw="text-bs-6 mr-10">text-ss-2 font-atlas-m</span>17 Medium</span>
        <span tw="text-ss-1 font-atlas-m block"><span tw="text-bs-6 mr-10">text-ss-1 font-atlas-m</span>15 Medium</span>
        <span tw="text-ss-0 font-atlas-m block"><span tw="text-bs-6 mr-10">text-ss-0 font-atlas-m</span>13 Medium</span>
      </div>
      <div tw="mt-10">
        <span tw="block">Body</span>
        <span tw="text-bs-7 font-atlas-m block"><span tw="text-ss-4 mr-10">text-bs-7 font-atlas-m</span> 17 Medium</span>
        <span tw="text-bs-7 font-atlas-r block"><span tw="text-ss-4 mr-10">text-bs-7 font-atlas-m</span> 17 Regular</span>
        <span tw="text-bs-7 font-atlas-l block"><span tw="text-ss-4 mr-10">text-bs-7 font-atlas-m</span> 17 Light</span>
        <span tw="text-bs-6 font-atlas-m block"><span tw="text-ss-4 mr-10">text-bs-6 font-atlas-m</span> 16 Medium</span>
        <span tw="text-bs-6 font-atlas-r block"><span tw="text-ss-4 mr-10">text-bs-6 font-atlas-r</span> 16 Regular</span>
        <span tw="text-bs-6 font-atlas-l block"><span tw="text-ss-4 mr-10">text-bs-6 font-atlas-l</span> 16 Light</span>
        <span tw="text-bs-5 font-atlas-m block"><span tw="text-ss-4 mr-10">text-bs-5 font-atlas-m</span> 15 Medium</span>
        <span tw="text-bs-5 font-atlas-r block"><span tw="text-ss-4 mr-10">text-bs-5 font-atlas-r</span> 15 Regular</span>
        <span tw="text-bs-5 font-atlas-l block"><span tw="text-ss-4 mr-10">text-bs-5 font-atlas-l</span> 15 Light</span>
      </div>

      <div tw="mt-10">
        <span tw="block">System</span>
        <span tw="text-ps-lg font-atlas-m block"><span tw="text-ss-4 mr-10">text-ps-lg font-atlas-m</span>20 Price - Large</span>
        <span tw="text-ps-sm font-atlas-m block"><span tw="text-ss-4 mr-10">text-ps-sm font-atlas-m</span> 15 Price - Small</span>
        <span tw="text-bds font-atlas-r block"><span tw="text-ss-4 mr-10">text-bds font-atlas-r</span> 17 Brand</span>
        <span tw="text-prs-rg font-atlas-m block"><span tw="text-ss-4 mr-10">text-prs-rg font-atlas-m</span> 15 Product - Regular</span>
        <span tw="text-prs-sm font-atlas-r block"><span tw="text-ss-4 mr-10">text-prs-sm font-atlas-r</span> 12 Product - Small</span>
        <span tw="text-ctas-lg font-atlas-r block"><span tw="text-ss-4 mr-10">text-ctas-lg font-atlas-r</span> 15 CTA - Large</span>
        <span tw="text-ctas-lg hover:text-ctas-lg font-atlas-r block"><span tw="text-ss-4 mr-10">text-ctas-lg hover:text-cta-lg font-atlas-r</span>15 CTA - Large Hover</span>
        <span tw="text-ctas-md font-atlas-m block"><span tw="text-ss-4 mr-10">text-cta-md font-atlas-m</span> 14 CTA - Medium</span>
        <span tw="text-ctas-md hover:text-ctas-md font-atlas-m block"><span tw="text-ss-4 mr-10">text-ctas-md font-atlas-m hover:font-atlas-r</span>14 CTA - Medium Hover</span>
        <span tw="text-ctas-rg font-atlas-r block"><span tw="text-ss-4 mr-10">text-cta-rg font-atlas-r</span> 14 CTA - Regular</span>
        <span tw="text-ctas-rg hover:text-ctas-rg font-atlas-r block"><span tw="text-ss-4 mr-10">hover:text-ctas-rg font-atlas-r</span>text-cta-rg font-atlas-r block</span>
        <span tw="text-navs active:font-atlas-m block"><span tw="text-ss-4 mr-10">text-navs active:font-atlas-m</span>14 Navigation - Active</span>
        <span tw="text-navs font-atlas-r block"><span tw="text-ss-4 mr-10">text-navs font-atlas-r</span>14 Navigation</span>
        <span tw="text-ins font-atlas-r block"><span tw="text-ss-4 mr-10">text-ins font-atlas-r</span> 14 Input - Field</span>
        <span tw="text-bcs font-atlas-r block"><span tw="text-ss-4 mr-10">text-bcs font-atlas-r</span> 12 Breadcrumbs</span>
        <span tw="text-incs font-atlas-r block"><span tw="text-ss-4 mr-10">text-incs font-atlas-r</span> 11 Input - Caption</span>
        <span tw="text-lbs-lg font-atlas-m block"><span tw="text-ss-4 mr-10">text-lbs-lg font-atlas-m</span> 11 Label - Large</span>
        <span tw="text-lbs-sm font-atlas-m block"><span tw="text-ss-4 mr-10">text-lbs-sm font-atlas-m</span> 10 Label - Small</span>
        <span tw="text-ins-title font-atlas-l block"><span tw="text-ss-4 mr-10">text-ins-title font-atlas-l</span> 10 Input - Title</span>
        <span tw="text-ras font-atlas-l block"><span tw="text-ss-4 mr-10">text-ras font-atlas-l</span> 10 Rating</span>
      </div>
    </div>
  )
}

Typography.getLayout = function getLayout(page) {
  return (
    <Sidebar>
      {page}
    </Sidebar>
  )
}

export default Typography;