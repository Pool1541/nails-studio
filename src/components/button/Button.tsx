import { ReactNode } from "react";
import { StyledButton } from "./Button.styled";

interface Props {
  children: ReactNode;
}

export default function Button({ children }: Props) {
  return <StyledButton>{children}</StyledButton>;
}
