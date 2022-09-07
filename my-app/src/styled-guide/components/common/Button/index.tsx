import React from "react";
import { StyledButton, StyledButtonProps } from "./styles";

interface Props extends StyledButtonProps {
  content: string;
}

const Button = ({ $type = "primary", $width, $padding, content }: Props) => {
  return (
    <StyledButton $type={$type} $width={$width} $padding={$padding}>
      {content}
    </StyledButton>
  );
};

export default Button;
