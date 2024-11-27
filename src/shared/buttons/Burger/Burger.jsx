"use client";

import { useDispatch, useSelector } from "react-redux";
import style from "./Burger.module.scss";
import { useActions } from "@app/hooks/useActions";
import { getHeader } from "@app/store/header/header.slice";

const Burger = () => {
  const dispatch = useDispatch();
  const { isOpened } = useSelector(getHeader);
  const { setIsOpenedMenu } = useActions();

  const onMenuClick = () => {
    dispatch(setIsOpenedMenu(!isOpened));
  };

  return (
    <div
      className={`${style.burger} ${isOpened ? style.active : ""}`}
      onClick={onMenuClick}
    >
      <button className={style.toggle}>
        <span className={style.top}></span>
        <span className={style.middle}></span>
        <span className={style.bottom}></span>
      </button>
    </div>
  );
};

export default Burger;
