import { StyledLogo } from "./Logo.styled";

interface Props {
  big?: boolean;
}

export default function Logo({ big }: Props) {
  return (
    <StyledLogo big={big}>
      <h2>Nails Studio</h2>
      <h3>MANICURE SALON</h3>
    </StyledLogo>
  );
}
