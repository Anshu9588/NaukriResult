import Link from "next/link";
import SearchBar from "../../components/searchBar/searchBar";
import AllPostDataFetch from "@/db/loadData/fetchAllPost";
import PostDataFetch from "@/db/loadData/postData";
import dynamic from "next/dynamic";
import localFont from "next/font/local";
import Script from "next/script";
import { redirect } from "next/navigation";
const myFont = localFont({ src: "../../public/font/Merriweather-Regular.ttf" });
// Dynamic imports for components with event handlers
const ShareButton = dynamic(() => import("../../components/shareButtons"), {
  ssr: false,
});

export async function generateStaticParams() {
  try {
    const data = await AllPostDataFetch();
    return data.map((dat) => {
      return {
        seoLink: dat.seoLink,
      };
    });
  } catch (error) {
    console.log(error, "error");
  }
}
export async function generateMetadata({ params }) {
  // read route params
  const { post: seoLink } = params;
  let product = await PostDataFetch(seoLink);
  product = await product[0];
  if (!product) redirect("/error/not-found");
  const ogimage =
    product.metaImageLink === "#"
      ? ["/ognr.jpg"]
      : [`${product.metaImageLink}`];
  return {
    title: product.metaTitle,
    description: product.metaDiscription,
    keywords: product.metaKeywords,
    metadataBase: new URL("https://www.naukriresult.co"),
    alternates: {
      canonical: `/${product.seoLink}`,
    },
    openGraph: {
      title: product.metaTitle,
      images: ogimage,
      description: product.metaDiscription,
      type: "website",
      url: `https://www.naukriresult.co/${seoLink}`,
    },
  };
}

