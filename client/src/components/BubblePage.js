import React, { useState, useEffect } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import axiosWithAuth from "../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);

  const fetchColorList = () => {
    axiosWithAuth()
      .get("/api/colors")
      .then(res => {
        console.log(res);
        setColorList(res.data)
      })
      .catch(err => console.log(err.response));
  };

  useEffect(() => {
    fetchColorList();
  }, []);

  return (
    <>
      <ColorList colors={colorList} fetchColorList={fetchColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
