import dynamic from 'next/dynamic';

const HeroImageScetion = dynamic(
  () => import('@/containers/home-page/hero-section/hero-image-scetion'),
);

function HeroSection() {
  return (
    <div className="container py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-2.5">
          <h1 className="text-h2 sm:text-h1 text-balance break-words">
            <div>Lalitawork</div>
            <div>Digital Screen</div>
            <div>Printing</div>
          </h1>
        </div>
        <div className="p-2.5">
          <p className="text-paragraph-large">
            บริการงานพิมพ์และสกรีนคุณภาพสูง ป้าย สติ๊กเกอร์ และสกรีนสินค้า รับออเดอร์ทุกขนาด ไม่มีขั้นต่ำ แม้เพียงชิ้นเดียว
            ด้วยเทคโนโลยีการพิมพ์ดิจิทัลล่าสุด เรามอบงานคุณภาพเยี่ยมในเวลารวดเร็ว ติดต่อ Lalitawork วันนี้
            สำหรับบริการพิมพ์และสกรีนมืออาชีพที่ตอบโจทย์ทุกความต้องการของคุณ
          </p>
        </div>
      </div>
      <HeroImageScetion />
    </div>
  );
}

export default HeroSection;
