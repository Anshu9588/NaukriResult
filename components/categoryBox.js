import PostList from "./postList";
import Link from "next/link";
import localFont from 'next/font/local'
const myFont = localFont({ src: '/../public/font/Merriweather-Regular.ttf' })
const CategoryBox = ({ data, category, className,count="" }) => {
  const custumClass = `mt-2 border border-black w-custum-32% relative pb-8 min-h-custum-80rem ${
    className === undefined ? "" : className
  } `;
  const categoryHandler = (item) => {
    return item
      .split("-")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  };
  const dataHandler = (data, category) => {
    const res = data.filter((item) => {
      const postCategory = item.category[0].split(" ");
      if(postCategory.includes(category)) return true
      return false
    });
    return res
  };
  return (
    <div key={category} className={custumClass}>
      <Link prefetch={false}
        className={`bg-custum text-center py-0.5  text-white w-full block bg-transparent  text-2xl ${myFont.className}`}
        href={`/category/${category.toLowerCase()}`}
      >
        {categoryHandler(category)}
      </Link>
      {<PostList count={count} category={category} data={dataHandler(data[1][1], category)} />}
      <Link prefetch={false}
        href={`/category/${category.toLowerCase()}`}
        className="inline-block px-2 py-1 absolute right-0 bottom-1 hover:underline"
      >
        View More
      </Link>
    </div>
  );
};
export default CategoryBox;
