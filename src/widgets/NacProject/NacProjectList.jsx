import styles from "@widgets/NacProject/NacProject.module.scss";
// import { useEffect, useState } from "react";
// import axios from "axios";
import Link from "next/link.js";

const NacProjectList = ({ files }) => {
  // const [files, setFiles] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${process.env.NEXT_PUBLIC_SERVER_URL}/files/get`,
  //         {
  //           params: { forPage: "nacproject" },
  //         }
  //       );

  //       setFiles(data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <ul className={`${styles.listPol} files-block`}>
      {files ? (
        files.map(({ file, name }) => (
          <li key={name}>
            <Link
              target="_blank"
              rel="norefferer"
              href={`${process.env.NEXT_PUBLIC_SERVER_URL}/uploads/${file}`}
            >
              {name}
            </Link>
          </li>
        ))
      ) : (
        <p>Загрузка...</p>
      )}
    </ul>
  );
};

export default NacProjectList;
