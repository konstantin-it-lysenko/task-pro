const Loading = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={fillColor || null}
      stroke={strokeColor || null}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_4566_2427)">
        <path
          d="M2.50519 12.7498C1.56607 11.1224 2.04355 9.04833 3.59847 7.99505L3.60013 7.99338C4.84923 7.14926 6.49331 7.17759 7.71325 8.06421L10.2873 9.93578C11.5064 10.8224 13.1505 10.8507 14.4004 10.0066L14.4021 10.0049C15.9578 8.95166 16.4361 6.87594 15.4953 5.25019M12.7515 15.4945C11.1241 16.4336 9.04999 15.9561 7.99671 14.4012L7.99505 14.3995C7.15093 13.1504 7.17926 11.5063 8.06588 10.2864L9.93744 7.71238C10.8241 6.49327 10.8524 4.84919 10.0083 3.59926L10.0049 3.59759C8.95166 2.04351 6.87594 1.56437 5.25019 2.50515M14.3029 3.69676C17.2319 6.62577 17.2319 11.3739 14.3029 14.3029C11.3739 17.2319 6.62577 17.2319 3.69676 14.3029C0.767747 11.3739 0.767747 6.62577 3.69676 3.69676C6.62577 0.767747 11.3739 0.767747 14.3029 3.69676Z"
          // strokeOpacity="0.5"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_4566_2427">
          <rect width={width} height={height} fill={fillColor || null} />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Loading;
