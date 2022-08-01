import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";

function Home() {
  const y = 60 * 60 * 24 * 365;
  const [time, setTime] = useState(parseInt(Date.now() / 1000));

  const bornS = parseInt(Date.parse("1995-02-19 17:21") / 1000);
  const deathS = parseInt(Date.parse("2072-02-19 17:21") / 1000);
  const vegS = parseInt(Date.parse("2007-05-01 00:00") / 1000);
  const codingS = parseInt(Date.parse("2020-03-02 00:00") / 1000);

  useEffect(() => {
    const interval = setInterval(
      () => setTime(parseInt(Date.now() / 1000)),
      500
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <Row>
        <Col>I have lived</Col>
        <Col>
          {`${((time - bornS) / y).toFixed(2)} yrs (${time - bornS} seconds)`}
        </Col>
      </Row>
      <Row>
        <Col>Expected to live</Col>
        <Col>{`${((deathS - time) / y).toFixed(2)} yrs (${
          deathS - time
        } seconds)`}</Col>
      </Row>
      <Row>
        <Col>Being vegetarian</Col>
        <Col>
          {`${((time - vegS) / y).toFixed(2)} yrs (${time - vegS} seconds)`}
        </Col>
      </Row>
      <Row>
        <Col>Avg Coding</Col>
        <Col>
          {}
          {`${(parseInt(time - codingS) / y).toFixed(2)} yrs (${parseInt(
            time - codingS
          )} seconds)`}
        </Col>
      </Row>
    </>
  );
}

export default Home;
