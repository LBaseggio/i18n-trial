import React from "react";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation(["translation", "welcome"]);
  return (
    <div>
      <p>{t("welcome:home.header")}</p>
    </div>
  );
};

export default HomePage;
