"use client";

import React from "react";
import style from "./Enrollee.module.scss";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Specialityes = React.memo(function Specialityes({ specialityes }) {
  specialityes = specialityes || [];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVarian = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className={style.specialityes} id="specialityes" ref={ref}>
      <h1 className={style.specialityes__title}>Специальности</h1>
      {inView && (
        <motion.ul variants={container} initial="hidden" animate="visible">
          {specialityes?.length > 0
            ? specialityes.map((item) => {
                const src = `${process.env.NEXT_PUBLIC_SERVER_URL}${item.firstImage}`;

                return (
                  <motion.li key={item._id} variants={itemVarian}>
                    <Link href={`/speciality/${item._id}`}>
                      <img
                        loader={() => src}
                        src={src}
                        alt={`${item.cvalification}`}
                        width={488}
                        height={448}
                      />

                      <div className={style.specialityes__main__info}>
                        <h2>{item.specialityCode}</h2>
                        <p>{item.specialityTitle}</p>
                        <p>
                          {item.cvalification &&
                            `Базовый уровень, квалификация – ${item.cvalification}`}
                        </p>
                      </div>
                    </Link>
                  </motion.li>
                );
              })
            : [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item_, index) => (
                <article className={style.specialityes__loading} key={index}>
                  <SkeletonTheme baseColor="#202020" highlightColor="#444">
                    <Skeleton className={style.specialityes__loading} />
                  </SkeletonTheme>
                </article>
              ))}
        </motion.ul>
      )}
    </section>
  );
});

export default Specialityes;
