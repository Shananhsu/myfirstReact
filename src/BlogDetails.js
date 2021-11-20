import { useHistory, useParams } from "react-router";
import useFetch from "./useEffect";

const BlogDetails = () => {
  const { id } = useParams();

  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  const history = useHistory();

  const handleClick = () => {
    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>讀取中．．．</div>}
      {error && <div> {error} </div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>作者 {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleClick}>殘忍刪除</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
