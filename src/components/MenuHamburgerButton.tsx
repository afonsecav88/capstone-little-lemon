import { useState } from 'react';
import { Menu } from './Menu';

export const MenuHamburgerButton = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <button onClick={() => setToggle(!toggle)} className="button-hamburger">
        <img alt="basket" src="/icon_hamburger.svg" />
      </button>
      {!toggle && <Menu />}
    </>
  );
};
