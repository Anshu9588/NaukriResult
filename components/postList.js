import Link from "next/link";
const PostList = ({ data,count,category }) => {
  return (
    <ul className="list-disc  pt-1 ps-6 pe-0 marker:text-green marker:text-lg">
      {data.map((item,index) => {
        if(count==="home"&& index>10) return
        if(category==="syllabus"&& index>5) return
        if(category==="goverment-scheme"&& index>5) return
        if(category==="important"&& index>5) return
        return (
          <li
            key={item._id}
            className="mb-2.5 text-base leading-snug hover:underline hover:underline-offset-4"
          >
            <Link prefetch={false}
              href= {`/${item.seoLink}`}
            >
              <span className="text-[#000099]  hover:text-blue">{item.nameOfPost}</span> {category==="latest-jobs" && <span className="text-[0.9rem]">Last Date: <span className="text-[#550000]">{item.appLastDate}</span></span>} 
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
export default PostList;
