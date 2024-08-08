import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MovieDetail from "./pages/MovieDetail";
import SearchView from "./pages/SearchView";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
    return (
        <Router>
            <GlobalStyles />
            <Routes>
                <Route path="/" element={<SearchView />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
            </Routes>
        </Router>
    );
};

export default App;
