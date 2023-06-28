import { FC } from 'react'
import Head from 'next/head'
import {titleMerge} from "@/app/utils/TitleMerge";

export const MetaNoIndex: FC<{ title?: string }> = ({ title = 'Error' }) => {
    return (
        <Head>
            <title>{titleMerge(title)}</title>
            <meta name='robots' content='noindex' />
            <meta name="description"   content='noindex' />
        </Head>
    )
}
