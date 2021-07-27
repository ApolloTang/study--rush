import React from "react";
import img from './cute-cat.jpg';

const Cat = ({ children }: any) => (
  <div>
    <img src={img} />
  </div>
);

export default Cat;
