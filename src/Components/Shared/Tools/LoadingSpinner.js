import React from "react";
import { Rings } from "react-loader-spinner";
function LoadingSpinner() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "1000px",
        justifyContent: "center",
        paddingTop: "200px",
      }}
    >
      <Rings
        height="80"
        width="80"
        color="#808080"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="rings-loading"
      />
    </div>
  );
}

export default LoadingSpinner;
