import Head from "next/head";
import NextProgressBar from "nextjs-progressbar";

interface IHeadeProvider {
    children: ReactNode
}
import Favicons from "./Favicons";
import {ReactNode} from "react";
const HeadProvider = ({ children }: IHeadeProvider) => {
    const accentColor = '#013a8a'

    return (
        <>
            <NextProgressBar
                color={accentColor}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
            />
            <Head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width,  initial-scale=1, maximum-scale=6"
                />

                <Favicons />

                <meta name="theme-color" content={"#181B1E"} />
                <meta name="msapplication-navbutton-color" content={"#181B1E"} />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content={"#181B1E"}
                />
            </Head>
            {children}
        </>
    );
};

export default HeadProvider;
