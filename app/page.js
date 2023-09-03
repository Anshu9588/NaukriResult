import CategoryBox from "@/components/categoryBox";
import Script from "next/script";
import HeadingBox from "@/components/headingBox";
import Marquee from "@/components/marquee";
import SearchBar from "@/components/searchBar/searchBar";
import homeDataFetch from "../db/loadData/homeData";
import Contact from "@/components/contact";
export const metadata = {
  title: "NaukriResult.co: Latest Jobs, Results, Admit Cards & More",
  description:
    "Naukri Results: Latest Jobs, Results, Admit Cards & more. Get Job Notifications, Government & Private Jobs, and much more.",
  keywords:
    "Naukri Result, naukriresult, resultnaukri,nokri result, naukriresults, naukri results  nokriresult, sarkari naukri, job result",
  metadataBase: new URL("https://www.naukriresult.co"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NaukriResult.co: Latest Jobs, Results, Admit Cards & More",
    images: ["/ognr.jpg"],
    description:
      "Naukri Result, Naukri Results: NaukriResult.com provides the latest Naukri Result Jobs, Online Form, Naukri Naukri Result in Naukri Result 2023 various sectors such as Railway, Bank, SSC, Navy, Police, UPPSC, UPSSSC, UPTET, UP Scholarship, and other Naukri Result Com alerts at one place. नौकरी रिजल्ट",
    type: "website",
    url: `https://www.naukriresult.co`,
  },
};
const arr = [
  "latest-jobs",
  "admit-card",
  "result",
  "coming-soon",
  "offline-form",
  "answer-key",
  "syllabus",
  "goverment-scheme",
  "important-link",
];
async function getData() {
  try {
    const data = await homeDataFetch();
    return data;
  } catch (error) {
    console.error("error", error);
  }
}
export default async function Home() {
  const data = await getData();

  return (
    <>
      <Script id="indexScript"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5767837172718165"
        crossOrigin="anonymous"
      />
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-5767837172718165"
        data-ad-slot="2442690962"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <Script id="indexpagead">
        (adsbygoogle = window.adsbygoogle || []).push({});
      </Script>
      <Marquee marquee={data[0][1].marqueeRow} />
      <HeadingBox heading={data[0][1].headingBox} />
      <SearchBar />
      <div className="flex gap-2  justify-center flex-wrap mx-1 w-full">
        {arr.map((item) => {
          return (
            <CategoryBox
              data={data}
              key={item}
              category={item}
              count="home"
              className="max-sm:w-[48%] w-[32%]"
            />
          );
        })}
      </div>
      <Contact />

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-V8RLC0G3FS" />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-V8RLC0G3FS');
        `}
      </Script>
    </>
  );
}
