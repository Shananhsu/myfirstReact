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
      {blogs && <Bloglist blogs={blogs} title="我的寶貝圖鑑！" />}
    </div>
  );
};

export default Home;
