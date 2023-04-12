import { useEffect, useState } from "react";

export default function useActive() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body") as HTMLBodyElement;
    body.style.overflow = active ? "hidden" : "auto";
  }, [active]);

  function handleClick() {
    setActive(!active);
  }

  function handleClose() {
    setActive(false);
  }
  return {
    active,
    handleClick,
    handleClose,
  };
}
