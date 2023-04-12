import styled from "styled-components";

interface Props {
  bg?: string;
}

export const StyledSection = styled.section<Props>`
  padding: 100px 0;
  width: 100%;
  color: var(--eerie-black);
  background-color: ${({ bg }) =>
    bg == "platinum" ? "var(--platinum)" : "var(--white)"};
`;

export const Content = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;
