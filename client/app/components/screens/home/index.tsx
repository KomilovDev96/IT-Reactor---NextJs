import { about1 } from "@/app/assets";
import { Meta } from "@/app/utils/meta";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";

type Props = {};

function HomePage({}: Props) {
  return (
    <Meta title="Главная страница">
      Главная страница
      <main className="about">
        <h2>Biz haqimizda</h2>
        <Container>
          <Row>
            <Col lg={6}>
              <div className="about__left">
                <h3>Umid ta’lim o‘quv markazi haqida</h3>
                <p>
                  Umid ta’lim o‘quv markazi 2023-yil 22-iyulda tashkil etilgan
                  bo‘lib, hozirda Toshkent shahrining eng qulay joylarida 1 ta
                  yirik filiallari faoliyat yuritmoqda va ilg‘or texnologiyalar
                  bilan jihozlangan, yuqori saviyada o‘qitish uchun eng yaxshi
                  sharoitlar yaratilgan.
                </p>
                <p>
                  Trening maxsus dastur bo'yicha olib boriladi, bu eng
                  yaxshilaridan biri hisoblanadi! Bizning markaz O‘zbekistonda
                  birinchi bo‘lib ushbu dasturdan litsenziyalangan formatda
                  foydalanadi.
                </p>
              </div>
            </Col>
            <Col lg={6}>
              <div>
                <Image src={about1} width={640} height={692} alt="png" />
              </div>
            </Col>
          </Row>
          <div>
            <button>click</button>
          </div>
        </Container>
      </main>
      <section className="kurs">
        <h2>Bizning darslar</h2>
        <Container>
          <Row>
            <Col>
              <div className="kurs__items">
                  
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Meta>
  )
}

export default HomePage;
