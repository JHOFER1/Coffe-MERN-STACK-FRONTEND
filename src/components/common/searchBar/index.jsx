const SearchBar = () => (
    <form action="/" method="get">
        <label for="header-search">
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search a coffee"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
);

export default SearchBar;