import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import { BingoProvider } from "./hooks/BingoContext";
import BingoPage from "./pages/BingoPage";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import YouTubePlayerIcon from "./icons/Player";

export default function GE() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <BingoProvider>
      <div className="tab-div relative min-h-screen">
        <Tab.Container defaultActiveKey="bingo">
          <Nav className="absolute bottom-0 left-[50%] translate-x-[-50%] rounded-lg p-2 text-white flex flex-col">


            <div
              className={`rounded-t-md bg-glass text-white p-2 menu ${
                menuOpen ? "show-menu" : ""
              }`}
            >
              <div>item 1</div>
              <div>item 2</div>
              <div>item 3</div>
            </div>

            <div className="flex flex-row align-items-center  bg-glass">
              <button className="p-2" onClick={toggleMenu}>
                <YouTubePlayerIcon/>
              </button>
              <Nav.Item>
                <Nav.Link className="p-2 text-white" eventKey="bingo">
                  BINGO
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="p-2 text-white" eventKey="home">
                  HOME
                </Nav.Link>
              </Nav.Item>
            </div>
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
