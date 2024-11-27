import style from "./Enrollee.module.scss";

const EnrolleeDocuments = () => {
  return (
    <section className={style.enrollee__documents}>
      <h3>Комплект документов для предоставления в приёмную комиссию</h3>

      <ul>
        {[
          {
            item: "документ об образовании (аттестат, приложение, если сдается копия — оригинал предоставляется);",
          },
          { item: "медицинская справка ф-086;" },
          { item: "копия карты прививок;" },
          { item: "паспорт — поступающего;" },
          { item: "СНИЛС — поступающего;" },
          { item: "4 цветных фото (3*4, без уголка);" },
          { item: "паспорт — законного представителя;" },
          { item: "для юношей — приписное свидетельство/военный билет" },
        ].map(({ item }, index) => (
          <li key={index}>
            <p>{item}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EnrolleeDocuments
