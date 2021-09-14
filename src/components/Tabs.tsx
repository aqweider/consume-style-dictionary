/** @jsxImportSource @emotion/react */
import React from "react";
import tw, { css, theme, TwStyle } from "twin.macro";

interface Props {
  children: React.ReactNode;
}

interface TabsProps extends Props {
  variant: number;
}

interface TabProps extends Props {
  selected?: boolean;
  title: string;
}

const style = {
  first: {
    selected: tw`font-atlas-m text-grey-base text-ss-2 -mb-0.5 mr-16 border-b-3 border-lowlight py-4 md:py-1 inline-block`,
    notSelected: tw`font-atlas-m text-grey-base text-ss-2 -mb-0.5 mr-16 py-4 md:py-1 inline-block`
  },
  second: {
    selected: tw`inline-block py-2 px-4 border-gray-300 border-t bg-white border-b-0 border-l border-r text-blue-700`,
    notSelected: tw`inline-block py-2 px-4 text-gray-800 border-b`
  },
  third: {
    selected: tw`text-white py-2 px-4 mx-1 rounded bg-indigo-900 inline-block`,
    notSelected: tw`-mb-2 py-2 px-4 mx-1 bg-white text-black inline-block `
  }
};

const className = (child, current, variant) => {
  switch (variant) {
    case 1:
      return current === child.key
        ? style.first.selected
        : style.first.notSelected;
    case 2:
      return current === child.key
        ? style.second.selected
        : style.second.notSelected;
    case 3:
      return current === child.key
        ? style.third.selected
        : style.third.notSelected;
    default:
      throw Error("Please choose a variant");
  }
};

const Tabs = ({ children, variant }: TabsProps) => {
  const childrenArray: Array<any> = React.Children.toArray(children);

  const [current, setCurrent] = React.useState<React.ReactChild>(
    childrenArray[0].key
  );

  const newChildren = childrenArray.map((child) =>
    React.cloneElement(child as React.ReactElement, {
      selected: child.key === current
    })
  );

  return (
    <div>
      <nav tw="border-b border-grey-base mb-6">
        {childrenArray.map((child) => (
          <div
            role="link"
            tabIndex={0}
            onClick={() => setCurrent(child.key)}
            key={child.key}
            css={[className(child, current, variant), `focus:outline-none`]}
          >
            {child.props.title}
          </div>
        ))}
      </nav>
      <section>{newChildren}</section>
    </div>
  );
};

const Tab = ({ children, selected }: TabProps) => {
  return (
    <div hidden={!selected} tw="mt-4">
      {children}
    </div>
  );
};

Tabs.Tab = Tab;

export default Tabs;
