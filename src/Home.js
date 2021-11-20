import Bloglist from "./BlogList";
import useFetch from "./useEffect";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="home">
      {error && <div> {error} </div>}
      {isPending && <div>讀取中．．．</div>}
      {blogs && <Bloglist blogs={blogs} title="所有的神奇寶貝介紹 ！" />}
    </div>
  );
};

export default Home;