export default async function Page({ params }) {
  const { post: seoLink } = params;
  let data = await PostDataFetch(seoLink);
  if (data.length === 0) return;
  data = data[0];
  const postUrl = `https://www.naukriresult.co/${seoLink}`;
  return (
    <>
      {" "}
      <SearchBar />
      <div className="flex gap-3">
        <div className=" min-w-[66.66%] max-w-full mt-3 pl-2">
          <table
            colSpan="2"
            className="border-collapse border w-full border-gray-700"
          >
            <tbody>
              <tr>
                <td
                  colSpan="1"
                  className="pl-1.5 w-1/5  text-red text-lg font-semibold align-top"
                >
                  Name Of Post:{" "}
                </td>
                <td colSpan="1">
                  <h1 className="text-xl text-blue font-bold">
                    {data.nameOfPost}{" "}
                  </h1>
                </td>
              </tr>
              <tr>
                <td
                  colSpan="1"
                  className="pl-1.5   text-red text-lg font-semibold align-top"
                >
                  Post Date / Update:{" "}
                </td>
                <td colSpan="1" className="align-top w-max">
                  {data.dateOfPost}
                </td>
              </tr>
              <tr>
                <td
                  colSpan="1"
                  className="pl-1.5 text-red text-lg font-semibold align-top"
                >
                  About Post:
                </td>
                <td colSpan="1">
                  <p className=" text-base text-left">{data.postDescription}</p>
                </td>
              </tr>
            </tbody>
          </table>
          <h2 className=" text-center text-xl bg-red px-3 py-1 w-max mx-auto my-2 relative text-white font-bold ">
            WWW.NAUKRIRESULT.CO
          </h2>
          <table
            colSpan="1"
            className="border-collapse border w-full border-gray-700"
          >
            <tbody className="text-center text-lg">
              <tr>
                <td colSpan="1">
                  <strong className="block text-red">
                    {data.seoHeadingh2}
                  </strong>
                </td>
              </tr>
              <tr>
                <td colSpan="1">
                  <strong className="block text-blue">
                    {data.seoHeadingh3}
                  </strong>
                </td>
              </tr>
              <tr>
                <td colSpan="1">
                  <strong className="block text-green">
                    {data.seoHeadingh4}
                  </strong>
                </td>
              </tr>
              <tr>
                <td colSpan="1">
                  <strong className="block text-pink">
                    {data.seoHeading1}{" "}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
          <table
            colSpan="2"
            className="border-collapse border w-full border-gray-700"
          >
            <tbody>
              <tr className="border-y border-gray-700 border-collapse ">
                <td
                  colSpan="1"
                  className="border-x border-gray-700 border-collapse align-top w-1/2"
                >
                  <h2>
                    <strong
                      className={`block text-center w-full pb-2 text-green text-2xl ${myFont.className}`}
                    >
                      Important Dates
                    </strong>
                  </h2>
                  <ul className="px-2 list-disc pb-3 ps-6  marker:text-black">
                    {data.appStartDate !== "#" && (
                      <li className="pb-1.5">
                        Application Begin: <b>{data.appStartDate}</b>
                      </li>
                    )}
                    {data.appLastDate !== "#" && (
                      <li className="pb-1.5">
                        Last Date for Apply Online :
                        <span className="text-red">
                          <b> {data.appLastDate}</b>
                        </span>
                      </li>
                    )}

                    {data.appFeeLastDate !== "#" && (
                      <li className="pb-1.5">
                        Last Date for Exam Fee :<b> {data.appFeeLastDate}</b>
                      </li>
                    )}
                    {data.appAdmitCardDate !== "#" && (
                      <li className="pb-1.5">
                        Admit Card Availabe : <b>{data.appAdmitCardDate}</b>
                      </li>
                    )}
                    {data.appExamDate !== "#" && (
                      <li className="pb-1.5">
                        Exam Date : <b>{data.appExamDate}</b>
                      </li>
                    )}
                    {data.appCustumDateLabel.length !== undefined &&
                      data.appCustumDateLabel.map((item) => {
                        if (item[0] === "") return;
                        return (
                          <li className="pb-1.5" key={item[0]}>
                            {item[0]}
                            <b> {item[1]}</b>
                          </li>
                        );
                      })}
                  </ul>
                </td>
                <td colSpan="1" className="w-1/2 align-top">
                  <h2>
                    <strong
                      className={`block align-top text-center pb-2 w-full text-green text-2xl ${myFont.className}`}
                    >
                      Application Fee
                    </strong>
                  </h2>
                  <ul className="px-2 list-disc ps-6 pb-2  marker:text-black">
                    <li className="pb-1.5">
                      <b>Male Candidate</b>
                    </li>
                    <li className="pb-1.5">
                      General/OBC: <b>{data.appGeneralMAleFee}/-</b>
                    </li>
                    <li className="pb-1.5">
                      Reserver Category: <b>{data.appReserverMaleFee}/-</b>
                    </li>
                    <li className="pb-1.5">
                      <b>Female Candidate</b>
                    </li>
                    <li className="pb-1.5">
                      General/OBC: <b>{data.appGeneralFemaleFee}/-</b>
                    </li>
                    <li className="pb-1.5">
                      Reserver Category: <b>{data.appReserverFemaleFee}/-</b>
                    </li>

                    {data.appCustumFeeLabel.length !== undefined &&
                      data.appCustumFeeLabel.map((item) => {
                        return (
                          <li className="pb-1.5" key={item[0]}>
                            {item[0]}
                            <b> {item[1]}</b>
                          </li>
                        );
                      })}
                  </ul>
                </td>
              </tr>
              {data.postAgeLimit !== "#" && (
                <tr>
                  <td colSpan="2">
                    <h2 className="text-center text-pink text-2xl ">
                      <strong>
                        {data.postAgeLimit}
                        <b className={`text-green ${myFont.className}`}>
                          {" "}
                          Age Limit Details
                        </b>
                      </strong>
                    </h2>
                    <ul className="px-2 list-disc ps-6 pb-2 marker:text-black">
                      <li className="pb-1.5">
                        Minimum Age: <b>{data.MinAge}Year</b>
                      </li>
                      <li className="pb-1.5">
                        Maximum Age: <b>{data.MaxAge} Year</b>
                      </li>
                      {data.custumAgeLabel.length !== undefined &&
                        data.custumAgeLabel.map((item) => {
                          return (
                            <li className="pb-1.5" key={item[0]}>
                              {item[0]}
                              <b>{item[1]}</b>
                            </li>
                          );
                        })}
                    </ul>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {data.vacencyHeading !== "#" && (
            <table
              colSpan="3"
              className="border-collapse border w-full border-gray-700"
            >
              <caption>
                <h2 className="text-center text-pink text-2xl pt-3 pb-1.5">
                  <strong>
                    {data.vacencyHeading}
                    <b className={`text-green ${myFont.className}`}>
                      {" "}
                      Vacancy Details
                    </b>
                  </strong>
                </h2>
              </caption>
              <thead>
                <tr className="border-y  border-gray-700 border-collapse">
                  <th
                    scope="col"
                    colSpan="1"
                    className="border-x py-2 border-gray-700 w-1/4 border-collapse"
                  >
                    <p className="text-center">
                      <b>Post Name</b>
                    </p>
                  </th>
                  <th
                    scope="col"
                    colSpan="1"
                    className="border-x border-gray-700 w-1/4 border-collapse"
                  >
                    <p className="text-center">
                      <b>Total Post</b>
                    </p>
                  </th>
                  <th scope="col" colSpan="2" className="w-2/4">
                    <p className="text-center">
                      <b>{data.postEligibility}</b>
                    </p>
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.custumPostDetails.length !== undefined &&
                  data.custumPostDetails.map((item) => {
                    return (
                      <tr
                        key={item[0]}
                        className="border border-collapse border-gray-700"
                      >
                        <th
                          scope="row"
                          colSpan="1"
                          className="border-r border-gray-700 border-collapse align-top pl-1"
                        >
                          <p className="px-1">{item[0]}</p>
                        </th>
                        <td
                          colSpan="1"
                          className="border-r border-gray-700 border-collapse align-top l-1"
                        >
                          <p className="px-1 text-center">{item[1]}</p>
                        </td>
                        <td colSpan="2">
                          <ul className="px-2 list-disc pb-2  ps-6 marker:text-black align-top">
                            {item[2].map((item1) => {
                              return (
                                <li className="pb-1.5" key={item1}>
                                  {item1}
                                </li>
                              );
                            })}
                          </ul>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}
          {data.howToFillForm !== "#" && (
            <table
              colSpan="1"
              className="border-collapse border w-full border-gray-700"
            >
              <caption>
                <h2
                  className={`text-2xl pt-3 pb-1.5 text-center  text-lightBlue  ${myFont.className}`}
                >
                  <strong>{data.howToFillForm}</strong>
                </h2>{" "}
              </caption>
              <tbody>
                <tr>
                  <td scope="row">
                    <ol className="px-2 list-decimal pb-2 ps-6 marker:text-black">
                      {data.stepToFillForm !== undefined &&
                        data.stepToFillForm.map((item) => {
                          return (
                            <li className="pb-1.5" key={item}>
                              {item}
                            </li>
                          );
                        })}
                    </ol>
                  </td>
                </tr>
              </tbody>
            </table>
          )}
          <table
            colSpan="2"
            className="border border-gray-700 border-collapse w-full"
          >
            <caption>
              <h2
                className={`pt-3 pb-1.5 text-center w-full   text-green text-2xl ${myFont.className}`}
              >
                <strong>
                  {" "}
                  {!data.linkHeading
                    ? "Some Useful Important Links"
                    : data.linkHeading}
                </strong>
              </h2>
            </caption>
            <thead>
              <tr className="border-b text-lg border-gray-700">
                <th
                  colSpan="1"
                  scope="col"
                  className="py-2 border-r border-gray-700"
                >
                  {" "}
                  Name
                </th>
                <th colSpan="1" scope="col">
                  Links
                </th>
              </tr>
            </thead>
            <tbody>
              {data.applyLink !== "#" && (
                <tr className="border-b border-gray-700 text-2xl text-center">
                  <th
                    scope="col"
                    className="  text-red  border-r w-1/2  border-gray-700"
                    colSpan="1"
                  >
                    <h2 className={`my-2 ${myFont.className}`}>
                      <strong>Apply Online</strong>
                    </h2>
                  </th>
                  <td
                    scope="row"
                    className="border-b border-gray-700 "
                    colSpan="1"
                  >
                    {data.applyLink.charAt(0) !== "#" && (
                      <h2
                        className={`text-blue text-2xl  my-2 hover:underline ${myFont.className}`}
                      >
                        <Link target="blank" href={data.applyLink}>
                          Click Here
                        </Link>
                      </h2>
                    )}
                    {data.applyLink.charAt(0) === "#" && (
                      <b className={` ${myFont.className} `}>
                        {data.applyLink.slice(1)}
                      </b>
                    )}
                  </td>
                </tr>
              )}
              {data.custumLinkLabel !== undefined &&
                data.custumLinkLabel.map((item) => {
                  return (
                    <tr
                      className="border-b  border-gray-700 text-2xl text-center"
                      key={item[0]}
                    >
                      <td
                        className=" w-1/2 text-red  border-r border-gray-700"
                        colSpan="1"
                      >
                        <h2 className={`${myFont.className}`}>
                          <strong>{item[0]}</strong>
                        </h2>
                      </td>
                      <td className="border-b border-gray-700" colSpan="1">
                        <h2
                          className={`text-blue my-2 hover:underline text-2xl ${myFont.className}`}
                        >
                          {item[1].search(",") !== -1 ? (
                            <Link target="blank" href={item[1].split(",")[1]}>
                              {item[1].split(",")[0]}
                            </Link>
                          ) : (
                            <Link target="blank" href={item[1]}>
                              Click Here
                            </Link>
                          )}
                        </h2>
                      </td>
                    </tr>
                  );
                })}
              <tr className="border-b border-gray-700 text-2xl text-center">
                <th
                  scope="col"
                  className="  text-lightBlue  border-r w-1/2  border-gray-700"
                  colSpan="1"
                >
                  <h2 className={`my-2 ${myFont.className}`}>
                    <strong>Join Telegram Group</strong>
                  </h2>
                </th>
                <td
                  scope="row"
                  className="border-b border-gray-700 "
                  colSpan="1"
                >
                  <h2
                    className={`text-blue text-2xl  my-2 hover:underline ${myFont.className}`}
                  >
                    <Link target="blank" href="https://t.me/naukri_result">
                      Click here
                    </Link>
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>{" "}
          <div className="flex-1 my-2 w-full">
            <ShareButton postUrl={postUrl} postName={data.nameOfPost} />
          </div>
          {data.questionAnswer.length != 0 && (
            <table
              colSpan="1"
              className="border-x border-gray-700 border-collapse w-full"
            >
              <tbody>
                <tr>
                  <td
                    colSpan="1"
                    className="border-y border-collapse border-gray-700"
                  >
                    <h2
                      className={`my-2 text-center w-full   text-green text-2xl ${myFont.className}`}
                    >
                      <strong>Some Important Questions </strong>
                    </h2>
                  </td>
                </tr>

                {data.questionAnswer.map((item, index) => {
                  return (
                    <tr className="w-full  " key={item[0]}>
                      <td
                        colSpan="1"
                        className="mb-5 pb-5 border border-gray-700"
                      >
                        <h2
                          className={`bg-lightBlue tracking-wider py-2 px-2 text-2xl leading-6 font-semibold text-white ${myFont.className}`}
                        >
                          {index + 1}. <strong> {item[0]}</strong>
                        </h2>
                        <p className="py-1 text-base tracking-wide px-3">
                          {item[1]}
                        </p>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
        <div className=""></div>{" "}
      </div>
      <div>
        <h3 className="text-center text-xl  font-bold text-green"> Welcome to this official website of Naukri Result</h3>

        <p className="px-5 text-base text-justify">
          There are many websites similar to the name of Naukri Result, so you
          have to be careful. To open the real NaukriResult website, just open
         <span className="text-red"> www.NaukriResult.co </span>and after NaukriResult.Co must be checked,
          for all kinds of updates related to jobs. You can also connect with us on our social media accounts:
          Twitter, Facebook, Instagram, Koo, Telegram, available on YouTube.
        </p>
        <h3 className="pl-5 text-lightBlue">
          Disclaimer:</h3><p className="px-5 text-justify"> The Examination Results/Marks published on this website
          are only for immediate information to the examinees and do not
          constitute a legal document. While all efforts have been made to make
          the information available on this website as authentic as possible, we
          are not responsible for any inadvertent error that may have crept into
          the examination results/marks being published on this website or for
          any loss to anybody or anything caused by any shortcoming, defect, or
          inaccuracy of the information on this website.
          </p>
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
}
