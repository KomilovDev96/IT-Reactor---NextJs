import { Inter } from "next/font/google";
import HomePage from "@/app/components/screens/home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
  return <HomePage props={props} />;
}

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
