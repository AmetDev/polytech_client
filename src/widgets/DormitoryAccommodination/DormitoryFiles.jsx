"use client";

import { useEffect, useState } from "react";
import style from "./style.module.scss";
import axios from "axios";
import Link from "next/link";

const DormitoryFiles = () => {
  const [files, setFiles] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/files/get`,
          {
            params: { forPage: "dormitory-accommodination" },
          }
        );

        setFiles(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={style.dormitory__files}>
      <ul className="files-block">
        {files && files[0] ? (
          files[0].map(({ file, name }) => (
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
        ) : (
          <p>Загрузка...</p>
        )}
      </ul>
    </section>
  );
};

export default DormitoryFiles;
