import React from "react";
import Select from "react-select";

const selectStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    borderRadius: 4,
    borderColor: isFocused ? "#0284a4" : "#E1E1E1",
    backgroundColor: "#F8F8F8",
    boxShadow: isFocused && "none",
    "&:hover": { borderColor: "#0284a4" },
  }),
  option: (styles, { isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? "#0284a4" : "#fff",
      "&:hover": { backgroundColor: "#e9e9e9" },
    };
  },
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
};

const selectBorderlessStyles = {
  control: (styles, { isFocused }) => ({
    ...styles,
    borderRadius: 4,
    borderColor: "transparent",
    backgroundColor: "#fafafa",
    boxShadow: isFocused && "none",
    "&:hover": { borderColor: "transparent" },
  }),
  option: (styles, { isSelected }) => {
    return {
      ...styles,
      backgroundColor: isSelected ? "#0284a4" : "#fff",
      "&:hover": { backgroundColor: "#e9e9e9" },
    };
  },
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
};

export const SelectField = ({
  options,
  formatGroupLabel,
  onChangeValue,
  getOptionLabel,
  getOptionValue,
  isSearchable,
  isClearable,
  placeholder,
  isLoading,
  defaultValue,
  isMulti,
  value,
  isOptionDisabled,
}) => {
  return (
    <div>
      <Select
        isOptionDisabled={isOptionDisabled}
        isMulti={isMulti}
        instanceId="react-select"
        className="selectfield"
        classNamePrefix="react-select"
        styles={selectStyles}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isLoading={isLoading}
        onChange={onChangeValue}
        getOptionLabel={(option) => `${option[getOptionLabel]}`}
        getOptionValue={(option) => `${option[getOptionValue]}`}
        options={options}
        formatGroupLabel={formatGroupLabel}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
      />
    </div>
  );
};

export const SelectFieldBorderless = ({
  instanceId = "react-select",
  options,
  formatGroupLabel,
  onChangeValue,
  getOptionLabel,
  getOptionValue,
  isSearchable,
  isClearable,
  placeholder,
  isLoading,
  defaultValue,
  isMulti,
  value,
  isOptionDisabled,
}) => {
  return (
    <div>
      <Select
        isOptionDisabled={isOptionDisabled}
        isMulti={isMulti}
        instanceId={instanceId}
        className="selectfield"
        classNamePrefix="react-select"
        styles={selectBorderlessStyles}
        isSearchable={isSearchable}
        isClearable={isClearable}
        isLoading={isLoading}
        onChange={onChangeValue}
        getOptionLabel={(option) => `${option[getOptionLabel]}`}
        getOptionValue={(option) => `${option[getOptionValue]}`}
        options={options}
        formatGroupLabel={formatGroupLabel}
        placeholder={placeholder}
        defaultValue={defaultValue}
        value={value}
      />
    </div>
  );
};
