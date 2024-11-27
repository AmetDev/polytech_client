import React from "react";
import "./scss/index.scss";
import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="not-found">
      <h1>404</h1>

      <p>
        Похоже, страница не найдена. Проверьте правильность указанного вами пути
        или свяжитесь с нами
      </p>

      <div className="not-found__buttons">
        <Link href="/#contactus">Связаться</Link>
        <Link href="/">На главную</Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
