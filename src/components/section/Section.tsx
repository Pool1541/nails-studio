import { ReactNode } from "react";
import { Content, StyledSection } from "./Section.styled";

interface Props {
  children: ReactNode;
  bg: string;
  id?: string;
}

export default function Section({ children, bg, id }: Props) {
  return (
    <StyledSection bg={bg} id={id}>
      <Content>{children}</Content>
    </StyledSection>
  );
}
