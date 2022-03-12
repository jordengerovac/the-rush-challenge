import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

const data = [
    { name: "Mohammad", surname: "Faisal", birthYear: 1995 },
    { name: "Nayeem Raihan ", surname: "Shuvo", birthYear: 1994 },
];

const columns = [
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    { title: "Birth Year", field: "birthYear", type: "numeric" },
];

export const BasicTable = () => {
    return (
        <div style={{
            display: 'block', width: 700, paddingLeft: 30
        }}>
            <Table
                height={500}
                data={data}
            >
                <Column width={200} align="center" fixed>
                    <HeaderCell>Name</HeaderCell>
                    <Cell dataKey="name" />
                </Column>

                <Column width={200} fixed>
                    <HeaderCell>Surname</HeaderCell>
                    <Cell dataKey="surname" />
                </Column>
            </Table>
        </div>
    );
};