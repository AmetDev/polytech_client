import style from "./Speciality.module.scss";

const SpecialityDisciplines = ({ speciality }) => {
  return (
    <section className={style.disciplines}>
      <h2>Важные учебные дисциплины:</h2>

      <ul>
        {speciality.academicDisciplines.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default SpecialityDisciplines;
