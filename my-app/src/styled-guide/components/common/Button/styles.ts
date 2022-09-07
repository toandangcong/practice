import styled from "styled-components";
import { color } from "../../../../utils/constant";

export interface StyledButtonProps {
  $type?: "primary" | "secondary" | "disabled";
  $width?: number;
  $padding?: number;
}

export const StyledButton = styled.button.attrs((props: StyledButtonProps) => ({
  $type: props.$type,
  $width: props.$width,
  $padding: props.$padding,
}))`
  background-color: ${(props) =>
    props.$type === "primary"
      ? color.primary
      : props.$type === "secondary"
      ? color.white
      : color.white_gray};
  border: 1.6px solid
    ${(props) => (props.$type !== "disabled" ? color.primary : color.white_gray)};
  color: ${(props) =>
    props.$type === "primary"
      ? color.white
      : props.$type === "secondary"
      ? color.primary
      : color.text};
  padding: ${(props) => props.$padding ? `${props.$padding}px` : "10px 20px"};
  border-radius: 12px;
  width: ${(props) => props.$width ? `${props.$width}px` : "unset"};
  outline: "none";
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  text-align: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  cursor: ${props => props.$type !== 'disabled' ? 'pointer' : 'no-drop'};
  pointer-events: ${props => props.$type !== 'disabled' ? 'unset' : 'none'};
  transition: all 0.15s ease-out;

  &:hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: ${color.active_primary};
    color: ${color.white};
  }
`;
