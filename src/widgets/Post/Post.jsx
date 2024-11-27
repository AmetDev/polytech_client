import style from "./style.module.scss";
import eye from "/public/assets/icons/eye.svg";

const Post = ({ post }) => {
  const src = `${process.env.NEXT_PUBLIC_SERVER_URL}${post.image}`;

  return (
    <section className={style.post}>
      <img
        className={style.post__image}
        src={src}
        loader={() => src}
        alt={post.title}
        width={1584}
        height={927}
      />

      <div className={style.post__main__info}>
        <div className={style.post__title}>
          <h1>{post.title}</h1>
          <p>{post.subtitle}</p>
        </div>

        <div className={style.post__views}>
          <p>{post.viewsCount}</p>
          <img src={eye} alt="eye" width={40} height={21} />
        </div>
      </div>

      <p className={style.post__text}>{post.text}</p>
    </section>
  );
};

export default Post;

