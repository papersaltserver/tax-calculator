import { Row, ButtonGroup, ToggleButton } from "react-bootstrap";
import { useState } from "react";
import TaxTable from "./TaxTable";
const Results = ({detailedCalcResults}) => {
  const [currentResultsView, setCurrentResultsView] = useState("results-table")
  return (
    <>
      <Row className="justify-content-center">
        <ButtonGroup role="group">
          <ToggleButton
            key="1"
            id="results-table"
            type="radio"
            name="Table"
            value="results-table"
            variant="outline-primary"
            checked={currentResultsView === "results-table"}
            onChange={(e) => setCurrentResultsView(e.currentTarget.value)}
          >
            Table
          </ToggleButton>
          <ToggleButton
            key="2"
            id="results-pie"
            type="radio"
            name="Pie Chart"
            value="results-pie"
            variant="outline-primary"
            checked={currentResultsView === "results-pie"}
            onChange={(e) => setCurrentResultsView(e.currentTarget.value)}
          >
            Pie Chart
          </ToggleButton>
          <ToggleButton
            key="3"
            id="results-stankey"
            type="radio"
            name="Stankey"
            value="results-stankey"
            variant="outline-primary"
            checked={currentResultsView === "results-stankey"}
            onChange={(e) => setCurrentResultsView(e.currentTarget.value)}
          >
            Stankey
          </ToggleButton>
        </ButtonGroup>
      </Row>
      {currentResultsView === "results-table" && (
        <TaxTable detailedCalcResults={detailedCalcResults} />
      )}
    </>
  );
};

export default Results;
