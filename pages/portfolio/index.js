import Head from 'next/head';
import BannerSeven from '../../components/banners/BannerSeven';
import Layout from '../../components/layouts/Layout';
import PortfolioOne from '../../components/portfolio/PortfolioOne';

const Portfolio = () => {
    return (
        <Layout>
            <Head>
                <title>
                    Portfolio || Gobind Coach
                </title>
            </Head>

            <main className="page-wrapper">
                <BannerSeven
                    title="Our projects"
                    subtitle="A quick view of our innovative designs of buses."
                />

                <PortfolioOne bgColor="bg-transparent"/>
            </main>
        </Layout>
    );
};

export default Portfolio;
