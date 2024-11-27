import Link from "next/link";
import style from "./Enrollee.module.scss";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const EnrolleeOrder = ({ files }) => {
  return (
    <ul className={`${style.enrollee__order} files-block`}>
      {files
        ? files.map(({ file, name }) => (
            <li key={name}>
              <Link
                href={`${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/${file}`}
                target="_blank"
                rel="norefferer"
              >
                {name}
              </Link>
            </li>
          ))
        : [1, 2, 3].map((item_, index) => (
            <article className={style.enrollee__links__loading} key={index}>
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <Skeleton className={style.enrollee__links__loading} />
              </SkeletonTheme>
            </article>
          ))}
    </ul>
  );
};

export default EnrolleeOrder;
