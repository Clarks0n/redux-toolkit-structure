import { render, screen } from '@testing-library/react';
import { PaginationComp } from '../Pagination';

describe("PaginationComp", () => {
    it('render pagination element', async () => {
        render(
            <PaginationComp />
        );
        const paginationDivElement = await screen.findByTestId('pagination')
        expect(paginationDivElement).toBeInTheDocument();
    });

});
