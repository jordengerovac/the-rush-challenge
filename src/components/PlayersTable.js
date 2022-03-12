import React, { useState } from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import { Pagination } from 'rsuite';
import 'rsuite-table/dist/css/rsuite-table.css';
import { rushing } from '../data/rushing';
import { CSVLink } from 'react-csv';

export const PlayersTable = () => {
    const [sortColumn, setSortColumn] = useState();
    const [sortType, setSortType] = useState();
    const [loading, setLoading] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const handleChangeLimit = dataKey => {
        setPage(1);
        setLimit(dataKey);
    };

    const getData = () => {
        let filteredData = rushing;
        if (searchText != '') {
            if (page != 1) {
                setPage(1);
            }
            filteredData = filteredData.filter((player) => {
                return player.Player.includes(searchText);
            })
        }
        else {
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
        }
        return filteredData.filter((v, i) => {
            const start = limit * (page - 1);
            const end = start + limit;
            return i >= start && i < end;
        });
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
        setSearchText(e.target.value);
    }

    return (
        <div style={{
            display: 'block', width: 800, paddingLeft: 30
        }}>
            <div style={{display:'flex', justifyContent: 'space-between'}}>
                <div>
                    <button className='export-btn'>
                        <CSVLink data={getData()}>
                            Export
                        </CSVLink>
                    </button>
                </div>
                <div>
                    <input className='search-bar' type="text" placeholder="Search.." onChange={handleSearch} value={searchText} />
                </div>
            </div>
            <Table
                height={500}
                data={getData()}
                sortColumn={sortColumn}
                sortType={sortType}
                onSortColumn={handleSortColumn}
                loading={loading}

            >
                <Column width={200} align="center" fixed>
                    <HeaderCell>Player</HeaderCell>
                    <Cell dataKey="Player" />
                </Column>
                <Column width={50}>
                    <HeaderCell>Team</HeaderCell>
                    <Cell dataKey="Team" />
                </Column>
                <Column width={50}>
                    <HeaderCell>Pos</HeaderCell>
                    <Cell dataKey="Pos" />
                </Column>
                <Column width={50}>
                    <HeaderCell>Att</HeaderCell>
                    <Cell dataKey="Att" />
                </Column>
                <Column width={50}>
                    <HeaderCell>Att/G</HeaderCell>
                    <Cell dataKey="Att/G" />
                </Column>
                <Column width={50} sortable>
                    <HeaderCell>Yds</HeaderCell>
                    <Cell dataKey="Yds" />
                </Column>
                <Column width={50}>
                    <HeaderCell>Avg</HeaderCell>
                    <Cell dataKey="Avg" />
                </Column>
                <Column width={50}>
                    <HeaderCell>Yds/G</HeaderCell>
                    <Cell dataKey="Yds/G" />
                </Column>
                <Column width={50} sortable>
                    <HeaderCell>TD</HeaderCell>
                    <Cell dataKey="TD" />
                </Column>
                <Column width={50} sortable>
                    <HeaderCell>Lng</HeaderCell>
                    <Cell dataKey="Lng" />
                </Column>
                <Column width={50}>
                    <HeaderCell>1st</HeaderCell>
                    <Cell dataKey="1st" />
                </Column>
                <Column width={50}>
                    <HeaderCell>1st%</HeaderCell>
                    <Cell dataKey="1st%" />
                </Column>
                <Column width={50}>
                    <HeaderCell>20+</HeaderCell>
                    <Cell dataKey="20+" />
                </Column>
                <Column width={50}>
                    <HeaderCell>40+</HeaderCell>
                    <Cell dataKey="40+" />
                </Column>
                <Column width={50}>
                    <HeaderCell>FUM</HeaderCell>
                    <Cell dataKey="FUM" />
                </Column>
            </Table>
            <div style={{ padding: 20 }}>
                <Pagination
                    prev
                    next
                    first
                    last
                    ellipsis
                    boundaryLinks
                    maxButtons={5}
                    size="xs"
                    layout={['total', '-', 'limit', '|', 'pager', 'skip']}
                    total={rushing.length}
                    limitOptions={[10, 20]}
                    limit={limit}
                    activePage={page}
                    onChangePage={setPage}
                    onChangeLimit={handleChangeLimit}
                />
            </div>
        </div>
    );
};