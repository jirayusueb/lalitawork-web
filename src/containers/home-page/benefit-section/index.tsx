import React from "react";

function BenefitSection() {
  return (
    <div className="container py-6 px-2.5">
      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col justify-center gap-6 px-10">
          <p className="text-paragraph-small">Benefit</p>
          <h2 className="text-h2">สัมผัสประสบการณ์ที่ดีที่สุดในการสกรีน</h2>
          <p className="text-paragraph-small">
            ค้นพบคุณภาพและบริการชั้นเยี่ยมในการสกรีนกับเรา
            เรามอบประสบการณ์ที่เหนือกว่าด้วยความเชี่ยวชาญระดับมืออาชีพ
            ตั้งแต่การออกแบบจนถึงการผลิตและจัดส่ง คุณจะได้รับงานพิมพ์ที่คมชัด
            สีสันสดใส บนวัสดุหลากหลาย ในราคาที่คุ้มค่า
            พร้อมการันตีการส่งมอบตรงเวลา ไว้วางใจให้เราดูแลงานสกรีนของคุณ
            เพื่อผลลัพธ์ที่ตรงใจและประทับใจทุกครั้ง
          </p>
        </div>
        <div className="p-6">
          <img
            alt="benefit"
            src="/images/benefit.png"
            className="aspect-square w-full bg-slate-100"
          />
        </div>
      </div>
    </div>
  );
}

export default BenefitSection;
