import { about1 } from "@/app/assets";
import { Meta } from "@/app/utils/meta";
import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "styled-bootstrap-grid";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { TeacherData, ITeacherData } from "@/app/components/fakerData";
import { useTranslation } from "next-i18next";
import { Dropdownlangue } from "@/app/components/shared";
import HomeStyled from "./style.module.scss";
function HomePage({ props }: any) {
  const { t } = useTranslation();
  return (
    <Meta title="Главная страница" description="IT - Reactor">
      Главная страница
      <main className={HomeStyled.about}>
        <Container>
          <div className={HomeStyled.aboutTitle}>
            <h2 className={HomeStyled.title}>01 — Kasb haqida</h2>
            <p className={HomeStyled.text}>{t("Kurslar")}</p>
          </div>
          <Row>
            <Col lg={6} className={HomeStyled.aboutLeft}>
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
            </Col>
            <Col lg={6}>
              <div>
                <Image src={about1} width={640} height={692} alt="png" />
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <section className={HomeStyled.kurs}>
        <Container>
          <h2>Bizning darslar</h2>
          <Tabs>
            <div className="kurs__tabs">
              <TabList className="kurs__menu">
                <Tab className="kurs__menuItems">Barcha kurslar</Tab>
                <Tab className="kurs__menuItems">Front-End</Tab>
                <Tab className="kurs__menuItems">Back-End</Tab>
                <Tab className="kurs__menuItems">Dizayn</Tab>
                <Tab className="kurs__menuItems">Smm</Tab>
              </TabList>
            </div>
            <Row>
              <Col>
                <div className="kurs__items">
                  <TabPanel>
                    <h2>Any content 1</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 2</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 3</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 4</h2>
                  </TabPanel>
                  <TabPanel>
                    <h2>Any content 5</h2>
                  </TabPanel>
                </div>
              </Col>
            </Row>
          </Tabs>
        </Container>
      </section>
      <section className="teachers">
        <h2>Akademiyada o’qitadigan ustozlar</h2>
        <Container>
          <Row>
            {TeacherData.map((items: ITeacherData) => (
              <Col key={items.id} xl={3}>
                <div className="teachers__block">
                  <h3>Komilov Aziz</h3>
                  <p>ux/ui design</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="questions">
        <h2>Ko‘p so‘ralgan savollar</h2>
        <Container></Container>
      </section>
    </Meta>
  );
}

export default HomePage;
