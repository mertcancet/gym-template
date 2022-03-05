import * as React from 'react';

const SvgClock = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20 3.333c9.19 0 16.667 7.477 16.667 16.667 0 9.19-7.477 16.667-16.667 16.667-9.19 0-16.667-7.477-16.667-16.667C3.333 10.81 10.81 3.333 20 3.333ZM20 0C8.955 0 0 8.955 0 20s8.955 20 20 20 20-8.955 20-20S31.045 0 20 0Zm1.667 20V10h-3.334v13.333H30V20h-8.333Z"
      fill="#fff"
    />
  </svg>
);

export default SvgClock;
