import style from "./Enrollee.module.scss";
import matCapitalImage from "../../../public/assets/images/enrollee/mar-capital.jpg";

const EnrolleeMarCapital = () => {
  return (
    <img
      className={style.mat__capital__image}
      src={matCapitalImage.src}
      alt="Материнский капитал"
    />
  );
};

export default EnrolleeMarCapital;
