import React from "react";
import Card from "./card/Card";
import styles from "./Certificate.module.css";
import ngoCertificate from "../../../../Assets/images/ngoCertificate.jpg";
import epcsCertificate from "../../../../Assets/images/epcsCertificate.jpg";
import actionCert from "../../../../Assets/images/actionCert.jpg";
import GhouseCertificate from "../../../../Assets/images/GhouseCertificate.jpg";
import cropDoc from "../../../../Assets/images/cropDoc.jpg";
import inputsCertificate from "../../../../Assets/images/inputsCertificate.jpg";

function Certificate() {
  return (
    <div className={styles.main}>
      <h2>گواهی نامه و صلاحیت فنی</h2>
      <div className={styles.container}>
        <Card title={"انجمن ملی گلخانه سازان"} certificate={ngoCertificate} />
        <Card title={"گواهینامه EPCS"} certificate={epcsCertificate} />
        <Card title={"پروانه اشتغال"} certificate={actionCert} />
      </div>
      <div className={styles.container}>
        <Card title={"تولید محصولات گلخانه‌ای"} certificate={GhouseCertificate} />
        <Card title={"گواهینامه مسئول فنی"} certificate={cropDoc} />
        <Card title={"توزیع نهاده‌های کشاورزی"} certificate={inputsCertificate} />
      </div>
    </div>
  );
}

export default Certificate;
