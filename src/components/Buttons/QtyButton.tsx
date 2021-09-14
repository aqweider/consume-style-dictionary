/** @jsxImportSource @emotion/react */
import _ from 'lodash';
import tw, {css, theme, TwStyle} from 'twin.macro';
import React, {useEffect, useState, useRef} from "react";
import {useTimeout, useTimeoutCallback} from '@react-hook/timeout'
import useEvent from '@react-hook/event'
/** Local imports */
import Button from './Button';
import Fab from './Fab';
import {useHover} from '@/hooks';

const LARGE_WIDTH = '36px';
const SMALL_WIDTH = '28px';

type QtyButtonProps = {
  value: number;
  /**
   * Defines if the button is disabled
   */
  disabled?: boolean;
  /**
   * Defines if the platform is mobile
   */
  event?: 'hover' | 'click'
  /**
   * The size of the button
   */
  size?: 'small' | 'large';
  onAdd?: (value: number) => void;
  onRemove?: (value: number) => void;
};

const sizeVariants: TwStyle = {
  container: {
    large: tw`w-34 h-10`, //136px
    small: tw`w-[28px] h-[28px] bg-white p-0`, //106px
    small_inactive: tw`w-[56px] bg-white h-8 z-0`, //106px
    small_active: tw`w-[106px] bg-white h-8`, //106px
  },
  input: {
    large: tw`w-[60px] right-[38px] rounded-none`, //136px - 72px
    small: tw`w-[28px] right-[26px] z-[-10]`, //106px - 56px
    small_inactive: tw`w-[28px] right-[26px] rounded-full z-[-10]`, //106px - 56px
    small_active: tw`right-[32px] w-[42px]`, //106px - 56px
  },
  addFab: {
    small_active: tw`float-right`,
    small_inactive: tw`float-right bg-brand`,
  },
  removeFab: {
    large: tw`absolute visible left-0.5 top-0.5 bottom-0`,
    small: tw`absolute visible right-[76px] top-0.5 bottom-0`,
  }
}

const inputVariants: TwStyle = {
  large: tw`w-50`,
  small: tw`w-27`,
}

const styles = {
  size: {
    container: (size, btnStatus) => {
      const key = size === 'large'? size : btnStatus;

      return sizeVariants.container[key]
    },
    input: (size, btnStatus) => {
      const key = size === 'large'? size : btnStatus;

      return sizeVariants.input[key]
    }
  },
  addFab: (btnStatus) => {
    return sizeVariants.addFab[btnStatus] ?
      sizeVariants.addFab[btnStatus] :
      tw`float-right`
  },
  removeFab: (size) => {
    return sizeVariants.removeFab[size]
  },
  decreaseBtn: (hidden) => {
    return tw``
  }
}

const QtyButton: React.FC<QtyButtonProps> = (props: QtyButtonProps) => {
  const {
    value,
    size,
    onAdd,
    onRemove,
    event
  } = props;
  const target = useRef(null)
  const initialBtnStatus = `${size}${value > 0 ? '_inactive': ''}`;
  const [btnStatus, setBtnStatus] = useState(initialBtnStatus)

  useEvent(target, 'click', (event) => handleEvent(event))
  useEvent(target, 'mouseenter', (event) => handleEvent(event))
  useEvent(target, 'mouseleave', (event) => handleEvent(event))

  useEffect(() => {
    if(size === 'small') {
      const timer = setTimeout(() => {
        if(btnStatus === 'small_active') {
          setBtnStatus(`small_inactive`)
        }
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [btnStatus, value]);

  const handleEvent = (event) => {
    if(size === 'large') return;

    const eventType =  event.type;

    if(eventType === 'click') {
      setBtnStatus(`${size}_active`)
    }
  }
  const formatValue = (value) => (
    value &&
    parseInt(value) > 0 ?
      `${value}` : ""
  )

  const handleAdd = () => {
    onAdd(value + 1)
  }

  const handleRemove = () => {
    if(size === 'small' && value === 1) {
      setBtnStatus('small')
    }
    onRemove(value - 1)
  }

  return (
    <div
      ref={target}
      css={[
        tw`
            bg-white overflow-hidden inline-block rounded-full relative
            shadow-light p-0.5 rounded-full transition-width duration-1000
          `,
        styles.size.container(size, btnStatus)
      ]}
    >
      <Fab layout="quantity"
           size={size}
           icon={{name: 'Minus', size: '16px'}}
           onClick={handleRemove}
           containerStyle={styles.removeFab(size)}
      />
      <input readOnly
             type="text"
             name="quantity"
             value={formatValue(value)}
             css={[
               tw`
                 absolute right-[32px] bg-white w-[42px] top-0 bottom-0 text-center rounded-full 
                 focus:outline-none transition-width duration-500 cursor-pointer
               `,
               styles.size.input(size,btnStatus)
             ]}
      />
      <Fab layout="quantity"
           size={size}
           icon={{name: 'Plus', size: '16px'}}
           onClick={handleAdd}
           containerStyle={styles.addFab(btnStatus)}
      />
    </div>
  );
};

QtyButton.defaultProps = {
  size: 'large',
  event: 'click',
  value: 0
};

export default QtyButton;
