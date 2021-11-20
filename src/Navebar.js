import { Link } from 'react-router-dom';

const Navebar = () => {
  return (
    <nav className="navbar">
      <h1>神奇寶貝圖鑑</h1>
      <div className="links">
          <Link to="/">Home</Link>
          <Link to="/create">New Blog</Link>
      </div>
    </nav>
  );
};

export default Navebar;