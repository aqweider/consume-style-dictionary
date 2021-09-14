/** @jsxImportSource @emotion/react */
import _ from 'lodash';
import tw, {css, theme, TwStyle} from 'twin.macro';
import React, {useState} from "react";
import {isMobile} from "react-device-detect";
/** Local imports */
import Icon, {IconType} from '../Icon';
import SvgIcon from '../SvgIcon';
import Menu from './Menu';
import CurtainMenu from './Menu/CurtainMenu';
import Search from '../Search';
import {Button, BasketButton} from '@/components';

type HeaderProps = {
  containerStyle?: TwStyle;
};

const LOGO_WIDTH = isMobile ? '5.5rem' : '8.25rem' //88px : 132px
const LOGO_HEIGHT = isMobile ? '0.81rem' : '1.262rem' //12.96px : 20.192px

const primaryMenu = [
  {
    key: "base",
    theme: "base",
    value: "Food",
    children: [
      {
        key: "sub1",
        value: "Leorem Ipsume",
        description: "Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      },
      {
        key: "sub2",
        value: "Leorem Ipsume",
        description: "Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      },
      {
        key: "sub3",
        value: "Leorem Ipsume",
        description: "Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      },
      {
        key: "sub4",
        value: "Leorem Ipsume",
        description: "Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      },
      {
        key: "sub5",
        value: "Leorem Ipsume",
        description: "Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      },
      {
        key: "sub6",
        value: "Leorem Ipsume",
        description: "Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      },
      {
        key: "sub7",
        value: "Leorem Ipsume",
        description: "Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      }
    ]
  },
  {
    key: "drinks",
    theme: "drink",
    value: "Drinks",
  },
  {
    key: "beauty",
    theme: "beauty",
    value: "Beauty",
  },
  {
    key: "health",
    theme: "health",
    value: "Health",
    children: [
      {
        key: "health sub1",
        value: "health Leorem Ipsume",
        description: "Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      },
      {
        key: "sub2",
        value: "health Leorem Ipsume",
        description: "Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      },
      {
        key: "sub3",
        value: "health Leorem Ipsume",
        description: "Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      },
      {
        key: "sub4",
        value: "health Leorem Ipsume",
        description: "health Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      },
      {
        key: "sub5",
        value: "health Leorem Ipsume",
        description: "health Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      },
      {
        key: "sub6",
        value: "health Leorem Ipsume",
        description: "health Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      },
      {
        key: "sub7",
        value: "health Leorem Ipsume",
        description: "health Rice, grains, pasta, pulses, beans, lentils, tins, jars, oils, fats…"
      }
    ]
  },
  {
    key: "home",
    theme: "home",
    value: "Home",
  },
  {
    key: "baby",
    theme: "baby",
    value: "Baby",
  },
  {
    key: "new",
    theme: "new",
    value: "New",
  },
  {
    key: "offers",
    theme: "offers",
    value: "Offers",
  }
]
const secondaryMenu = [
  {
    key: "blog",
    theme: "",
    value: "Blog"
  },
  {
    key: "recipes",
    theme: "",
    value: "Recipes"
  },
  {
    key: "guides",
    theme: "",
    value: "Guides"
  },
]

const Index: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggle = () => {
    setSelectedItem(null);
    setOpen((prevState) => !prevState);
  };

  const renderCurtainItem = (item, hasBorder = true) => {
    return (
      <CurtainMenu.Item key={item.key}
                        href="#"
                        hasBorder={hasBorder}
                        onClick={
                          item.children?
                            () => setSelectedItem(item):
                            undefined
                        }
      >
        {item.value}
      </CurtainMenu.Item>
    )
  }

  const renderCurtainHeader = () => {
    return (
      <div tw="flex flex-row justify-between items-center px-2.5 py-4">
        {
          selectedItem ?
            <div tw="inline-flex items-center">
              <Icon name="Full-Arrow-Left"
                    size={24}
                    onClick={() => setSelectedItem(null)}
              />
              <span tw="ml-3">Main menu</span>
            </div> :
            <SvgIcon name="Logo"
                     width="88px"
                     height="12.96px"
            />
        }
        <button
          aria-label="Close"
          tw="text-grey-base cursor-pointer"
          onClick={toggle}
        >
          <Icon name="X" size={24}/>
        </button>
      </div>
    )
  }

  const renderCurtainContent = () => {
    const subItems =  selectedItem?.children;

    if(subItems) {
      return (
        <CurtainMenu.Content>
          {
            subItems.map((item, i) => (
              renderCurtainItem(item, i < subItems.length - 1)
            ))
          }
        </CurtainMenu.Content>
      )
    }

    return (
        <CurtainMenu.Content>
          {
            primaryMenu.map((item, i) => (
              renderCurtainItem(item, i < primaryMenu.length - 1)
            ))
          }
          <CurtainMenu.Divider/>
          {
            secondaryMenu.map((item, i) => (
              renderCurtainItem(item, i < secondaryMenu.length - 1)
            ))
          }
          <CurtainMenu.Divider/>
          <CurtainMenu.Item href="#"
                            hasBorder
                            onClick={() => void(0)}

          >
            Help Centre
          </CurtainMenu.Item>
          <CurtainMenu.Item href="#"
                            hasBorder
                            onClick={() => void(0)}

          >
            Delivery & Returns
          </CurtainMenu.Item>
          <CurtainMenu.Item href="#"
                            onClick={() => void(0)}

          >
            Our CSR Commitments
          </CurtainMenu.Item>
          <CurtainMenu.Divider/>
          <CurtainMenu.Item href="#">
            <Icon name="Globe" size={21}/>
            <span tw="ml-2">Language</span>
          </CurtainMenu.Item>
        </CurtainMenu.Content>
      )
  }

  const renderCurtainFooter = () => {
    return (
      <div tw="w-full absolute bottom-0">
        <CurtainMenu.Divider/>
        <div tw="flex justify-between items-center bg-grey-white p-5 mt-[0.5px]">
          <div tw="inline-flex items-center">
            <Icon name="User" size={24}/>
            <span tw="ml-2">Login</span>
          </div>
          <Button layout="primary" layOn="light" containerStyle={tw`w-[180px] p-1.5`}>Trial membership</Button>
        </div>
      </div>
    )
  }

  return (
    <header tw="text-grey-base font-atlas-r relative">
      <div tw="bg-lowlight transition duration-1000 hidden lg:block">
        <div tw="flex justify-center items-center h-8">
          <Icon name="Box" size={12}/>
          <span tw="ml-3 text-bs-2">Free delivery on orders over 30 €</span>
        </div>
      </div>
      <div tw="flex flex-col py-4 px-2.5 lg:py-6 lg:px-8 bg-header transition duration-1000">
        <div tw="w-full inline-flex justify-between">
          <div tw="inline-flex items-center">
            <button tw="outline-none mr-4 lg:hidden" onClick={toggle}>
              <Icon name="Hamburger-Menu" size={24}/>
            </button>

            <SvgIcon name="Logo"
                     width={LOGO_WIDTH}
                     height={LOGO_HEIGHT}
            />
          </div>
          <div tw="hidden lg:block">
            <Search searchText="" placeholder="Search for a product or brand"/>
          </div>
          <div tw="flex items-center lg:hidden">
            <Icon name="Heart" size={19}/>
            <BasketButton count={100} containerStyle={tw`ml-3`}/>
          </div>
        </div>
        {/* Large screens menu */}
        <div tw="mt-5 lg:flex flex-row justify-between hidden">
          <div tw="inline-flex">
            <Menu options={primaryMenu}/>
          </div>
          <div tw="inline-flex space-x-16">
            <Menu options={secondaryMenu}/>
            <div tw="inline-flex items-center space-x-5">
              <a href="#">
                <Icon name="Globe" size={21}/>
              </a>
              <a href="#">
                <Icon name="User" size={24}/>
              </a>
              <a href="#" tw="inline-flex items-center">
                <BasketButton count={100}/>
                <span tw="pl-2.5 text-navigation">99,99 €</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile curtain menu */}
      <div tw="lg:hidden">
        <CurtainMenu open={open}
                     onclose={toggle}
                     headerComponent={renderCurtainHeader()}
                     footerComponent={renderCurtainFooter()}
                     key={selectedItem ? 'sub-curtain' : 'main-curtain'}
        >
          {
            renderCurtainContent()
          }
        </CurtainMenu>
      </div>
    </header>
  );
};

Index.defaultProps = {};

export default Index;
