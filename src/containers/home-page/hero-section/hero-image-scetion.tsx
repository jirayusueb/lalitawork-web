import Image from 'next/image';

function HeroImageScetion() {
  return (
    <div className="p-2.5">
      <Image
        className="w-full h-auto"
        src="/images/hero-banner.webp"
        alt="hero-banner"
        width={1000}
        height={500}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={80}
        loading="lazy"
        priority={false}
      />
    </div>
  );
}

export default HeroImageScetion;
