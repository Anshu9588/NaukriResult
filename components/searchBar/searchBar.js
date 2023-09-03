import PostModel from "@/db/Model/post.Model";
import SearchInput from "./searchInput";

async function getData (){
const data  = (await PostModel.find({},{seoLink:1,nameOfPost:1,})).map(list=> {return {seoLink:list.seoLink,nameOfPost:list.nameOfPost}})
return data
}

const SearchBar = async() => {
  
  const data = await getData()
  
  return <SearchInput data={data} />
 
};
export default SearchBar;
