import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import BannerEight from '../components/banners/BannerEight';
import ServiceFour from '../components/services/ServiceFour';
import SpicedSlider from '../components/gallery/SpicedSlider';
const Infrastructure = () => {
    return (
        <Layout>
            <Head>
                <title>Infrastructure || Gobind Coach</title>
                <meta name="description" content="Information about our infrastructure services." />
            </Head>
            <BannerEight />
            <ServiceFour />
            <SpicedSlider />

        </Layout>
    );  
};

export default Infrastructure;
 