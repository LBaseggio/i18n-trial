import React from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation(["translation", "welcome"]);

  return (
    <div>
      <h4>Contacts:</h4>
      <ul>
        <li>
          {t("welcome:contact.phone")}
          {": "}351654651654
        </li>
        <li>
          {t("welcome:contact.mail")}
          {": "}asdasd@oojoig.coa
        </li>
        <li>
          {t("welcome:contact.address.street")}
          {": "}jubuibiub, {t("welcome:contact.address.door")} 5
        </li>
      </ul>
    </div>
  );
};

export default Contact;
