import React from "react";
// import TimeLine from "../components/TimeLine";
import { Row, Col } from "antd";

import homeSVG from "../../images/illustrations/home.svg";
import formationSVG from "../../images/illustrations/school.svg";
import workSVG from "../../images/illustrations/work.svg";
import { URL_NAVIGATION } from "../../constants/urlNavigation";

import "./home.style.scss";
import ScrollDownIcon from "../../components/ScrollDownIcon/ScrollDownIcon.component";
import LinkButton from "../../components/LinkButton/LinkButton.component";

export default function AboutPage() {
  return (
    <section className="page home">
      <Row justify="space-around" align="middle">
        <Col span={50}>
          <img src={workSVG} alt="work" />
        </Col>
        <Col span={50}>
          <LinkButton
            color="secondary"
            url={URL_NAVIGATION.PROFESSIONAL}
            text="Parcour professionnel"
          />
        </Col>
      </Row>

      <Row justify="space-around" align="middle">
        <Col span={50}>
          <LinkButton
            color="secondary"
            url={URL_NAVIGATION.FORMATION}
            text="Parcour formation"
          />
        </Col>
        <Col span={50}>
          <img src={formationSVG} alt="formation" />
        </Col>
      </Row>
    </section>
  );
}
