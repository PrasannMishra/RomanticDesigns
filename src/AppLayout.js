import Cart from "./component/Cart";
import About from "./component/About";
import NoMatch from "./component/NoMatch";
import Posts from "./component/Posts"
import PostLists from "./component/PostLists"
import Post from "./component/Post";
import { useState } from "react";
import Stats from "./component/Stats";
import Dashboard from "./component/DashBoard";
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
const navTextColor = { padding: 5, color: "white" }

function Login({ onLogin }) {
    const [creds, setCreds] = useState({});
    const navigate = useNavigate();

    function handleLogin() {
        // For demonstration purposes only. Never use these checks in production!
        // Use a proper authentication implementation
        if (creds.username === 'admin' && creds.password === '123') {
            onLogin && onLogin({ username: creds.username });
            navigate('/stats');
        }
    }
    return (
        <div style={{ padding: 10 }}>
            <br />
            <span>Username:</span><br />
            <input
                type="text"
                onChange={(e) => setCreds({ ...creds, username: e.target.value })} /><br />
            <span>Password:</span><br />
            <input
                type="password"
                onChange={(e) => setCreds({ ...creds, password: e.target.value })} /><br /><br />
            <button className="blue" onClick={handleLogin}>Login</button>
        </div>
    );
}
export default function AppLayout() {
    const [user, setUser] = useState();
    const navigate = useNavigate();

    function logOut() {
        setUser(null);
        navigate("/");
    }

    return (
        <div style={{ backgroundColor: "black" }}>
            {/*    <nav style={{ margin: "10 0 10 0" }}>
                <Link to="/" style={navTextColor}>Home</Link>
                <Link to="/posts" style={navTextColor}>Posts</Link>
                <Link to="/about" style={navTextColor}>About</Link>
                <span> | </span>
                {user && <Link to="/stats" style={navTextColor}>
                    Stats
                </Link>}
                {!user && <Link to="/login" style={navTextColor}>
                    Login
                </Link>}
                {user && <span onClick={logOut} style={{ padding: 5, cursor: 'pointer', color: "white" }}>
                    Logout
                </span>}
            </nav> */}
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/posts" element={<Posts />}>
                    <Route index element={<PostLists />} />
                    <Route path=":slug" element={<Post />} />
                </Route>
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login onLogin={setUser} />} />
                <Route path="/stats" element={<Stats user={user} />} />
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </div>
    );
}