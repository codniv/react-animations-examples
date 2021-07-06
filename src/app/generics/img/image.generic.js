import React from "react";
import PropTypes from "prop-types";

export const Image = ({ link, alt, className, style }) => {
  return (
    <img
      src={link}
      alt={alt}
      className={className ? className : null}
      style={style ? style : null}
    />
  );
};

Image.propTypes = {
  link: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};
