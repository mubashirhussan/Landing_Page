// import React from 'react'

import { Col, Row } from "antd";

export default function Footer() {
  return (
    <div className="container-fluid  bg-dark py-4  vission mt-5">
      <Row className="justify-content-center ">
        <Col>
          <p className="text-white mb-0 footer-text-style">
            Copyrights @ 2023 TreatyHealth all rights reserved
          </p>
        </Col>
      </Row>
    </div>
  );
}
