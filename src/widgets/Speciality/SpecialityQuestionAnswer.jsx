import style from "./Speciality.module.scss";

const SpecialityQuestionAnswer = ({ speciality }) => {
  return (
    <section className={style.question__answer}>
      <div className={style.question__answer__block}>
        <h3>Что я буду уметь?</h3>

        <ul>
          {speciality.whatCanIdo.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      <div className={style.question__answer__block}>
        <ul>
          <li>{speciality.whereCanIwork}</li>
        </ul>

        <h3>Где я смогу работать?</h3>
      </div>

      <div className={style.question__answer__block}>
        <h3>Где я смогу продолжить обучение, если захочу?</h3>

        <ul>
          <li>{speciality.futureEducation}</li>
        </ul>
      </div>

      <div className={style.question__answer__block}>
        <ul>
          <li>
            Поступив в Симферопольский политехнический колледж, студенты будут
            иметь возможность обучаться на специальности «Информационные системы
            и программирование», которая входит в перечень наиболее
            востребованных и перспективных профессий и специальностей ТОП-50 в
            России.
          </li>
        </ul>

        <h3>
          Почему мне стоит поступать именно в ГБПОУ РК «Симферопольский
          политехнический колледж»?
        </h3>
      </div>

      <div className={style.question__answer__block}>
        <h3>Как подать документы?</h3>

        <ul>
          <li>
            Документы подаются в приемную комиссию по адресу Гаспринского, 3,
            каб 102. Начало приема документов с 1 июня текущего года.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default SpecialityQuestionAnswer;
