import styled from "styled-components";

interface Props {
  big?: boolean;
}

export const StyledLogo = styled.div<Props>`
  user-select: none;
  h2 {
    font-family: "Sacramento", cursive;
    line-height: 2rem;
    font-size: ${({ big }) =>
      big ? "clamp(2rem, 4vw, 4rem)" : "clamp(1.5rem, 3.5vw, 2rem);"};
    font-weight: 400;
  }

  h3 {
    text-align: center;
    font-size: ${({ big }) =>
      big ? "clamp(0.8rem, 1.5vw, 1.2rem)" : "clamp(0.7rem, 2.5vw, 0.8rem)"};
  }
`;
