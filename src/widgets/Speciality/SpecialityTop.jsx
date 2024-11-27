import style from "./Speciality.module.scss";

const SpecialityTop = ({ speciality }) => {
  const mainSpecialityImg = `${process.env.NEXT_PUBLIC_SERVER_URL}${speciality.mainImage}`;

  return (
    <section className={style.speciality__top}>
      <div className={style.speciality__top__text}>
        <h1>{speciality.specialityTitle}</h1>
        <h2>{speciality.specialityCode}</h2>
        <p>{speciality.description}</p>
      </div>

      <div className={style.speciality__top__image}>
        <img
          loader={() => mainSpecialityImg}
          src={mainSpecialityImg}
          alt="speciality image"
          width={859}
          height={713}
        />
      </div>
    </section>
  );
};

export default SpecialityTop;
