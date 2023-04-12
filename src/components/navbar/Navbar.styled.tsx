import styled from "styled-components";

export const StyledNavbar = styled.nav`
  width: 100%;
  max-width: 1400px;
  margin: auto;
  height: 100%;
  display: flex;
  padding: 0 20px;
`;

export const LogoContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  padding-left: clamp(0.1rem, 4vw, 4rem);
  position: relative;
  z-index: 50;
`;
interface Props {
  active: boolean;
}
export const LinksContainer = styled.ul<Props>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex: 1 1 auto;
  font-size: 1.1rem;
  position: relative;
  z-index: 20;

  @media screen and (max-width: 767px) {
    height: 100vh;
    width: 100vw;
    padding-top: 50px;
    position: fixed;
    top: 0;
    left: 0;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    background-color: var(--dim-gray);
    z-index: 40;
    transition: transform 0.3s ease-out;
    transform: ${({ active }) =>
      active ? "translateX(0)" : "translateX(100vw)"};
  }
`;

export const Link = styled.li`
  a {
    transition: color 0.2s ease;
    &:hover {
      color: var(--platinum);
    }
  }
`;
