import React from "react";
import ReactDom from "react-dom";
import "./css/style.css";
const root = document.getElementById("root");

const name = (
  <div className="dialogue_header_name">
    <p className="name">Вероника Ростова</p>
    <p className="position">Менедржер по продажам</p>
  </div>
);

const yellowBox = (
  <div className="dialogue_header_box">
    <p className="dialogue_header_box_text">Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны.</p>
  </div>
);
const dom = (
  <div className="container">
    <div className="dialogue">
      <div className="dialogue_header">
        {name}
        {yellowBox}
        <div className="dialogue_header_image-cropper">
          <img
            className="dialogue_header_avatar"
            src={require("./img/avatar.png")}
            alt="Avatar"
          />
        </div>
      </div>
    </div>
  </div>
);

ReactDom.render(dom, root);
