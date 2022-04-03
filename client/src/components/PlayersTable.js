
import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';

export const PlayersTable = ({getFilteredData, sortColumn, sortType, handleSortColumn, loading}) => {
    return (
        <div>
            <Table
                height={500}
                data={getFilteredData()}
                sortColumn={sortColumn}
                sortType={sortType}
                onSortColumn={handleSortColumn}
                loading={loading}

            >
                <Column width={200} align="center" fixed>
                    <HeaderCell>Player</HeaderCell>
                    <Cell dataKey="player" />
                </Column>
                <Column width={75}>
                    <HeaderCell>Team</HeaderCell>
                    <Cell dataKey="team" />
                </Column>
                <Column width={75}>
                    <HeaderCell>Pos</HeaderCell>
                    <Cell dataKey="pos" />
                </Column>
                <Column width={75}>
                    <HeaderCell>Att</HeaderCell>
                    <Cell dataKey="att" />
                </Column>
                <Column width={75}>
                    <HeaderCell>Att/G</HeaderCell>
                    <Cell dataKey="attG" />
                </Column>
                <Column width={75} sortable>
                    <HeaderCell>Yds</HeaderCell>
                    <Cell dataKey="yds" />
                </Column>
                <Column width={75}>
                    <HeaderCell>Avg</HeaderCell>
                    <Cell dataKey="avg" />
                </Column>
                <Column width={75}>
                    <HeaderCell>Yds/G</HeaderCell>
                    <Cell dataKey="ydsG" />
                </Column>
                <Column width={75} sortable>
                    <HeaderCell>TD</HeaderCell>
                    <Cell dataKey="td" />
                </Column>
                <Column width={75} sortable>
                    <HeaderCell>Lng</HeaderCell>
                    <Cell dataKey="lng" />
                </Column>
                <Column width={75}>
                    <HeaderCell>1st</HeaderCell>
                    <Cell dataKey="firstDowns" />
                </Column>
                <Column width={75}>
                    <HeaderCell>1st%</HeaderCell>
                    <Cell dataKey="firstDownsPercentage" />
                </Column>
                <Column width={75}>
                    <HeaderCell>20+</HeaderCell>
                    <Cell dataKey="twentyPlus" />
                </Column>
                <Column width={75}>
                    <HeaderCell>40+</HeaderCell>
                    <Cell dataKey="fortyPlus" />
                </Column>
                <Column width={75}>
                    <HeaderCell>FUM</HeaderCell>
                    <Cell dataKey="fum" />
                </Column>
            </Table>
        </div>
    )
}