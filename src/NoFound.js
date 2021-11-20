import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>非常抱歉</h2>
            <p>請你不要亂輸入網址</p>
            <Link to="/">回到首頁........</Link>
        </div>
     );
}
 
export default NotFound;