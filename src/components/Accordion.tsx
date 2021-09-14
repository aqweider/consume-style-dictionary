/** @jsxImportSource @emotion/react */
import tw, {css, theme, TwStyle} from 'twin.macro';
import React from 'react';

interface AccordionProps {
  children: React.ReactNode;
  defaultPanel?: string;
}

interface AccordionContextProps {
  selected?: string;
  toggleItem?: (id: string) => void;
}

interface AccordionItemProps extends React.HTMLAttributes<HTMLElement> {
  toggle?: string;
  children: React.ReactNode;
  color?: 'gray' | 'indigo' | 'green';
  hasTabs?: boolean;
}

interface AccordionPanelProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  id: string;
}

const style = {
  item: {
    gray: tw`block focus:outline-none bg-gray-800 text-white border-b my-2 p-3`,
    indigo: tw`block focus:outline-none bg-indigo-800 text-white border-b my-2 p-3`,
    green: tw`block focus:outline-none bg-green-800 text-white border-b my-2 p-3`,
  },
  panel: tw`overflow-hidden md:overflow-x-hidden transition-height ease duration-300 text-gray-600 text-grey-base mb-16`
};

/* Logic */
const Context = React.createContext<AccordionContextProps>({});

const Accordion = ({ children, defaultPanel }: AccordionProps) => {
  const [selected, setSelected] = React.useState(defaultPanel || '');

  const toggleItem = React.useCallback((id) => {
    setSelected((prevState) => (prevState !== id ? id : ''));
  }, []);

  return (
    <Context.Provider value={{ selected, toggleItem }}>
      {children}
    </Context.Provider>
  );
}

//custom hook to consume all accordion values
const useAccordion = () => React.useContext(Context);

const AccordionItem = ({ color, toggle, hasTabs, children }: AccordionItemProps) => {
  const { selected, toggleItem } = useAccordion();
  const isOpen = selected === toggle;

  return (
    <div
      role="button"
      onClick={() => toggleItem(toggle)}
      css={[
        tw`flex items-center justify-between bg-white pb-5 font-faro text-hs-2 mt-0.5`,
        !(hasTabs && isOpen) ? tw`border-b border-grey-base mb-8` : undefined
      ]}
    >
      {children}
      <span className="float-right">
        {isOpen ? <MinusIcon /> : <PlusIcon />}
      </span>
    </div>
  );
}

const AccordionPanel = ({ children, id }: AccordionPanelProps) => {
  const { selected } = useAccordion();
  const ref = React.useRef<HTMLDivElement>();
  const inlineStyle =
    selected === id ? { height: ref.current?.scrollHeight } : { height: 0 };

  return (
    <div ref={ref} id={id} css={style.panel} style={inlineStyle}>
      {children}
    </div>
  );
}

const MinusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 12H4" stroke="#0F0F0F" strokeWidth="1.2"/>
  </svg>
);

const PlusIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M11.4 11.4V4H12.6V11.4H20V12.6H12.6V20H11.4V12.6H4V11.4H11.4Z" fill="#0F0F0F"/>
  </svg>

);

export {
  Accordion as default,
  AccordionItem,
  AccordionPanel
}
