import Head from 'next/head';
import {useEffect, useState} from 'react';
import {useInView} from 'react-intersection-observer';
import BannerSix from '../../components/banners/BannerSix';
import CallToActionOne from '../../components/call-to-actions/CallToActionOne';
import Layout from '../../components/layouts/Layout';
import ServiceSection from '../../components/services/ServiceSection';
import ServiceData from '../../data/Services.json';

const Services = () => {
    const [activeServiceSection, setActiveServiceSection] = useState("");
    const [servicesByCategory, setServicesByCategory] = useState([]);

    const getServicesByCategory = () => {
        const filteredServices = ServiceData.reduce((acc, service) => {
            const categoryIndex = acc.findIndex(
                (item) => item.name == service.category
            );

            if (service.category !== "Default" && service.category !== "Our capabilities" && service.category !== "Our ways" && service.category !== "Our values") {
                if (categoryIndex > -1) {
                    acc[categoryIndex].services.push(service);
                } else {
                    acc.push({
                        name: service.category,
                        services: [service],
                    });
                }
            }

            return acc;
        }, []);

        setServicesByCategory(filteredServices);
    };

    const changeActiveSection = (sectionId) => {
        setActiveServiceSection(sectionId);
    };

    const handleStickyNav = () => {
        const scrollNavigationArea = document.querySelector(
                ".axil-scroll-navigation"
            ),
            scrollNav = document.querySelector(".axil-scroll-nav"),
            sticky = scrollNavigationArea?.offsetTop;

        if (window.pageYOffset >= sticky) scrollNav?.classList.add("is-affixed");
        else scrollNav?.classList.remove("is-affixed");
    };

    const removeStickyNav = () => {
        const scrollNav = document.querySelector(".axil-scroll-nav");
        scrollNav?.classList.remove("is-affixed");
    };

    const {ref, inView} = useInView({
        threshold: 0,
    });

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (inView) {
                handleStickyNav();
            } else {
                removeStickyNav();
            }
        });
    }, [inView]);

    useEffect(() => {
        getServicesByCategory();
    }, []);

    return (
        <Layout>
            <Head>
                <title>Services || Gobind Coach</title>
            </Head>

            <main className="page-wrapper">
                <BannerSix/>

                <div
                    ref={ref}
                    className="axil-scroll-navigation-area axil-scroll-navigation position-relative bg-color-white"
                >
                    <nav className="axil-scroll-nav navbar navbar-example2">
                        <ul className="nav nav-pills justify-content-center sidebar__inner">
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${
                                        activeServiceSection === "section1" ? "active" : ""
                                    }`}
                                    href="#section1"
                                >
                                    Luxury
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${
                                        activeServiceSection === "section2" ? "active" : ""
                                    }`}
                                    href="#section2"
                                >
                                    Sleeper
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${
                                        activeServiceSection === "section3" ? "active" : ""
                                    }`}
                                    href="#section3"
                                >
                                    Deluxue
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${
                                        activeServiceSection === "section4" ? "active" : ""
                                    }`}
                                    href="#section4"
                                >
                                    Passenger
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${
                                        activeServiceSection === "section5" ? "active" : ""
                                    }`}
                                    href="#section5"
                                >
                                    Institutional
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`nav-link smoth-animation ${
                                        activeServiceSection === "section6" ? "active" : ""
                                    }`}
                                    href="#section6"
                                >
                                    Special Purpose
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {servicesByCategory?.map((categoryServices, index) => (
                        <ServiceSection
                            key={`service-section-${index}`}
                            sectionId={`section${index + 1}`}
                            sectionTitle={categoryServices.name}
                            sectionSubtitle="services"
                            sectionBg={
                                index % 2 === 0 ? "bg-color-white" : "bg-color-lightest"
                            }
                            serviceType={categoryServices.name}
                            services={categoryServices.services}
                            changeActiveSection={changeActiveSection}
                        />
                    ))}
                </div>

                <CallToActionOne/>
            </main>
        </Layout>
    );
};

export default Services;
