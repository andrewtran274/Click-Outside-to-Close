import React, { useEffect, useRef, useState } from "react";
import ProflieDiablogBox from "./ProflieDiablogBox";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const profilediablogRef = useRef();

  const handleTurnOffMenu = (e) => {
    if (!profilediablogRef.current.contains(e.target)) {
      setOpenMenu(false);
    }
  };

  useEffect(() => {
    if (openMenu) {
      document.addEventListener("mousedown", (e) => handleTurnOffMenu(e));
    }

    return () => {
      document.removeEventListener("mousedown", handleTurnOffMenu);
    };
  }, [openMenu]);
  return (
    <div className="header">
      <div className="logo">
        You<span>Tube</span>
      </div>
      <div className="profile" ref={profilediablogRef}>
        <div className="avatar" onClick={() => setOpenMenu((prev) => !prev)}>
          <i className="fa-solid fa-user"></i>
        </div>

        {openMenu ? <ProflieDiablogBox /> : ""}
      </div>
    </div>
  );
};

export default Header;
