import React from "react";
import ReactDom from "react-dom";
import "./css/style.css";
const root = document.getElementById("root");

const name = (
  <div className="dialogue_header_name">
    <p className="name"> Вероника Ростова </p>
    <p className="position"> Менедржер по продажам </p>
  </div>
);


const avatar = (
  <div className="dialogue_header_image-cropper">
    <img className="dialogue_header_avatar"
      src={require("./img/avatar.png")}
      alt="Avatar"
    />
  </div>
);

const table = (
  <div className="table_container">
  <table>
    <tr class="table_header">
      <th/>
      <th>Услуг</th>
    </tr>
    <tr>
      <td>Ручное бронирование</td>
      <td>11</td>
    </tr>
    <tr>
      <td>Пакетные туры</td>
      <td>3</td>
    </tr>
    <tr>
      <td>Отели</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Всего</th>
      <th>15</th>
    </tr>
  </table>
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
        {avatar}
        {yellowBox}
      </div>
      {table}
    </div>
  </div>
);

ReactDom.render(dom, root);
