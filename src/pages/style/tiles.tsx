/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import React from "react";
import {ProductTile, Sidebar} from 'components';

const Tiles = () => {
  return (
    <div tw="m-5">
      <h1>Product Tiles</h1>

      <div>
        <span>Large</span>

        <div tw="flex flex-row">
          <div tw="mr-4">
            <ProductTile new bestSeller layout="large" />
          </div>
          <div tw="mr-4">
            <ProductTile layout="medium" />
          </div>
          <div tw="mr-4">
            <ProductTile layout="small" />
          </div>
        </div>

      </div>
    </div>
  )
}

Tiles.getLayout = function getLayout(page) {
  return (
    <Sidebar>
      {page}
    </Sidebar>
  )
}

export default Tiles;