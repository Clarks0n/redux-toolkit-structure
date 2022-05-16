import React, {useEffect, useState} from 'react';
import { TextBox, Button, SelectBox } from 'devextreme-react';
import { DataGrid, Column } from 'devextreme-react/data-grid';
import { useDispatch } from 'react-redux';
import { getPagination, searchSorted, searchGender, searchKeyword } from '../../store/slices/user';
import { PaginationComp } from '../../components/pagination/Pagination';


// USING UNWRAP NOT SELECTOR
const UserUsingUnwrap = () => {
    const dispatch = useDispatch();

    const genderList = ["All","Male","Female"];
    
    const [dataSource,setDataSource] = useState(null);
    const [page,setPage] = useState(1);
    const [keyword,setKeyword] = useState('');
    const [gender,setGender] = useState(genderList[0]);


    useEffect(() => {
        dispatch(getPagination({page})).unwrap()
        .then((response) => {
        // handle result here
            setDataSource(response)
        })
        .catch((e) => {
        // handle error here
            console.log(e)
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const calculateName = (rowData) => {
		return rowData.name.first + " " +  rowData.name.last
    };

    const onOptionChanged = (e) => {
        let dataField = "";
        let sortOrder = e.value;
     
        if (e.fullName.includes("sortOrder")) {
            let index = Number(e.fullName.charAt(8));
            dataField = e.component.columnOption(index, "dataField");
        };

        if (typeof sortOrder === "string") {
            dispatch(searchSorted({page,dataField,sortOrder})).unwrap()
            .then((response) => {
                setDataSource(response)
            })
        }
    };

    const onPaginationClick = (_, value) => {
        const page = value;
        setPage(value);
        dispatch(getPagination({page})).unwrap()
        .then((response) => {
            setDataSource(response)
        })
    };

    const onGenderChanged = (e) => {
        let gender = e.value.toLowerCase();

        switch(e.value) {
            case "All":
                setGender(genderList[0]);
                break;
            case "Male":
                setGender(genderList[1]);
                break;
            case "Female":
                setGender(genderList[2]);
                break;
            default:
        };

        dispatch(searchGender({page,gender})).unwrap()
        .then((response) => {
            setDataSource(response)
        })
    };

    const handleSearch = () => {
        dispatch(searchKeyword({page,keyword})).unwrap()
        .then((response) => {
            setDataSource(response)
        })
    };

    const resetFilter = () => {
        setKeyword('');
        setGender(genderList[0]);

        dispatch(getPagination({page})).unwrap()
        .then((response) => {
            setDataSource(response)
        })
    };

    return (
        <>	
            <div className="container">
                <div className="collection">
                    <div className="section">
                        <div className="sort">
                            <span>Search</span>
                            <TextBox
                                placeholder='Search...'
                                value={keyword}
                                onValueChanged={(e) => setKeyword(e.value)}
                            />
                        </div>
                    </div>
                    <div >
                        <Button
                            type='default'
                            icon="search"
                            onClick={handleSearch}
                        />
                    </div>

                    <div className="section">
                        <div className="sort">
                            <span>Gender</span>
                            <SelectBox
                                value={gender}
                                items={genderList} 
                                onValueChanged={onGenderChanged}
                            />
                        </div>
                    </div>

                    <div className="section">
                        <div className="sort">
                            <Button
                                text="Reset Filter"
                                onClick={resetFilter}
                            />
                        </div>
                    </div>
                </div>

                {/* DATA */}
                <div className="collection">
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
}

export default UserUsingUnwrap