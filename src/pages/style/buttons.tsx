/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import React, {useState} from "react";
import {Button, QtyButton, SvgIcon, Fab, Sidebar} from 'components';

const Buttons = () => {
  const [value, setValue] = useState(0)
  const [lgValue, setLgValue] = useState(1)

  return (
    <div tw="flex flex-col items-center justify-center">
      <div  tw="mt-10 w-11/12 bg-header">
        <div tw="flex flex-row justify-center p-10">
          <view tw="px-8">
            <span>Primary o/ Dark</span>
            <div>
              <Button layout="primary" layOn="dark">Primary o/ Dark</Button>
            </div>
          </view>
          <div tw="px-8">
            <span>Secondary o/Dark</span>
            <div>
              <Button layout="secondary" layOn="dark">Secondary o/ Dark</Button>
            </div>
          </div>
          <div tw="px-8">
            <span>Tertiary o/Dark</span>
            <div>
              <Button layout="tertiary" layOn="dark">Read Less</Button>
            </div>
          </div>

        </div>
      </div>
      <div  tw="mt-10 w-full bg-tint-24">
        <div tw="flex flex-row justify-center p-10">
          <view tw="px-8">
            <span>Primary o/ Light</span>
            <div>
              <Button layout="primary" layOn="light">Primary o/ Light</Button>
            </div>
          </view>
          <div tw="px-8">
            <span>Secondary o/Light</span>
            <div>
              <Button layout="secondary" layOn="light">Primary o/ Light</Button>
            </div>
          </div>
          <div tw="px-8">
            <span>Tertiary o/Dark</span>
            <div>
              <Button layout="tertiary">Read Less</Button>
            </div>
          </div>
          <div tw="px-8 flex flex-col">
            <Fab layout="primary" size="small" icon={{name: 'Plus'}} />
            <Fab layout="primary" size="small" icon={{name: 'Minus'}} />

            <Fab layout="primary" size="regular" icon={{name: 'Plus'}} />
            <Fab layout="primary" size="regular" icon={{name: 'Minus'}} />

            <Fab layout="primary" size="large" icon={{name: 'Plus'}} />
            <Fab layout="primary" size="large" icon={{name: 'Minus'}} />
          </div>
          <div>
            <SvgIcon name="Google" width={24} height={24} />
            <SvgIcon name="Facebook" width={24} height={24} />
          </div>
        </div>
        <div tw="w-[200px] flex flex-col pb-5">
          <div tw="mb-2 w-full">
            <div tw="flex justify-end mb-2">
              <Fab layout="quantity"
                   size="small"
                   icon={{name: 'Plus', size: '16px'}}
              />
            </div>
          </div>
          <div tw="mb-2 w-full">
            <div tw="float-right">
              {
                <QtyButton value={value}
                           size="small"
                           onAdd={(val) => setValue(val)}
                           onRemove={(val) => setValue(val)}
                />
              }
            </div>
          </div>

          <div tw="mb-2 w-full">
            <div tw="float-right">
              {
                <QtyButton value={lgValue}
                           size="large"
                           onAdd={(val) => setLgValue(val)}
                           onRemove={(val) => setLgValue(val)}
                />
              }
            </div>
          </div>
        </div>
      </div>
      <div tw="mt-5">
        <Fab layout="secondary" size="large" icon={{name: 'Arrow-Down', size: '16px'}} />
        <Fab layout="secondary" size="large" icon={{name: 'Arrow-Up', size: '16px'}} />
        <Fab layout="secondary" size="large" icon={{name: 'Arrow-Left', size: '16px'}} />
        <Fab layout="secondary" size="large" icon={{name: 'Arrow-Right', size: '16px'}} />
      </div>

      <div tw="mt-4">
        <Fab layout="primary" icon={{name: 'Arrow-Down', size: '13px'}} />
        <Fab layout="secondary" size="large" icon={{name: 'Heart', size: '16px'}} />
        <Fab layout="primary" size="large" icon={{name: 'Plus', size: '16px'}} />
        <Fab layout="primary" size="large" icon={{name: 'Minus', size: '16px'}} />
      </div>

      <div tw="mt-4">
        <Button layout="facebook" />
        <Button layout="google" />
      </div>

      <div tw="mt-4">
        <Button layout="inactive" size="large" iconLeft={{name: 'Shopping-Cart-01', size: 24}} disabled>
          Inactive Button
        </Button>
      </div>
    </div>
  )
}

Buttons.getLayout = function getLayout(page) {
  return (
    <Sidebar>
      {page}
    </Sidebar>
  )
}

export default Buttons;