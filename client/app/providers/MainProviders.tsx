import React, { ReactElement } from "react";
import { GridThemeProvider } from "styled-bootstrap-grid";
import HeadProvider from "@/app/providers/HeaderProvider";
import Layout from "../components/layouts";
import { gridTheme } from "@/styles/lib/StyleGridContainer";
import "swiper/css";
interface IProps {
  children: any;
}

export default function MainProviders(props: IProps): ReactElement {
  const { children } = props;

  return (
    <HeadProvider>
      <GridThemeProvider gridTheme={gridTheme}>
        <Layout>{children}</Layout>
      </GridThemeProvider>
    </HeadProvider>
  );
}
