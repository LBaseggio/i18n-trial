import React from "react";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation(["translation", "welcome"]);

  return <div><p>{t("welcome:about.paragraphOne")}</p></div>;
};

export default About;
