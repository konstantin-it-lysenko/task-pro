const FourCircles = ({ width, height, fillColor, strokeColor }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 18"
      fill={fillColor || null}
      stroke={strokeColor || null}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.47276 3.92535C2.64182 3.20459 3.2046 2.64182 3.92535 2.47276V2.47276C4.54997 2.32624 5.20003 2.32624 5.82465 2.47276V2.47276C6.54541 2.64182 7.10818 3.20459 7.27724 3.92535V3.92535C7.42376 4.54997 7.42376 5.20003 7.27724 5.82465V5.82465C7.10818 6.54541 6.54541 7.10818 5.82465 7.27724V7.27724C5.20003 7.42376 4.54997 7.42376 3.92535 7.27724V7.27724C3.2046 7.10818 2.64182 6.54541 2.47276 5.82465V5.82465C2.32624 5.20003 2.32624 4.54997 2.47276 3.92535V3.92535Z"
        strokeWidth="1.5"
      />
      <path
        d="M2.47276 12.1753C2.64182 11.4546 3.2046 10.8918 3.92535 10.7228V10.7228C4.54997 10.5762 5.20003 10.5762 5.82465 10.7228V10.7228C6.54541 10.8918 7.10818 11.4546 7.27724 12.1753V12.1753C7.42376 12.8 7.42376 13.45 7.27724 14.0747V14.0747C7.10818 14.7954 6.54541 15.3582 5.82465 15.5272V15.5272C5.20003 15.6738 4.54997 15.6738 3.92535 15.5272V15.5272C3.2046 15.3582 2.64182 14.7954 2.47276 14.0747V14.0747C2.32624 13.45 2.32624 12.8 2.47276 12.1753V12.1753Z"
        strokeWidth="1.5"
      />
      <path
        d="M10.7228 3.92535C10.8918 3.20459 11.4546 2.64182 12.1753 2.47276V2.47276C12.8 2.32624 13.45 2.32624 14.0747 2.47276V2.47276C14.7954 2.64182 15.3582 3.20459 15.5272 3.92535V3.92535C15.6738 4.54997 15.6738 5.20003 15.5272 5.82465V5.82465C15.3582 6.54541 14.7954 7.10818 14.0747 7.27724V7.27724C13.45 7.42376 12.8 7.42376 12.1753 7.27724V7.27724C11.4546 7.10818 10.8918 6.54541 10.7228 5.82465V5.82465C10.5762 5.20003 10.5762 4.54997 10.7228 3.92535V3.92535Z"
        strokeWidth="1.5"
      />
      <path
        d="M10.7228 12.1753C10.8918 11.4546 11.4546 10.8918 12.1753 10.7228V10.7228C12.8 10.5762 13.45 10.5762 14.0747 10.7228V10.7228C14.7954 10.8918 15.3582 11.4546 15.5272 12.1753V12.1753C15.6738 12.8 15.6738 13.45 15.5272 14.0747V14.0747C15.3582 14.7954 14.7954 15.3582 14.0747 15.5272V15.5272C13.45 15.6738 12.8 15.6738 12.1753 15.5272V15.5272C11.4546 15.3582 10.8918 14.7954 10.7228 14.0747V14.0747C10.5762 13.45 10.5762 12.8 10.7228 12.1753V12.1753Z"
        strokeWidth="1.5"
      />
    </svg>
  );
};

export default FourCircles;
