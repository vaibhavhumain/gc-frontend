import Image from "next/legacy/image";
import Link from 'next/link';
import Tilt from 'react-parallax-tilt';
import {SplitText} from '../common/SplitText';
import {slugify} from '../../helpers/utilities';

const CaseStudyCard = ({column, data}) => {

    return (
        (<div className={column} data-aos="aos-fade-in-up" data-aos-duration="1000">
            <div className="axil-case-study">
                <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5}>
                    <div className="thumbnail">
                        <Link href={`/projects/${slugify(data.title)}`}>

                            <Image
                                width={data.thumbnail.width}
                                height={data.thumbnail.height}
                                className="w-100 paralax-image"
                                src={data.thumbnail.src}
                                alt="Axil Case Study Images"
                            />

                        </Link>
                    </div>
                </Tilt>
                <div className="content">
                    <div className="inner">
                        <span className="category">
                          {data.category.map((cat, catIndex) => (
                              <SplitText key={`category-${catIndex}`}>
                                  {catIndex === data.category.length - 1 ? cat : `${cat}, `}
                              </SplitText>
                          ))}
                        </span>
                        <h4 className="title">
                            <Link href={`/projects/${slugify(data.title)}`}>

                                <SplitText>{data.title}</SplitText>

                            </Link>
                        </h4>
                    </div>
                </div>
            </div>
        </div>)
    );
};

export default CaseStudyCard;
