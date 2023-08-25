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
  const [video, setVideo] = useState([]);
  const [interyers, setInteryers] = useState([]);
  const [blog, setBlog] = useState([]);
  const [projects, setProjects] = useState([]);
  // Create array with 500 slides
  const { data, isLoading } = useQuery(
    "cards",
    async () => {
      const { data } = await axios.get("http://localhost:3000/products");
      setCards(data);
    },
    setTimeout(async () => {
      const { data } = await axios.get("http://localhost:3000/video");
      setVideo(data);
    }, 1000),
    // setTimeout(async () => {
    //   const { data } = await axios.get(" http://localhost:3000/interiyers");
    //   setInteryers(data);
    // }, 1000),
    // setTimeout(async () => {
    //   const { data } = await axios.get("  http://localhost:3000/projects");
    //   setProjects(data);
    // }, 1000),
    // setTimeout(async () => {
    //   const { data } = await axios.get(" http://localhost:3000/blog");
    //   setBlog(data);
    // }, 1000)
  );
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
    <div className="flex flex-col items-center gap-[60px] w-[100%]">
      <div className="">
        <Swiper
          pagination={{
            type: "fraction",
          }}
          spaceBetween={102}
          navigation={true}
          modules={[Navigation]}
          className="mySwiperr max-sm:w-[343px] max-sm:h-[202px]"
        >
          <SwiperSlide>
            <img className=" max-sm:w-[343px] max-sm:h-[202px]" src={window.innerWidth <= 426?  "http://127.0.0.1:5500/src/assets/images/image22.svg":"http://127.0.0.1:5500/src/assets/images/image1.svg"} />
            <div className="absolute bottom-[40px] left-[50px] text-left text-white">
              <h1 className="text-[48px]">Скидка на столовые группы</h1>
              <h1 className="text-[16px]">Дополнительный текст-описание</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img className=" max-sm:w-[343px] max-sm:h-[202px]" src={window.innerWidth <= 426?  "http://127.0.0.1:5500/src/assets/images/image22.svg":"http://127.0.0.1:5500/src/assets/images/image1.svg"} />
            <div className="absolute bottom-[40px] left-[50px] text-left text-white">
              <h1 className="text-[48px]">Скидка на столовые группы</h1>
              <h1 className="text-[16px]">Дополнительный текст-описание</h1>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="flex flex-wrap items-start w-[1160px] gap-[30px] max-sm:w-[350px] max-sm:gap-[10px]">
        {category.map((item, id) => {
          return (
            <div
              key={id}
              onClick={() => {
                app.collection("newCards").add({ obj }), console.log(cards);
              }}
              className="relative w-[360px] h-[181px] max-sm:w-[168px] max-sm:h-[97px] pb-[20px] pr-[30px] flex justify-end items-end "
            >
              <img className="absolute left-0 top-0 " src={item.img} />
              <h1 className="absolute font-sans text-[25px] text-[#3B3B3B]">
                {item.text}
              </h1>
            </div>
          );
        })}
        <button className="w-[755px] max-sm:w-[343px]">
          <img src="http://127.0.0.1:5500/src/assets/images/img.svg" />
        </button>
      </div>
      <div className="max-sm:w-[100%] flex flex-col items-start gap-[30px]">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-[40px]">Новинки</h1>
          <h1 className="text-[16px] text-[#3B3B3B] flex gap-[20px] hover:underline">
            Все новинки{" "}
            <img src="http://127.0.0.1:5500/src/assets/icons/Longarrow-right.svg" />
          </h1>
        </div>
        <div className="flex w-[380px] flex-wrap items-center gap-[40px]">
          {cards &&
            cards.map((item, id) => {
              return (
                item.kind == "New" && (
                  <div
                    key={id}
                    className="w-[260px] h-[385px] max-sm:w-[164px] max-sm:h-[267px] relative flex flex-col items-start text-left gap-[20px]"
                  >
                    <img
                      src={item.img}
                      className="w-[260px] h-[260px] rounded-[8px] border-[2px]"
                    />
                    <h1 className="text-[20px]">{item.title}</h1>
                    <h1 className="text-[16px]">{item.price}</h1>
                    <div className="flex items-center gap-[10px]">
                      {item.colors &&
                        item.colors.map((item, key) => {
                          return (
                            <div
                              key={key}
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
      <div className="max-sm:w-[100%] flex flex-col items-start gap-[30px] mt-[100px]">
        <div className="flex flex-col w-[100%] items-start pl-[40px] gap-[30px]">
          <h1 className="text-[40px] max-sm:text-[20px]">Производство</h1>
          <div className="flex flex-col items-start gap-[20px] justify-end ">
            <h1 className="text-[20px] w-[660px] text-left max-sm:text-[14px] max-sm:w-[343px]">
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
          slidesPerView={2}
          centeredSlides={false}
          spaceBetween={50}
          className="w-[425px]"
          pagination={{
            type: "none",
          }}
          navigation={true}
          virtual
        >
          {video &&
            video.map((item) => {
              return (
                <SwiperSlide className="bg-transparent max-sm:w-[167px] max-sm:h-[113px]">
                  <img
                    className="max-sm:w-[167px] rounded-[14px]"
                    src={window.innerWidth <= 426 ? item.src:item.src1}
                  />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="max-sm:w-[100%] flex gap-[8px] relative mt-[100px]">
        <h1 className="absolute z-30 top-[-80px] text-[40px] max-sm:text-[20px]">
          Ваши интерьеры
        </h1>
        <div className="flex flex-col items-center gap-[8px] w-[100%]">
          <div className="w-[460px] h-[235px] max-sm:w-[343px] max-sm:h-[118px] bg-[#4A5656] relative">
            <h1 className="w-[365px] text-white text-[20px] absolute bottom-7 left-4 text-left max-sm:text-[14px] max-sm:w-[300px]">
              Присылайте фотографии мебели в вашем интерьере, и мы разместим их
              на сайте.
            </h1>
          </div>
          <img
            src="http://127.0.0.1:5500/src/assets/images/image18.svg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center gap-[8px] max-sm:hidden w-[100%]">
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
      <div className="max-sm:w-[100%] flex flex-col items-center gap-[30px] mt-[50px]">
        <div className="flex flex-col items-start pl-[40px] gap-[30px]">
          <h1 className="text-[40px] w-[444px] text-left max-sm:text-[20px] max-sm:w-[320px]">
            Дизайнерские проекты с мебелью Anni Haus
          </h1>
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
          {projects &&
            projects.map((item) => {
              return (
                <SwiperSlide className="bg-transparent w-[284px] h-[614px]">
                  <img
                    className="w-full h-full rounded-[14px]"
                    src={item.img}
                  />
                  <h1 className="absolute bottom-3 left-5 text-white text-[16px] w-[262px] text-left">
                    {item.title}
                  </h1>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="max-sm:w-[100%] flex flex-col items-start gap-[30px] mt-[50px]">
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
          {blog &&
            blog.map((item) => {
              return (
                <SwiperSlide className="bg-transparent flex flex-col items-start">
                  <img
                    className="w-full h-full rounded-[14px] mb-[20px]"
                    src={item.img}
                  />
                  <h1 className="w-[252px] text-left">{item.title}</h1>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
      <div className="max-sm:w-[100%] flex flex-col items-start text-left w-[1460px] gap-[50px] mt-[50px]">
        <h1 className="text-[40px] text-[#3B3B3B] max-sm:text-[20px]">
          Дизайнерская мебель Anni Haus
        </h1>
        <h1 className="text-[20px] text-[#3B3B3B] w-[820px] max-sm:text-[16px] max-sm:w-[343px]">
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
