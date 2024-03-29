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
      const { data } = await axios.get(`http://localhost:3000/offers/${id}`);
      setCard(data);
    },
    setTimeout(
      async () => {
      const { data } = await axios.get(`http://localhost:3000/products`);
      setCards(data);
    }, 100)
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
      <div className="flex flex-col gap-[30px] items-start w-[100%]">
        <div className="flex flex-col gap-[30px] items-start  w-[100%]">
          <img src={card.prevue} className="rounded-[8px] max-sm:w-[343px] max-sm:h-[131px]" />
          <span className="px-[32px] rounded-[48px] text-[#242424] text-[12px] py-[8px] border-[1px] border-[#EFCF2C]">
            Специальное предложение
          </span>
          <div className="text-left flex flex-col gap-[30px] w-[100%]">
            <h1 className="text-[40px] max-sm:text-[20px] text-[#3B3B3B]">{card.title}</h1>
            <h2 className="text-[16px] max-sm:text-[14px] text-[#3B3B3B] w-[660px] max-sm:w-[283px]">
              {card.text1}
            </h2>
            <h2 className="text-[16px] max-sm:text-[14px] text-[#3B3B3B] w-[660px] max-sm:w-[283px]">
              {card.text2}
            </h2>
          </div>
        </div>
        <div className="flex flex-col items-center text-left gap-[30px] w-[100%]">
          <h1 className="text-[40px] max-sm:text-[20px] text-[#3B3B3B]">В акции участвуют следующие товары</h1>
          <Swiper
            className="ml-[-140px] max-sm:ml-[-20px] max-sm:w-[303px]"
            modules={[Virtual, Navigation, Pagination]}
            onSwiper={setSwiperRef}
            slidesPerView={window.innerWidth <= 426&& 1}
            centeredSlides={false}
            spaceBetween={window.innerWidth <= 426? 100:10}
            pagination={{
              type: "none",
            }}
            navigation={true}
            virtual
          >
            {cards &&
              cards.map((item, key) => {
                return (
                  item.kind == "sale"&& item.product == 'chair' && (
                    <SwiperSlide className="bg-transparent flex flex-col items-center ">
                      <div className="max-sm:w-[164px] max-sm:h-[267px]" key={key}>
                        <div className="w-[260px] h-[260px] max-sm:w-[164px] max-sm:h-[164px] rounded-[8px] border-[2px]">
                          <img
                            className="w-full h-full rounded-[14px] mb-[20px]"
                            src={item.img}
                          />
                        </div>
                        <h1 className="relative w-[252px] text-left mt-[10px] max-sm:text-[14px] max-sm:w-[164px]">
                          {item.title}
                        </h1>
                        <h1 className="relative w-[252px] text-left max-sm:text-[20px]">
                          {item.price}
                        </h1>
                        <div className="flex items-center justify-start gap-[20px] mt-[10px]">
                          {item.colors &&
                            item.colors.map((item) => {
                              return (
                                <div
                                  className={`w-[16px] h-[16px] rounded-[50%]`}
                                  style={{ background: item }}
                                ></div>
                              );
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
