/** @jsxImportSource @emotion/react */
import tw, {theme, css} from "twin.macro";
import React, {useEffect, useState} from "react";
import {NavigationOptions} from 'swiper/types/modules/navigation';
import {PaginationOptions} from 'swiper/types/modules/pagination';
/** Local imports */
import {Header, Button, Icon, Tabs, SvgIcon, StyledRate, ProductTile, ProgressBar} from "@/components";
import Accordion, {AccordionItem, AccordionPanel} from "@/components/Accordion";
import Carousel from "react-multi-carousel";
import SwiperCore, {Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import productImg from "assets/images/product-img.png";
import LogoPlaceholder from "assets/images/logo-placeholder.png";
import sharingBg from "assets/images/sharing-img.png";
import Dijo from "assets/images/dijo.png";
import Feature01 from "assets/images/48h-delivery.png";
import Feature02 from "assets/images/carbon-neutral.png";
import Feature03 from "assets/images/recycleable-packaging.png";
import Knowledge from "assets/images/knowledge-bg.png";

/** Style imports */
import "react-multi-carousel/lib/styles.css";
import "rc-rate/assets/index.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

SwiperCore.use([Pagination, Navigation, Scrollbar]);

const Index = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const navPrevButton = React.useRef<HTMLButtonElement>(null);
  const navNextButton = React.useRef<HTMLButtonElement>(null);
  const paginationLabel = React.useRef<HTMLHeadingElement>(null);
  let swiperRef = null;

  const onBeforeInit = (Swiper: SwiperCore): void => {
    if (typeof Swiper.params.navigation !== 'boolean') {
      const navigation = Swiper.params.navigation;
      navigation.prevEl = navPrevButton.current;
      navigation.nextEl = navNextButton.current;
    }

    if (typeof Swiper.params.pagination !== 'boolean') {
      Swiper.params.pagination.el = paginationLabel.current;
    }
  };

  const getProgressBarValue = () => {
    const total = 7;

    return ((activeIndex + 1) / total) * 100
  }

  const renderSwiperContent = () => {
    return (
      <div className="product-slider-container">
        <div className="swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <ProductTile layout="large"/>
            </div>
          </div>
        </div>
        <div className="swiper-controls">
          <div className="swiper-scrollbar"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    )
  }

  return (
    <div>
      <Header/>
      <section tw="relative bg-product p-8 transition duration-1000">
        <div tw="container m-auto xs:max-w-full">
          <div tw="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 gap-0 mb-16">
            <div>
              <div tw="font-atlas-m text-bs-2 uppercase text-right mb-11">
               <span tw="text-grey-base bg-grey-white bg-opacity-50 rounded-sm px-2 py-1 border border-grey-white">
                New
            </span>
              </div>
              <Carousel
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                containerClass="container"
                dotListClass="dot-list"
                draggable
                focusOnSelect={false}
                infinite
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside
                responsive={{
                  desktop: {
                    breakpoint: {
                      max: 3000,
                      min: 1024
                    },
                    items: 1
                  },
                  mobile: {
                    breakpoint: {
                      max: 464,
                      min: 0
                    },
                    items: 1
                  },
                  tablet: {
                    breakpoint: {
                      max: 1024,
                      min: 464
                    },
                    items: 1
                  }
                }}
                showDots
                slidesToSlide={1}
                swipeable
              >
                <img
                  src={productImg.src}
                  alt=""
                  tw="m-auto w-72"
                />
                <img
                  src={productImg.src}
                  alt=""
                  tw="m-auto w-72"
                />
                <img
                  src={productImg.src}
                  alt=""
                  tw="m-auto w-72"
                />
              </Carousel>
            </div>
            <div tw="text-grey-base">
              <div tw="lg:w-10/12 md:w-full w-full float-right">
                <div tw="font-atlas-m text-bs-1 uppercase text-right mb-6">
               <span tw="text-grey-base rounded-sm px-2 py-1 border border-grey-base">
                 <Icon name='X' size='24'/>
                 Out of stock
               </span>
                </div>
                <h5 tw="font-atlas-m text-ss-2 uppercase">
                  Dijo
                </h5>
                <h1 tw="font-faro text-hs-5">
                  Glutamine
                </h1>
                <p tw="font-atlas-r text-bs-5">
                  35g/60 gélules
                </p>
                <div tw="flex justify-between items-center mb-3 mt-4">
                  <StyledRate value={4}/>
                  <div tw="flex justify-between">
                    <div tw="font-atlas-r text-bs-4 mr-12">
                      <a href={"#"} tw="underline">Reviews</a>
                      <sup>4</sup>
                    </div>
                    <div tw="font-atlas-r text-bs-4">
                      <a href={"#"} tw="underline">Questions</a>
                      <sup>2</sup>
                    </div>
                  </div>
                </div>
                <div tw="flex w-full border rounded-md border-grey-base">
                  <div tw="p-3 w-6/12 border-0 border-r border-grey-base shadow-border">
                    <h4 tw="font-atlas-r text-bs-5 mb-1">
                      You pay:
                    </h4>
                    <div tw="flex justify-between items-center">
                      <h3 tw="font-atlas-m text-bs-8">
                        39,00 €
                      </h3>
                      <p tw="font-atlas-r text-bs-2">
                        4, 10 €/kg
                      </p>
                    </div>
                  </div>
                  <div tw="p-3 w-6/12 border-0">
                    <div tw="flex justify-between items-center mb-1">
                      <h4 tw="font-atlas-r text-bs-5">
                        Members pay:
                      </h4>
                      <span
                        tw="font-atlas-m text-bs-0 font-atlas-m uppercase text-grey-base bg-grey-white bg-opacity-50 rounded-sm px-2 py-1 border border-grey-white">
                 -15% LESS
                 </span>
                    </div>
                    <div tw="flex justify-between items-center">
                      <h3 tw="flex items-center font-atlas-m text-bs-5">
                        <SvgIcon name="Kmember" width={24} height={24}/>
                        <span tw="mt-1 ml-1">31,20 €</span>
                      </h3>
                      <p tw="font-atlas-r text-bs-2">
                        0, 10 €/unité
                      </p>
                    </div>
                  </div>
                </div>
                <div tw="mt-4 flex justify-between gap-4 ">
                  <Button layout="inactive" size="large"
                          iconLeft={{name: "Shopping-Cart-02", size: 24}} disabled
                          containerStyle={tw`w-full`}>
                    Unavailable
                  </Button>
                  <Button layout="primary" size="large" layOn="light"
                          iconLeft={{name: "Shopping-Cart-02", size: 24}}
                          containerStyle={tw`w-full`}
                  ><span tw="md:inline-block hidden">Add to wishlist</span></Button>
                </div>
                <p tw="font-atlas-l text-bs-3 mt-4 mb-8">Indisponible à la vente en Belgique. <b
                  tw="font-atlas-r">Cliquez
                  ici</b> pour modifier votre emplacement.</p>
                <ul>
                  <li tw="flex items-center mb-3">
                    <SvgIcon name="Reward" width={24} height={24} tw="mr-5"/>
                    <p tw="font-atlas-r text-bs-5">
                      Secured payments bla bla
                    </p>
                  </li>
                  <li tw="flex items-center mb-3">
                    <SvgIcon name="Delivery" width={24} height={24} tw="mr-5"/>
                    <p tw="font-atlas-r text-bs-5">
                      Home delivery or pick-up points (see conditions)
                    </p>
                  </li>
                  <li tw="flex items-center mb-3">
                    <SvgIcon name="Watch" width={24} height={24} tw="mr-5"/>
                    <p tw="font-atlas-r text-bs-5">
                      Orders sent within 48 hours
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div tw="md:grid sm:flex grid-cols-2">
            <div>
              <a href="#"
                 tw="absolute bottom-0 inline-flex items-center py-2 pl-3 pr-5 rounded-t bg-grey-white bg-opacity-40">
                <img
                  src={productImg.src}
                  alt=""
                  tw="w-8 h-8 mr-4"
                />
                <p tw="font-atlas-r text-bs-5">
                  Our product selection critera
                </p>
                <Icon name="Full-Arrow-Right" size="24" tw="ml-7"/>
              </a>
            </div>
            <div>
              <a href="#" tw="flex items-center justify-end xs:mb-10 md:mb-0">
                <Icon name="Flag-02" size="16" tw="mr-2"/>
                <p tw="font-atlas-l text-bs-2">
                  Report incorrect data
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section tw="container lg:px-20 md:px-8 py-8 text-grey-base">
        <div tw="lg:w-3/5 md:w-full">
          <Accordion defaultPanel="about">
            <AccordionItem toggle="about">About this product</AccordionItem>
            <AccordionPanel id="about">
              <div tw="flex gap-12">
                <div>
                  <Icon name='Check-in-a-Circle' size='24'/>
                  <span tw="font-atlas-r text-bs-5 ml-3">Troubles Digestifs</span>
                </div>
                <div>
                  <Icon name='Check-in-a-Circle' size='24'/>
                  <span tw="font-atlas-r text-bs-5 ml-3">Probiotiques</span>
                </div>
              </div>
              <div>
                <p tw="font-atlas-l text-bs-5 mt-8 mb-4">
                  Participe au maintien de l’intégrité de la muqueuse intestinale, véritable barrière
                  de protection
                  entre le monde extérieur et le milieu intérieur de notre organisme
                </p>
                <Button layout="tertiary">Read Less</Button>
              </div>
            </AccordionPanel>
          </Accordion>
          <Accordion defaultPanel="product_spes">
            <AccordionItem toggle="product_spes">A little more on the product</AccordionItem>
            <AccordionPanel id="product_spes">
              <div tw="flex flex-wrap  w-full gap-2">
                <div tw="flex items-center border border-grey-light rounded-lg px-2.5 py-1.5 mb-2">
                  <SvgIcon name="Vegan" width={24} height={24}/>
                  <span tw="font-atlas-r text-bs-3 ml-2">Vegan</span>
                </div>
                <div tw="flex items-center border border-grey-light rounded-lg px-2.5 py-1.5 mb-2">
                  <SvgIcon name="Vegetarian" width={32} height={32}/>
                  <span tw="font-atlas-r text-bs-3 ml-2">Vegetarian</span>
                </div>
                <div tw="flex items-center border border-grey-light rounded-lg px-2.5 py-1.5 mb-2">
                  <SvgIcon name="Lactose" width={32} height={32}/>
                  <span tw="font-atlas-r text-bs-3 ml-2">Lactose free</span>
                </div>
                <div tw="flex items-center border border-grey-light rounded-lg px-2.5 py-1.5 mb-2">
                  <SvgIcon name="Sugar" width={32} height={32}/>
                  <span tw="font-atlas-r text-bs-3 ml-2">Low in sugar</span>
                </div>
                <div tw="flex items-center border border-grey-light rounded-lg px-2.5 py-1.5 mb-2">
                  <SvgIcon name="Gluten" width={24} height={24}/>
                  <span tw="font-atlas-r text-bs-3 ml-2">Gluten free</span>
                </div>
                <div tw="flex items-center border border-grey-light rounded-lg px-2.5 py-1.5 mb-2">
                  <SvgIcon name="Fats" width={32} height={32}/>
                  <span tw="font-atlas-r text-bs-3 ml-2">Low in saturated fats</span>
                </div>
                <div tw="flex items-center border border-grey-light rounded-lg px-2.5 py-1.5 mb-2">
                  <SvgIcon name="Oils" width={32} height={32}/>
                  <span tw="font-atlas-r text-bs-3 ml-2">Without essential oils</span>
                </div>
                <div tw="flex items-center border border-grey-light rounded-lg px-2.5 py-1.5 mb-2">
                  <SvgIcon name="Cruelty" width={32} height={32}/>
                  <span tw="font-atlas-r text-bs-3 ml-2">Cruelty-free</span>
                </div>
                <div tw="flex items-center border border-grey-light rounded-lg px-2.5 py-1.5 mb-2">
                  <SvgIcon name="Salt" width={32} height={32}/>
                  <span tw="font-atlas-r text-bs-3 ml-2">Low salt</span>
                </div>
              </div>
            </AccordionPanel>
          </Accordion>
          <Accordion defaultPanel="ingredients">
            <AccordionItem toggle="ingredients">Ingredients</AccordionItem>
            <AccordionPanel id="ingredients">
              <div>
                <p tw="font-atlas-l text-bs-5 mb-4">
                  Ingrédients pour 6 gélules : L-glutamine 3000mg - gélule végétale
                </p>
              </div>
            </AccordionPanel>
          </Accordion>
          <Accordion defaultPanel="certification">
            <AccordionItem toggle="certification">Origin & certification</AccordionItem>
            <AccordionPanel id="certification">
              <div tw="flex gap-6">
                <div>
                  <img
                    src={LogoPlaceholder.src}
                    alt=""
                    tw="m-auto w-20"
                  />
                </div>
                <div>
                  <img
                    src={LogoPlaceholder.src}
                    alt=""
                    tw="m-auto w-20"
                  />
                </div>
              </div>
              <div tw="flex gap-3 mt-6 mb-4">
                <div tw="flex items-center border border-grey-light rounded-lg px-2.5 py-1.5 mb-2">
                  <SvgIcon name="France" width={24} height={24}/>
                  <span tw="font-atlas-r text-bs-5 ml-2">Fabriquée en France</span>
                </div>
                <div tw="flex items-center border border-grey-light rounded-lg px-2.5 py-1.5 mb-2">
                  <SvgIcon name="France" width={24} height={24}/>
                  <span tw="font-atlas-r text-bs-5 ml-2">French ingredients</span>
                </div>
              </div>
            </AccordionPanel>
          </Accordion>
          <Accordion defaultPanel="instructions">
            <AccordionItem toggle="instructions" hasTabs>Instructions</AccordionItem>
            <AccordionPanel id="instructions">
              <div>
                <Tabs variant={1}>
                  <Tabs.Tab title="How to use">
                    <p tw="font-atlas-l text-bs-5">
                      Complément alimentaire à prendre dans le cadre d'une alimentation variée. Ne
                      pas dépasser la dose
                      journalière indiquée. Il est conseillé aux femmes enceintes et allaitantes
                      de consulter un
                      professionnel de santé avant toute supplémentation. Tenir hors de portée des
                      jeunes enfants.
                      Conserver à l'abri de la chaleur.
                    </p>
                  </Tabs.Tab>
                  <Tabs.Tab title="Daily dosage">
                    <p tw="font-atlas-l text-bs-5">
                      nseillé aux femmes enceintes et allaitantes de consulter un
                      professionnel de santé avant toute supplémentation. Tenir hors de portée des
                      jeunes enfants.
                      Conserver à l'abri de la chaleur.
                    </p>
                  </Tabs.Tab>
                  <Tabs.Tab title="Precautions">
                    <p tw="font-atlas-l text-bs-5">
                      ir hors de portée des jeunes enfants.
                      Conserver à l'abri de la chaleur.
                    </p>
                  </Tabs.Tab>
                </Tabs>
              </div>
            </AccordionPanel>
          </Accordion>
        </div>
      </section>

      <hr></hr>

      <section tw="container py-8 text-grey-base m-auto">
        <div tw="gap-0 my-16 grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
          <div tw="">
            <Accordion defaultPanel="reviews">
              <AccordionItem toggle="reviews" hasTabs>Reviews</AccordionItem>
              <AccordionPanel id="reviews">
                <div>
                  <Tabs variant={1}>
                    <Tabs.Tab title="Product reviews">
                      <div tw="mb-10">
                        <div tw="flex items-center justify-between">
                          <h5 tw="font-atlas-m text-bs-5">Harry Hill</h5>
                          <span tw="font-atlas-l text-bs-3 text-grey-star">3 days ago</span>
                        </div>
                        <StyledRate disabled value={4} size="sm"/>
                        <p tw="font-atlas-l text-bs-5 my-4">
                          Consectetur adipiscing elit. Metus, porta elit tincidunt augue
                          eleifend elementum posuere
                          pursa
                          euismod nunc. Nunc eget urna nibh ipsum nulla amet suspendisse
                          phasellus consequat. Elementum
                          a
                          erat purus volutpat. Pretium massa vulputate posuere auctor non
                          viverra massa. Adipiscing nunc
                          viverra dui donec sed nunc.
                        </p>
                        <Button layout="tertiary">Comment</Button>
                      </div>
                      <div tw="mb-10">
                        <div tw="flex items-center justify-between">
                          <h5 tw="font-atlas-m text-bs-5">Harry Hill</h5>
                          <span tw="font-atlas-l text-bs-3 text-grey-star">3 days ago</span>
                        </div>
                        <StyledRate disabled value={4} size="sm"/>
                        <p tw="font-atlas-l text-bs-5 my-4">
                          Consectetur adipiscing elit. Metus, porta elit tincidunt augue
                          eleifend elementum posuere
                          pursa
                          euismod nunc. Nunc eget urna nibh ipsum nulla amet suspendisse
                          phasellus consequat. Elementum
                          a
                          erat purus volutpat. Pretium massa vulputate posuere auctor non
                          viverra massa. Adipiscing nunc
                          viverra dui donec sed nunc.
                        </p>
                        <Button layout="tertiary">Comment</Button>
                      </div>
                      <div tw="flex flex-col items-center text-grey-base font-atlas-r text-bs-4">
                        <Icon name='Arrow-Down' size='24'/>
                        View more
                      </div>
                    </Tabs.Tab>
                    <Tabs.Tab title="Questions">
                      <div tw="mb-10">
                        <div tw="flex items-center justify-between">
                          <h5 tw="font-atlas-m text-bs-5">Harry Hill</h5>
                          <span tw="font-atlas-l text-bs-3 text-grey-star">3 days ago</span>
                        </div>
                        <p tw="font-atlas-l text-bs-5 my-4">
                          Consectetur adipiscing elit. Metus, porta elit tincidunt augue
                          eleifend elementum posuere
                          pursa
                          euismod nunc. Nunc eget urna nibh ipsum nulla amet suspendisse
                          phasellus consequat. Elementum
                          a
                          erat purus volutpat. Pretium massa vulputate posuere auctor non
                          viverra massa. Adipiscing nunc
                          viverra dui donec sed nunc.
                        </p>
                        <Button layout="tertiary">Comment</Button>
                      </div>
                      <div tw="mb-10">
                        <div tw="flex items-center justify-between">
                          <h5 tw="font-atlas-m text-bs-5">Julie Andrews</h5>
                          <span tw="font-atlas-l text-bs-3 text-grey-star">3 days ago</span>
                        </div>
                        <p tw="font-atlas-l text-bs-5 my-4">
                          Nunc eget urna nibh ipsum nulla amet suspendisse phasellus
                          consequat. Elementum a eratame
                          purus
                          volutpat. Pretium massa vulputate posuere auctor.
                        </p>
                        <Button layout="tertiary">Comment</Button>
                        <div tw="border-l border-grey-star pl-12 ml-10 mt-10">
                          <div tw="flex items-center justify-between">
                            <div tw="flex">
                              <h5 tw="font-atlas-m text-bs-5 mr-4">Kazidomi</h5>
                              <span tw="font-atlas-l text-bs-3 text-grey-star">answered by Julie Howard</span>
                            </div>
                            <span
                              tw="font-atlas-l text-bs-3 text-grey-star">July 23, 2021</span>
                          </div>
                          <p tw="font-atlas-l text-bs-5 my-4">
                            Nunc eget urna nibh ipsum nulla amet suspendisse phasellus
                            consequat. Elementum a eratame
                            purus
                            volutpat. Pretium massa vulputate posuere auctor.
                          </p>
                        </div>
                      </div>
                      <div tw="flex flex-col items-center text-grey-base font-atlas-r text-bs-4">
                        <Icon name='Arrow-Down' size='24'/>
                        View more
                      </div>
                    </Tabs.Tab>
                  </Tabs>
                </div>
              </AccordionPanel>
            </Accordion>
          </div>
          <div>
            <div tw="lg:w-10/12 md:w-full w-full float-right mt-20">
              <div tw="flex items-center justify-between border-b border-grey-base pb-4">
                <div tw="flex">
                  <h5 tw="font-atlas-m text-ss-2">Member ratings</h5>
                  <sup tw="font-atlas-l text-bs-2">1221</sup>
                </div>
                <div tw="flex items-center">
                  <StyledRate disabled allowHalf value={4} size="lg"/>
                  <span tw="font-atlas-m text-bs-8">4.8</span>
                </div>
              </div>
              <div>
                <div tw="flex items-center justify-between mt-6">
                  <StyledRate disabled allowHalf value={5} size="md"/>
                  <span tw="font-atlas-l text-bs-5">130 reviews</span>
                </div>
                <div tw="relative w-full bg-grey-bright h-px mt-2">
                  <div tw="absolute left-0 -top-0.5 w-3/6 bg-lowlight h-0.5"></div>
                </div>
              </div>
              <div>
                <div tw="flex items-center justify-between mt-6">
                  <StyledRate disabled allowHalf value={4} size="md"/>
                  <span tw="font-atlas-l text-bs-5">130 reviews</span>
                </div>
                <div tw="relative w-full bg-grey-bright h-px mt-2">
                  <div tw="absolute left-0 -top-0.5 w-5/6 bg-lowlight h-0.5"></div>
                </div>
              </div>
              <div>
                <div tw="flex items-center justify-between mt-6">
                  <StyledRate disabled allowHalf value={3} size="md"/>
                  <span tw="font-atlas-l text-bs-5">130 reviews</span>
                </div>
                <div tw="relative w-full bg-grey-bright h-px mt-2">
                  <div tw="absolute left-0 -top-0.5 w-2/6 bg-lowlight h-0.5"></div>
                </div>
              </div>
              <div>
                <div tw="flex items-center justify-between mt-6">
                  <StyledRate disabled allowHalf value={2} size="md"/>
                  <span tw="font-atlas-l text-bs-5">130 reviews</span>
                </div>
                <div tw="relative w-full bg-grey-bright h-px mt-2">
                  <div tw="absolute left-0 -top-0.5 w-2/6 bg-lowlight h-0.5"></div>
                </div>
              </div>
              <div>
                <div tw="flex items-center justify-between mt-6">
                  <StyledRate disabled allowHalf value={1} size="md"/>
                  <span tw="font-atlas-l text-bs-5">130 reviews</span>
                </div>
                <div tw="relative w-full bg-grey-bright h-px mt-2">
                  <div tw="absolute left-0 -top-0.5 w-1/6 bg-lowlight h-0.5"></div>
                </div>
              </div>
              <div tw="bg-grey-warm border-0 rounded-b mt-14">
                <h3 tw="font-faro text-hs-1 p-4 bg-highlight border-0 rounded-t">Sharing is caring</h3>
                <div tw="relative px-4 py-6">
                  <p tw="font-atlas-l text-bs-5 lg:w-9/12 md:w-full mb-9">
                    Join the conversation and share your opinion on products or get a question
                    answered.
                  </p>
                  <img
                    src={sharingBg.src}
                    alt=""
                    tw="absolute right-0 bottom-0 w-44"
                  />
                  <div tw="inline-flex flex-col justify-between h-16">
                    <Button layout="tertiary">Write a review</Button>
                    <Button layout="tertiary">Ask a quesion</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr></hr>

      <section tw="ml-8 py-8 text-grey-base">
        <h1 tw="font-faro text-hs-2 text-grey-base mb-9">From the same brand</h1>
        <div>
          <Swiper
            modules={[Navigation, Pagination, Scrollbar]}
            spaceBetween={4}
            slidesPerView='auto'
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => swiperRef = swiper}
            onBeforeInit={onBeforeInit}
            className="products-swiper"
          >
            {
              ['', '', '', '', '', '', ''].map((item, i) => (
                <SwiperSlide key={i} className="swiper-slide">
                  <ProductTile layout="large"/>
                </SwiperSlide>
              ))
            }

            <div tw="flex justify-center items-center h-20">
              <button ref={navPrevButton} tw="mr-6">
                <Icon name="Arrow-Left" size={24}/>
              </button>
              <div tw="w-7/12 relative">
                <ProgressBar value={`${getProgressBarValue()}%`}/>
                <span tw="absolute top-3 left-1">{`${activeIndex + 1}—7`}</span>
              </div>
              <button ref={navNextButton} tw="ml-6">
                <Icon name="Arrow-Right" size={24}/>
              </button>
            </div>
          </Swiper>
        </div>
      </section>

      <section tw="text-grey-base pt-32 pb-48">
        <div tw="container m-auto">
          <div tw="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
            <div>
              <img
                src={Dijo.src}
                alt=""
                tw="m-auto w-56"
              />
            </div>
            <div>
              <h2 tw="font-faro text-hs-3">
                A little more on DIJO
              </h2>
              <p tw="font-atlas-l text-bs-5 mt-8 mb-7">
                Consectetur adipiscing elit. Metus, porta elit tincidunt augue eleifend elementum
                posuere pursa euismod nunc. Nunc eget urna nibh ipsum nulla amet suspendisse phasellus
                consequat. Elementum a erat purus volutpat. Pretium massa vulputate posuere auctor non
                viverra massa. Adipiscing nunc viverra dui donec sed nunc.
              </p>
              <Button layout="tertiary">Read More</Button>
            </div>
          </div>
        </div>
      </section>
      <section tw="text-grey-base border border-grey-light">
        <div tw="container m-auto">
          <div
            tw="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 lg:divide-y-0 md:divide-y sm:divide-y xs:divide-y divide-grey-light">
            <div tw="relative flex items-center justify-center">
              <img
                src={Feature01.src}
                alt=""
                tw="w-28"
              />
              <p tw="font-atlas-r text-bs-5 mt-3">48hr delivery</p>
              <span tw="absolute right-0 h-6 w-px bg-grey-light lg:block xs:hidden">
                        </span>
            </div>
            <div tw="relative flex items-center justify-center">

              <img
                src={Feature02.src}
                alt=""
                tw="w-28"
              />
              <p tw="font-atlas-r text-bs-5 mt-3">Carbon neutral</p>
              <span tw="absolute right-0  h-6 w-px bg-grey-light lg:block xs:hidden">
                        </span>
            </div>
            <div tw="relative flex items-center justify-center">
              <img
                src={Feature03.src}
                alt=""
                tw="w-28"
              />
              <p tw="font-atlas-r text-bs-5 mt-3">Recycleable packaging</p>
            </div>
          </div>
        </div>
      </section>
      <section tw="relative bg-grey-warm text-grey-base pt-24 pb-32">
        <div tw="container m-auto text-center">
          <h1 tw="font-faro text-hs-6 w-3/6 m-auto" css={["line-height:72px"]}>
            Geek out on latest expert knowledge
          </h1>
          <p tw="font-atlas-l text-bs-7 w-2/5 m-auto leading-5 mt-4 mb-14">
            Get product recommendations from our team of experts, and the latest offers, direct to your
            inbox
          </p>
          <div tw="relative w-97 m-auto">
            <input
              tw="text-bs-4 text-grey-base placeholder-grey-base bg-white shadow-input rounded-full outline-none p-4 w-97"
              type="email"
              placeholder="Add your email address to sign up"
            />
            <button tw="bg-transparent outline-none focus:outline-none absolute right-3 inset-y-0">
              <Icon name="Arrow-Right" size={24}/>
            </button>
          </div>
          <div
            tw="absolute right-0 bottom-0 bg-grey-warm bg-blend-multiply bg-contain bg-no-repeat bg-right-bottom w-72 h-56"
            className="knowledge-bg">
          </div>
        </div>
      </section>
      <footer tw="bg-header text-grey-base">
        <div tw="container m-auto">
          <div tw="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
            <div>
              <div tw="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1">
                <div>
                  <h5 tw="font-atlas-m text-bs-6 my-3">Kazidom</h5>
                  <a href="#" tw="block font-atlas-r text-bs-4 my-3">Membership</a>
                  <a href="#" tw="block font-atlas-r text-bs-4 my-3">Gift cards</a>
                  <a href="#" tw="block font-atlas-r text-bs-4 my-3">CSR</a>
                  <a href="#" tw="block font-atlas-r text-bs-4 my-3">Be a shareholder</a>
                </div>
                <div>
                  <h5 tw="font-atlas-m text-bs-6 my-3">Help</h5>
                  <a href="#" tw="block font-atlas-r text-bs-4 my-3">Help centre</a>
                  <a href="#" tw="block font-atlas-r text-bs-4 my-3">Delivery & returns</a>
                </div>
                <div>
                  <h5 tw="font-atlas-m text-bs-6 my-3">Contacts</h5>
                  <a href="#" tw="block font-atlas-r text-bs-4 my-3">Contact & support</a>
                  <a href="#" tw="block font-atlas-r text-bs-4 my-3">Join us</a>
                  <a href="#" tw="block font-atlas-r text-bs-4 my-3">Sell with us</a>
                </div>
              </div>
            </div>
            <div tw="flex flex-col items-end">
              <h5 tw="font-atlas-l text-bs-3 my-3">
                Further healthier recipes, tips and inspiration for you
              </h5>
              <div tw="flex justify-between w-72">
                <a href="#">
                  <SvgIcon name="Fb" width={24} height={24}/>
                </a>
                <a href="#">
                  <SvgIcon name="Instagram" width={24} height={24}/>
                </a>
                <a href="#">
                  <SvgIcon name="Vimeo" width={24} height={24}/>
                </a>
                <a href="#">
                  <SvgIcon name="Spotify" width={24} height={24}/>
                </a>
                <a href="#">
                  <SvgIcon name="Twitter" width={24} height={24}/>
                </a>
                <a href="#">
                  <SvgIcon name="Youtube" width={24} height={24}/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
