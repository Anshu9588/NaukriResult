import Link from "next/link";
import Image from "next/image";
import localFont from "next/font/local";
const myFont = localFont({ src: "../../public/font/Merriweather-Regular.ttf" });
const Navigation = () => {
  return (
    <header className="bg-transparent px-5 bg-gradient-to-r from-indigo-500 to-sky-500">
      <div className="flex flex-row pl-5">
        <div className="relative w-32 h-auto">
          <Image  fill  src="/logo.webp" alt="NaukriResult Logo" />
        </div>
        <div className="w-full text-center my-2">
          <p
            className={`text-6xl max-[490px]:text-3xl max-[430px]-2xl  max-[650px]:text-4xl max-[822px]:text-5xl font-bold font-mono  tracking-wide text-white my-auto drop-shadow-[10px_10px_10px_rgba(0,0,0,0.75)] ${myFont.className}`}
          >
            NAUKRIRESULT.CO
          </p>
          <div className="h-0.5 bg-red w-4/6 mx-auto"></div>
          <p className="font-bold text-white">
            Find Your Dream Job Today
          </p>
        </div>
      </div>

      <div className="bg-black text-base text-white gap-y-1.5  flex py-2 flex-row  justify-center px-6 divide-x-2  -mx-5 flex-wrap font-normal ">
        <Link  className="hover:text-green-600 px-4 py-0.5" href="/">
          Home
        </Link>
        <Link
          className="hover:text-green-600 px-4 py-0.5"
          href={{ pathname: "/category/latest-jobs" }}
        >
          Latest Jobs
        </Link>
        <Link
          prefetch={false}
          className="hover:text-green-600 px-4 py-0.5"
          href={{ pathname: "/category/result" }}
        >
          Result
        </Link>
        <Link
          prefetch={false}
          className="hover:text-green-600 px-4 py-0.5"
          href={{ pathname: "/category/admit-card" }}
        >
          Admit Card
        </Link>
        <Link
          prefetch={false}
          className="hover:text-green-600 px-4 py-0.5"
          href={{ pathname: "/category/answer-key" }}
        >
          Answer Key
        </Link>
        <Link
          prefetch={false}
          className="hover:text-green-600 px-4 py-0.5"
          href={{ pathname: "/category/syllabus" }}
        >
          Syllabus
        </Link>
        <Link
          prefetch={false}
          className="hover:text-green-600 px-4 py-0.5"
          href="/contact-us"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
};
export default Navigation;
