/** @jsxImportSource @emotion/react */
import tw, {css} from 'twin.macro';
import React from "react";
import Link from 'next/link'
/** Local imports */

export type SidebarType = {};

const Sidebar: React.FC<SidebarType> = props => {
  return (
    <div tw="flex flex-row">
      <nav tw="flex flex-col bg-brand w-[300px] fixed top-0 bottom-0 pl-2 pr-4 text-white">
        <div tw="mt-10 mb-4">
          <ul tw="ml-4">
            <li
              tw="mb-2 px-4 py-4 text-white flex flex-row rounded rounded-lg">
              <Link href="/style/typography">
                <a>
                  Typography
                </a>
              </Link>
            </li>
            <li
              tw="mb-2 px-4 py-4 text-white flex flex-row rounded rounded-lg">
              <Link href="/style/palette">
                <a>
                  Palette
                </a>
              </Link>
            </li>
            <li
              tw="mb-2 px-4 py-4 text-white flex flex-row rounded rounded-lg">
              <Link href="/style/graphics">
                <a>
                  Graphics
                </a>
              </Link>
            </li>
            <li
              tw="mb-2 px-4 py-4 text-white flex flex-row rounded rounded-lg">
              <Link href="/style/buttons">
                <a>
                  Buttons
                </a>
              </Link>
            </li>
            <li
              tw="mb-2 px-4 py-4 text-white flex flex-row rounded rounded-lg">
              <Link href="/style/headers">
                <a>
                  Headers
                </a>
              </Link>
            </li>
            <li
              tw="mb-2 px-4 py-4 text-white flex flex-row rounded rounded-lg">
              <Link href="/style/tiles">
                <a>
                  Tiles
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div tw="m-4 max-w-[calc(100% - 300px)] ml-[300px]">
        {props.children}
      </div>
    </div>

  )
};

export default Sidebar;
