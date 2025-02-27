import Head from 'next/head';
import Layout from '../components/layouts/Layout';
import SectionTitle from '../components/common/SectionTitle';

const Infrastructure = () => {
    return (
        <Layout>
            <Head>
                <title>Infrastructure</title>
                <meta name="description" content="Information about our infrastructure services." />
            </Head>
            <SectionTitle title="Our Infrastructure" />
            <div>
                <h2>Infrastructure Overview</h2>
                <p>Details about the infrastructure services offered will go here.</p>
            </div>
        </Layout>
    );
};

export default Infrastructure;
