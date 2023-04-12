import BurgerButton from "../burger-button/BurgerButton";
import Logo from "../logo/Logo";
import {
  StyledNavbar,
  LogoContainer,
  LinksContainer,
  Link,
} from "./Navbar.styled";
import useActive from "../../hooks/useActive";

export default function Navbar() {
  const { active, handleClick, handleClose } = useActive();

  return (
    <StyledNavbar>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <LinksContainer active={active}>
        <Link>
          <a href="#home" onClick={handleClose}>
            Inicio
          </a>
        </Link>
        <Link>
          <a href="#about" onClick={handleClose}>
            Sobre nosotros
          </a>
        </Link>
        <Link>
          <a href="#services" onClick={handleClose}>
            Servicios
          </a>
        </Link>
        <Link>
          <a href="#gallery" onClick={handleClose}>
            Galeria
          </a>
        </Link>
        <Link>
          <a href="#appointment" onClick={handleClose}>
            Agenda una cita
          </a>
        </Link>
      </LinksContainer>
      <BurgerButton handleClick={handleClick} active={active} />
    </StyledNavbar>
  );
}
