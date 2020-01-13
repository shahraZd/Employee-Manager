import { createSelector } from 'reselect';
import { initialState } from './reducer';

// SELECTOR TO GET DATA FROM THE STATE
const selectDashboardDomain = state => state || initialState;

// USE RESELECT TO MEMOIZE THE SELECTED DATA
export const makeSelectDashboard = createSelector(selectDashboardDomain, substate => substate.data);

export const loadingSelector = createSelector(selectDashboardDomain, substate => substate.loading);


const employeeSelector = (state, id) => state.data.find(e => e.id === +id) || initialState;

export const getOneEmployee =
  createSelector([employeeSelector], substate => substate

  )
