/** @jsxImportSource @emotion/react */
import tw from 'twin.macro'
import React from "react";
import {Header, Collapse, Tabs} from 'components';
import Accordion, {AccordionItem, AccordionPanel} from 'components/Accordion';
/** Local imports **/
import {Sidebar} from '@/components';

const Headers = () => {
  return (
    <div>
      <Header />

      <span tw="mb-12 block">Accordion</span>

      <Accordion>
        <AccordionItem toggle="section-1">Accordion Group Item #1</AccordionItem>
        <AccordionPanel id="section-1">
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
            ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo.
          </p>
        </AccordionPanel>
      </Accordion>

      <span tw="mb-12 block">Tabs</span>

      <div>
        <Tabs variant={1}>
          <Tabs.Tab title="Tab 1">
            React has been designed from the start for gradual adoption, and you can
            use as little or as much React as you need. Whether you want to get a
          </Tabs.Tab>
          <Tabs.Tab title="Tab 2">
            The React Framework for Production Next.js gives you the best developer
            experience with all the features you need for production: hybrid static &
          </Tabs.Tab>
          <Tabs.Tab title="Tab 3">
            The Intuitive Vue Framework Build your next Vue.js application with
            confidence using NuxtJS. An open source framework making web development
          </Tabs.Tab>
        </Tabs>
      </div>
    </div>
  )
}

Headers.getLayout = function getLayout(page) {
  return (
    <Sidebar>
      {page}
    </Sidebar>
  )
}

export default Headers;