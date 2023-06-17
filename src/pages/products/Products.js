import React from "react";
import styles from "./Products.module.css";
import Card from "../../Components/static/Products/card/Card";
import heater from "../../Assets/images/heater.png";
import circle from "../../Assets/images/circle.png";
import exhaust from "../../Assets/images/exhaust.png";
import fogger from "../../Assets/images/fogger.jpg";

function Products() {
  return (
    <div className={styles.products}>
      <Card
        image={heater}
        name={"هیتر"}
        title={"دستگاه گرمایشی گلخانه"}
        address={"/products/heater"}
      />
      <Card
        image={exhaust}
        name={"فن اگزاست"}
        title={"دستگاه تخلیه هوای گلخانه به بیرون"}
        address={"/products/exhaustFan"}
      />
      <Card
        image={circle}
        name={"فن سیرکوله"}
        title={"دستگاه گردش هوای داخلی گلخانه"}
        address={"/products/circleFan"}
      />
      <Card
        image={fogger}
        name={"مه پاش"}
        title={"دستگاه آب پاش داخلی گلخانه"}
        address={"/products/fogger"}
      />
    </div>
  );
}

export default Products;
