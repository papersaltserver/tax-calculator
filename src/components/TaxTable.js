import { Table } from "react-bootstrap";
const TaxTable = ({ detailedCalcResults }) => {
  return (
    <>
      <Table striped hover responsive>
        <caption>Taxes breakdown</caption>
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Brutto</th>
            <th scope="col">Emerytalne</th>
            <th scope="col">Rentowe</th>
            <th scope="col">Chorobowe</th>
            <th scope="col">Zdrowotne</th>
            <th scope="col">Koszty UP</th>
            <th scope="col">Podstawa 17%</th>
            <th scope="col">Podstawa 32%</th>
            <th scope="col">Podstawa PIT</th>
            <th scope="col">PIT</th>
          </tr>
        </thead>
        <tbody>{detailedCalcResults.map((calcResult, index) => (<tr key={index}>
          <th scope="row">{calcResult.month}</th>
          <td>{calcResult.brutto}</td>
          <td>{calcResult.pensionTaxAmount}</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>))}</tbody>
      </Table>
    </>
  );
};

export default TaxTable;
