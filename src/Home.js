import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { css, StyleSheet } from "aphrodite";
import classNames from "classnames";

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
    <div className="d-flex align-items-center justify-content-center">
      <Card className={css(styles.card)}>
        <Row>
          <Col>I have lived 😃</Col>
          <Col>
            {`${((time - bornS) / y).toFixed(2)} yrs (${time - bornS} seconds)`}
          </Col>
        </Row>
        <Row>
          <Col>Expected to live if everything goes healthy 😛</Col>
          <Col>{`${((deathS - time) / y).toFixed(2)} yrs (${
            deathS - time
          } seconds)`}</Col>
        </Row>
        <Row>
          <Col>Being a vegetarian 🌽 </Col>
          <Col>
            {`${((time - vegS) / y).toFixed(2)} yrs (${time - vegS} seconds)`}
          </Col>
        </Row>
        <Row>
          <Col>Spent on professional coding 👨‍💻 </Col>
          <Col>
            {}
            {`${(parseInt(time - codingS) / y).toFixed(2)} yrs (${parseInt(
              time - codingS
            )} seconds)`}
          </Col>
        </Row>
      </Card>
    </div>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "50vw",
    padding: "50px",
    margin: "50px",
    backgroundColor: "#80cbc4",
    border: "solid 3px",
  },
});

export default Home;
