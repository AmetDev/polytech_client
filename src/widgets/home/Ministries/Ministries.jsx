"use client";

import style from "./Ministries.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Navigation.scss";

import ArrowLeft from "@public/assets/icons/arrow_left.svg";
import ArrowRight from "@public/assets/icons/arrow_right.svg";

import krymGerbImage from "@public/assets/images/home/gerb_krym.png";
import rightsImage from "@public/assets/images/home/pravo.png";
import educationImage from "@public/assets/images/home/mineducation.png";
import rknImage from "@public/assets/images/home/rkn.png";
import krippoImage from "@public/assets/images/home/krippo.png";

import eduImg from "@public/assets/images/home/edu.jpg";
import firoImg from "@public/assets/images/home/firo.jpg";
import kcrpoImg from "@public/assets/images/home/kcrpo.png";
import windowEduImg from "@public/assets/images/home/window-edu.png";
import uriteImg from "@public/assets/images/home/urite.jpg";
import eduMariImg from "@public/assets/images/home/edu.mari.jpg";

import { useRef } from "react";
import Link from "next/link";
import useMediaQuery from "@app/hooks/useMediaQuery";
// import useDevice from "@app/hooks/useDevice";

const handleSlideHover = (e) => {
  const element = e.currentTarget;
  const popup = element.querySelector("." + style.popupCard);

  popup.classList.add(style.popupCardActive);
};

const handleSlideMouseOut = (e) => {
  const element = e.currentTarget;
  const popup = element.querySelector("." + style.popupCard);

  if (!popup.classList.contains(style.popupCard)) return;

  popup.classList.remove(style.popupCardActive);
};

const data = [

  {

    url: 'http://pravo.gov.ru',

    text: 'Официальный Интернет портал правовой информации',

    sourceImage: rightsImage,

  },

  {

    url: 'https://monm.rk.gov.ru',

    text: 'Министерство образования науки и молодежи респ. Крым',

    sourceImage: educationImage,

  },

  {

    url: 'https://rkn.gov.ru',

    text: 'Роскомнадзор',

    sourceImage: rknImage,

  },

  {

    url: 'https://www.krippo.ru',

    text: 'Крымский республиканский институт постдипломного педагогического образования',

    sourceImage: krippoImage,

  },
  {

    url: 'http://www.kcrpo.ru',

    text: 'Крымский центр развития профессионального образования',

    sourceImage: kcrpoImg,

  },



  {

    url: 'http://edu.ru',

    text: 'Российское образование',

    sourceImage: eduImg,

  },



  {

    url: 'https://firo.ranepa.ru',

    text: 'Федеральный институт развития образования',

    sourceImage: firoImg,

  },



  {

    url: 'http://edu.mari.ru',

    text: 'федеральный центр информационно-образовательных ресурсов',

    sourceImage: eduMariImg,

  },



  {

    url: 'http://urait.ru',

    text: 'Юрайт',

    sourceImage: uriteImg,

  },

]

const slides = () => {
  return data.map(({ url, text, sourceImage }, index) => (
    <SwiperSlide
      key={index}
      onMouseEnter={handleSlideHover}
      onMouseLeave={handleSlideMouseOut}
      className={style.slide}
    >
      <img
        className={style.popupImage}
        src={sourceImage.src}
        alt="Логотип партнёра"
        placeholder='blur'
      />

      <Link target="_blank" href={url}>
        <div className={style.popupCard}>
          <div className={style.popupText}>{text}</div>
        </div>
      </Link>
    </SwiperSlide>
  ));
};

function Ministries() {
  const sliderNavigationLeft = useRef(null);
  const sliderNavigationRight = useRef(null);

  const isMobile = useMediaQuery('(max-width: 550px)')
  const isSmallDevice = useMediaQuery('(max-width: 768px)')

  const slidesPerView = (isMobile && 1) || (isSmallDevice && 2) || 4;

  return (
    <>
      <div className={style.delimiter}></div>

      <section className={style.ministries}>
        <ArrowLeft className={style.sliderLeft} ref={sliderNavigationLeft} />

        <Swiper
          className={style.slider}
          navigation={{
            prevEl: "." + style.sliderLeft,
            nextEl: "." + style.sliderRight,
          }}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={slidesPerView}
        >
          {slides()}
        </Swiper>

        <ArrowRight className={style.sliderRight} ref={sliderNavigationRight} />
      </section>
    </>
  );
}

export default Ministries;
