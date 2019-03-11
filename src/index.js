import React from 'react';
import ReactDom from 'react-dom';
import './css/style.css';
const root = document.getElementById('root');

const dom = <div className="container">
    <div className="dialogue">
        <div className="dialogue_header">
        <div className="dialogue_header_image-cropper"><img src={require("./img/avatar.png")} alt="Avatar"/> </div>
        </div>
    </div>
</div>;

ReactDom.render(dom, root);