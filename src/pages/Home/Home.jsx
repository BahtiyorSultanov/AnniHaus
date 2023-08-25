import React, { useEffect, useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { useQuery } from "react-query";
import axios from "axios";
function Home() {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(500);
  const prependNumber = useRef(1);
  let category = [
    {
      img: "http://127.0.0.1:5500/src/assets/images/image2.svg",
      text: "Стулья",
    },
    {
      img: "http://127.0.0.1:5500/src/assets/images/image3.svg",
      text: "Барные стулья",
    },
    {
      img: "http://127.0.0.1:5500/src/assets/images/image4.svg",
      text: "Кресла",
    },
    {
      img: "http://127.0.0.1:5500/src/assets/images/image5.svg",
      text: "Диваны",
    },
    {
      img: "http://127.0.0.1:5500/src/assets/images/image6.svg",
      text: "Столы",
    },
    {
      img: "http://127.0.0.1:5500/src/assets/images/image7.svg",
      text: "Офисная мебель",
    },
    {
      img: "http://127.0.0.1:5500/src/assets/images/image8.svg",
      text: "Вешалки",
    },
    {
      img: "http://127.0.0.1:5500/src/assets/images/image9.svg",
      text: "Пуфы",
    },
    {
      img: "http://127.0.0.1:5500/src/assets/images/image10.svg",
      text: "Аксессуары",
    },
    {
      img: "http://127.0.0.1:5500/src/assets/images/image11.svg",
      text: "В наличии",
    },
  ];
  const [cards, setCards] = useState([]);
  // Create array with 500 slides
  const { data, isLoading } = useQuery("cards", async () => {
    const { data } = await axios.get(" http://localhost:3000/cards");
    setCards(data);
  });
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
    <div className="flex flex-col items-center gap-[60px]">
      <div className="">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          spaceBetween={102}
          navigation={true}
          modules={[Navigation]}
          className="mySwiperr"
        >
          <SwiperSlide>
            <img src="http://127.0.0.1:5500/src/assets/images/image1.svg" />
            <div className="absolute bottom-[40px] left-[50px] text-left text-white">
              <h1 className="text-[48px]">
                Скидка на столовые группы
              </h1>
              <h1 className="text-[16px]">Дополнительный текст-описание</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img src="http://127.0.0.1:5500/src/assets/images/image1.svg" />
            <div className="absolute bottom-[40px] left-[50px] text-left text-white">
              <h1 className="text-[48px]">
                Скидка на столовые группы
              </h1>
              <h1 className="text-[16px]">Дополнительный текст-описание</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-wrap w-[1160px] gap-[30px]">
        {category.map((item, id) => {
          return (
            <div
              onClick={() => {
                app.collection("newCards").add({ obj }), console.log(cards);
              }}
              className="relative w-[360px] h-[181px] pb-[20px] pr-[30px] flex justify-end items-end "
            >
              <img className="absolute left-0 top-0 " src={item.img} />
              <h1 className="absolute font-sans text-[25px] text-[#3B3B3B]">
                {item.text}
              </h1>
            </div>
          );
        })}
        <button className="w-[755px]">
          <img src="http://127.0.0.1:5500/src/assets/images/img.svg" />
        </button>
      </div>
      <div className="flex flex-col items-start gap-[30px]">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-[40px]">Новинки</h1>
          <h1 className="text-[16px] text-[#3B3B3B] flex gap-[20px] hover:underline">
            Все новинки{" "}
            <img src="http://127.0.0.1:5500/src/assets/icons/Longarrow-right.svg" />
          </h1>
        </div>
        <div className="flex items-center gap-[40px]">
          {cards &&
            cards.map((item) => {
              return (
                item.kind == "New" && (
                  <div className="w-[260px] h-[385px] relative flex flex-col items-start text-left gap-[20px]">
                    <img
                      src={item.img}
                      className="w-[260px] h-[260px] rounded-[8px] border-[2px]"
                    />
                    <h1 className="text-[20px]">{item.title}</h1>
                    <h1 className="text-[16px]">{item.price}</h1>
                    <div className="flex items-center gap-[10px]">
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
                )
              );
            })}
        </div>
      </div>
      <div className="flex flex-col items-start gap-[30px] mt-[100px]">
        <div className="flex flex-col items-start pl-[40px] gap-[30px]">
          <h1 className="text-[40px]">Производство</h1>
          <div className="flex items-center justify-end ">
            <h1 className="text-[20px] w-[660px] text-left">
              ANNI HAUS входит в состав холдинга Premier Group – группу торговых
              и производственных компаний с уникальным конструкторским бюро.
              Мебельная фабрика полного цикла находится в Санкт-Петербурге.
            </h1>
            <h1>видео о производстве</h1>
          </div>
        </div>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={41}
          pagination={{
            type: "none",
          }}
          navigation={true}
          virtual
        >
          {cards &&
            cards.map((item) => {
              return (
                item.kind == "video" && (
                  <SwiperSlide className="bg-transparent">
                    <img
                      className="w-full h-full rounded-[14px]"
                      src={item.img}
                    />
                  </SwiperSlide>
                )
              );
            })}
        </Swiper>
      </div>
      <div className="flex flex-col items-start gap-[30px] mt-[50px]">
        <div className="flex flex-col items-start pl-[40px] gap-[30px]">
          <h1 className="text-[40px]">Производство</h1>
          <div className="flex items-center justify-end ">
            <h1 className="text-[20px] w-[660px] text-left">
              ANNI HAUS входит в состав холдинга Premier Group – группу торговых
              и производственных компаний с уникальным конструкторским бюро.
              Мебельная фабрика полного цикла находится в Санкт-Петербурге.
            </h1>
            <h1>видео о производстве</h1>
          </div>
        </div>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={41}
          pagination={{
            type: "none",
          }}
          navigation={true}
          virtual
        >
          {cards &&
            cards.map((item) => {
              return (
                item.kind == "projects" && (
                  <SwiperSlide className="bg-transparent w-[284px] h-[614px]">
                    <img
                      className="w-full h-full rounded-[14px]"
                      src={item.img}
                    />
                    <h1 className="absolute bottom-3 left-5 text-white text-[16px] w-[262px] text-left">
                      {item.title}
                    </h1>
                  </SwiperSlide>
                )
              );
            })}
        </Swiper>
      </div>
      <div className="flex flex-col items-start gap-[30px] mt-[50px]">
        <div className="flex w-full justify-start items-center px-[40px]">
          <h1 className="text-[40px]">Блог</h1>
        </div>
        <Swiper
          modules={[Virtual, Navigation, Pagination]}
          onSwiper={setSwiperRef}
          slidesPerView={3}
          centeredSlides={false}
          spaceBetween={41}
          pagination={{
            type: "none",
          }}
          navigation={true}
          virtual
        >
          {cards &&
            cards.map((item) => {
              return (
                item.kind == "blog" && (
                  <SwiperSlide className="bg-transparent flex flex-col items-start">
                    <img
                      className="w-full h-full rounded-[14px] mb-[20px]"
                      src={item.img}
                    />
                    <h1 className="w-[252px] text-left">{item.title}</h1>
                  </SwiperSlide>
                )
              );
            })}
        </Swiper>
      </div>
      <div className="flex gap-[8px] relative mt-[100px]">
        <h1 className="absolute z-30 top-[-80px] text-[40px] ">
          Ваши интерьеры
        </h1>
        <div className="flex flex-col items-center gap-[8px]">
          <div className="w-[460px] h-[235px] bg-[#4A5656] relative">
            <h1 className="w-[365px] text-white text-[20px] absolute bottom-7 left-4 text-left">
              Присылайте фотографии мебели в вашем интерьере, и мы разместим их
              на сайте.
            </h1>
          </div>
          <img
            src="http://127.0.0.1:5500/src/assets/images/image18.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center gap-[8px]">
          <div className="flex items-center gap-[8px]">
            <img
              src="http://127.0.0.1:5500/src/assets/images/image16.svg"
              alt=""
            />
            <img
              src="http://127.0.0.1:5500/src/assets/images/image17.svg"
              alt=""
            />
          </div>
          <img
            src="http://127.0.0.1:5500/src/assets/images/image19.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col items-start text-left w-[1460px] gap-[50px] mt-[50px]">
        <h1 className="text-[40px] text-[#3B3B3B]">
          Дизайнерская мебель Anni Haus
        </h1>
        <h1 className="text-[20px] text-[#3B3B3B] w-[820px]">
          Вы ищете крупный мебельный салон, где можно приобрести стильную,
          удобную и надежную мебель разных стилей по наиболее выгодным ценам?
          <br />
          Мебельный салон Anni Haus предлагает широкий выбор столов и стульев
          для дома по самым конкурентоспособным ценам. Приглашаем Вас в шоу-румы
          расположенные разных районах Москвы и Санкт-Петербурга.
        </h1>
        <h1 className="text-[16px] text-[#3B3B3B] flex gap-[20px] hover:underline">
          Все новинки{" "}
          <img src="http://127.0.0.1:5500/src/assets/icons/Longarrow-right.svg" />
        </h1>
        <img
          className="w-full"
          src="http://127.0.0.1:5500/src/assets/images/image15.svg"
        />
      </div>
    </div>
  );
}

export default Home;
