import style from "./style.module.scss";

const Contacts1 = () => {
  return (
    <ul className={style.contacts__list}>
      {[
        {
          item: "Почтовый адрес",
          value:
            "ГБПОУ РК «Симферопольский политехнический колледж», ул. Гаспринского, 3, г. Симферополь, Республика Крым, Российская Федерация, 295053",
        },

        {
          item: "Режим работы",
          value:
            "Пн-Пт с 8-00 до 16-30. Обеденный перерыв: с 12-00 до 12-30. Выходные Сб-Вс.",
        },

        {
          item: "Телефон",
          value: "+7 (3652) 27-62-20 — приёмная колледжа",
        },

        {
          item: "Телефон",
          value: "+7 (3652) 27-31-88— бухгалтерия колледжа",
        },
         {
          item: "Факс",
          value: "+7 (3652) 51-73-63",
        },

        {
          item: "E-mail",
          value: "081@crimeaedu.ru — электронная почта колледжа",
        },

        {
          item: "Сайт",
          value: "http://simfpolyteh.ru",
        },
      ].map(({ item, value }, index) => (
        <li key={index}>
          <h4>{item}:</h4>
          <p>{value}</p>
        </li>
      ))}
    </ul>
  );
};

export default Contacts1;
