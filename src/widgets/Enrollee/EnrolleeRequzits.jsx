import Requzits from "@shared/Requzits";
import style from "./Enrollee.module.scss";

const EnrolleeRequzits = () => {
  return (
    <section className={style.requzits}>
      <h1>
        РЕКВИЗИТЫ НА ОПЛАТУ ОБУЧЕНИЯ И ЗА ПРОЖИВАНИЕ В ОБЩЕЖИТИИ И ОБУЧЕНИЯ
      </h1>

      <Requzits />
    </section>
  );
};

export default EnrolleeRequzits;
