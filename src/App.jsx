
import React from "react";
//import GithubProfileFinder from "./GithubProfileFinder";
//import GithubProfileFinder from "./components/github-profile-finder";
import GithubProfileFinder from "./components/github-profile-finder";
import { ThemeProvider } from "./ThemeContext";
//import './style.css';

function App() {
    return (
        <ThemeProvider>
            <GithubProfileFinder />
        </ThemeProvider>
    );
}

export default App;


