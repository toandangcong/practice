import styled, { css } from "styled-components";
import { color } from "../../../utils/constant";

interface Props {
  width: string;
  padding: string;
}

export const ButtonBase = styled.button<Props>`
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding};
    `}
  border-width: 1.6px;
  border-style: solid;
  border-radius: 12px;
  outline: "none";
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.15s ease-out;

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const ButtonPrimary = styled(ButtonBase)`
  background-color: ${color.primary};
  border-color: ${color.primary};
  color: ${color.white};

  &:active {
    background-color: ${color.active_primary};
    color: ${color.white};
  }
`;

export const ButtonSecondary = styled(ButtonBase)`
  background-color: ${color.white};
  border-color: ${color.primary};
  color: ${color.primary};

  &:active {
    background-color: ${color.active_primary};
    color: ${color.white};
  }
`;

export const ButtonDisabled = styled(ButtonBase)`
  background-color: ${color.white_gray};
  border-color: ${color.white_gray};
  color: ${color.text};
  pointer-events: none;
  cursor: no-drop;
`
