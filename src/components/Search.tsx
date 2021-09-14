/** @jsxImportSource @emotion/react */
import tw, {css, theme, TwStyle} from 'twin.macro';
import _ from 'lodash';
import React, {useState, useEffect, useCallback} from "react";
/** Local imports */
import Icon, {IconType} from './Icon';

type SearchProps = {
  searchText: string;
  placeholder?: string;
  onChange?: (value: string) => void;
  onEnter?: (value: string) => void;
  onSearchClick?: () => void;
  onBlur?: () => void;
};

const ENTER_KEY = 13;

const Search: React.FC<SearchProps> = (props: SearchProps) => {
  const {
    searchText,
    placeholder,
    onChange,
    onEnter,
    onSearchClick,
    onBlur
  } = props;

  const [value, setValue] = useState(searchText);
  const [isFocus, setIsFocus] = useState(false);

  useEffect(() => {
    setValue(searchText);
  }, [searchText, setValue]);

  const onChangeHandler = useCallback((event) => {
    const targetVal = event.target.value;

    setValue(targetVal);
    if(_.isFunction(onChange)) {
      onChange(targetVal);
    }
  }, [onChange, setValue]);

  const onEnterHandler = useCallback((event) => {
    const isEnterPressed = event.which === ENTER_KEY
      || event.keyCode === ENTER_KEY;
    if (isEnterPressed && _.isFunction(onEnter)) {
      onEnter(event.target.value);
    }
  }, [onEnter]);

  const onSearchClickHandler = useCallback(() => {
    if (_.isFunction(onSearchClick)) {
      //onSearchClick(value);
    }
  }, [onSearchClick, value]);

  const onBlurHandler = useCallback((event) => {
    if (_.isFunction(onBlur)) {
      //onBlur(event.target.value, event);
    }
    setIsFocus(false)
  }, [onBlur]);

  const onFocusHandler = () => {
    setIsFocus(true)
  }

  return (
    <div>
      <div tw="relative">
        <input tw="text-bs-3 bg-white rounded-full outline-none py-1.5 px-2.5 w-97"
               type="search"
               onChange={onChangeHandler}
               onKeyPress={onEnterHandler}
               onBlur={onBlurHandler}
               onFocus={onFocusHandler}
               value={value}
               placeholder={placeholder}
        />
        <button tw="bg-transparent outline-none focus:outline-none absolute right-3 inset-y-0"
                onClick={onSearchClickHandler}
        >
          <Icon name="Search" size={24} />
        </button>
      </div>
      <div css={[
        tw`absolute`,
        !isFocus && tw`hidden`
      ]}>
        <span>
          Search focus area
        </span>
      </div>
    </div>
  )
}

export default Search