import { getSchedule } from "@app/store/schedule/schedule.slice";
import style from "./DaySelector.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useActions } from "@app/hooks/useActions";

const days = {
  monday: "ПН",
  tuesday: "ВТ",
  wednesday: "СР",
  thursday: "ЧТ",
  friday: "ПТ",
};

const DaySelector = () => {
  const scheduleState = useSelector(getSchedule);
  const dayOfWeek = scheduleState.dayOfWeek;
  const dispatch = useDispatch();
  const { setDay } = useActions();

  const handleClickSelector = (day) => {
    dispatch(setDay(day));
  };

  return (
    <div className={style.selector}>
      <ul className={style.daysList}>
        {Object.entries(days).map(([key, value], index) => (
          <li
            key={index}
            onClick={() => handleClickSelector(key)}
            className={`${style.dayOfWeek} ${
              dayOfWeek === key ? style.picked : ""
            }`}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaySelector;
