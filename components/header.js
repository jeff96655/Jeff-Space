import { useState, useCallback } from "react";
import JeffSpaceMenu from "./jeff-space-menu";
import PortalPopup from "./portal-popup";

const Header = () => {
  const [isJeffSpaceMenuOpen, setJeffSpaceMenuOpen] = useState(false);

  const openJeffSpaceMenu = useCallback(() => {
    setJeffSpaceMenuOpen(true);
  }, []);

  const closeJeffSpaceMenu = useCallback(() => {
    setJeffSpaceMenuOpen(false);
  }, []);

  return (
    <>
      <div className="fixed my-0 mx-[!important] top-[0px] left-[0px] bg-gray [backdrop-filter:blur(30px)] w-[1728px] h-[60px] overflow-hidden shrink-0 hidden z-[14] md:flex">
        <button
          className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[21px] left-[376px] w-10 h-[19px]"
          onClick={openJeffSpaceMenu}
        >
          <div className="absolute top-[0px] left-[0px] rounded-8xs bg-black w-10 h-[5px] overflow-hidden" />
          <div className="absolute top-[14px] left-[0px] rounded-8xs bg-black w-10 h-[5px] overflow-hidden" />
        </button>
      </div>
      {isJeffSpaceMenuOpen && (
        <PortalPopup placement="Top left" onOutsideClick={closeJeffSpaceMenu}>
          <JeffSpaceMenu onClose={closeJeffSpaceMenu} />
        </PortalPopup>
      )}
    </>
  );
};

export default Header;
