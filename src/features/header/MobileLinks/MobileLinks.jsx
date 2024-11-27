import axios from "axios";
import React, { useEffect, useState } from "react";
import MobileLink from "../MobileLink/MobileLink";

const MobileLinks = React.memo(function MobileLinks({ data: linksServer }) {
  linksServer = linksServer || []
  // const [linksServer, setLinksServer] = useState([]);
  // useEffect(() => {
  //   const fetchingData = async () => {
  //     try {
  //       const data = await axios.get(
  //         `${process.env.NEXT_PUBLIC_SERVER_URL}/linker/linksheaderall`
  //       );
  //       setLinksServer([...data.data]);
  //     } catch (error) {
  //       alert("error" + error);
  //     }
  //   };
  //   fetchingData();
  // }, []);

  return linksServer.map((link, index) => {
    return <MobileLink link={link} />;
  });
});

export default MobileLinks;
