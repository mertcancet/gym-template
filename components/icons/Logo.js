import * as React from 'react';

const SvgLogo = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask id="Logo_svg__a" fill="#fff">
      <path d="M17.808 30a9.602 9.602 0 0 1 10.3-6.983c4.634.491 8.317 4.4 8.55 9.05a9.683 9.683 0 0 1-.466 3.491c-.217.667-.867 1.109-1.575 1.109H9.798c-4.206 0-7.361-3.85-6.536-7.975L8.333 3.333h10l3.334 5.834-7.142 5.108-2.025-2.608" />
    </mask>
    <path
      d="m28.108 23.017-.105.994.105-.994Zm8.55 9.05 1-.048v-.002l-1 .05Zm-.466 3.491-.95-.312-.001.003.95.31Zm-32.93-6.866.98.197-.98-.197ZM8.333 3.333v-1h-.82l-.16.804.98.196Zm10 0 .869-.496-.288-.504h-.58v1Zm3.334 5.834.581.813.735-.525-.448-.785-.868.497Zm-7.142 5.108-.79.613.59.76.782-.56-.582-.813Zm4.247 15.991a8.602 8.602 0 0 1 9.23-6.255l.212-1.989a10.602 10.602 0 0 0-11.37 7.712l1.928.532Zm9.23-6.255c4.143.44 7.449 3.946 7.658 8.106l1.997-.1c-.258-5.14-4.318-9.451-9.443-9.995l-.211 1.989Zm7.658 8.103a8.683 8.683 0 0 1-.418 3.132l1.9.624c.396-1.207.58-2.504.515-3.851l-1.997.095Zm-.42 3.135c-.072.224-.315.418-.623.418v2c1.108 0 2.165-.69 2.526-1.8l-1.902-.618Zm-.623.418H9.798v2h24.819v-2Zm-24.819 0c-3.575 0-6.257-3.272-5.556-6.779l-1.96-.392c-.95 4.744 2.678 9.17 7.516 9.17v-2Zm-5.556-6.779L9.314 3.53l-1.961-.392-5.072 25.36 1.961.392ZM8.333 4.334h10v-2h-10v2Zm9.132-.504 3.333 5.834 1.737-.993-3.333-5.833-1.737.992Zm3.62 4.524-7.142 5.109 1.164 1.626 7.141-5.108-1.163-1.627Zm-5.77 5.309-2.025-2.609-1.58 1.227 2.025 2.608 1.58-1.226Z"
      fill="#E11B19"
      mask="url(#Logo_svg__a)"
    />
    <path
      d="m14.533 14.275 3.8 14.058M17.808 30a9.602 9.602 0 0 1 10.3-6.983c4.634.491 8.317 4.4 8.55 9.05a9.683 9.683 0 0 1-.466 3.491c-.217.667-.867 1.109-1.575 1.109H9.798c-4.206 0-7.361-3.85-6.536-7.975L8.333 3.333h10l3.334 5.834-7.142 5.108-2.025-2.608L17.808 30Z"
      stroke="#E11B19"
      strokeWidth={4}
      strokeMiterlimit={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgLogo;