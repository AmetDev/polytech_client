import NotFoundPage from "@app/not-found";
import About from "@widgets/home/AboutNew/About";
import axios from "axios";
import { Interweave } from "interweave";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import style from "./CollegePage.module.scss";
export default function CollegePage({ params }) {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  console.log(params);
  let [data, setData] = useState("");
  useEffect(() => {
    const someAsyncFunc = async () => {
      try {
        const somedata = await axios.get(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/page/pageourcollege`,
          params.collegeId ? { params: { pageUrl: params.collegeId } } : ""
        );
        function updateImageSource(text) {
          const link = process.env.NEXT_PUBLIC_SERVER_URL;
          return text.replace(/src=\/uploads/g, `src=${link}/uploads`);
        }
        function insertLocalhostToLinks(html) {
          const regex = /href=\/uploads/g;
          const replacement = `href=${process.env.NEXT_PUBLIC_SERVER_URL}/uploads`;
          return html.replace(regex, replacement);
        }
        function updateLinks(htmlContent) {
          const updatedContent = htmlContent.replace(
            /\/our-colleage\//g,
            `${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/`
          );
          return updatedContent;
        }

        const result = updateImageSource(somedata.data.pageContent);
        const result2 = insertLocalhostToLinks(result);
        console.log(result2);
        const updatedHtml = updateLinks(result2);
        setData(updatedHtml);
      } catch (error) {
        console.log(error);
        console.log("error", error.response.data.message);
        console.log("error", error.response.status);
        setData(error.response.status);
      }
    };
    someAsyncFunc();
  }, []);

  const id = params.collegeId;
  // const result = data.filter(
  // 	el => el.pageUrl == id && el.pageType == 'own' && el.pageTypePublish == true
  // )
  // const resultObj = result.map(el => el)
  return (
    <div>
      {id === "svedeniya_o_organizachi" && <About />}
      {data !== 404 && (
        <div className={style.wrapperInter}>
          {" "}
          <Interweave content={data + ""} />
          <button
            style={{
              width: "100%",
              margin: "0 auto",
              display: "block",
              backgroundColor: "#131313",
              borderRadius: 10,
              padding: 20,
              color: "#FFF",
              fontSize: 24,
            }}
            onClick={handleClick}
          >
            Вернуться назад
          </button>
        </div>
      )}
      {data === 404 && id !== "svedeniya_o_organizachi" && <NotFoundPage />}
    </div>
  );
}
