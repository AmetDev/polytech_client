import React from "react";
import mainImg from "@public/assets/images/departaments/TechnicalDepartament.png";
import style from "./style.module.scss";
import Link from "next/link";

const TechnicalDepartament = () => {
  const tursunDesceplines = [
    {
      code: "09.02.06",
      name: "Сетевое и системное администрирование",
    },

    {
      code: "09.02.07",
      name: "Информационные системы и программирование",
    },

    {
      code: "15.02.17",
      name: "Монтаж, техническое обслуживание и ремонт промышленного оборудования (по отраслям)",
    },

    {
      code: "15.02.06",
      name: "Техническое обслуживание и ремонт систем вентиляции и кондиционирования",
    },
  ];

  const tursunTeachers = [
    {
      name: "Акимова Екатерина Леонидовна",
    },

    {
      name: "Булычев Владимир Анатольевич",
    },

    {
      name: "Бурова Оксана Николаевна",
    },

    {
      name: "Золотарёв Игорь Иванович",
    },

    {
      name: "Клементьев Юрий Борисович",
    },

    {
      name: "Крутченко Екатерина Владимировна",
    },

    {
      name: "Куршутов Джемал Сеярович",
    },

    {
      name: "Мясникова Анна Александровна",
    },

    {
      name: "Пискунова Виктория Владимировна",
    },

    {
      name: "Плотникова Галина Михайловна",
    },

    {
      name: "Сабодаш Олег Сергеевич",
    },

    {
      name: "Самойлов Валерий Николаевич",
    },

    {
      name: "Смирнова Елена Анатольевна",
    },

    {
      name: "Спичка Михаил Александрович",
    },

    {
      name: "Степанюк Александр Юрьевич",
    },

    {
      name: "Тимофеев Алексей Геннадьевич",
    },

    {
      name: "Томников Андрей Игоревич",
    },

    {
      name: "Тумашева Елена Валерьевна",
    },

    {
      name: "Шутак Мария Стефановна",
    },
  ];

  return (
    <main className={style.departament}>
      <h1>Технико-информационное отделение</h1>

      <img src={mainImg.src} alt="TechnicalDepartament" />

      <h2 className={style.departament__desceplines__title}>
        Дисциплины, которые сюда входят
      </h2>

      <ul className={style.departament__desceplines}>
        {tursunDesceplines.map(({ code, name }) => (
          <li key={code}>
            <Link
              className={style.departament__link}
              href="/enrollee/#specialityes"
            >
              <h2>{code}</h2>
              <h3>{name}</h3>
            </Link>
          </li>
        ))}
      </ul>

      <h4>Заведующая отделением: Омельченко Елена Алексеевна</h4>

      <h4>Преподователи спецдисциплин:</h4>

      <ul className={style.departament__teachers}>
        {tursunTeachers.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
};

export default TechnicalDepartament;
