"use client";

export const CircularIcon = ({ src, alt = "Icon" }) => {
  return (
    <div className="rounded-full flex items-center justify-center shadow bg-amber-500 h-[100px] w-[100px]">
      <img
        src={src}
        alt={alt}
        className="object-contain overflow-hidden aspect-square w-[60px]"
      />
    </div>
  );
};
