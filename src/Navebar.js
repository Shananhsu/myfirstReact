import { Link } from 'react-router-dom';

const Navebar = () => {
  return (
    <nav className="navbar">
      <h1>神奇寶貝圖鑑</h1>
      <div className="links">
          <Link to="/">神奇寶貝圖鑑</Link>
          <Link to="/create">新增神奇寶貝</Link>
      </div>
    </nav>
  );
};

export default Navebar;
