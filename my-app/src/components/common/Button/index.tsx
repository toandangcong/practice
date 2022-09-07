import React from "react";
import { ButtonDisabled, ButtonPrimary, ButtonSecondary } from "./styles";

interface Props {
  children: JSX.Element[] | JSX.Element | string;
  padding?: string;
  width?: string;
  $type: "primary" | "secondary" | "disabled";
}

const Button = ({
  $type = "primary",
  width = "100%",
  padding = "10px 25px",
  children,
  ...rest
}: Props) => {
  switch ($type) {
    case "primary":
      return (
        <ButtonPrimary width={width} padding={padding} {...rest}>
          {children}
        </ButtonPrimary>
      );

    case "secondary":
      return (
        <ButtonSecondary width={width} padding={padding} {...rest}>
          {children}
        </ButtonSecondary>
      );

    case "disabled":
      return (
        <ButtonDisabled width={width} padding={padding} {...rest}>
          {children}
        </ButtonDisabled>
      );

    default:
      throw Error("Invalid $type");
  }
};

export default Button;
