import React, { ImgHTMLAttributes } from 'react';

const LeetcodeIcon: React.FC<ImgHTMLAttributes<HTMLImageElement>> = ({
  className,
  width = 24,
  height = 24,
  style,
  ...rest
}) => (
  <img
    src="https://img.icons8.com/?size=100&id=9L16NypUzu38&format=png&color=000000"
    alt="Leetcode Icon"
    className={className}
    width={width}
    height={height}
    style={{ ...style, display: 'inline-block' }}
    {...rest}
  />
);

export default LeetcodeIcon;
