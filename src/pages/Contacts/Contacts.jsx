import style from "@/widgets/Contacts/style.module.scss";
import Contacts1 from "@/widgets/Contacts/Contacts-1";
import Contacts2 from "@/widgets/Contacts/Contacts-2";
import Contacts3 from "@/widgets/Contacts/Contacts-3";

const Contacts = () => {
  return (
    <section className={style.contacts}>
      <h1 className={style.contacts__title}>Контакты</h1>

      <div className={style.contacts__wrapper}>
        <Contacts1 />
        <Contacts2 />
        <Contacts3 />
      </div>
    </section>
  );
};

export default Contacts;
