"use client";

/* itsZeroFourX@gmail.com code side */

import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { motion } from "framer-motion";

import QuizResultImg1 from "@public/assets/images/quiz/quizResult-1.svg";
import QuizResultImg2 from "@public/assets/images/quiz/quizResult-2.svg";
import QuizResultImg3 from "@public/assets/images/quiz/quizResult-3.svg";
import QuizResultImg4 from "@public/assets/images/quiz/quizResult-4.svg";
import QuizResultImg5 from "@public/assets/images/quiz/quizResult-5.svg";
import instructionImg from "@public/assets/images/quiz/instruction.jpg";
import Link from "next/link";

const QuizPage = () => {
  const [currentQuizItem, setCurrentQuizItem] = useState(0);
  const [itemChoosed, setItemChoosed] = useState(null);
  const [itemIdChoosed, setItemIdChoosed] = useState(null);
  const [quizItemsAnimation, setQuizItemsAnimation] = useState("visible");

  const [progressProcent, setProgressProcent] = useState(0);

  const [isResult, setIsResult] = useState(false);
  const [startScreen, setStartScreen] = useState(true);

  const [typeId, setTypeId] = useState(0);
  const [type, setType] = useState("");
  const [objectOfLabor, setObjectOfLabor] = useState("");
  const [example, setExample] = useState("");

  const [humanBiology, setHumanBiology] = useState([]);
  const [humanIndustry, setHumanIndustry] = useState([]);
  const [humanHuman, setHumanHuman] = useState([]);
  const [humanSystem, setHumanSystem] = useState([]);
  const [humanArt, setHumanArt] = useState([]);

  useEffect(() => {
    // Обновление значения прогресса
    const newWidth = `${progressProcent}%`;
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) {
      progressBar.style.width = newWidth;
    }
  }, [progressProcent]);

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.2,
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

  const quizItems = [
    [
      { title: "Ухаживать за животными", id: 1, itemId: 1 },
      {
        title: "Обслуживать машины, приборы (следить, регулировать)",
        id: 2,
        itemId: 2,
      },
    ],
    [
      { title: "Помогать больным", id: 3, itemId: 3 },
      {
        title: "Составлять таблицы, схемы, программы для вычислительных машин",
        id: 4,
        itemId: 4,
      },
    ],
    [
      {
        title:
          "Следить за качеством книжных иллюстраций, плакатов, художественных открыток, грампластинок",
        id: 5,
        itemId: 5,
      },
      { title: "Следить за состоянием и развитием растений", id: 1, itemId: 6 },
    ],
    [
      {
        title:
          "Обрабатывать материалы (дерево, ткань, металл, пластмассу и др.)",
        id: 2,
        itemId: 7,
      },
      {
        title: "Доводить товары до потребителя, рекламировать, продавать",
        id: 3,
        itemId: 8,
      },
    ],
    [
      { title: "Обсуждать научно-популярные книги, статьи", id: 4, itemId: 9 },
      {
        title: "Обсуждать художественные книги (или пьесы, концерты)",
        id: 5,
        itemId: 10,
      },
    ],
    [
      {
        title: "Выращивать молодняк (животных какой-либо породы)",
        id: 1,
        itemId: 11,
      },
      {
        title:
          "Тренировать товарищей (или младших) в выполнении каких-либо действий (трудовых, учебных, спортивных)",
        id: 3,
        itemId: 12,
      },
    ],
    [
      {
        title: "Копировать рисунки, или настраивать музыкальные инструменты",
        id: 5,
        itemId: 13,
      },
      {
        title: "Управлять подъёмным краном, трактором, тепловозом и т.п",
        id: 2,
        itemId: 14,
      },
    ],
    [
      {
        title:
          "Сообщить, разъяснять людям нужные им сведения (в справочном бюро, на экскурсии и т.д.)",
        id: 3,
        itemId: 15,
      },
      {
        title:
          "Оформлять выставки, витрины (или участвовать в подготовке пьес, концертов)",
        id: 5,
        itemId: 16,
      },
    ],
    [
      {
        title: "Ремонтировать вещи, изделия (одежду, технику), жилище",
        id: 2,
        itemId: 17,
      },
      {
        title: "Искать и исправлять ошибки в текстах, таблицах, рисунках",
        id: 4,
        itemId: 18,
      },
    ],
    [
      { title: "Лечить животных", id: 1, itemId: 19 },
      { title: "Выполнять вычисления, расчёты", id: 4, itemId: 20 },
    ],
    [
      { title: "Выводить новые сорта растений", id: 1, itemId: 21 },
      {
        title:
          "Конструировать, новые виды промышленных изделий (машины, одежду, дома, продукты питания и т.п.)",
        id: 2,
        itemId: 22,
      },
    ],
    [
      {
        title:
          "Разбирать споры, ссоры между людьми, убеждать, разъяснять, наказывать, поощрять",
        id: 3,
        itemId: 23,
      },
      {
        title:
          "Разбираться в чертежах, схемах, таблицах (проверять, уточнять, приводить в порядок)",
        id: 4,
        itemId: 24,
      },
    ],
    [
      {
        title:
          "Наблюдать, изучать работу кружков художественной самодеятельности",
        id: 5,
        itemId: 25,
      },
      { title: "Наблюдать, изучать жизнь микробов", id: 1, itemId: 26 },
    ],
    [
      {
        title: "Обслуживать, налаживать медицинские приборы, аппараты",
        id: 2,
        itemId: 27,
      },
      {
        title:
          "Оказывать людям медицинскую помощь при ранениях, ушибах, ожогах и т.п.",
        id: 3,
        itemId: 28,
      },
    ],
    [
      {
        title:
          "Художественно описывать, изображать события (наблюдаемые и представляемые)",
        id: 4,
        itemId: 29,
      },
      {
        title:
          "Составлять точные описания-отчёты о наблюдаемых явлениях, событиях",
        id: 5,
        itemId: 30,
      },
    ],
    [
      { title: "Делать лабораторные анализы в больнице", id: 1, itemId: 31 },
      {
        title:
          "Принимать, осматривать больных, беседовать с ними, назначать лечение",
        id: 3,
        itemId: 32,
      },
    ],
    [
      {
        title: "Красить или расписывать стены помещений, поверхность изделий",
        id: 5,
        itemId: 33,
      },
      {
        title: "Осуществлять монтаж или сборку машин, приборов",
        id: 2,
        itemId: 34,
      },
    ],
    [
      {
        title:
          "Организовывать культпоходы сверстников или младших в театры, музеи, экскурсии, туристические походы и т.п.",
        id: 3,
        itemId: 35,
      },
      {
        title: "Играть на сцене, принимать участие в концертах",
        id: 5,
        itemId: 36,
      },
    ],
    [
      {
        title:
          "Изготовлять по чертежам детали, изделия (машины, одежду), строить здания",
        id: 2,
        itemId: 37,
      },
      {
        title: "Заниматься черчением, копировать чертежи, карты",
        id: 4,
        itemId: 38,
      },
    ],
    [
      {
        title: "Вести борьбу с болезнями растений, с вредителями леса, сада.",
        id: 1,
        itemId: 39,
      },
      {
        title:
          "Работать на клавишных машинах (пишущей машинке, телетайпе, наборной машине и др.)",
        id: 4,
        itemId: 40,
      },
    ],
  ];

  const handleNextQuizItem = () => {
    if (itemIdChoosed === 1) {
      setHumanBiology((prev) => [...prev, "1"]);
    } else if (itemIdChoosed === 2) {
      setHumanIndustry((prev) => [...prev, "1"]);
    } else if (itemIdChoosed === 3) {
      setHumanHuman((prev) => [...prev, "1"]);
    } else if (itemIdChoosed === 4) {
      setHumanSystem((prev) => [...prev, "1"]);
    } else {
      setHumanArt((prev) => [...prev, "1"]);
    }

    setProgressProcent(
      Math.round(((currentQuizItem + 1) / quizItems.length) * 100)
    );
    setCurrentQuizItem(currentQuizItem + 1);
    setItemChoosed(null);

    setQuizItemsAnimation("hidden");
    setTimeout(() => setQuizItemsAnimation("visible"), 200);
  };

  const handleResult = () => {
    if (itemIdChoosed === 1) {
      setHumanBiology((prev) => [...prev, "1"]);
    } else if (itemIdChoosed === 2) {
      setHumanIndustry((prev) => [...prev, "1"]);
    } else if (itemIdChoosed === 3) {
      setHumanHuman((prev) => [...prev, "1"]);
    } else if (itemIdChoosed === 4) {
      setHumanSystem((prev) => [...prev, "1"]);
    } else {
      setHumanArt((prev) => [...prev, "1"]);
    }

    const maxLengthElement = Math.max(
      humanBiology.length,
      humanIndustry.length,
      humanHuman.length,
      humanSystem.length,
      humanArt.length
    );

    if (maxLengthElement === humanBiology.length) {
      setType("Человек-природа");
      setObjectOfLabor("Различные живые организмы, биологические процессы");
      setExample(
        "Тракторист, рыбовод, зоотехник, агроном, садовник, ветеринар, животновод, геолог, биолог, почвовед и т.д."
      );
      setTypeId(1);
    } else if (maxLengthElement === humanHuman.length) {
      setType("Человек-человек");
      setObjectOfLabor("Люди");
      setExample(
        "Продавец, медсестра, секретарь, бортпроводник, учитель, воспитатель, няня, преподаватель, врач, официант, администратор и т.п."
      );
      setTypeId(3);
    } else if (maxLengthElement === humanIndustry.length) {
      setType("Человек-техника");
      setObjectOfLabor(
        "Технические системы, вещественные объекты, материалы, виды энергии"
      );
      setExample(
        "Водитель, токарь, инженер, слесарь, радиотехник, швея, электрик, механик, монтажник и т.п."
      );
      setTypeId(2);
    } else if (maxLengthElement === humanSystem.length) {
      setType("Человек-знаковые системы");
      setObjectOfLabor(
        "Условные знаки, цифры, формулы, коды, естественные и искусственные языки"
      );
      setExample(
        "Наборщик, кассир, делопроизводитель, бухгалтер, программист, чертежник, корректор, экономист, радист, оператор ПЭВМ, машинистка, наборщик и т.п."
      );
      setTypeId(4);
    } else if (maxLengthElement === humanArt.length) {
      setType("Человек-художественный образ");
      setObjectOfLabor("Произведения литературы, искусства");
      setExample(
        "Наборщик, кассир, делопроизводитель, бухгалтер, программист, чертежник, корректор, экономист, радист, оператор ПЭВМ, машинистка, наборщик и т.п."
      );
      setTypeId(5);
    } else {
      setType("Человек-универсал");
      setObjectOfLabor("Вам подвластны все предметы труда");
      setExample("Любые профессии");
      setTypeId(6);
    }

    setIsResult(true);
  };

  return (
    <main className={style.quiz}>
      {!startScreen ? (
        <React.Fragment>
          {!isResult ? (
            <React.Fragment>
              {progressProcent !== 0 && (
                <section className={style.quiz__progressbar}>
                  <div
                    id="progress-bar"
                    style={{ width: `${progressProcent}%` }}
                  >
                    {progressProcent !== 0 && progressProcent} %
                  </div>
                </section>
              )}

              <section className={style.quiz__wrapper}>
                <h3>Что Вы предпочитаете?</h3>
                
                <motion.ul
                  variants={container}
                  initial={quizItemsAnimation}
                  animate={quizItemsAnimation}
                >
                  {quizItems[currentQuizItem].map(
                    ({ title, id, itemId }, index) => (
                      <motion.li
                        key={index}
                        variants={itemVarian}
                        onClick={() => {
                          setItemIdChoosed(id);
                          setItemChoosed(index);
                        }}
                        style={
                          itemChoosed === index
                            ? { background: "#0066ff" }
                            : { background: "rgba(0, 85, 255, 0.3)" }
                        }
                      >
                        <div className={style.quizImage}>
                          <img
                            layout="fill"
                            src={
                              `${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/quiz/quiz-${itemId}.` +
                              "svg"
                            }
                          />
                        </div>
                        <p>{title}</p>
                      </motion.li>
                    )
                  )}
                </motion.ul>
              </section>

              <button
                onClick={
                  itemChoosed !== null &&
                  currentQuizItem + 1 !== quizItems.length
                    ? handleNextQuizItem
                    : itemChoosed !== null &&
                      currentQuizItem + 1 === quizItems.length
                    ? handleResult
                    : handleResult
                }
                disabled={itemChoosed === null}
                style={itemChoosed === null ? { opacity: 0.5 } : { opacity: 1 }}
              >
                {itemChoosed !== null &&
                currentQuizItem + 1 === quizItems.length
                  ? "Завершить"
                  : "Следующий вопрос"}
              </button>
            </React.Fragment>
          ) : (
            <section className={style.quiz__result}>
              {typeId === 1 ? (
                <QuizResultImg1 />
              ) : typeId === 2 ? (
                <QuizResultImg2 />
              ) : typeId === 3 ? (
                <QuizResultImg3 />
              ) : typeId === 4 ? (
                <QuizResultImg4 />
              ) : typeId === 5 ? (
                <QuizResultImg5 />
              ) : (
                <QuizResultImg3 />
              )}

              <aside className={style.quiz__result__info}>
                <h2>{type}</h2>
                <p>{objectOfLabor}</p>
                <p>Примеры профессий: {example}</p>
              </aside>

              <Link href="/enrollee/#specialityes">
                Вернуться к списку специальностей
              </Link>
            </section>
          )}
        </React.Fragment>
      ) : (
        <section className={style.quiz__start__screen}>
          <h3>Дифференциально-диагностический опросник (ДДО) (Е.А. Климов)</h3>
          <p>
            Инструкция: Предложим, что после соответствующего обучения вы
            сможете выполнять любую работу из предложенных далее. Однако, если
            бы вам пришлось выбирать только из двух возможностей, то какой вид
            деятельности вы бы предпочли? Вам будет предложено 20 пар
            утверждений, раскрывающих в краткой форме различные виды
            деятельности. Внимательно прочитав оба утверждения, выберите то из
            них, которое более привлекательно для вас
          </p>

          <img src={instructionImg.src} alt="Инструкция" />

          <button onClick={() => setStartScreen(false)}>Начать тест</button>
        </section>
      )}
    </main>
  );
};

export default QuizPage;
