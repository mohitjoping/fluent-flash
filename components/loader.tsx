import React from 'react';

type Props = {};

export default function Loader({}: Props) {
  return (
    <div className="relative">
      <div className="w-[92px] h-[20px] rounded-[3px] ml-[14px] translate-x-[14px] bg-gradient-to-b from-[#1f3a8a] to-[#1f3a8a] animate-slide05 relative">
        <i className="absolute right-full w-[6px] h-[4px] top-[4px] bg-[#323232]">
          <div className="absolute right-full top-[-2px] w-[4px] h-[14px] rounded-full bg-[#323232]"></div>
        </i>
        <div className="absolute w-[2px] h-[8px] top-[6px] left-full bg-[#323232]"></div>
        <div className="absolute w-[6px] h-[14px] top-[3px] left-[94px] rounded-md bg-[#323232]"></div>
      </div>
      <div className="absolute left-[24px] top-[-26px] w-[40px] h-[46px] rounded-[5px] bg-gray-200 translate-y-[46px] animate-paper05">
        <div className="absolute left-[6px] right-[6px] top-[7px] h-[4px] rounded-sm scale-y-75 bg-[#D3D4EC] box-shadow-[0_12px_0_#D3D4EC,_0_24px_0_#D3D4EC,_0_36px_0_#D3D4EC]"></div>
      </div>
      <div className="relative z-10 w-[120px] h-[56px] mt-[-10px]">
        <div className="absolute inset-0 rounded-[7px] bg-gradient-to-br from-[#1f3a8a] to-[#1f3a8a] transform perspective-[10px] rotate-x-[2deg] origin-[50%_100%]"></div>
        <div className="absolute left-[2px] top-[25px] w-[11px] h-[4px] rounded-[2px] shadow-[15px_0_0_#fff,_30px_0_0_#fff,_45px_0_0_#fff,_60px_0_0_#fff,_75px_0_0_#fff,_90px_0_0_#fff,_22px_10px_0_#fff,_37px_10px_0_#fff,_52px_10px_0_#fff,_60px_10px_0_#fff,_68px_10px_0_#fff,_83px_10px_0_#fff] animate-keyboard05"></div>
      </div>
    </div>
  );
}
