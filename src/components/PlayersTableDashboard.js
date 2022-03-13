import React, { useState } from 'react';
import { rushing } from '../data/rushing';
import { ExportButton } from './ExportButton';
import { SearchBar } from './SearchBar';
import { PaginationBar } from './PaginationBar';
import { PlayersTable } from './PlayersTable';

export const PlayersTableDashboard = () => {
    const [sortColumn, setSortColumn] = useState();
    const [sortType, setSortType] = useState();
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const handleChangeLimit = (dataKey) => {
        setPage(1);
        setLimit(dataKey);
    };

    const getSortedData = (filteredData) => {
        if (sortColumn && sortType) {
            filteredData = filteredData.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
                
                if (typeof x === 'string') {
                    x = parseInt(x.replace(/,/g, ''), 10);
                }
                if (typeof y === 'string') {
                    y = parseInt(y.replace(/,/g, ''), 10);
                }

                if (sortType === 'asc') {
                    return x - y;
                } 
                else {
                    return y - x;
                }
            });
        }
        return filteredData;
    }

    const getQueriedData = (filteredData) => {
        filteredData = filteredData.filter((player) => {
            return player.Player.includes(searchText);
        })
        return filteredData;
    }

    const getExportData = (filteredData) => {
        if (searchText !== '') {
            filteredData = getQueriedData(filteredData);
        }
        filteredData = getSortedData(filteredData);
        return filteredData;
    }

    const getPaginatedData = (filteredData) => {
        return filteredData.filter((v, i) => {
            const start = limit * (page - 1);
            const end = start + limit;
            return i >= start && i < end;
        });
    }

    const getFilteredData = () => {
        let filteredData = rushing;
        filteredData = getExportData(filteredData);
        return getPaginatedData(filteredData);
    };

    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };

    const handleSearch = (e) => {
        setPage(1);
        setSearchText(e.target.value);
    }

    return (
        <div className='players-table-dashboard'>
            <h1>The Rush Challenge</h1>
            <div className='players-table-header'>
                <ExportButton data={getExportData(rushing)}/>
                <SearchBar searchText={searchText} handleSearch={handleSearch} />
            </div>
            <PlayersTable 
                getFilteredData={getFilteredData} 
                sortColumn={sortColumn} 
                sortType={sortType} 
                handleSortColumn={handleSortColumn} 
                loading={loading} 
            />
            <PaginationBar 
                limit={limit} 
                page={page} 
                setPage={setPage} 
                handleChangeLimit={handleChangeLimit} 
                data={rushing} 
            />
        </div>
    );
};