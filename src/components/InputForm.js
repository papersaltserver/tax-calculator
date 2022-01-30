import { Form, Accordion } from "react-bootstrap";
const InputForm = ({calculationInput, setCalculationInput}) => {
  return (
    <>
      <Form.Label htmlFor="monthlyIncome">Monthly income:</Form.Label>
      <Form.Control
        id="monthlyIncome"
        type="number"
        placeholder="Add income"
        onChange={(event) => setCalculationInput({
          ...calculationInput,
          detailedIncome: Array(12).fill(event.target.value),
        })}
        onKeyPress={(event) => {
          if (!/[\d]/.test(event.key)) {
            event.preventDefault();
          }
        }}
      />
      <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Show advanced tax calculation options</Accordion.Header>
        <Accordion.Body>
          <Form>
            <Form.Switch
              id="commonTax"
              label="Common tax with spouse"
              checked={calculationInput.familyCommonTaxes}
              onChange={(event) => setCalculationInput({
                ...calculationInput,
                familyCommonTaxes: event.target.checked,
              })}
            />
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </>
  );
};

export default InputForm;
