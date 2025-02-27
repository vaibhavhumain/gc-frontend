import Link from 'next/link';
import Router from 'next/router';
import {useEffect} from 'react';

const SideNav = ({toggleSidenav}) => {
    const closeSideNav = () => {
        const html = document.querySelector("html"),
            sideNav = document.querySelector(".side-nav");

        sideNav.classList.remove("opened");
        html.classList.remove("side-nav-opened");
    };

    useEffect(() => {
        // Close sidenav while navigate to another page
        Router.events.on("routeChangeStart", closeSideNav);
        return () => {
            Router.events.off("routeChangeStart", closeSideNav);
        };
    }, []);

    return (
        <div className="side-nav">
            <div className="side-nav-inner">
                <form action="#" className="side-nav-search-form">
                    <div className="form-group search-field">
                        <input
                            type="text"
                            className="search-field"
                            name="search-field"
                            placeholder="Search..."
                        />
                        <button className="side-nav-search-btn">
                            <i className="fas fa-search"/>
                        </button>
                    </div>
                </form>

                <div className="side-nav-content">
                    <div className="row ">
                        <div className="col-lg-5 col-xl-6 col-12">
                            <ul className="main-navigation">
                                <li>
                                    <Link href="/">Home</Link>
                                </li>
                                <li>
                                    <Link href="/testimonial">Testimonials</Link>
                                </li>
                                <li>
                                    <Link href="/case-study">Case Study</Link>
                                </li>
                                <li>
                                    <Link href="/portfolio">Our Products</Link>
                                </li>
                                <li>
                                    <Link href="/comming-soon">Coming Soon</Link>
                                </li>

                            </ul>
                        </div>

                        <div className="col-lg-7 col-xl-6 col-12">
                            <div className="axil-contact-info-inner">
                                <div className="axil-contact-info">
                                    <address className="address">
                                        <span className="title">Contact Information</span>
                                        <p>
                                            <b>Manufacturing Unit:</b> Bhadaur near reliance petrol pump, Barnala road, Distt. Barnala, Punjab, 148102<br></br>
                                            <b>Corporate Office</b> SCO 106, 2ND FLOOR, Sector 86, SAS Nagar, Mohali, 160055
                                        </p>
                                    </address>
                                    <address className="address">
                                        <span className="title">
                                          We&lsquo;re Available Mon to Sat (9am to 6pm). Call Now.
                                        </span>
                                        <p>
                                            <a className="tel" href="tel:+919595000040">
                                                <i className="fas fa-phone"/>
                                                +91 95950 00040
                                            </a>
                                        </p>
                                        <p>
                                            <a className="mail" href="mailto:sales@gobindcoach.com">
                                                <i className="fas fa-fax"/>
                                                sales@gobindcoach.com
                                            </a>
                                        </p>
                                    </address>
                                </div>

                                <div className="axil-contact-info">
                                    <h5 className="title">Find us here</h5>
                                    <div className="contact-social-share d-flex align-items-center">
                                        <ul className="social-share style-rounded">
                                            <li>
                                                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                                                    <i className="fab fa-facebook-f"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://twitter.com/" target="_blank" rel="noreferrer">
                                                    <i className="fa-brands fa-x-twitter"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.behance.net/" target="_blank" rel="noreferrer">
                                                    <i className="fab fa-behance"/>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                                                    <i className="fab fa-linkedin-in"/>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="close-sidenav" onClick={toggleSidenav}>
                    <button className="close-button">
                        <i className="fal fa-times"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SideNav;
