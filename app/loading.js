import Image from "next/image";
export default function Loading() {
  return (
    <div className="absolute animate-pulse top-[40%] left-[40%] h-28 w-28">
    <Image  fill src="/logo.webp" alt="Loading ..." />
    </div>
  );
}
