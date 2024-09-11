import Image from "next/image";

function HeroImageScetion() {
  return (
    <div className="p-2.5">
      <Image
        className="size-full"
        src="/images/hero-banner.png"
        alt="hero-banner"
        width={1000}
        height={1000}
        quality={80}
        loading="lazy"
      />
    </div>
  );
}

export default HeroImageScetion;
