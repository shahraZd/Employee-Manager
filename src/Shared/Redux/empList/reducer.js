
import produce from 'immer'
import * as CONSTANTS from './constants'

export const initialState = {
  data: [],
  loading: false,
}

/* eslint-disable default-case, no-param-reassign */
const empListReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      /*---------------FETCH EMPLOYEES--------------*/
      case CONSTANTS.FETCH_EMPLOYEE_REQUEST:
        draft.loading = true
        break
      case CONSTANTS.FETCH_EMPLOYEE_SUCCESS:
        draft.data = action.employee
        draft.loading = false
        break
      case CONSTANTS.FETCH_EMPLOYEE_FAILED:
        draft.loading = false
        break

      /*---------------DELETE EMPLOYEE--------------*/
      case CONSTANTS.DELETE_EMPLOYEE_REQUEST:
        draft.loading = true
        break
      case CONSTANTS.DELETE_EMPLOYEE_SUCCESS:
        draft.data = draft.data.filter(el => el.id !== action.id)
        draft.loading = false
        break
      case CONSTANTS.DELETE_EMPLOYEE_FAILED:
        draft.loading = false
        break

      /*---------------ADD EMPLOYEE--------------*/
      case CONSTANTS.ADD_EMPLOYEE_REQUEST:
        draft.loading = true
        break
      case CONSTANTS.ADD_EMPLOYEE_SUCCESS:
        draft.data = state.data.concat(action.newEmp)
        draft.loading = false
        break
      case CONSTANTS.ADD_EMPLOYEE_FAILED:
        draft.loading = false
        break

      /*---------------GET EMPLOYEE--------------*/
      case CONSTANTS.GET_EMPLOYEE_REQUEST:
        draft.loading = true
        break
      case CONSTANTS.GET_EMPLOYEE_SUCCESS:
        draft.data = state.data.filter(e => e.id === action.id)
        draft.loading = false
        break
      case CONSTANTS.GET_EMPLOYEE_FAILED:
        draft.loading = false
        break

      /*---------------EDIT EMPLOYEE--------------*/
      case CONSTANTS.EDIT_EMPLOYEE_REQUEST:
        draft.loading = true
        break
      case CONSTANTS.EDIT_EMPLOYEE_SUCCESS:
        draft.data = state.data.map(e => e.id === action.id ? { ...e, ...action.editEmp } : e)
        draft.loading = false
        break
      case CONSTANTS.EDIT_EMPLOYEE_FAILED:
        draft.loading = false
        break
    }
  })

export default empListReducer
