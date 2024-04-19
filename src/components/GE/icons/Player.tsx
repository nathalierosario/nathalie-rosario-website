const YouTubePlayerIcon = ({ size = 50 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size * 0.6}
    viewBox="0 0 100 60"
    fill="none"
  >
    <rect width="100" height="60" rx="8" fill="transparent" />
    <path d="M40 45L70 30L40 15V45Z" fill="red" />
    <rect
      x="5"
      y="5"
      width="90"
      height="50"
      rx="6"
      stroke="white"
      stroke-width="2"
    />
  </svg>
);

export default YouTubePlayerIcon;
