import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as api from './contact.service'
import * as CONSTANTS from './constants'

export function* fetchContacts(/* action */) {

  try {
    const data = yield call(api.fetchEmployee)
    yield put({
      type: CONSTANTS.FETCH_EMPLOYEE_SUCCESS,
      employee: data,
    })
  } catch (e) {
    yield put({
      type: CONSTANTS.FETCH_EMPLOYEE_FAILED,
      e,
    })
  }
}

export function* deleteEmployee(action) {
  try {
    yield call(api.deleteEmployee, action.id)
    yield put({
      type: CONSTANTS.DELETE_EMPLOYEE_SUCCESS,
      id: action.id,
    })
  } catch (e) {
    yield put({ type: CONSTANTS.DELETE_EMPLOYEE_FAILED, e })
  }
}

export function* addEmployee(action) {
  try {
    const data = yield call(api.addEmployee, action.newEmp)
    yield put({
      type: CONSTANTS.ADD_EMPLOYEE_SUCCESS,
      newEmp: data,
    })
  } catch (e) {
    yield put({ type: CONSTANTS.ADD_EMPLOYEE_FAILED, e })
  }
}

export function* getEmployee(action) {
  try {
    yield call(api.getEmployee, action.id)
    yield put({
      type: CONSTANTS.GET_EMPLOYEE_SUCCESS,
      id: action.id,
    })
  } catch (e) {
    yield put({ type: CONSTANTS.GET_EMPLOYEE_FAILED, e })
  }
}

export function* editEmployee(action) {
  try {
    yield call(api.getEmployee, action.id, action.editEmp)
    yield put({
      type: CONSTANTS.EDIT_EMPLOYEE_SUCCESS,
      id: action.id,
      editEmp: action.editEmp
    })
  } catch (e) {
    yield put({ type: CONSTANTS.EDIT_EMPLOYEE_FAILED, e })
  }
}

export function* fetchContactsWatcher() {
  yield takeEvery(CONSTANTS.FETCH_EMPLOYEE_REQUEST, fetchContacts)
}
export function* deleteEmployeeWatcher() {
  yield takeEvery(CONSTANTS.DELETE_EMPLOYEE_REQUEST, deleteEmployee)
}
export function* addEmployeeWatcher() {
  yield takeEvery(CONSTANTS.ADD_EMPLOYEE_REQUEST, addEmployee)
}
export function* editEmployeeWatcher() {
  yield takeEvery(CONSTANTS.EDIT_EMPLOYEE_REQUEST, editEmployee)
}
export function* getEmployeeWatcher() {
  yield takeEvery(CONSTANTS.GET_EMPLOYEE_REQUEST, getEmployee)
}



export default function* employeeSaga() {
  yield all([
    fetchContactsWatcher(),
    deleteEmployeeWatcher(),
    addEmployeeWatcher(),
    editEmployeeWatcher(),
    getEmployeeWatcher()
  ])
}
