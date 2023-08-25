import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function SpecialItem() {
  const { id } = useParams();
  const [card, setCard] = useState([]);
  const [cards, setCards] = useState();
  const { data, isLoading } = useQuery(
    "cards",
    async () => {
      const { data } = await axios.get(`http://localhost:3000/cards/${id}`);
      setCard(data);
    },
    async () => {
      const { data } = await axios.get(`http://localhost:3000/cards`);
      setCards(data);
    }
  );
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  const prepend = () => {
    setSlides([
      `Slide ${prependNumber.current - 2}`,
      `Slide ${prependNumber.current - 1}`,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, "Slide " + ++appendNumber.current]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };
  return (
    <div className="">
      <div className="flex flex-col gap-[30px] items-start">
        <div className="">
          <img src={card.prevue} className="rounded-[8px]" />
          <span className="px-[32px] rounded-[48px] text-[#242424] text-[12px] py-[8px] border-[1px] border-[#EFCF2C]">
            Специальное предложение
          </span>
          <div className="text-left flex flex-col gap-[30px]">
            <h1 className="text-[40px] text-[#3B3B3B]">{card.title}</h1>
            <h2 className="text-[16px] text-[#3B3B3B] w-[660px]">
              {card.text1}
            </h2>
            <h2 className="text-[16px] text-[#3B3B3B] w-[660px]">
              {card.text2}
            </h2>
          </div>
        </div>
        <div className="">
          <Swiper
            className="ml-[-40px]"
            modules={[Virtual, Navigation, Pagination]}
            onSwiper={setSwiperRef}
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={1}
            pagination={{
              type: "none",
            }}
            navigation={true}
            virtual
          >
            {cards &&
              cards.map((item) => {
                return (
                  item.kind == "sale" && (
                    <SwiperSlide className="bg-transparent flex flex-col items-center">
                      <div className="">
                        <div className="w-[260px] h-[260px] rounded-[8px] border-[2px]">
                          <img
                            className="w-full h-full rounded-[14px] mb-[20px]"
                            src={item.img}
                          />
                        </div>
                        <h1 className="absolute w-[252px] text-left">
                          {item.title}
                        </h1>
                        <div className="flex items-center justify-start gap-[20px]">
                          {item.color &&
                            item.color.map((imem) => {
                              return <div className=""></div>;
                            })}
                        </div>
                      </div>
                    </SwiperSlide>
                  )
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default SpecialItem;
