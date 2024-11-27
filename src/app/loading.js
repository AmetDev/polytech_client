"use client";

import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    async function getLoader() {
      const { bouncy } = await import("ldrs");
      bouncy.register();
    }
    getLoader();
  }, []);
  return (
    <div
      style={{
        width: "75vw",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
        display: 'none'
      }}

      className='page_loader'
    >
      <l-bouncy color="#0066ff"></l-bouncy>
    </div>
  );
}
