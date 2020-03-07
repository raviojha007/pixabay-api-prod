import React from "react";
import ReactLoading from "react-loading";
import {  Article,  list } from "./generic";
//import "./styles.css";

const Loading = () => (
  <>
   {list.map(l => (
      <Article key={l.prop}>
        <ReactLoading type={l.prop} color="black" />
       </Article>
    ))}
  </>
);

export default Loading ;
