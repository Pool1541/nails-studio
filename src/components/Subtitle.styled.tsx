import styled from "styled-components";

interface Props {
  center?: boolean;
}

export const Subtitle = styled.h2<Props>`
  font-size: clamp(2rem, 3.5vw, 3.5rem);
  text-align: ${({ center }) => (center ? "center" : "unset")};
  margin-bottom: 2rem;
`;
