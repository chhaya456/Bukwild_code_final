import React, { useState } from "react";
import Main from "./Main";
import Footer from "./Footer";

function App() {
  const [title, setTitle] = useState("Industries");

  function updateBg(tittle) {
    setTitle(title);
  }

  return (
    <div
      // onChange={updateBg}
      style={{
        objectFit: "contain",
        backgroundSize: "cover",
        backgroundImage:
          title === "Industries"
            ? 'url("images/slide_one.jpg")'
            : title === "Services"
            ? 'url("images/slide_two.jpg")'
            : title === "About Us"
            ? 'url("images/slide_three.jpg")'
            : null
      }}
    >
      <div className="main">
        {" "}
        <Main onChange={updateBg} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
