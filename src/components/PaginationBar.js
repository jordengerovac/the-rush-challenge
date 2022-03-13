import { Pagination } from 'rsuite';

export const PaginationBar = ({limit, page, setPage, handleChangeLimit, data}) => {
    return (
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
                total={data.length}
                limitOptions={[10, 20]}
                limit={limit}
                activePage={page}
                onChangePage={setPage}
                onChangeLimit={handleChangeLimit}
            />
        </div>
    )
}