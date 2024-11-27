import LinkDropdown from "@features/header/LinkDropdown/LinkDropdown";
import Triangle from "@public/assets/icons/triangle.svg";
// import { useDebounce } from "@uidotdev/usehooks";
// import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "./../../../widgets/header/header.module.scss";

const Links = React.memo(function Links({ data: linksServer }) {
  linksServer = linksServer || [];
  const [hoveredLinkId, setHoveredLinkId] = useState(null);
  const [isRemoving, setIsRemoving] = useState(false);

  const handleHover = (id) => {
    setHoveredLinkId(id);
    setIsRemoving(false);
  };

  const handleUnhover = () => {
    setIsRemoving(true);
    setHoveredLinkId(null)
  };

  return (
    <ul style={{ display: "flex", justifyContent: "space-between" }}>
      {linksServer &&
        linksServer.length !== 0 &&
        linksServer?.map((link, index) => {
          const id = style.link + index;
          link.id = id;

          return (
            <li
              style={{ marginLeft: 20, cursor: "pointer" }}
              key={index}
              className={
                link.nestedObjects.length !== 0
                  ? style.categoryLink
                  : style.link
              }
              id={id}
              onMouseEnter={() =>
                link.nestedObjects.length !== 0 && handleHover(id)
              }
              onMouseLeave={() =>
                link.nestedObjects.length !== 0 && handleUnhover()
              }
            >
              {!link.isCategory ? (
                <Link href={link.url} prefetch>
                  {link.text}
                </Link>
              ) : (
                link.text
              )}
              {link.nestedObjects.length !== 0 && (
                <Triangle
                  className={`${style.dropdownIcon} ${
                    hoveredLinkId === id && style.dropdownIconActive
                  }`}
                />
              )}

              {link.nestedObjects.length !== 0 && hoveredLinkId === id && (
                <LinkDropdown data={link} isRemoving={isRemoving} />
              )}
            </li>
          );
        })}
    </ul>
  );
});

export default Links;
