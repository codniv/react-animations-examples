import React from "react";
import propTypes from "prop-types";
import { BiSearch } from "react-icons/all";

import { Title } from "../../generics";
import { Box } from "../../commons";

export const InputField = React.forwardRef((props, ref) => {
  const {
    // value,
    name,
    defaultValue,
    placeholder,
    style,
    onChange,
    className,
    type,
    disabled,
    ...rest
  } = props;
  return (
    <input
      name={name}
      ref={ref}
      defaultValue={defaultValue}
      onChange={onChange}
      style={style}
      className={`inputfield ${className} ${disabled && `disabled`}`}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      // value={value}
      {...rest}
    />
  );
});

export const InputFieldBorderless = React.forwardRef((props, ref) => {
  const {
    // value,
    name,
    defaultValue,
    placeholder,
    style,
    onChange,
    className,
    type,
    disabled,
    ...rest
  } = props;
  return (
    <input
      name={name}
      ref={ref}
      defaultValue={defaultValue}
      onChange={onChange}
      style={style}
      className={`inputfield borderless ${className} ${disabled && `disabled`}`}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
      // value={value}
      {...rest}
    />
  );
});

export const TextArea = React.forwardRef((props, ref) => {
  const {
    name,
    defaultValue,
    placeholder,
    style,
    onChange,
    className,
    type,
    disabled,
  } = props;
  return (
    <textarea
      name={name}
      ref={ref}
      cols={40}
      rows={5}
      defaultValue={defaultValue}
      onChange={onChange}
      style={style}
      className={`inputfield ${className}`}
      placeholder={placeholder}
      type={type}
      disabled={disabled}
    />
  );
});

export const FormInput = ({ children, label, newElement, required }) => {
  return (
    <Box mb={20}>
      <Box mb={10} flexBox alCenter jSpace>
        <Title>
          {label} {required && <span style={{ color: "red" }}>*</span>}
        </Title>
        {newElement}
      </Box>

      {children}
    </Box>
  );
};
FormInput.propTypes = {
  children: propTypes.element.isRequired,
  label: propTypes.string.isRequired,
};

export const SearchField = React.forwardRef((props, ref) => {
  const {
    value,
    name,
    defaultValue,
    placeholder,
    style,
    onChange,
    className,
    type,
    disabled,
    ...rest
  } = props;
  return (
    <div className="searchbox">
      <input
        value={value}
        name={name}
        ref={ref}
        defaultValue={defaultValue}
        onChange={onChange}
        style={style}
        className={`searchfield ${className} ${disabled && `disabled`}`}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        // value={value}
        {...rest}
      />
      <div className="icon">
        <BiSearch size={24} />
      </div>
    </div>
  );
});
