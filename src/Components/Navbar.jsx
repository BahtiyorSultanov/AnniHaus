import { FormControl, InputLabel, Menu, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState(false);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="navbar mb-[200px] w-[100%]">
      <div className="absolute w-[100%] h-[48px] bg-[#F1EEEB] top-0 left-0 flex justify-between px-[160px] max-sm:px-[20px]">
        <div className="flex items-center gap-[30px]">
          <h1 className="text-[#3B3B3B] font-bold ">8 800 551 01 60</h1>
          <h1 className="text-[#3B3B3B] font-normal max-sm:hidden">
            Заказать обратный звонок
          </h1>
        </div>
        <div className="flex items-center gap-[120px]">
          <div className="flex items-center max-sm:hidden">
            <button>
              <img src="http://127.0.0.1:5500/src/assets/icons/map.svg" />
            </button>
            <h1 className="text-[#3B3B3B]">Салоны</h1>
          </div>
          <div className="flex items-center gap-[10px]">
            <img
              className="max-sm:w-[24px] max-sm:h-[24px]"
              src="http://127.0.0.1:5500/src/assets/icons/wk.svg"
            />
            <img
              className="max-sm:w-[24px] max-sm:h-[24px]"
              src="http://127.0.0.1:5500/src/assets/icons/tg.svg"
            />
            <img
              className="max-sm:w-[24px] max-sm:h-[24px]"
              src="http://127.0.0.1:5500/src/assets/icons/pin.svg"
            />
          </div>
        </div>
      </div>
      <div className="absolute w-[100%] h-[93px] top-[48px] left-0 flex items-center justify-between px-[160px] max-sm:px-[20px]">
        <NavLink to="/">
          <img
            src="http://127.0.0.1:5500/src/assets/images/Logo.svg"
            className={
              search
                ? "max-sm:hidden"
                : `w-[165px] h-[68px] max-sm:w-[90px] max-sm:h-[26px]`
            }
          />
        </NavLink>
        <ul
          className={
            search
              ? `hidden`
              : `flex text-[20px] items-center gap-[40px] max-sm:hidden`
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
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className=""
        >
          <div>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                <h1 className="relative z-90">Каталог</h1>
              </InputLabel>
              <Select
                className="absolute"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem className="bg-white" onClick={toggleDrawer}>
                  <NavLink>Стулья</NavLink>
                </MenuItem>
                <MenuItem className="bg-white" onClick={toggleDrawer}>
                  <NavLink>Барные стулья</NavLink>
                </MenuItem>
                <MenuItem className="bg-white" onClick={toggleDrawer}>
                  <NavLink>Кресла</NavLink>
                </MenuItem>
                <MenuItem className="bg-white" onClick={toggleDrawer}>
                  <NavLink>Диваны</NavLink>
                </MenuItem>
                <MenuItem className="bg-white" onClick={toggleDrawer}>
                  <NavLink>Столы</NavLink>
                </MenuItem>
                <MenuItem className="bg-white" onClick={toggleDrawer}>
                  <NavLink>Офисная мебель</NavLink>
                </MenuItem>
                <MenuItem className="bg-white" onClick={toggleDrawer}>
                  <NavLink>Пуфы</NavLink>
                </MenuItem>

                <MenuItem className="bg-white" onClick={toggleDrawer}>
                  <NavLink>Аксессуары</NavLink>
                </MenuItem>

                <MenuItem className="bg-white" onClick={toggleDrawer}>
                  <NavLink>В наличии</NavLink>
                </MenuItem>

                <MenuItem className="bg-white" onClick={toggleDrawer}>
                  <NavLink to="/special">Специальные предложения</NavLink>
                </MenuItem>
              </Select>
            </FormControl>
            <MenuItem onClick={toggleDrawer}>
              <NavLink>Покупателям</NavLink>
            </MenuItem>
            <MenuItem onClick={toggleDrawer}>
              <NavLink>Дизайнерам</NavLink>
            </MenuItem>
            <MenuItem onClick={toggleDrawer}>
              <NavLink>О компании</NavLink>
            </MenuItem>
            <MenuItem onClick={toggleDrawer}>
              <NavLink>Контакты</NavLink>
            </MenuItem>
          </div>
        </Drawer>
        <div className="flex  justify-center transition-[0.7s]">
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
              search
                ? " w-[812px] pl-[50px] border-[2px] max-sm:w-[415px]"
                : "w-[0px] border-[0px]"
            } text-[20px] transition-[0.9s] h-[48px] max-sm:h-[40px] rounded-[45px] relative z-[0]`}
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
        <div
          className={
            search
              ? "max-sm:hidden flex items-center gap-[30px]"
              : "flex items-center gap-[30px]"
          }
        >
          <button
            onClick={() => {
              setSearch(!search);
            }}
            className="w-[20px]"
          >
            <img src="http://127.0.0.1:5500/src/assets/icons/search.svg" />
          </button>
          <button className="">
            <img src="http://127.0.0.1:5500/src/assets/icons/shopping-cart.svg" />
          </button>
          <button
            onClick={toggleDrawer}
            className={search ? "hidden" : "max-sm:w-[20px]"}
          >
            <img src="http://127.0.0.1:5500/src/assets/icons/menu.svg" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
