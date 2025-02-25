import Image from 'next/image';
const Logo = ({ darkMode }) => {
    const lightModeSrc = '/images/logo/logo-black.png'; 
    const darkModeSrc = '/images/logo/logo-white.png';

    return (
        <div style={{ width: '281px', height: '60px', display: 'flex', alignItems: 'center' }}>
            <Image
                src={darkMode ? darkModeSrc : lightModeSrc}
                alt="Gobind Coach Builders Logo"
                width={281}
                height={60}
                objectFit="contain"
                priority
            />
        </div>
    );
};

export default Logo;
 