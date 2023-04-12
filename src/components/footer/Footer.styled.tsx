import styled from "styled-components";

export const StyledFooter = styled.footer`
  padding: 100px 0;
  background-color: var(--eerie-black);
  display: flex;

  hr {
    height: 300px;
    border-color: var(--platinum);
    background-color: var(--platinum);
  }
`;

export const LogoContainer = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    margin-bottom: 1rem;
  }
`;

export const ContactInfo = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  padding-left: clamp(1rem, 4vw, 4rem);
  justify-content: center;

  h3 {
    font-weight: 700;
    font-size: clamp(1.1rem, 2.5vw, 1.6rem);
    margin-bottom: 1rem;
  }

  p {
    font-size: clamp(0.9rem, 2vw, 1.1rem);
  }
`;

export const Tel = styled.p`
  font-size: clamp(0.9rem, 2vw, 1rem) !important;
  font-weight: 100;
  font-family: sans-serif;
`;

export const Icons = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;

  svg {
    width: clamp(1rem, 3vw, 1.5rem);
    height: clamp(1rem, 3vw, 1.5rem);
  }
`;
