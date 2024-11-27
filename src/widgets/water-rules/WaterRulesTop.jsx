import style from "./WaterRules.module.scss";
import waterRulesImage from "@public/assets/images/water-rules/waterRules.jpg";

const WaterRuresTop = () => {
  return (
    <section className={style.water__rules__top}>
      <h1>Памятки, рекомендации, разъяснения прокуратуры</h1>

      <div className={style.water__rules__head}>
        <img src={waterRulesImage.src} alt="water rules" />
        <p>
          Водоемы являются опасными в любое время года. Летом они опасны при
          купании и пользовании плавательными средствами. Опасность чаще всего
          представляют сильное течение (в том числе подводное), глубокие омуты и
          подводные холодные ключи.
        </p>
      </div>
    </section>
  );
};

export default WaterRuresTop
