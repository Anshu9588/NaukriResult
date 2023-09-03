import CategoryBox from "@/components/categoryBox";
import SearchBar from "@/components/searchBar/searchBar";
import Script from "next/script";
import AllPostDataFetch from "@/db/loadData/fetchAllPost";
export async function generateStaticParams() {
  const posts = [
    "latest-jobs",
    "coming-soon",
    "result",
    "admit-card",
    "goverment-scheme",
    "offline-form",
    "answer-key",
    "syllabus",
    "important-link",
  ];
  return posts.map((post) => {
    const postLink = post.toLowerCase();
    return {
      slug: postLink,
    };
  });
}
export async function generateMetadata({ params }) {
  const { slug } = params;
  return {
    title: `Naukri Result, ${slug} 2023 , Naukri Results`,
    description: `Get free Naukri Result notification of all Government Jobs across UP, Bihar, MP, Rajasthan, Uttrakhand, Delhi, All India Recruitment with fully Vacancy details at Naukri Results. ✔ Free Job Alert ✔ Frequently Updated `,
    keywords: `latest Jobs, latest vacancy, Jobs requirement, Latest Recruitment, Notifications, Naukri Result, Sarkari Results, Sarkari Exam, Rojgar Result, Government Result,admit card , answer key `,
    metadataBase: new URL('https://www.naukriresult.co'),
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      Image: ["../public.logo.png"],
      title: `Naukri Result, ${slug} 2023 , Naukri Results`,
      description: `Get free Naukri Result notification of all Government Jobs across UP, Bihar, MP, Rajasthan, Uttrakhand, Delhi, All India Recruitment with fully Vacancy details at Naukri Results. ✔ Free Job Alert ✔ Frequently Updated `,
      type: "website",
      url: `https://www.naukriresult.co/category/${slug}`,
    },
  };
}
const Page = async ({ params }) => {
  const slug = params.slug;
  const post = await AllPostDataFetch();
  const res = post.filter((item) => {
    return item.category[0]
      .split(" ")
      .filter((item) => item.toLowerCase().includes(slug) === true);
  });
  const data = [
    ["homeHeading", ""],
    ["post", res],
  ];
  const category = slug
    .split("-")
    .map((item) => item[0].toLowerCase() + item.slice(1))
    .join("-");
  return (
    <>
      <SearchBar />
      <div className="w-2/4 mx-auto">
        <CategoryBox data={data} category={category} className="w-full" />
      </div>
      
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
};
export default Page;
