import React from "react";
import { NavBar } from "./navbar";
import StyleHeader from "./header.module.scss";
import Lottie from "lottie-react";
import SlidersCustom from "./sliders";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { LottieWebDeveloper } from "@/app/assets";
type Props = {};

function HeaderLayout({}: Props) {
  return (
    <>
      <NavBar />
      <div className={StyleHeader.headerLayout}>
        <Container>
          <div className={StyleHeader.position}>
            <Row>
              <Col xl={6}>
                <div className={StyleHeader.title}>
                  <h1>IT Reactor - Zamonaviy kasblar markazi</h1>
                </div>
                <div className={StyleHeader.text}>
                  <p>
                    Biz sizga ta'lim berishdan charchamaymiz siz esa o'qishdan
                    charchamang!
                  </p>
                </div>
                <div className={StyleHeader.button}>
                  <button>Batafsil ma'lumot</button>
                </div>
              </Col>
              <Col xl={6}>
                <div className={StyleHeader.image}>
                  <Lottie animationData={LottieWebDeveloper} loop={true} />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      {/* <SlidersCustom /> */}
    </>
  );
}

export default HeaderLayout;
