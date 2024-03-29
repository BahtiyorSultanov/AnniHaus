import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";

function Special() {
  const [cards, setCards] = useState([]);
  const { data, isLoading } = useQuery("cards", async () => {
    const { data } = await axios.get("http://localhost:3000/offers");
    setCards(data);
  });
  return (
    <div className="flex flex-col items-start gap-[30px] w-[100%]">
        <h1 className="text-[#3B3B3B] text-[40px]">Специальные предложения</h1>
      <div className="flex justify-center flex-wrap gap-[20px] w-[100%]">
        {cards &&
          cards.map((item) => {
            return (
              item.kind == "offer" && (
                <NavLink to={`/specialItem/${item.id}`}>
                  <div className="w-[284px] h-[414px} rounded-[8px] relative hover:scale-[1.06] transition-[0.7s] max-sm:w-[343px] max-sm:h-[204px]">
                    <span className="absolute top-[20px] right-0 w-[72px] h-[24px] rounded-l-[32px] bg-[#EFCF2C] flex justify-center items-center hover:w-full hover:h-[100%] hover:top-0 hover:rounded-[0px] transition-[0.8s] hover:text-[50px] text-[#3B3B3B] text-[14px]">
                      Скидка%
                    </span>
                    <img src={window.innerWidth <= 426 ? item.img1: item.img} className="max-sm:w-[343px] max-sm:h-[204px]"/>
                    <h1 className="absolute bottom-[20px] left-[10px] text-white text-[16px]">
                      {item.title}
                    </h1>
                  </div>
                </NavLink>
              )
            );
          })}
      </div>
    </div>
  );
}

export default Special;
