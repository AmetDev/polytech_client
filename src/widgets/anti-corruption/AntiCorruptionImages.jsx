"use client";
import first from "@public/assets/images/vzyatka/1.png";
import second from "@public/assets/images/vzyatka/2.png";
import third from "@public/assets/images/vzyatka/3.png";
import fourth from "@public/assets/images/vzyatka/4.png";
import fifth from "@public/assets/images/vzyatka/5.png";
import sixth from "@public/assets/images/vzyatka/6.png";
import lastImage from "@public/assets/images/vzyatka/7.png";
import styles from "@widgets/anti-corruption/Anticorruption.module.scss";

const AntiCorruptionImages = () => {
  const imagesArray = [first, second, third, fourth, fifth, sixth];
  return (
    <section className={styles.rootImages}>
      <div className={styles.imagesGrid}>
        {imagesArray.map((el, index) => {
          return <img key={index} src={el.src} />;
        })}
      </div>
      <img
        className={styles.lastImage}
        src={lastImage.src}
        width={1400}
        height={1900}
      />
    </section>
  );
};

export default AntiCorruptionImages;
