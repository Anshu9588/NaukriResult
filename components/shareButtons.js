"use client";
import Link from "next/link";
const ShareButton = ({ postUrl,postName }) => {
  const message =  postUrl;
  const copyLink = () => {
    navigator.clipboard.writeText(postUrl);
    alert("Link copied to clipboard");
  };
  return ( 
    <div className="flex flex-wrap justify-center gap-4 font-bold py-2 text-base text-white  text-center">
      <div className="font-bold text-purple-700 px-1 animate-bounce my-auto">
        Share Links
      </div>

      <button className="bg-green text-green-800 rounded-lg hover:-translate-y-1 transform transition-all duration-300   px-3 py-2 ">
        <Link
          href={
            "https://api.whatsapp.com/send?text=" + encodeURIComponent(message)
          } target="_blank"
        >
          {" "}
          WhatsApp{" "}
        </Link>
      </button>
      <button className="bg-blue rounded-lg   px-3 py-2  hover:-translate-y-1 transform transition-all duration-300 ">
        <Link
          href={
            "https://www.facebook.com/sharer/sharer.php?u=" +
            encodeURIComponent(postUrl)
          } target="_blank"
        >
          {" "}
          Facebook{" "}
        </Link>
      </button>
      
      <button className="bg-[#3336F0] rounded-lg  px-3 py-2  hover:-translate-y-1 transform transition-all duration-300 ">
        <Link
          href={
            "https://telegram.me/share/url?url=" +
            encodeURIComponent(postUrl) +
            "&text=" +
            encodeURIComponent(message)
          } target="_blank"
        >
          {" "}
          Telegram{" "}
        </Link>
      </button>
      <button
        onClick={() => copyLink()}
        className="bg-red text-white rounded-lg  text-center self-center px-3 py-2  hover:-translate-y-1 transform transition-all duration-300 "
      >
        Copy Link
      </button>
    </div>
  );
};
export default ShareButton;
