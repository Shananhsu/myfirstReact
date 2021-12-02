import { useState } from "react";
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("小智");
  const [isPending, setIspending] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };

    setIspending(true);

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("新增成功");
      setIspending(false);
      history.push('/')
    });
    
  };
  return (
    <div className="create">
      <h2>新增神奇寶貝</h2>
      <form onSubmit={handleSubmit}>
        <label>神奇寶貝名稱:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>神奇寶貝說明:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>發現人:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="小智">小智</option>
          <option value="小霞">小霞</option>
          <option value="小鋼">小鋼</option>
        </select>

        {!isPending && <button>發現新寶貝</button>}
        {isPending && <button disabled>新增新寶貝中...</button>}
      </form>
    </div>
  );
};

export default Create;
