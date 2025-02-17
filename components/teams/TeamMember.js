import Link from 'next/link';
import Image from "next/legacy/image";
import Tilt from 'react-parallax-tilt';

const TeamMember = ({team}) => {
    return (
        (<Tilt tiltMaxAngleX={9} tiltMaxAngleY={9}>
            <div className="axil-team">
                <div className="inner">
                    <div className="thumbnail paralax-image">
                        <Link href={`/team/${team.id}`}>

                            <Image width={600} height={560} className="w-100" src={team.image} alt="Team Images"/>

                        </Link>
                    </div>
                    <div className="content">
                        <h4 className="title">
                            <Link href={`/team/${team.id}`}>
                                {team.name}
                            </Link>
                        </h4>
                        <p className="subtitle">{team.designation}</p>
                    </div>
                </div>
            </div>
        </Tilt>)
    );
};

export default TeamMember;
