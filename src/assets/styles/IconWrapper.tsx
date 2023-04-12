import styled from "styled-components";

export const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: -50px;
    filter: drop-shadow(50px 0px 0px var(--satin-sheen-gold));
  }
`;
