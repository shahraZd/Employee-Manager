
const FETCH_EMPLOYEE = 'app/Dashboard/FETCH_EMPLOYEE'
export const FETCH_EMPLOYEE_REQUEST = `${FETCH_EMPLOYEE}_REQUEST`
export const FETCH_EMPLOYEE_SUCCESS = `${FETCH_EMPLOYEE}_SUCCESS`
export const FETCH_EMPLOYEE_FAILED = `${FETCH_EMPLOYEE}_FAILED`

const DELETE_EMPLOYEE = 'app/Dashboard/DELETE_EMPLOYEE'
export const DELETE_EMPLOYEE_REQUEST = `${DELETE_EMPLOYEE}_REQUEST`
export const DELETE_EMPLOYEE_SUCCESS = `${DELETE_EMPLOYEE}_SUCCESS`
export const DELETE_EMPLOYEE_FAILED = `${DELETE_EMPLOYEE}_FAILED`


const ADD_EMPLOYEE = 'app/Dashboard/ADD_EMPLOYEE'
export const ADD_EMPLOYEE_REQUEST = `${ADD_EMPLOYEE}_REQUEST`
export const ADD_EMPLOYEE_SUCCESS = `${ADD_EMPLOYEE}_SUCCESS`
export const ADD_EMPLOYEE_FAILED = `${ADD_EMPLOYEE}_FAILED`

const GET_EMPLOYEE = 'app/Dashboard/GET_EMPLOYEE'
export const GET_EMPLOYEE_REQUEST = `${GET_EMPLOYEE}_REQUEST`
export const GET_EMPLOYEE_SUCCESS = `${GET_EMPLOYEE}_SUCCESS`
export const GET_EMPLOYEE_FAILED = `${GET_EMPLOYEE}_FAILED`

const EDIT_EMPLOYEE = 'app/Dashboard/EDIT_EMPLOYEE'
export const EDIT_EMPLOYEE_REQUEST = `${EDIT_EMPLOYEE}_REQUEST`
export const EDIT_EMPLOYEE_SUCCESS = `${EDIT_EMPLOYEE}_SUCCESS`
export const EDIT_EMPLOYEE_FAILED = `${EDIT_EMPLOYEE}_FAILED`


const employee = {
    getAll: '/employee',
    get: id => `/employee/${id}`,
    post: `/employee`,
    put: id => `/employee/${id}`,
    delete: id => `/employee/${id}`,
  }
  export default {
    /* begin: add this for real backend */
    // baseApiUrl: () => window.baseApiUrl,
    /* end */
    baseApiUrl: () => 'https://my-json-server.typicode.com/shahraZd/fakeServerGmc',
    employee,
  }
  