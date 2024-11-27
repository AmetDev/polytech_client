import { useInView } from "react-intersection-observer";
import style from "./Speciality.module.scss";
import { motion } from "framer-motion";

const SpecialityMainInfo = ({ speciality }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 1,
        staggerChildren: .5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section ref={ref}>
      {inView && (
        <motion.ul
          className={style.speciality__main__info}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {[
            { item: "Уровень образования", value: speciality.educationLevel },
            { item: "Форма обучения", value: speciality.educationForm },
            { item: "Срок обучения", value: speciality.educationPeriod },
            { item: "Квалификация", value: speciality.cvalification },
          ].map(({ item, value }, index) => (
            <motion.li key={index} variants={itemVariants}>
              <h3>{item}</h3>
              <p>{value}</p>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </section>
  );
};

export default SpecialityMainInfo;
