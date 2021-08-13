import Head from 'next/head'


const Meta = ({title = "Modal Rakyat", desc = "Modal rakyat assesment test"}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={desc} />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}   

export default Meta