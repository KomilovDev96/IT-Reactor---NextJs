import { FC, ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

import { MetaNoIndex } from ".";

import logoImage from "@/app/assets/logo.svg";
import { onlyText } from "@/app/utils/ClearText";
import { siteName, titleMerge } from "@/app/utils/TitleMerge";

export const Meta = ({
  title,
  description,
  image = null,
  children,
}: any): any => {
  const { asPath } = useRouter();
  const currentUrl = `${process.env.APP_URL}${asPath}`;
  return (
    <>
      {description ? (
        <Head>
          <title itemProp="headline">{titleMerge(title)}</title>
          <meta
            itemProp="description"
            name="description"
            content={onlyText(description, 152)}
          />
          <link rel="canonical" href={currentUrl} />
          <meta property="og:locale" content="en" />
          <meta property="og:title" content={titleMerge(title)} />
          <meta property="og:url" content={currentUrl} />
          <meta property="og:image" content={logoImage} />
          <meta property="og:site_name" content={siteName} />
          <meta
            property="og:description"
            content={onlyText(description, 197)}
          />
        </Head>
      ) : (
        <MetaNoIndex title={title} />
      )}
      {children}
    </>
  );
};
