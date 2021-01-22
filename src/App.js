import { useTranslation, Trans } from "react-i18next";
import { Switch, Link, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import About from './components/About';
import Contact from './components/Contact';

import "./App.css";

const App = () => {
  const { t, i18n } = useTranslation(["translation", "welcome"]);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div className="App">
      <button type="button" onClick={() => changeLanguage("es")}>
        {t("translation:es")}
      </button>
      <button type="button" onClick={() => changeLanguage("en")}>
        {t("translation:en")}
      </button>
      <button type="button" onClick={() => changeLanguage("nl")}>
        {t("translation:nl")}
      </button>
      <button type="button" onClick={() => changeLanguage("pt")}>
        {t("translation:pt")}
      </button>
      <br />
      <br />
      <h1>{t("welcome:greeting")}</h1>
      <p>{t("welcome:content.developersJob")}</p>
      <br />
      <hr />
      <br />
      <p>
        <Trans i18nKey="welcome:content.avgDeveloperSalary">
          Um web developer a trabalhar em Portugal ganha em média <strong>15,729€</strong> por ano.
        </Trans>
      </p>
      <br />
      <br />
      <Link to="/">{t("welcome:navLinks.home")}</Link>{" "}{"|"}{" "}
      <Link to="/about">{t("welcome:navLinks.about")}</Link>{" "}{"|"}{" "}
      <Link to="/contacts">{t("welcome:navLinks.contact")}</Link>{" "}
     <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contacts" component={Contact} />
     </Switch>
    </div>
  );
};

export default App;
