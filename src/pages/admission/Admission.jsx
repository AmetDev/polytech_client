import React from "react";
import Link from "next/link";
import style from "./style.module.scss";

const Admission = ({ files }) => {
  if (!files || files.length === 0) {
    return <p>Загрузка...</p>;
  }

  const data = files[0];

  return (
    <main>
      <section>
        <h1>Рейтинговые списки на зачисление</h1>

        <ul className={`${style.admission__order} files-block`}>
          {data &&
            data.map(({ file, name }) => (
              <li key={name}>
                <Link
                  href={`${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/${file}`}
                  target="_blank"
                  rel="norefferer"
                >
                  {name}
                </Link>
              </li>
            ))}
        </ul>
      </section>
    </main>
  );
};

export default Admission;
