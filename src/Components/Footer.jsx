import React from "react";

function Footer() {
  return (
    <div className="flex flex-col items-center gap-[30px] absolute left-0 w-[100%] bg-[#FAFAFA] mt-[170px]">
      <div className="flex items-start gap-[150px] mt-[100px]">
        <ul className="text-[16px] text-[#3B3B3B] text-left flex flex-col gap-[10px]">
          <li className="text-[20px] font-bold">Каталог</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
        </ul>
        <ul className="text-[16px] text-[#3B3B3B] text-left flex flex-col gap-[10px]">
          <li className="text-[20px] font-bold">Каталог</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
        </ul>
        <ul className="text-[16px] text-[#3B3B3B] text-left flex flex-col gap-[10px]">
          <li className="text-[20px] font-bold">Каталог</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
        </ul>
        <ul className="text-[16px] text-[#3B3B3B] text-left flex flex-col gap-[10px]">
          <li className="text-[20px] font-bold">Каталог</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
          <li>В наличии</li>
        </ul>
        <ul className="text-[16px] text-[#3B3B3B] text-left flex flex-col gap-[10px]">
          <li className="text-[20px] font-bold">Контакты</li>
          <li className="text-[40px]"> 8 800 551 01 60</li>
          <li className="w-[223px] text-[16px]">
            Сюда время работы, в которое можно звонить в магазин
          </li>
          <li>info@annihaus.ru</li>
          <li>Шоурумы</li>
          <li>
            <div className="flex items-center gap-[10px]">
              <img src="http://127.0.0.1:5500/src/assets/icons/wk.svg" />
              <img src="http://127.0.0.1:5500/src/assets/icons/tg.svg" />
              <img src="http://127.0.0.1:5500/src/assets/icons/pin.svg" />
            </div>
          </li>
        </ul>
      </div>
      <hr className="h-[3px] w-[100%]"/>
      <div
        className="flex w-full justify-between px-[250px] text-[16px] text-[#3B3B3B]"
      >
        <h1>© Anni Haus, 2000-2022</h1>
        <h1>design by omr.design</h1>
      </div>
    </div>
  );
}

export default Footer;
