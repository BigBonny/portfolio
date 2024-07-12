"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderButton = ({ containerStyles, btnStyles, iconsStyles }) => {
  const swiper = useSwiper();

  if (!swiper) return null; // Ensure swiper instance is available

  return (
    <div className={containerStyles}>
      <button className={`${btnStyles} rounded-[10px]`} onClick={() => swiper.slidePrev()}>
        <PiCaretLeftBold className={iconsStyles} />
      </button>
      <button className={`${btnStyles} rounded-[10px]`} onClick={() => swiper.slideNext()}>
        <PiCaretRightBold className={iconsStyles} />
      </button>
    </div>
  );
};

export default WorkSliderButton;
