import { TextBox, Button, SelectBox } from 'devextreme-react';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import { PaginationComp } from '../../components/pagination/Pagination';

const UserView = (props) => {
    const {
        dataSource,
        genderList,
        keyword,
        gender,
        onKeywordChanged,
        calculateName,
        onOptionChanged,
        onPaginationClick,
        onGenderChanged,
        handleSearch,
        resetFilter
    } = props;
    
    return (
        <>	
            <div className="container">
                <div className="collection">
                    <div className="section">
                        <div className="sort" data-testid="UserSearchTextBox">
                            <span>Search</span>
                            <TextBox 
                                placeholder='Search...'
                                value={keyword}
                                onValueChanged={onKeywordChanged}
                            />
                        </div>
                    </div>
                    <div data-testid="UserSearchButton">
                        <Button 
                            type='default'
                            icon="search"
                            onClick={handleSearch}
                        />
                    </div>

                    <div className="section">
                        <div className="sort" data-testid="UserSearchSelectBox">
                            <span>Gender</span>
                            <SelectBox 
                                value={gender}
                                items={genderList} 
                                onValueChanged={onGenderChanged}
                            />
                        </div>
                    </div>

                    <div className="section">
                        <div className="sort" data-testid="UserSearchFilter">
                            <Button 
                                text="Reset Filter"
                                onClick={resetFilter}
                            />
                        </div>
                    </div>
                </div>

                {/* DATA */}
                <div className="collection" data-testid="UserDatagrid">
                    <DataGrid 
                        dataSource={dataSource}
                        showBorders={true}
                        onOptionChanged={onOptionChanged}
                    >
                        <Column dataField="login.username" caption="Username" />
                        <Column dataField="name.first" calculateCellValue={calculateName} caption="Name"/>
                        <Column dataField="email" caption="Email"  />
                        <Column dataField="gender" caption="Gender" />
                        <Column dataField="registered.date" caption="Registered Date" />
                    </DataGrid>
                </div>
                <div>
                    <PaginationComp 
                        onChange={onPaginationClick}
                    />
                </div>
            </div>
        </>
    )
};

export default UserView