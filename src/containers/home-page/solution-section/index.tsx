import React from "react";

function SolutionSection() {
  return (
    <div className="container py-6">
      <div className="flex flex-col gap-2.5 items-center">
        <div className="px-2.5 py-10 flex-col flex gap-2.5 text-center max-w-screen-md">
          <p className="text-label-small">Solution</p>
          <h2 className="text-h2 text-pretty">
            การพิมพ์สกรีนดิจิทัลและโซลูชั่นแบบกำหนดเอง
          </h2>
          <p className="text-paragraph-medium text-balance">
            ค้นพบนวัตกรรมล่าสุดในวงการพิมพ์สกรีนด้วยเทคโนโลยีดิจิทัลของเรา
            พร้อมบริการออกแบบที่ตอบโจทย์ทุกความต้องการของคุณ
            ไม่ว่าจะเป็นงานพิมพ์บนเสื้อผ้า วัสดุพิเศษ หรือผลิตภัณฑ์เฉพาะทาง
            เรามีโซลูชั่นที่เหมาะสมสำหรับทุกโปรเจกต์
            ด้วยคุณภาพระดับมืออาชีพและความยืดหยุ่นสูง
            เราพร้อมสร้างสรรค์ผลงานที่โดดเด่นให้กับแบรนด์ของคุณ
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 py-10">
        <div className="flex flex-col gap-4 py-4 items-center">
          <img
            alt="solution-item-1"
            src="/images/solution-item-1.png"
            className="aspect-square size-[200px] bg-slate-100"
          />
          <p className="text-label-x-large text-center text-balance max-w-[330px]">
            เทคโนโลยีการพิมพ์สกรีนดิจิทัล
          </p>
          <p className="text-paragraph-small text-center max-w-[330px]">
            ใช้นวัตกรรมล่าสุด ให้งานพิมพ์คมชัด สีสันสดใส ทนทาน
            เหมาะกับทุกขนาดงาน ประหยัดเวลาและต้นทุน
          </p>
        </div>
        <div className="flex flex-col gap-4 py-4 items-center">
          <img
            alt="solution-item-2"
            src="/images/solution-item-2.png"
            className="aspect-square size-[200px] bg-slate-100"
          />
          <p className="text-label-x-large text-center text-balance max-w-[330px]">
            การปรับแต่งตามความต้องการของลูกค้า
          </p>
          <p className="text-paragraph-small text-center max-w-[330px]">
            ออกแบบตามวิสัยทัศน์ของคุณ เลือกวัสดุ ผสมผสานเทคนิค
            สร้างลวดลายเฉพาะตัว ตอบโจทย์ทุกไอเดีย
          </p>
        </div>
        <div className="flex flex-col gap-4 py-4 items-center">
          <img
            alt="solution-item-3"
            src="/images/solution-item-3.png"
            className="aspect-square size-[200px] bg-slate-100"
          />
          <p className="text-label-x-large text-center text-balance max-w-[330px]">
            คุณภาพและความยืดหยุ่น
          </p>
          <p className="text-paragraph-small text-center max-w-[330px]">
            ส่งมอบงานคุณภาพสูงสุด ด้วยทีมมืออาชีพและเครื่องมือทันสมัย
            ปรับเปลี่ยนตามความต้องการและเวลาของคุณ
          </p>
        </div>
      </div>
    </div>
  );
}

export default SolutionSection;
