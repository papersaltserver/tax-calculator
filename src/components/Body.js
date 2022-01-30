import { useState, useEffect } from "react";
import InputForm from "./InputForm";
import Results from "./Results";
import calculateTaxes from "../logic/calculateTaxes";
const Body = () => {
  const [calculationInput, setCalculationInput] = useState({
    detailedIncome: Array(12).fill(0),
    familyCommonTaxes: false,
  });
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState({});

  useEffect(() => {
    const inputChange = (input) => {
      if (
        input.detailedIncome.every((el) => el === "") ||
        input.detailedIncome.every((el) => parseInt(el) === 0) ||
        input.detailedIncome.every((el) => isNaN(parseInt(el)))
      ) {
        setShowResults(false);
        return;
      }
      setResults(calculateTaxes(input));
      setShowResults(true);
    };

    const timeOutId = setTimeout(
      //TODO: track all field changes
      () => inputChange(calculationInput),
      500
    );
    return () => clearTimeout(timeOutId);
  }, [calculationInput]);
  return (
    <div>
      <InputForm calculationInput={calculationInput} setCalculationInput={setCalculationInput} />
      {showResults && (
        <Results
          detailedCalcResults={results}
        />
      )}
    </div>
  );
};

export default Body;
