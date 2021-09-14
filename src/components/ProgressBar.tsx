import React, {HTMLProps} from "react";
import tw, {css, TwStyle} from 'twin.macro';
/** Local imports */
export type ProgressBar = {
  value: string;
};

const ProgressBar: React.FC<ProgressBar> = props => {
  const {value, ...others} = props;

  return (
    <div tw="relative">
      <div tw="overflow-hidden h-px flex rounded bg-grey-light">
        <div style={{ width: value }} tw="h-[3px] absolute top-[-0.5px] font-atlas-r text-bs-6 bg-lowlight" />
      </div>
    </div>
  )
};

export default ProgressBar;
