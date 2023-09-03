import PostModel from "@/db/Model/post.Model";
import { mongoConnect } from "@/db/db";

export default async function sitemap() {
  await mongoConnect();
  function convertDate(dateString) {
    const originalDate = dateString === "" ? new Date() : new Date(dateString);
    const iso8601Date = originalDate.toISOString();
    const timeZoneOffsetMinutes = originalDate.getTimezoneOffset();
    const timeZoneOffsetHours = Math.abs(Math.floor(timeZoneOffsetMinutes / 60))
      .toString()
      .padStart(2, "0");
    const timeZoneOffsetMinutesFormatted = (
      Math.abs(timeZoneOffsetMinutes) % 60
    )
      .toString()
      .padStart(2, "0");
    const timeZoneOffsetSign = timeZoneOffsetMinutes < 0 ? "+" : "-";
    const formattedTimeZoneOffset = `${timeZoneOffsetSign}${timeZoneOffsetHours}:${timeZoneOffsetMinutesFormatted}`;
    const finalFormattedDate = iso8601Date.replace(
      "Z",
      formattedTimeZoneOffset
    );
    return finalFormattedDate;
  }
  const date = convertDate("");
  const postdata = await PostModel.find({}, { seoLink: 1, updatedAt: 1 });
  const postmap = postdata.map((item) => {
    const date = convertDate(item.updatedAt);
    return {
      url: `https://www.naukriresult.co/${item.seoLink}`,
      lastModified: date,
      changefreq: "daily",
      priority: 0.6400,
    };
  });
  const categoryArr =[
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
  const categorymap = categoryArr.map(item=>{return {
    url: `https://www.naukriresult.co/${item}/`,
    lastModified: date,
    changefreq: "daily",
    priority: 0.7400,
  }})
  return [
    {
      url: "https://www.naukriresult.co/",
      lastModified: date,
      changefreq: "daily",
      priority: 1.0,
    },
    {
      url: "https://www.naukriresult.co/privacypolicy",
      lastModified: date,
    },
    ...categorymap,
    ...postmap,
  ];
}
