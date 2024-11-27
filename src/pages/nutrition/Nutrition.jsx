"use client";

import { useInput } from "@app/hooks/useInput";
import axios from "axios";

import style from "./style.module.scss";
import Link from "next/link";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Nutrition = ({ files }) => {
  const submitForm = async (e) => {
    e.preventDefault();
    if (!fullname || !email || !theme || !message) {
      alert("Пожалуйста, заполните все поля");
      return;
    }
    try {
      axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/mailer/send-email/`, {
        fullname,
        email,
        theme,
        message,
      });
      alert("Письмо успешно отправлено!");
      resetFullname();
      resetEmailBind();
      resetThemeBind();
      resetMessageBind();
    } catch (error) {
      alert("Произошла ошибка", error);
    }
    // Clear input values
  };

  const {
    value: fullname,
    bind: fullnameBind,
    reset: resetFullname,
  } = useInput();
  const { value: email, bind: emailBind, reset: resetEmailBind } = useInput();
  const { value: theme, bind: themeBind, reset: resetThemeBind } = useInput();
  const {
    value: message,
    bind: messageBind,
    reset: resetMessageBind,
  } = useInput();

  return (
    <main className={style.nutrition}>
      <h1> Организация питания в образовательной организации</h1>

      <p>
        Горячее питание в ГБПОУ РК «Симферопольский политехнический колледж» не
        предоставляется. Техникум выплачивает денежную компенсацию взамен
        бесплатного горячего питания студентам, обучающимся по очной форме
        обучения в ГБПОУ РК «Симферопольский политехнический колледж» за счет
        бюджетных ассигнований бюджета Республики Крым.
      </p>

      <p>
        Специальные условия питания обучающихся с ограниченными возможностями
        здоровья и инвалидностью:
      </p>

      <p>
        Буфеты, обеспечивающие студентов полноценным здоровым питанием, работают
        с понедельника по пятницу, и размещены в учебных корпусах колледжа:
      </p>

      <ul>
        <li>
          Буфет по адресу: ул. Гаспринского, 3 (уч. корпус № 1), 20 посадочных
          мест , график работы: с 08:00 до 15:00;
        </li>

        <li>
          Буфет по адресу: ул. Камская, 14 (уч. корпус № 2), 36 посадочных мест,
          график работы: с 08:00 до 15:00;
        </li>
      </ul>

      <p>
        Средний чек составляет 163 рубля. Сменяемость блюд меню ежедневная.
        Студентам предоставляются горячие обеды со свободным выбором блюд.
      </p>

      <p>
        Обучающиеся из числа инвалидов и лиц с ограниченными возможностями
        здоровья обеспечиваются денежной компенсацией в замен горячего питания
        за дни учебных занятий. Организация питания соответствует
        нормативно-правовым актам, регулирующим порядок оказания данной
        государственной услуги, СанПиН 2.4.5.2409-08
        Санитарно-эпидемиологические требования к организации питания
        обучающихся в общеобразовательных учреждениях, учреждениях начального и
        среднего профессионального образования.
      </p>

      <p>
        Доступ к объектам питания соответствует нормативным документам в части
        обеспечения условий доступности для инвалидов объектов и предоставляемых
        услуг в сфере образования, а также оказания им при этом необходимой
        помощи
      </p>

      <div className={style.nutrition__links}>
        <ol className={`${style.enrollee__links} files-block`}>
          {files
            ? files.map(({ file, name }) => (
                <li key={name}>
                  <Link
                    href={`${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/${file}`}
                    target="_blank"
                    rel="norefferer"
                  >
                    {name}
                  </Link>
                </li>
              ))
            : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item_, index) => (
                <article className={style.enrollee__links__loading} key={index}>
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton className={style.enrollee__links__loading} />
                  </SkeletonTheme>
                </article>
              ))}
        </ol>
      </div>

      <form className={style.nutrition__form}>
        <input {...fullnameBind} type="text" placeholder="Ваше ФИО" />
        <input {...emailBind} type="email" placeholder="Ваш E-Mail" />
        <input {...themeBind} type="text" placeholder="Тема вопроса" />
        <textarea {...messageBind} placeholder="Ваше сообщение..." />
        <button onClick={(e) => submitForm(e)} className={style.submit}>
          Отправить
        </button>
      </form>
    </main>
  );
};

export default Nutrition;
