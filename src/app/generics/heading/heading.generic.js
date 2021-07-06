import React from "react";
import PropTypes from "prop-types";

export const Heading = ({
  children,
  style,
  p,
  pl,
  pr,
  pt,
  pb,
  m,
  ml,
  mr,
  mt,
  mb,
  className,
}) => {
  const padding = { pl: pl ?? p, pr: pr ?? p, pt: pt ?? p, pb: pb ?? p };
  const margin = { ml: ml ?? m, mr: mr ?? m, mt: mt ?? m, mb: mb ?? m };
  return (
    <h1
      className={`h1 ${className}`}
      style={{
        ...style,
        padding: `${padding.pt}px ${padding.pr}px ${padding.pb}px ${padding.pl}px `,
        margin: `${margin.mt}px ${margin.mr}px ${margin.mb}px ${margin.ml}px `,
      }}>
      {children ? children : null}
    </h1>
  );
};

Heading.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
  p: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  m: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  className: PropTypes.string,
};

Heading.defaultProps = {
  p: 0,
  m: 0,
};
