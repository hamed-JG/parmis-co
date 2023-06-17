import React from "react";
import Card from "../Components/static/Gallery/card/Card";
import seedlings from "../Assets/images/seedlings.jpg";
import connection from "../Assets/images/connections.png";
import device from "../Assets/images/heater.png";
import protections from "../Assets/images/protections.jpg";

// text
const devices = `تجهیزات داخلی گلخانه شامل دستگاه‌های برودتی و حرارتی، مه پاش و ...`;
const connections = ` اتصالات و بست‌های به کار رفته در ساخت سازه گلخانه‌های نواندیش پارمیش`;
const seedling = `نشاء های تولید شده توسط گروه متخصصین نواندیش پارمیس`;
const inputs = `نهاده‌های کشاورزی و ملزومات مراقبت از محصولات کشاورزی  `;

function Gallery() {
  return (
    <div style={{display:'flex',justifyContent:'space-evenly',paddingTop:'75px'}}>
      <Card
        title={"تجهیزات"}
        image={device}
        text={devices}
        address={"./gallery/devices"}
      />
      <Card
        title={"سازه گلخانه"}
        image={connection}
        text={connections}
        address={"./gallery/connections"}
      />
      <Card
        title={"نشـاء گیاهان"}
        image={seedlings}
        text={seedling}
        address={"./gallery/seedlings"}
      />
      <Card
        title={"نهاده کشاورزی"}
        image={protections}
        text={inputs}
        address={"./gallery/inputs"}
      />
    </div>
  );
}

export default Gallery;
