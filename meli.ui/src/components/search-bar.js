import { useState } from 'react';
import searchIcon from './../assets/ic_Search.png';
import { navigate } from "@reach/router"
import './../styles/search-bar.scss'

export default function SearchBar() {
    const [query, setQuery] = useState('');

    const handleQueryChange = (event) => {
        setQuery(event.target.value);
        event.preventDefault()
    }

    const onKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearch(event);
        }
    }

    const onSearch = (event) => {
        navigate(`/items?search=${query}`);
        event.preventDefault();
    }

    return (
        <div className="search-bar">
            <input type="text" onChange={handleQueryChange} value={query} onKeyPress={onKeyPress}></input>
            <button onClick={onSearch}>
                <div className="icon-search">
                    <img src={searchIcon} alt="Search" />
                </div>
            </button>
        </div>
    );
}
