import PatternBoard from "../components/PatternBoard";
import BingoBall from "../components/BingoBall";
import DisplayBoard from "../components/DisplayBoard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PrevCalls from "../components/PrevCalls";
import GameButtons from "../components/GameButtons";
import BlinkCaret from "../components/BlinkCaret";

export default function BingoPage() {
  return (
    <Container className="height-100vh" fluid>
      <Row className="bingo-row-1">
        <Col className="dark-blur-bg round-corners flex-col-between py-2">
          <PatternBoard />
          <BingoBall />
          <GameButtons />
        </Col>

        <Col md={10} className="dark-blur-bg round-corners p-0">
          <DisplayBoard />
          <BlinkCaret />
        </Col>
      </Row>

      <Row className="mt-1">
        <Col>
          <PrevCalls />
        </Col>
      </Row>
    </Container>
  );
}
