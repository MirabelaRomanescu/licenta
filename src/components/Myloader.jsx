import React from "react";
import Loader from "react-loader-spinner";

const Myloader = () => {
  const styleLoader = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontWeight: "900",
  };
  const styleBackground = {
    position: "fixed",
    top:0,
    left:0,
    width:"100%",
    height:"100%",
    background:"rgb(250, 250, 250)"
  };
  return (
    <div style={styleBackground}>
      <Loader
        style={styleLoader}
        type="ThreeDots"
        color="#3daa8d"
        secondaryColor="#666666"
      />
    </div>
  );
};

export default Myloader;
