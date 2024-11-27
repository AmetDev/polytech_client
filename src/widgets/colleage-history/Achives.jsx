import React from "react";
import style from "./ColleageHistory.module.scss";
import achive1 from "@public/assets/images/colleage-history/achives/1.jpg";
import achive2 from "@public/assets/images/colleage-history/achives/2.jpg";
import achive3 from "@public/assets/images/colleage-history/achives/3.jpg";
import achive4 from "@public/assets/images/colleage-history/achives/4.jpg";
import achive5 from "@public/assets/images/colleage-history/achives/5.jpg";
import achive6 from "@public/assets/images/colleage-history/achives/6.jpg";
import achive7 from "@public/assets/images/colleage-history/achives/7.jpg";
import achive8 from "@public/assets/images/colleage-history/achives/8.jpg";
import achive9 from "@public/assets/images/colleage-history/achives/9.jpg";
import achive10 from "@public/assets/images/colleage-history/achives/10.jpg";
import achive11 from "@public/assets/images/colleage-history/achives/11.jpg";
import achive12 from "@public/assets/images/colleage-history/achives/12.jpg";
import achive13 from "@public/assets/images/colleage-history/achives/13.jpg";
import achive14 from "@public/assets/images/colleage-history/achives/14.jpg";
import achive15 from "@public/assets/images/colleage-history/achives/15.jpg";
import achive16 from "@public/assets/images/colleage-history/achives/16.jpg";
import achive17 from "@public/assets/images/colleage-history/achives/17.jpg";
import achive18 from "@public/assets/images/colleage-history/achives/18.jpg";

const Achives = () => {
  const achives = [
    { image: achive1.src, name: "Achive 1" },
    { image: achive2.src, name: "Achive 2" },
    { image: achive3.src, name: "Achive 3" },
    { image: achive4.src, name: "Achive 4" },
    { image: achive5.src, name: "Achive 5" },
    { image: achive6.src, name: "Achive 6" },
    { image: achive7.src, name: "Achive 7" },
    { image: achive8.src, name: "Achive 8" },
    { image: achive9.src, name: "Achive 9" },
    { image: achive10.src, name: "Achive 10" },
    { image: achive11.src, name: "Achive 11" },
    { image: achive12.src, name: "Achive 12" },
    { image: achive13.src, name: "Achive 13" },
    { image: achive14.src, name: "Achive 14" },
    { image: achive15.src, name: "Achive 15" },
    { image: achive16.src, name: "Achive 16" },
    { image: achive17.src, name: "Achive 17" },
    { image: achive18.src, name: "Achive 18" },
  ];

  return (
    <section className={style.achives}>
      <ul className={style.achives__list}>
        {achives.map(({ image, name }, index) => (
          <li key={index}>
            <img src={image} alt={name} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achives;
