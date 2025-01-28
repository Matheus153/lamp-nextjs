// components/Lamp.jsx (atualizado)
'use client';

import { useState } from 'react';
import Image from 'next/image';

const Lamp = () => {
    const [isOn, setIsOn] = useState(false);

    const toggleLamp = () => {
        setIsOn(!isOn);
    };

    return (
        <div className={`container ${isOn ? 'light-on' : ''}`}> {/* Adiciona classe dinâmica */}

            <div className={`lamp-container ${isOn ? 'glow' : ''}`}>
                <Image
                    src={isOn ? "/lamp-on.png" : "/lamp-off.png"}
                    alt={isOn ? "Lâmpada acesa" : "Lâmpada apagada"}
                    width={300}
                    height={300}
                    className={`lamp-image ${isOn ? 'power-on' : 'power-off'}`}
                />
            </div>

            <div className="switch-container">
                <div
                    className={`light-switch ${isOn ? 'on' : 'off'}`}
                    onClick={toggleLamp}
                >
                    <div className="switch-knob"></div>
                    <span className="switch-text">{isOn ? '' : ''}</span>
                </div>
            </div>

            <style jsx>{`
        :root {
          --primary-color: #fdd835;
          --bg-color: #f0f0f0;
          --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .container {
          text-align: center;
          padding: 2rem;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background-color: var(--bg-color);
          transition: background-color 0.5s ease;
        }
        
        /* Nova cor de fundo quando a lâmpada está ligada */
        .container.light-on {
          background-color:rgba(124, 125, 58, 0.1); /* Cor mais clara */
        }

        .lamp-container {
          position: relative;
          margin: 2rem 0;
          transition: transform 0.3s ease;
        }

        .lamp-image {
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.1));
        }

        .power-on {
          animation: powerOn 0.5s ease forwards;
        }

        .power-off {
          animation: powerOff 0.3s ease forwards;
        }

        .glow {
          &::after {
            content: '';
            position: absolute;
            top: 40%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 150%;
            height: 150%;
            background: radial-gradient(circle, 
              rgba(253,216,53,0.4) 0%, 
              rgba(253,216,53,0.2) 50%, 
              transparent 70%);
            opacity: 0.8;
            z-index: -1;
            animation: glowPulse 2s infinite ease-in-out;
          }
        }

        .switch-container {
          margin-top: 2rem;
          position: relative;
        }

        .light-switch {
          position: relative;
          width: 115px;
          height: 50px;
          background: #e0e0e0;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--shadow);
          overflow: hidden;
        }

        .light-switch.on {
          background: #4CAF50;
        }

        .light-switch.off {
          background:rgb(70, 68, 68);
        }

        .switch-knob {
          position: absolute;
          top: 5px;
          left: ${isOn ? 'calc(100% - 50px)' : '8px'};
          width: 40px;
          height: 40px;
          background: #fff;
          border-radius: 50%;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        .switch-text {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          font-weight: bold;
          color: white;
          font-size: 1.2rem;
          left: ${isOn ? '20px' : '70px'};
          transition: all 0.3s ease;
        }

        @keyframes powerOn {
          0% {
            transform: scale(0.95);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes powerOff {
          0% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes glowPulse {
          0% { opacity: 0.6; }
          50% { opacity: 0.8; }
          100% { opacity: 0.6; }
        }

        .light-switch:hover .switch-knob {
          transform: scale(1.1);
        }

        .light-switch:active .switch-knob {
          transform: scale(0.9);
        }
      `}</style>
        </div>
    );
};

export default Lamp;