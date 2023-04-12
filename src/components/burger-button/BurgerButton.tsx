import { MouseEventHandler } from "react";
import { Button, Line } from "./BurgerButton.styled";

interface Props {
  handleClick: MouseEventHandler;
  active: boolean;
}

export default function BurgerButton({ handleClick, active }: Props) {
  return (
    <Button active={active} onClick={handleClick} title="menu button">
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Button>
  );
}
