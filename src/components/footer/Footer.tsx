import { Facebook, Instagram, Whatsapp } from "../../assets/icons";
import Logo from "../logo/Logo";
import {
  ContactInfo,
  LogoContainer,
  StyledFooter,
  Tel,
  Icons,
} from "./Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <LogoContainer>
        <Logo big />
      </LogoContainer>
      <hr />
      <ContactInfo>
        <div>
          <h3>
            Información relevante <br />
            sobre el sitio
          </h3>
          <p>Contáctanos:</p>
          <p>Las Begonias 450, San Isidro. Lima-Perú</p>
          <br />
          <Tel>
            +51 932556859 <br />
            +51 956885596
          </Tel>
          <Icons>
            <Instagram href="https://www.instagram.com/" />
            <Whatsapp href="https://api.whatsapp.com/send?phone=51932088984" />
            <Facebook href="https://www.facebook.com/" />
          </Icons>
        </div>
      </ContactInfo>
    </StyledFooter>
  );
}
