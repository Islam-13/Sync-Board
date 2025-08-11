import Image from "next/image";

function Loader() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="animate-pulse duration-700"
      />
    </div>
  );
}

export default Loader;
