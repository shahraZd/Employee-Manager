
import * as CONSTANTS from './constants'

export function fetchEmployee() {
  return {
    type: CONSTANTS.FETCH_EMPLOYEE_REQUEST,
  }
}

export function deleteEmployee(id) {
  return {
    type: CONSTANTS.DELETE_EMPLOYEE_REQUEST,
    id,
  }
} 
export function addEmployee(newEmp) {
  return {
    type: CONSTANTS.ADD_EMPLOYEE_REQUEST,
    newEmp,
  }
}
export function getEmployee(id) {
  return {
    type: CONSTANTS.GET_EMPLOYEE_REQUEST,
    id,
  }
}
export function editEmployee(id,editEmp) {
  return {
    type: CONSTANTS.EDIT_EMPLOYEE_REQUEST,
    editEmp,
    id
  }
}

