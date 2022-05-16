import { render, screen } from '@testing-library/react';
import UserView from '../UserView';

describe("UserView", () => {
    it('should render search text', () => {
        render(
            <UserView />
        );
        const textSearch = screen.getByText(/Search/i);
        expect(textSearch).toBeInTheDocument();
    });

    it('should render input Element', async () => {
        render(
            <UserView />
        );
        const inputElement = await screen.findByTestId('UserSearchTextBox')
        expect(inputElement).toBeInTheDocument();
    });

    it('should render Button Element', async () => {
        render(
            <UserView />
        );
        const buttonElement = await screen.findByTestId('UserSearchButton')
        expect(buttonElement).toBeInTheDocument();
    });

     it('should render Datagrid', async () => {
        render(
            <UserView />
        );
        const datagridElement = await screen.findByTestId('UserDatagrid')
        expect(datagridElement).toBeInTheDocument();
    });

});