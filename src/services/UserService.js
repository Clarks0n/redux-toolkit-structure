import http from "../utils/http-common";

// getAll
const getAll = () => {
    return http.get('?results=10')
};

// getPagination
const getPagination = (page) => {
    console.log(`?page=${page}&pageSize=2&results=10`);
    return http.get(`?page=${page}&pageSize=2&results=10&seed=dicky`)
};

// searchGender
const searchGender = (page,gender) => {
    console.log(`?page=${page}&pageSize=2&results=10&gender=${gender}`);
    return http.get(`?page=${page}&pageSize=2&results=10&gender=${gender}`)
};

// searchKeyword
const searchKeyword = (page,keyword) => {
    console.log(`?page=${page}&pageSize=2&results=10&keyword=${keyword}`);
    return http.get(`?page=${page}&pageSize=2&results=10&keyword=${keyword}&seed=${keyword}`);
};

// sort
const searchSorted = (page,dataField,sortOrder) => {
    console.log((`?page=${page}&pageSize=2&results=10&sortBy=${dataField}&sortOrder=${sortOrder}`));
    return http.get(`?page=${page}&pageSize=2&results=10&sortBy=${dataField}&sortOrder=${sortOrder}&seed=dicky`);
};

const UserService = {
  getAll,
  getPagination,
  searchGender,
  searchKeyword,
  searchSorted,
};

export default UserService;

