import Select from "react-select";

import { useState } from "react";
import "./App.css";
import { I18n } from "./i18n";
type Option = {
  label: string;
  value: string;
};

function App() {
  const [selectedOption, setSelectedOption] = useState<Option | null>({
    value: "en",
    label: "English",
  });

  const customStyle = {
    option: (base: any) => ({
      ...base,
      color: "black",
      cursor: "pointer",
    }),
  };

  return (
    <div className='layout'>
      <div className='header'>
        <h2>
          {I18n.getText(
            "heading",
            selectedOption?.value as I18n.LanguageCode,
            "Crowdin Testing"
          )}
        </h2>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={I18n.langs}
          styles={customStyle}
        />
      </div>
      <div className='body'>
        <h1>
          {" "}
          {I18n.getText(
            "question1",
            selectedOption?.value as I18n.LanguageCode,
            "Question ?"
          )}{" "}
        </h1>
        <p>
          {I18n.getText(
            "answer1",
            selectedOption?.value as I18n.LanguageCode,
            "answer"
          )}
        </p>

        <h1>
          {" "}
          {I18n.getText(
            "question2",
            selectedOption?.value as I18n.LanguageCode,
            "Question ?"
          )}{" "}
        </h1>
        <p>
          {I18n.getText(
            "answer2",
            selectedOption?.value as I18n.LanguageCode,
            "answer"
          )}
        </p>
      </div>
    </div>
  );
}

export default App;
