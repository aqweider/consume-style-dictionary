/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import React from "react";
/** Local imports **/
import {Sidebar} from '@/components';

const Index = () => {
  return (
    <div tw="p-10"> Live Style Guide </div>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Sidebar>
      {page}
    </Sidebar>
  )
}

export default Index;