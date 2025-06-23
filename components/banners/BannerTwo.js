import Link from 'next/link';

const BannerTwo = () => {
    return (
        <div className="axil-slider-area axil-slide-activation">
            <div className="axil-slide banner-technology bg_image theme-gradient"
                 style={{backgroundImage: "url(images/bg/bg-image-3.png)"}}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-12 col-12">
                            <div className="content text-center">
                                <h1
                                    className="axil-display-1 mb--60 mb_sm--30 mb_md--30"
                                    data-aos="aos-fade-in-up"
                                    data-aos-duration="1000"
                                >
                                    Driving Excellence on Wheels since 1988
                                </h1>
                                <Link href="/portfolio" legacyBehavior>
                                    <a className="axil-button btn-large btn-transparent"
                                       data-aos="aos-fade-in-up"
                                       data-aos-duration="1000"
                                       data-aos-delay="200"
                                    >
                                        <span className="button-text">View Products</span>
                                        <span className="button-icon"/>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerTwo;
