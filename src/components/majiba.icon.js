import React from "react";
function Icon({ width = 48, height = 48 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      version="1.1"
      viewBox="0 0 16.933 16.933"
    >
      <g transform="translate(0 -280.067)">
        <g>
          <circle
            cx="8.467"
            cy="288.533"
            r="8.467"
            fill="#ffc400"
            fillOpacity="1"
            stroke="none"
            strokeDasharray="none"
            strokeMiterlimit="4"
            strokeOpacity="0"
            strokeWidth="0.288"
            opacity="1"
          ></circle>
          <g transform="matrix(1.2079 0 0 1.13889 -30.805 -30.564)">
            <g
              fillOpacity="1"
              stroke="none"
              strokeDasharray="none"
              strokeMiterlimit="4"
              strokeOpacity="0"
              transform="translate(6.095 -4.347)"
            >
              <path
                fill="#000"
                strokeWidth="0.265"
                d="M23.019 283.102c1.993 1.075 5.824 1.226 7.015.935l-1.503 5.413c-1.21.48-4.155.41-5.68-.635z"
                opacity="1"
              ></path>{" "}
              <ellipse
                cx="60.685"
                cy="276.968"
                fill="#000"
                strokeWidth="0.265"
                opacity="1"
                rx="5.262"
                ry="1.62"
                transform="rotate(6.967)"
              ></ellipse>
              <ellipse
                cx="61.446"
                cy="277.179"
                fill="#1a1a1a"
                strokeWidth="0.162"
                opacity="1"
                rx="3.263"
                ry="0.979"
                transform="matrix(.993 .11816 -.1245 .99222 0 0)"
              ></ellipse>
            </g>
            <g>
              <path
                fill="red"
                stroke="none"
                strokeLinecap="butt"
                strokeLinejoin="miter"
                strokeOpacity="1"
                strokeWidth="0.265"
                d="M30.214 278.358l-.219-2.95.896-.087 1.347 1.314c.252.138.478.045.7-.098l.838-1.564.984-.13.387 3.955c-.35.128-.644.154-1.152.163l-.187-2.05-.792.842c-.198.084-.397.165-.748.064l-.992-.66.084 1.529c-.299-.056-.848-.177-1.146-.328z"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
export default Icon;
