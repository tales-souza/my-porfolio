import React from "react";
import { useLocation } from "react-router-dom";
import { Row, Col, Card } from 'react-materialize';


const NoMatch = () => {
  let location = useLocation();
  return (
    <Row>
      <Col m={10} s={12}>
        <Card>
          <div>
            <p>O Link <code>{location.pathname}</code> é inválido!</p>

          </div>
        </Card>
      </Col>

    </Row>

  );
}


export default NoMatch;