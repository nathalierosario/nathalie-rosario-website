import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { BingoProvider } from "./hooks/BingoContext";
import BingoPage from "./pages/BingoPage";
import HomePage from "./pages/HomePage";

export default function GE() {
  return (
    <BingoProvider>
      <div className="tab-div">
        <Tab.Container defaultActiveKey="bingo">
          <Nav>
            <Nav.Item>
              <Nav.Link eventKey="bingo">BINGO</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="home">HOME</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="bingo">
              <BingoPage />
            </Tab.Pane>
            <Tab.Pane eventKey="home">
              <HomePage />
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </div>
    </BingoProvider>
  );
}
