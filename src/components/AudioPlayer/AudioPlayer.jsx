import { useRef, useState, useEffect } from "react";
import Draggable from "react-draggable";
import useSound from "use-sound";
// import useAudio from "../../hooks/useAudio";
import { StyledAudioPlayer } from "./styles";

import audioSample from "../../assets/audio/love_yourz.mp3";

const AudioPlayer = () => {
  const nodeRef = useRef(null);
  const [play, { stop }] = useSound(audioSample, { loop: true });
  const [startPlaying, setStartPlaying] = useState(false);

  const handlePlay = () => {
    setStartPlaying(!startPlaying);
  };

  useEffect(() => {
    startPlaying ? play() : stop();
  }, [startPlaying]);

  return (
    <Draggable nodeRef={nodeRef}>
      <StyledAudioPlayer
        onClick={handlePlay}
        ref={nodeRef}
        onTouchStart={handlePlay}
      >
        <svg
          width="35"
          height="37"
          viewBox="0 0 35 37"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.1875 17.5C2.1875 9.04313 9.04313 2.1875 17.5 2.1875C25.9569 2.1875 32.8125 9.04313 32.8125 17.5V21H28.2188C27.615 21 27.125 21.49 27.125 22.0938V33.9062C27.125 34.51 27.615 35 28.2188 35H29.9688C31.3031 35 32.5828 34.4699 33.5264 33.5264C34.4699 32.5828 35 31.3031 35 29.9688V17.5C35 7.83475 27.1652 0 17.5 0C7.83475 0 0 7.83475 0 17.5V29.9688C0 31.3031 0.530077 32.5828 1.47362 33.5264C2.41716 34.4699 3.69688 35 5.03125 35H6.78125C7.385 35 7.875 34.51 7.875 33.9062V22.0938C7.875 21.49 7.385 21 6.78125 21H2.1875V17.5ZM29.3125 23.1875H32.8125V29.9688C32.8125 30.723 32.5129 31.4463 31.9796 31.9796C31.4463 32.5129 30.723 32.8125 29.9688 32.8125H29.3125V23.1875ZM2.1875 23.1875H5.6875V32.8125H5.03125C4.27704 32.8125 3.55372 32.5129 3.02042 31.9796C2.48711 31.4463 2.1875 30.723 2.1875 29.9688V23.1875ZM16.4062 16.8438V35.6562C16.4062 35.9463 16.5215 36.2245 16.7266 36.4296C16.9317 36.6348 17.2099 36.75 17.5 36.75C17.7901 36.75 18.0683 36.6348 18.2734 36.4296C18.4785 36.2245 18.5938 35.9463 18.5938 35.6562V16.8438C18.5938 16.5537 18.4785 16.2755 18.2734 16.0704C18.0683 15.8652 17.7901 15.75 17.5 15.75C17.2099 15.75 16.9317 15.8652 16.7266 16.0704C16.5215 16.2755 16.4062 16.5537 16.4062 16.8438ZM12.4688 21C13.0725 21 13.5625 21.49 13.5625 22.0938V30.4062C13.5625 30.6963 13.4473 30.9745 13.2421 31.1796C13.037 31.3848 12.7588 31.5 12.4688 31.5C12.1787 31.5 11.9005 31.3848 11.6954 31.1796C11.4902 30.9745 11.375 30.6963 11.375 30.4062V22.0938C11.375 21.49 11.865 21 12.4688 21ZM23.625 22.0938C23.625 21.8037 23.5098 21.5255 23.3046 21.3204C23.0995 21.1152 22.8213 21 22.5312 21C22.2412 21 21.963 21.1152 21.7579 21.3204C21.5527 21.5255 21.4375 21.8037 21.4375 22.0938V30.4062C21.4375 30.6963 21.5527 30.9745 21.7579 31.1796C21.963 31.3848 22.2412 31.5 22.5312 31.5C22.8213 31.5 23.0995 31.3848 23.3046 31.1796C23.5098 30.9745 23.625 30.6963 23.625 30.4062V22.0938Z"
            fill="url(#paint0_linear_242_5)"
            fillOpacity="0.6"
          />
          <defs>
            <linearGradient
              id="paint0_linear_242_5"
              x1="17.5"
              y1="0"
              x2="17.5"
              y2="36.75"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#E0C04A" />
              <stop offset="0.15625" stopColor="#FFF8DD" />
              <stop offset="0.25" stopColor="#E7D183" />
              <stop offset="0.494792" stopColor="#F1CF50" />
              <stop offset="0.640625" stopColor="#FFFDF7" />
              <stop offset="0.8125" stopColor="#F3D875" />
              <stop offset="1" stopColor="#FBDD6E" />
            </linearGradient>
          </defs>
        </svg>
      </StyledAudioPlayer>
    </Draggable>
  );
};

export default AudioPlayer;
