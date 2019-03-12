import React from "react";
import Page from "./Page";
import ReactDom from "react-dom";
import "./css/style.css";
const root = document.getElementById("root");

ReactDom.render(
  <Page
    name={"Вероника Ростова"}
    position={"Менеджер по продажам"}
    description={
      "Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны."
    }
    avatar={require("./img/avatar.png")}
  />,
  root
);
