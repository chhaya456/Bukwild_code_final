import React, { useState } from "react";
import Header from "./Header";
import Middle from "./Middle";
import ContentData from "../data/content.json";

function Main() {
  const [item, setItem] = useState("Industries");
  function updateData(item) {
    setItem(item);
  }

  return (
    <div>
      <Header onChange={updateData} />
      {item === "Industries" ? (
        <Middle
          headline={ContentData[0].blocks[0].headline}
          subhead={ContentData[0].blocks[0].subhead}
        />
      ) : item === "Services" ? (
        <Middle
          headline={ContentData[1].blocks[0].headline}
          subhead={ContentData[1].blocks[0].subhead}
        />
      ) : item === "About Us" ? (
        <Middle
          headline={ContentData[2].blocks[0].headline}
          subhead={ContentData[2].blocks[0].subhead}
        />
      ) : null}
    </div>
  );
}

export default Main;
