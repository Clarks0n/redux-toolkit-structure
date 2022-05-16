import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { getPagination, searchSorted, searchGender, searchKeyword } from '../../store/slices/user';
import UserView from './UserView';

const UserState  = () => {
    const dispatch = useDispatch();

    const [dataSource] = useSelector((state) => [
        state.userSlice.dataSource
    ],shallowEqual);

    const genderList = ["All","Male","Female"];

    const [page,setPage] = useState(1);
    const [keyword,setKeyword] = useState('');
    const [gender,setGender] = useState(genderList[0]);

    useEffect(() => {
        dispatch(getPagination({page}));
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
            dispatch(searchSorted({page,dataField,sortOrder}));
        }
    };

    const onPaginationClick = (_, value) => {
        const page = value;
        setPage(value);
        dispatch(getPagination({page}));
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

        dispatch(searchGender({page,gender}));
    };

    const onKeywordChanged = (e) => {
        setKeyword(e.value);
    };

    const handleSearch = () => {
        dispatch(searchKeyword({page,keyword}));
    };

    const resetFilter = () => {
        setKeyword('');
        setGender(genderList[0]);

        dispatch(getPagination({page}));
    };

    const UserProps = {
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
    };

    return (
        <UserView {...UserProps} />
    );
}

export default UserState;
