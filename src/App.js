import Header from "./components/Header";
import {
  Container,
} from "react-bootstrap";
import Body from "./components/Body";
function App() {
  return (
    <Container>
      <Header title="Tax Calculator" />
      <Body />
    </Container>
  );
}

export default App;
