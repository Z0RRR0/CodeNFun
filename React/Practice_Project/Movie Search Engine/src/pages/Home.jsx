import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Home() {
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "The Big Bang Theory", release_date: "24 Sept 2007"},
        {id: 2, title: "Young Sheldon", release_date: "25 Sept 2017"},
        {id: 3, title: "Modern Family", release_date: "23 September 2009"},
        {id: 4, title: "Fresh Off the Boat", release_date: "4 February 2015"}
    ];
    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }


    return (
    <div className="home">
        <form onSubmit={handleSearch} className="search-form" >
            <input 
                type="text" 
                placeholder="Search for Movie or Series..." 
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="search-button">➽</button>
        </form>
        
        <div className="movies.grid">
            {movies.map((movie) => 
                movie.title.startsWith(searchQuery) && 
                (
                    <MovieCard movie={movie} key={movie.id}/>
                ) || 
                movie.title.toLowerCase().startsWith(searchQuery) && 
                (
                    <MovieCard movie={movie} key={movie.id}/>
                )
            )}
        </div>
    </div>
    )
}

export default Home