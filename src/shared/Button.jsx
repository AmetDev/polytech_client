import style from "./Style.module.scss";

const Button = ({
  width,
  textContent,
  marginTop,
  marginBottom,
  padding,
  fontSize,
}) => {
  return (
    <button
      className={style.button__blue}
      style={{
        width: width,
        marginTop: marginTop,
        marginBottom: marginBottom,
        padding: padding,
        fontSize: fontSize,
      }}
    >
      {textContent}
    </button>
  );
};

export default Button;
