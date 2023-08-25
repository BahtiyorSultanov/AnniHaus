import { Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="navbar mb-[200px]">
      <div className="absolute w-[100%] h-[48px] bg-[#F1EEEB] top-0 left-0 flex justify-between px-[160px]">
        <div className="flex items-center gap-[30px]">
          <h1 className="text-[#3B3B3B] font-bold">8 800 551 01 60</h1>
          <h1 className="text-[#3B3B3B] font-normal">
            Заказать обратный звонок
          </h1>
        </div>
        <div className="flex items-center gap-[120px]">
          <div className="flex items-center">
            <button>
              <img src="http://127.0.0.1:5500/src/assets/icons/map.svg" />
            </button>
            <h1 className="text-[#3B3B3B]">Салоны</h1>
          </div>
          <div className="flex items-center gap-[10px]">
            <img src="http://127.0.0.1:5500/src/assets/icons/wk.svg" />
            <img src="http://127.0.0.1:5500/src/assets/icons/tg.svg" />
            <img src="http://127.0.0.1:5500/src/assets/icons/pin.svg" />
          </div>
        </div>
      </div>
      <div className="absolute w-[100%] h-[93px] top-[48px] left-0 flex items-center justify-between px-[160px]">
        <NavLink to="/">
          <img
            src="http://127.0.0.1:5500/src/assets/images/Logo.svg"
            className="w-[165px] h-[68px]"
          />
        </NavLink>
        <ul
          className={
            search ? `hidden` : `flex text-[20px] items-center gap-[40px]`
          }
        >
          <li>
            <h1
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={handleClick}
            >
              Каталог
            </h1>
          </li>
          <Menu
            id="simple-menu"
            className="text-[18px] rounded-[0px]"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <NavLink>
              <MenuItem onClick={handleClose}>Стулья</MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem onClick={handleClose}>Барные стулья</MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem onClick={handleClose}>Кресла</MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem onClick={handleClose}>Диваны</MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem onClick={handleClose}>Столы</MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem onClick={handleClose}>Офисная мебель</MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem onClick={handleClose}>Пуфы</MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem onClick={handleClose}>Аксессуары</MenuItem>
            </NavLink>
            <NavLink>
              <MenuItem onClick={handleClose}>В наличии</MenuItem>
            </NavLink>
            <NavLink to="/special">
              <MenuItem onClick={handleClose}>Специальные предложения</MenuItem>
            </NavLink>
          </Menu>
          <li>
            <h1>Покупателям</h1>
          </li>
          <li>
            <h1>Дизайнерам</h1>
          </li>
          <li>
            <h1>О компании</h1>
          </li>
          <li>
            <h1>Контакты</h1>
          </li>
        </ul>
        <div className="flex justify-start transition-[0.7s]">
          <img
            onClick={() => {}}
            className={
              search
                ? "hover:scale-[1.2] mr-[-40px] relative z-[1] cursor-pointer"
                : "hidden"
            }
            src="http://127.0.0.1:5500/src/assets/icons/search.svg"
            alt=""
          />
          <input
            type="text"
            className={`${
              search ? " w-[812px] pl-[50px] border-[2px]" : "w-[0px] border-[0px]"
            } text-[20px] transition-[0.9s] h-[48px] rounded-[45px] relative z-[0]`}
          />
          <img
            onClick={() => {
              setSearch(false);
            }}
            className={
              search
                ? "hover:scale-[1.2] ml-[-40px] relative z-1 cursor-pointer"
                : "hidden"
            }
            src="http://127.0.0.1:5500/src/assets/icons/cross.svg"
            alt=""
          />
        </div>
        <div className="flex items-center gap-[30px]">
          <button
            onClick={() => {
              setSearch(!search);
            }}
            className=""
          >
            <img src="http://127.0.0.1:5500/src/assets/icons/search.svg" />
          </button>
          <button className="">
            <img src="http://127.0.0.1:5500/src/assets/icons/shopping-cart.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
