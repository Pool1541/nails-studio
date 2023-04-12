import styled from "styled-components";

interface Props {
  active: boolean;
}

export const Button = styled.button<Props>`
  position: relative;
  height: 3rem;
  width: 5rem;
  display: none;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
  transition: 0.09s ease-in;
  margin: auto;
  z-index: 50;

  div:nth-child(1) {
    transform: ${({ active }) =>
      active ? "rotate(-45deg) translate(-6px, 6px)" : "none"};
  }
  div:nth-child(2) {
    opacity: ${({ active }) => (active ? "0" : "1")};
  }
  div:nth-child(3) {
    transform: ${({ active }) =>
      active ? "rotate(45deg) translate(-8px, -7px)" : "none"};
  }

  @media screen and (max-width: 767px) {
    display: flex;
  }
`;

export const Line = styled.div`
  width: 40px;
  height: 3px;
  opacity: 1;
  background-color: var(--white);
  transition: all 0.3s ease;
`;
