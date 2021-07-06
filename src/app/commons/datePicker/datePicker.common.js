import React from "react";
import DatePicker from "react-datepicker";
import { BiCalendarAlt } from "react-icons/all";

import { Paragraph } from "../../generics";
import { Box } from "../../commons";

export const DatePickerCustom = React.forwardRef((props, ref) => {
  const { value, onChange } = props;
  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <Box onClick={onClick} ref={ref} flex={1} flexBox alCenter>
      <Paragraph mr={40}>{value?.length ? value : "Start Date"}</Paragraph>
      <BiCalendarAlt
        style={{
          fontSize: 20,
          color: "#a1a1a1",
          position: "absolute",
          right: 0,
        }}
      />
    </Box>
  ));
  return (
    <DatePicker
      selected={value}
      onChange={onChange}
      customInput={<CustomInput />}
    />
  );
});
