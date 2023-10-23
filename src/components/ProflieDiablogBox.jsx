import React from "react";

const ProflieDiablogBox = () => {
  return (
    <div className="profile-diablog">
      <div className="item">
        <div className="icon">
          <i className="fa-regular fa-address-card"></i>
        </div>
        <span className="text">Kênh của bạn</span>
      </div>

      <div className="item">
        <div className="icon">
          <i className="fa-regular fa-calendar-days"></i>
        </div>
        <span className="text">Youtube Studio</span>
      </div>

      <div className="item">
        <div className="icon">
          <i className="fa-solid fa-right-from-bracket"></i>
        </div>
        <span className="text">Chuyển đổi tài khoản</span>
      </div>

      <div className="item">
        <div className="icon">
          <i className="fa-solid fa-gear"></i>
        </div>
        <span className="text">Cài đặt tài khoản</span>
      </div>
    </div>
  );
};

export default ProflieDiablogBox;
