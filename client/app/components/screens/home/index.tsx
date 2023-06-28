import { about1 } from "@/app/assets";
import { Meta } from "@/app/utils/meta";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
type Props = {};

function HomePage({}: Props) {
  return (
    <Meta title="Главная страница" description="IT - Reactor">
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
        <Tabs>
          <div className="kurs__tabs">
            <TabList className="kurs__menu">
              <Tab className="kurs__menuItems">Barcha kurslar</Tab>
              <Tab className="kurs__menuItems">Front-End</Tab>
              <Tab className="kurs__menuItems">Back-End</Tab>
              <Tab className="kurs__menuItems">Dizayn</Tab>
              <Tab className="kurs__menuItems">Smm</Tab>
              <Tab className="kurs__menuItems">Smm</Tab>
            </TabList>
          </div>
          <Container>
            <Row>
              <Col>
                <div className="kurs__items">
                  <TabPanel>
                    <h2>Any content 1</h2>
                  </TabPanel>
                </div>
              </Col>
            </Row>
          </Container>
        </Tabs>
      </section>
      <section className="teachers">
        <h2>Akademiyada o’qitadigan ustozlar</h2>
        <Container>
          <Row>
            <Col xl={3}>
              <div className="teachers__block">
                <h3>Komilov Aziz</h3>
                <p>ux/ui design</p>
              </div>
            </Col>
            <Col xl={3}>
              <div className="teachers__block">
                <h3>Komilov Aziz</h3>
                <p>ux/ui design</p>
              </div>
            </Col>
            <Col xl={3}>
              <div className="teachers__block">
                <h3>Komilov Aziz</h3>
                <p>ux/ui design</p>
              </div>
            </Col>
            <Col xl={3}>
              <div className="teachers__block">
                <h3>Komilov Aziz</h3>
                <p>ux/ui design</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="questions">
        <h2>Ko‘p so‘ralgan savollar</h2>
        <Container></Container>
      </section>
    </Meta>
  )
}

export default HomePage;
