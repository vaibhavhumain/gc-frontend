import Link from 'next/link';
import Image from "next/legacy/image";
import {useEffect, useState} from 'react';
import ServiceData from '../../data/Services.json';
import {camelCaseToDashed} from '../../helpers/utilities';
import SectionTitle from '../common/SectionTitle';

const ServiceThree = () => {
    const [servicesOurValues, setServicesOurValues] = useState([]);

    const getServicesByCategory = () => {
        const ourValues = ServiceData.filter(
            (service) => service.category === "Our values"
        );

        setServicesOurValues(ourValues);
    };

    const serviceColor = (index) => {
        if (index === 1) return "color-var--2"
        else if (index === 2) return "color-var--3"
        else if (index === 3) return "color-var--4"
        else if (index === 4) return "color-var--5"
        else if (index === 5) return "color-var--2"
        else ""
    }

    useEffect(() => {
        getServicesByCategory();
    }, []);

    return (
        (<div className="axil-service-area ax-section-gap bg-color-lightest">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SectionTitle
                            title="Dive into behind the seens of Gobind Coach Builders"
                            subtitle="Behind the scenes"
                            description="With each bus body we construct, Gobind Coach Builders ensures accuracy, robustness, and creativity. We are the industry's go-to option because we guarantee safety, style, and dependability with our unique solutions, premium materials, and customer-first philosophy."
                            color="extra08-color"
                            alignment="center"
                        />
                    </div>
                </div>
            </div>
        </div>)
    );
};

export default ServiceThree;
