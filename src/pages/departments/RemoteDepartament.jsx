import React from "react";
import mainImg from "@public/assets/images/departaments/RomoteDepartament.jpg";
import style from "./style.module.scss";
import Link from "next/link";

const RemoteDepartament = () => {
  const tursunDesceplines = [
    {
      code: "15.02.06",
      name: "Монтаж и техническая эксплуатация холодильно-компрессорных  машин и установок   (по отраслям);",
    },

    {
      code: "15.02.17",
      name: "Монтаж,  техническое обслуживание  и ремонт промышленного оборудования  (по отраслям);",
    },

    {
      code: "19.02.03",
      name: "Технология хлеба, кондитерских и макаронных изделий;",
    },

    {
      code: "19.02.05",
      name: "Технология бродильных производств и виноделия;",
    },

    {
      code: "19.02.08",
      name: "Технология мяса и мясных продуктов;",
    },

    {
      code: "38.02.01",
      name: "Экономика и бухгалтерский учет (по отраслям);",
    },

    {
      code: "43.02.14",
      name: "Гостиничное дело",
    },
  ];

  return (
    <main className={style.departament}>
      <h1>Заочная форма обучения</h1>
      <p>
        Срок обучения на заочной форме: 3 года 2 месяца (после 11 класса), 4
        года 2 месяца (после 9 класса)
      </p>

      <img src={mainImg.src} alt="RemoteDepartament" />

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
    </main>
  );
};

export default RemoteDepartament;
