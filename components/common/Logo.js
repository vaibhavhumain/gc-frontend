import Image from 'next/image';
import { useEffect } from 'react';

const Logo = ({ darkMode }) => {
    useEffect(() => {
        console.log("Dark Mode:", darkMode); // Debugging log
    }, [darkMode]); 

    const lightModeSrc = '/images/logo/logo-black.png';
    const darkModeSrc = '/images/logo/logo-white.png';

    return (
        <div style={{ width: '281px', height: '60px', display: 'flex', alignItems: 'center' }}>
            <Image
                key={darkMode ? 'dark' : 'light'} // 🔥 Forces re-render when theme changes
                src={darkMode ? darkModeSrc : lightModeSrc}
                alt="Gobind Coach Builders Logo"
                width={281}
                height={60}
                priority
            />
        </div>
    );
};

export default Logo;
