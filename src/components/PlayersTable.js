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
                    <Cell dataKey="Player" />
                </Column>
                <Column width={75}>
                    <HeaderCell>Team</HeaderCell>
                    <Cell dataKey="Team" />
                </Column>
                <Column width={75}>
                    <HeaderCell>Pos</HeaderCell>
                    <Cell dataKey="Pos" />
                </Column>
                <Column width={75}>
                    <HeaderCell>Att</HeaderCell>
                    <Cell dataKey="Att" />
                </Column>
                <Column width={75}>
                    <HeaderCell>Att/G</HeaderCell>
                    <Cell dataKey="Att/G" />
                </Column>
                <Column width={75} sortable>
                    <HeaderCell>Yds</HeaderCell>
                    <Cell dataKey="Yds" />
                </Column>
                <Column width={75}>
                    <HeaderCell>Avg</HeaderCell>
                    <Cell dataKey="Avg" />
                </Column>
                <Column width={75}>
                    <HeaderCell>Yds/G</HeaderCell>
                    <Cell dataKey="Yds/G" />
                </Column>
                <Column width={75} sortable>
                    <HeaderCell>TD</HeaderCell>
                    <Cell dataKey="TD" />
                </Column>
                <Column width={75} sortable>
                    <HeaderCell>Lng</HeaderCell>
                    <Cell dataKey="Lng" />
                </Column>
                <Column width={75}>
                    <HeaderCell>1st</HeaderCell>
                    <Cell dataKey="1st" />
                </Column>
                <Column width={75}>
                    <HeaderCell>1st%</HeaderCell>
                    <Cell dataKey="1st%" />
                </Column>
                <Column width={75}>
                    <HeaderCell>20+</HeaderCell>
                    <Cell dataKey="20+" />
                </Column>
                <Column width={75}>
                    <HeaderCell>40+</HeaderCell>
                    <Cell dataKey="40+" />
                </Column>
                <Column width={75}>
                    <HeaderCell>FUM</HeaderCell>
                    <Cell dataKey="FUM" />
                </Column>
            </Table>
        </div>
    )
}