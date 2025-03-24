import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
    <h1 className="text-blue-300 text-5xl mt-[-120px]"> Welcome to my classic project </h1>
    <div className="flex justify-evenly w-full">
      <div className="bg-red-400 w-[300px] h-[300px] ml-[50px]"> 1</div>
      <div className="bg-blue-400 w-[300px] h-[300px] ml-[50px]"> 2</div>
      <div className="bg-gray-400 w-[300px] h-[300px] ml-[50px]"> 3</div>
    </div>
        </main>
     
    </div>
  );
}
