import React from 'react';

export const SearchBar = ({searchBarText, handleSearch}) => {
    return (
        <div>
            <input className='search-bar' type="text" placeholder="Search.." onChange={handleSearch} value={searchBarText} />
        </div>
    )
}