import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="flex h-screen items-center">
        <h1 className="leading text-3xl font-medium sm:text-4xl md:text-5xl lg:text-[4rem] xl:w-[80%]">
          Fullstack software developer, working globally.
        </h1>
      </div>

      <div className="flex h-screen flex-col justify-between md:flex-row">
        <div className="h-full w-full md:w-[49%] bg-white dark:bg-black">
          <h1>What the fuck</h1>
        </div>
        <div className="h-full w-full md:w-[49%] bg-white dark:bg-black">
          <h1>What the fuck</h1>
        </div>
      </div>
    </main>
  );
}
