import EmpList from './empList'
import { connect } from "react-redux"
import * as actions from '../../Shared/Redux/empList/actions'
import { loadingSelector, makeSelectDashboard } from "../../Shared/Redux/empList/selectors"





const mapStateToProps = state => ({
  employee: makeSelectDashboard(state),
  loading: loadingSelector(state)

})

const mapDispatchToProps = {
  ...actions,
}



export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EmpList) 