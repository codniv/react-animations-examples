import React from "react";
import propTypes from "prop-types";

export const DefaultButton = (props) => {
  const { title, lefticon, righticon, classname, ...rest } = props;
  return (
    <button className={`button default ${classname}`} {...rest}>
      {lefticon}
      {title}
      {righticon}
    </button>
  );
};
DefaultButton.propTypes = {
  title: propTypes.string.isRequired,
  lefticon: propTypes.any,
  righticon: propTypes.any,
  classname: propTypes.string,
};

export const PrimaryButton = (props) => {
  const { title, lefticon, righticon, classname, ...rest } = props;
  return (
    <button className={`button primary ${classname}`} {...rest}>
      {lefticon}
      {title}
      {righticon}
    </button>
  );
};

PrimaryButton.propTypes = {
  title: propTypes.string.isRequired,
  lefticon: propTypes.any,
  righticon: propTypes.any,
  classname: propTypes.string,
};

export const GhostButton = (props) => {
  const { title, lefticon, righticon, classname, ...rest } = props;
  return (
    <button className={`button ghost ${classname}`} {...rest}>
      {lefticon}
      {title}
      {righticon}
    </button>
  );
};

export const IconButton = ({ icon, onClick }) => {
  return (
    <div {...{ onClick }} className="button icon-button">
      {icon}
    </div>
  );
};

GhostButton.propTypes = {
  title: propTypes.string.isRequired,
  lefticon: propTypes.any,
  righticon: propTypes.any,
  classname: propTypes.string,
};
