import React from "react";
import Sidebar from "../../Sidebar";
import styled from "styled-components";
import { Card, CardBody, CardHeader, CardTitle, Col, Row } from "reactstrap";

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;

function HospitalDash() {
  return (
    <>
      <Sidebar />
      <GridWrapper>
        <Row>
          <Col xs="4">
            <Card className="bg-success">
              <CardHeader>
                <h6>Total Patients</h6>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Card className="bg-success">
              <CardHeader>
                <h6>Total Hospitals</h6>
              </CardHeader>
              <CardBody>
                  
              </CardBody>
            </Card>
          </Col>
          <Col xs="4">
            <Card className="bg-success">
              <CardHeader>
                <h6>Total Doctors</h6>
              </CardHeader>
              <CardBody>
                  
              </CardBody>
            </Card>
          </Col>
        </Row>
      </GridWrapper>
    </>
  );
}

export default HospitalDash;
