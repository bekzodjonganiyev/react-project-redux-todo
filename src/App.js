import { useSelector } from "react-redux"
import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import { useTranslation, initReactI18next } from "react-i18next";

import TodosHeader from "./components/TodosHeader";
import TodosForm from "./components/TodosForm";
import TodoItems from "./components/TodoItems";
import TodosFooter from "./components/TodosFooter";

import "./app.css"

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ["eng", "ru", "uz"],
    fallbackLng: "ru",
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage', 'sessionStorage', 'subdomain', 'path'],
      caches: ['cookie']
    },
    react: { useSuspense: false },
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json"
    }
  });

function App() {
  const items = useSelector(state => state.todos)

  const { t } = useTranslation()

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card mt-5">
            <TodosHeader length={items.length} />
            <TodosForm />
            <TodoItems />
            <TodosFooter />
          </div>
        </div>
      </div>
      <h2 className="text-center my-5 ">{t("welcome_message")}</h2>
    </div>
  );
}

export default App;
