/* itsZeroFourX@gmail.com code side */

import Requzits from "@shared/Requzits";
import DormitoryAnnouncementBlock from "@widgets/DormitoryAccommodination/DormitoryAnnouncement";
import DormitoryFiles from "@widgets/DormitoryAccommodination/DormitoryFiles";
import DormitoryNote from "@widgets/DormitoryAccommodination/DormitoryNote";
import DormitoryPrice from "@widgets/DormitoryAccommodination/DormitoryPrice";
import DormitoryTop from "@widgets/DormitoryAccommodination/DormitoryTop";

const DormitoryAccommodination = () => {
  return (
    <section>
      <DormitoryTop />
      <DormitoryNote />
      <DormitoryFiles />
      <DormitoryAnnouncementBlock />
      <DormitoryPrice />

      <h1
        style={{
          textTransform: "uppercase",
          marginTop: 60,
          textAlign: "center",
          fontSize: 40,
        }}
      >
        РЕКВИЗИТЫ НА ОПЛАТУ ОБУЧЕНИЯ И ЗА ПРОЖИВАНИЕ В ОБЩЕЖИТИИ
      </h1>
      <Requzits />
    </section>
  );
};

export default DormitoryAccommodination;
