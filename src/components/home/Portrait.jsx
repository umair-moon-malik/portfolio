"use client";
import Image from "next/image";

const Portrait = () => {
  return (
    <div
      className="portrait-entrance hidden md:block"
      style={{
        maskImage: "radial-gradient(circle, black 60%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(circle, black 60%, transparent 100%)",
      }}
    >
      <Image
        src="/MyPortrait.png"
        alt="Umair Malik"
        width={700}
        height={700}
        priority
        placeholder="empty"
        unoptimized
      />
    </div>
  );
};

export default Portrait;
