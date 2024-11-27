/* itsZeroFourX@gmail.com code side */

import Achives from "@widgets/colleage-history/Achives";
import CEO from "@widgets/colleage-history/CEO";
import HistoryColleage from "@widgets/colleage-history/HistoryColleage";
import HistoryColleageTeachers from "@widgets/colleage-history/HistoryColleageTeachers";
import HistoryColleageText from "@widgets/colleage-history/HistoryColleageText";
import React from "react";

const ColleageHistory = () => {
  return (
    <main>
      <HistoryColleage />
      <HistoryColleageText />
      <HistoryColleageTeachers />
      <CEO />
      <Achives />
    </main>
  );
};

export default ColleageHistory;
