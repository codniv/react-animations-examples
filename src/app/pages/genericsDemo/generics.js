import React from "react";
import {
  Bold,
  Chip,
  Heading,
  Italic,
  Label,
  Link,
  Paragraph,
  Title,
  Underline,
  Br,
} from "../../generics";
import { Tab, ToolTip } from "../../commons";
import { CompWrapper } from "../../hocs";
export const GenericCheck = () => {
  const tabref = React.useRef();
  return (
    <CompWrapper>
      <Bold>This is Bold</Bold>
      <Chip>This is Chip</Chip>
      <Heading>This is Heading</Heading>
      <Italic>This is Italic</Italic>
      <Label>This is Label</Label>
      <Br />
      <Link link="www.fb.com">This is Link</Link>
      <Paragraph>This is paragraph</Paragraph>
      <Title>This is Title</Title>
      <Underline>This is Underline</Underline>
      <ToolTip
        text="This is ToolTip text"
        top
        containerStyle={{ cursor: "help" }}>
        This is ToolTip
      </ToolTip>
      <Tab
        panes={[
          {
            render: () => <div>TAB A</div>,
            title: "tab A",
          },
          {
            render: () => <div>TAB B</div>,
            title: "tab B",
          },
        ]}
      />
    </CompWrapper>
  );
};
