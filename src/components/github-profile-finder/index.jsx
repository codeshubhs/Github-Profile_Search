import { useEffect, useState } from "react";
import User from "./User";
import LightDarkMode from "./LightDarkMode";
import './style.css';

import { useTheme } from "../../ThemeContext";

export default function GithubProfileFinder() {
    const { theme } = useTheme();
    const [userName, setUserName] = useState("Shubham Yadav");
    const [userdata, setUserdata] = useState(null);
    const [loading, setLoading] = useState(true);

    async function fetchGithubUserData() {
        setLoading(true);

        const res = await fetch(`https://api.github.com/users/${userName}`);
        const data = await res.json();

        if (data) {
            setUserdata(data);
            setLoading(false);
            setUserName('');
        }
    }

    function handleSubmit() {
        fetchGithubUserData();
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if (loading) {
        return <h1>Loading data! Please wait...</h1>;
    }

    return (
        <div className={`github-profile-container ${theme}`}>
            <div className="input-wrapper">
                <input 
                    name="search-by-username" 
                    type="text"
                    placeholder="Search Github username.."
                    value={userName} 
                    onChange={(e) => setUserName(e.target.value)} 
                />
                <button onClick={handleSubmit}>Search</button>
            </div>
            {userdata !== null ? <User user={userdata} /> : null}
            <LightDarkMode />
        </div>
    );
}
