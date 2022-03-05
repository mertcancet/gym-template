import * as React from 'react';

const SvgCheck = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 21 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#Check_svg__a)">
      <path
        d="M17.404 1.667 8 11.306 3.595 7.13.5 10.227 8 17.5 20.5 4.762l-3.096-3.095Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="Check_svg__a">
        <path fill="#fff" transform="translate(.5)" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgCheck;
