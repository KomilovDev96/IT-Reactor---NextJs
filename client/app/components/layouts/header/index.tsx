import React from "react";
import { NavBar } from "./navbar";
import Lottie from "lottie-react";
import { Container, Row, Col } from "styled-bootstrap-grid";
import { LottieWebDeveloper } from "@/app/assets";
import StyleHeader from "./header.module.scss";
import { useTranslation } from "react-i18next";

function HeaderLayout() {
  const { t } = useTranslation();
  return (
    <>
      <NavBar />
      <div className={StyleHeader.headerLayout}>
        <Container>
          <div className={StyleHeader.position}>
            <Row>
              <Col xl={6} className={StyleHeader.flexCol}>
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
                  <button> {t("Biz bilan bog'lanish")}</button>
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
