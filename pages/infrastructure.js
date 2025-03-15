import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import BannerEight from '../components/banners/BannerEight';
import ServiceFour from '../components/services/ServiceFour';
const Infrastructure = () => {
    return (
        <Layout>
            <Head>
                <title>Infrastructure || Gobind Coach</title>
                <meta name="description" content="Information about our infrastructure services." />
            </Head>
            <BannerEight />
            <ServiceFour />

        </Layout>
    );
};

export default Infrastructure;
