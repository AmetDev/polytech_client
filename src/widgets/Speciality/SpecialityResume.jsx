import style from "./Speciality.module.scss";

const SpecialityResume = ({ speciality }) => {
  return (
    <section className={style.speciality__resume}>
      <h2>Пример вашего будущего резюме</h2>

      <div className={style.speciality__resume__wrapper}>
        <div className={style.speciality__resume__main}>
          <img
            src="/assets/images/speciality/resume_avatar.jpg"
            alt="resume avatar"
            width={492}
            height={492}
          />

          <div className={style.speciality__resume__main__text}>
            <h3>{speciality.speciality}</h3>
            <h4>Александр Орлов</h4>

            <ul>
              <li>
                <img
                  src="/assets/images/speciality/letter.svg"
                  alt="letter"
                  width={48}
                  height={52}
                />{" "}
                <p>sphanin12345@pochta.ru</p>
              </li>

              <li>
                <img
                  src="/assets/images/speciality/phone.svg"
                  alt="letter"
                  width={39}
                  height={40}
                />{" "}
                <p>+7 000 000 00 00</p>
              </li>
            </ul>
          </div>
        </div>

        <div className={style.speciality__resume__skills}>
          <h4>Навыки</h4>

          <ul>
            {speciality.skills.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className={style.speciality__resume__experience}>
          <h4>Опыт</h4>

          <ul>
            {speciality.experience.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SpecialityResume;
