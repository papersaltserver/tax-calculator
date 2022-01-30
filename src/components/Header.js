import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

const Header = ({ title }) => {
  return (
    <header>
      <h1 className="display-3">{title}</h1>
      <Alert variant="danger">
        <Alert.Heading>Caution!</Alert.Heading>
        <p>
          Please note, this calcuator is based on unfinished Polski Ład law.{" "}
          <br />
          Final implemetation could be different <br />
          Never use this calculator as a financial decision tool!
        </p>
      </Alert>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
