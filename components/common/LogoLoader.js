import React, { useEffect } from 'react';

const LogoLoader = ({ onFinish }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className="logo-loader">
            <img src="/images/logo/logo-5.png" alt="Gobind Coach Logo" className="logo-animation" />
            <style jsx>{`
                .logo-loader {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    background: white;
                    z-index: 9999;
                    position: fixed;
                    width: 100%;
                    top: 0;
                    left: 0;
                }

                .logo-animation {
                    width: 280px;
                    animation: fadeInScale 2.5s ease-in-out;
                }

                @keyframes fadeInScale {
                    0% {
                        opacity: 0;
                        transform: scale(0.3);
                    }
                    100% {
                        opacity: 1;
                        transform: scale(1.2); /* Final size slightly larger than normal */
                    }
                }
            `}</style>
        </div>
    );
};

export default LogoLoader;
