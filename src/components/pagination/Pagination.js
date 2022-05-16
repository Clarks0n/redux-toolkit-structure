import React from 'react';
import Pagination from '@material-ui/lab/Pagination';


export const PaginationComp = ({onChange}) => {
    let pageCount = 2; //default

    return (
        <div data-testid="pagination" >
            <Pagination
                count={pageCount}
                variant="outlined" 
                shape="rounded"
                onChange={onChange}
            />
        </div>
    )
}