import React, { useState, useEffect } from 'react';
import { doraVoice } from '../utils/speech';
import { sounds } from '../utils/audio';
import { Volume2, Sparkles, Heart } from 'lucide-react';

export default function TyannaCharacter({ 
  message, 
  onRepeat, 
  mood = 'happy',
  size = 'medium',
  accessory = 'crown'
}) {
  const [speaking, setSpeaking] = useState(false);
  const [blinking, setBlinking] = useState(false);
  const [waving, setWaving] = useState(false);

  useEffect(() => {
    const unsub = doraVoice.subscribe((isSpeaking) => {
      setSpeaking(isSpeaking);
      if (isSpeaking) {
        setWaving(true);
        setTimeout(() => setWaving(false), 2000);
      }
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlinking(true);
      setTimeout(() => setBlinking(false), 180);
    }, 3800);
    return () => clearInterval(blinkInterval);
  }, []);

  const handleClickTyanna = () => {
    sounds.playPop();
    setWaving(true);
    setTimeout(() => setWaving(false), 1500);
    if (onRepeat) {
      onRepeat();
    } else {
      doraVoice.speak("Coucou mon ami ! C'est moi, Tyanna ! Amusons-nous ensemble !");
    }
  };

  return (
    <div className={`nia-container size-${size} ${speaking ? 'is-talking' : ''} mood-${mood}`}>
      {/* Interactive Speech Bubble */}
      {message && (
        <div className="nia-speech-bubble animate-pop" onClick={handleClickTyanna}>
          <div className="bubble-top">
            <span className="bubble-name">
              <Sparkles size={14} className="sparkle-anim" /> Tyanna te parle :
            </span>
            <button className="bubble-audio-btn" aria-label="Écouter">
              <Volume2 size={18} />
            </button>
          </div>
          <p className="bubble-text">{message}</p>
          <div className="bubble-arrow"></div>
        </div>
      )}

      {/* Animated Pixar Mini-Me Puppet (Tyanna) */}
      <div className="nia-puppet" onClick={handleClickTyanna} title="Touche Tyanna pour lui parler !">
        <svg viewBox="0 0 200 280" className="nia-svg">
          <defs>
            <radialGradient id="skinGrad" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#A56336" />
              <stop offset="85%" stopColor="#8C4E26" />
              <stop offset="100%" stopColor="#753C19" />
            </radialGradient>
            <radialGradient id="hairGrad" cx="40%" cy="30%" r="60%">
              <stop offset="0%" stopColor="#3A281E" />
              <stop offset="70%" stopColor="#22160F" />
              <stop offset="100%" stopColor="#140C07" />
            </radialGradient>
            <radialGradient id="irisGrad" cx="40%" cy="40%" r="60%">
              <stop offset="0%" stopColor="#A0522D" />
              <stop offset="60%" stopColor="#5C2E14" />
              <stop offset="100%" stopColor="#2D1508" />
            </radialGradient>
            <linearGradient id="blazerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F5EFE6" />
              <stop offset="100%" stopColor="#E2D5C3" />
            </linearGradient>
            <radialGradient id="blushGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FF7675" stopOpacity="0.45" />
              <stop offset="100%" stopColor="#FF7675" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Shadow on ground */}
          <ellipse cx="100" cy="272" rx="46" ry="7" fill="rgba(0,0,0,0.18)" />

          {/* BACK HAIR */}
          <g className="back-hair">
            <circle cx="50" cy="85" r="34" fill="url(#hairGrad)" />
            <circle cx="150" cy="85" r="34" fill="url(#hairGrad)" />
            <circle cx="35" cy="115" r="32" fill="url(#hairGrad)" />
            <circle cx="165" cy="115" r="32" fill="url(#hairGrad)" />
            <circle cx="48" cy="145" r="26" fill="url(#hairGrad)" />
            <circle cx="152" cy="145" r="26" fill="url(#hairGrad)" />
            <circle cx="70" cy="55" r="32" fill="url(#hairGrad)" />
            <circle cx="130" cy="55" r="32" fill="url(#hairGrad)" />
            <circle cx="100" cy="48" r="34" fill="url(#hairGrad)" />
          </g>

          {/* BODY & CLOTHING */}
          <g className="body-group">
            <rect x="80" y="210" width="16" height="52" rx="8" fill="#F8F9FA" />
            <rect x="104" y="210" width="16" height="52" rx="8" fill="#F8F9FA" />
            <ellipse cx="86" cy="264" rx="14" ry="7" fill="#E8D5C4" />
            <ellipse cx="114" cy="264" rx="14" ry="7" fill="#E8D5C4" />

            <path d="M 76 160 L 124 160 L 122 216 L 78 216 Z" fill="#FFFFFF" />
            <path d="M 64 160 Q 100 178 72 222 L 62 218 Q 54 180 64 160 Z" fill="url(#blazerGrad)" stroke="#D4C5B3" strokeWidth="1" />
            <path d="M 136 160 Q 100 178 128 222 L 138 218 Q 146 180 136 160 Z" fill="url(#blazerGrad)" stroke="#D4C5B3" strokeWidth="1" />
            <path d="M 76 160 L 100 190 L 124 160" fill="none" stroke="#D4C5B3" strokeWidth="2" />

            <path d="M 90 152 Q 100 162 110 152" fill="none" stroke="#F1C40F" strokeWidth="2.5" />
            <circle cx="100" cy="162" r="2.5" fill="#F1C40F" />

            {/* Left Arm */}
            <g className="left-arm">
              <path d="M 62 165 Q 48 190 60 210" stroke="url(#blazerGrad)" strokeWidth="16" strokeLinecap="round" fill="none" />
              <circle cx="60" cy="210" r="9" fill="url(#skinGrad)" />
              <rect x="42" y="195" width="22" height="28" rx="4" fill="#8E44AD" transform="rotate(-15 42 195)" />
              <line x1="47" y1="202" x2="60" y2="198" stroke="#FFFFFF" strokeWidth="2" />
            </g>

            {/* Right Arm */}
            <g className={`right-arm ${waving || speaking ? 'is-waving' : ''}`}>
              <path 
                d={waving ? "M 138 165 Q 165 145 160 120" : "M 138 165 Q 155 190 144 210"} 
                stroke="url(#blazerGrad)" 
                strokeWidth="16" 
                strokeLinecap="round" 
                fill="none" 
              />
              <circle cx={waving ? 160 : 144} cy={waving ? 116 : 210} r="9" fill="url(#skinGrad)" />
              {waving && (
                <line x1="160" y1="116" x2="174" y2="104" stroke="#E74C3C" strokeWidth="4" strokeLinecap="round" />
              )}
            </g>
          </g>

          {/* HEAD & FACE */}
          <g className="head-group">
            <rect x="91" y="138" width="18" height="24" rx="6" fill="url(#skinGrad)" />
            <path
              d="M 66 100 C 62 128, 74 148, 100 148 C 126 148, 138 128, 134 100 C 132 76, 68 76, 66 100 Z"
              fill="url(#skinGrad)"
            />

            <circle cx="76" cy="120" r="13" fill="url(#blushGrad)" />
            <circle cx="124" cy="120" r="13" fill="url(#blushGrad)" />

            <circle cx="63" cy="108" r="9" fill="url(#skinGrad)" />
            <circle cx="137" cy="108" r="9" fill="url(#skinGrad)" />
            <circle cx="62" cy="113" r="4" fill="none" stroke="#F1C40F" strokeWidth="2" />
            <circle cx="138" cy="113" r="4" fill="none" stroke="#F1C40F" strokeWidth="2" />

            {/* EYES */}
            <g className="eyes-group">
              {blinking ? (
                <>
                  <path d="M 74 105 Q 85 112 94 105" fill="none" stroke="#22160F" strokeWidth="3.5" strokeLinecap="round" />
                  <path d="M 106 105 Q 115 112 126 105" fill="none" stroke="#22160F" strokeWidth="3.5" strokeLinecap="round" />
                </>
              ) : (
                <>
                  <ellipse cx="84" cy="102" rx="12" ry="14" fill="#FFFFFF" />
                  <ellipse cx="116" cy="102" rx="12" ry="14" fill="#FFFFFF" />
                  <ellipse cx="85" cy="102" rx="9" ry="10.5" fill="url(#irisGrad)" />
                  <ellipse cx="115" cy="102" rx="9" ry="10.5" fill="url(#irisGrad)" />
                  <circle cx="85" cy="102" r="6" fill="#140C07" />
                  <circle cx="115" cy="102" r="6" fill="#140C07" />
                  <circle cx="82" cy="98" r="3.2" fill="#FFFFFF" />
                  <circle cx="88" cy="105" r="1.5" fill="#FFFFFF" />
                  <circle cx="112" cy="98" r="3.2" fill="#FFFFFF" />
                  <circle cx="118" cy="105" r="1.5" fill="#FFFFFF" />
                  <path d="M 73 95 Q 84 89 96 95" fill="none" stroke="#22160F" strokeWidth="3" strokeLinecap="round" />
                  <path d="M 104 95 Q 116 89 127 95" fill="none" stroke="#22160F" strokeWidth="3" strokeLinecap="round" />
                  <line x1="94" y1="92" x2="98" y2="88" stroke="#22160F" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="126" y1="92" x2="130" y2="88" stroke="#22160F" strokeWidth="2.5" strokeLinecap="round" />
                </>
              )}
            </g>

            {accessory === 'glasses' && (
              <g className="nia-glasses">
                <circle cx="84" cy="102" r="13" fill="none" stroke="#E17055" strokeWidth="3" />
                <circle cx="116" cy="102" r="13" fill="none" stroke="#E17055" strokeWidth="3" />
                <line x1="97" y1="102" x2="103" y2="102" stroke="#E17055" strokeWidth="3" />
              </g>
            )}

            <path d={speaking ? "M 74 86 Q 84 81 94 87" : "M 74 88 Q 84 84 94 88"} fill="none" stroke="#22160F" strokeWidth="3.2" strokeLinecap="round" />
            <path d={speaking ? "M 106 87 Q 116 81 126 86" : "M 106 88 Q 116 84 126 88"} fill="none" stroke="#22160F" strokeWidth="3.2" strokeLinecap="round" />

            <path d="M 97 114 Q 100 117 103 114" fill="none" stroke="#683415" strokeWidth="2.5" strokeLinecap="round" />

            <g className="mouth-group">
              {speaking ? (
                <g className="talking-mouth">
                  <path d="M 88 126 Q 100 144 112 126 Z" fill="#962D2D" stroke="#5C1616" strokeWidth="1.5" />
                  <path d="M 91 126 Q 100 131 109 126" fill="#FFFFFF" />
                  <ellipse cx="100" cy="138" rx="6" ry="4" fill="#FF7675" />
                </g>
              ) : (
                <path d="M 89 128 Q 100 139 111 128" fill="none" stroke="#4A1C0E" strokeWidth="3.5" strokeLinecap="round" />
              )}
            </g>

            <g className="front-curls">
              <circle cx="68" cy="72" r="18" fill="url(#hairGrad)" />
              <circle cx="86" cy="64" r="19" fill="url(#hairGrad)" />
              <circle cx="106" cy="62" r="20" fill="url(#hairGrad)" />
              <circle cx="126" cy="66" r="19" fill="url(#hairGrad)" />
              <circle cx="138" cy="76" r="17" fill="url(#hairGrad)" />
              <path d="M 78 78 Q 84 84 88 80" fill="none" stroke="#22160F" strokeWidth="3" strokeLinecap="round" />
              <path d="M 116 80 Q 120 84 124 78" fill="none" stroke="#22160F" strokeWidth="3" strokeLinecap="round" />
            </g>

            {accessory === 'crown' && (
              <g className="nia-crown-hat">
                <path d="M 80 46 L 86 28 L 96 38 L 100 24 L 104 38 L 114 28 L 120 46 Z" fill="#F1C40F" stroke="#F39C12" strokeWidth="2" />
                <circle cx="86" cy="28" r="3" fill="#E74C3C" />
                <circle cx="100" cy="24" r="3.5" fill="#3498DB" />
                <circle cx="114" cy="28" r="3" fill="#2ECC71" />
              </g>
            )}

            {accessory === 'bow' && (
              <g className="nia-pink-bow">
                <path d="M 100 48 L 76 36 L 76 60 Z" fill="#FF7675" stroke="#D63031" strokeWidth="1.5" />
                <path d="M 100 48 L 124 36 L 124 60 Z" fill="#FF7675" stroke="#D63031" strokeWidth="1.5" />
                <circle cx="100" cy="48" r="7" fill="#FD79A8" stroke="#D63031" strokeWidth="1.5" />
              </g>
            )}

            {accessory === 'firefighter' && (
              <g className="nia-fire-helmet">
                <path d="M 72 48 C 72 20 128 20 128 48 L 138 54 L 62 54 Z" fill="#E74C3C" stroke="#C0392B" strokeWidth="2" />
                <circle cx="100" cy="38" r="8" fill="#F1C40F" stroke="#F39C12" strokeWidth="1.5" />
                <path d="M 97 34 L 100 42 L 103 34 Z" fill="#2C3E50" />
              </g>
            )}

            {accessory === 'chef' && (
              <g className="nia-chef-hat">
                <path d="M 76 48 L 124 48 L 124 38 L 76 38 Z" fill="#FFFFFF" stroke="#BDC3C7" strokeWidth="2" />
                <path d="M 72 38 C 65 15 135 15 128 38 Z" fill="#FFFFFF" stroke="#BDC3C7" strokeWidth="2" />
              </g>
            )}
          </g>
        </svg>

        <div className="nia-tag-pill">
          <span>✨ Tyanna</span>
        </div>
      </div>
    </div>
  );
}
