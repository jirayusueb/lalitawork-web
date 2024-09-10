import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="container py-6">
      <div className="grid grid-cols-2 gap-6">
        <div className="p-2.5">
          <h1 className="text-h1 text-balance break-words">
            <div>Litawork</div>
            <div>Digital Screen</div>
            <div>Printing</div>
          </h1>
        </div>
        <div className="p-2.5">
          <p className="text-paragraph-large">
            บริการครบวงจรด้านงานป้าย ปริ้นท์ สติ๊กเกอร์ และสกรีนสินค้า
            รับทำทุกขนาดตั้งแต่ชิ้นเดียว ไม่มีขั้นต่ำ
            ติดต่อเราได้ทันทีเพื่อรับบริการคุณภาพและรวดเร็ว
          </p>
        </div>
      </div>
      <div className="p-2.5">
        <img
          className="size-full"
          src="/images/hero-banner.png"
          alt="hero-banner"
        />
      </div>
    </div>
  );
}

export default HeroSection;
