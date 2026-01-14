import Image from "next/image";

export default function Icon() {
  return (
    <Image
      src="/favicon.png"
      alt="BudzRus"
      width={32}
      height={32}
      priority
    />
  );
}

