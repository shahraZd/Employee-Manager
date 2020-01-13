import Description from "./Description"
import React from "react"
import { connect } from "react-redux"
// import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { getOneEmployee, loadingSelector } from "../../Shared/Redux/empList/selectors"
import * as actions from '../../Shared/Redux/empList/actions'


const WrappedDescription = props => (< Description {...props} />)


const mapStateToProps = (state, ownProps) => ({
    employee: getOneEmployee(state, ownProps.match.params.id),
    loading: loadingSelector(state)
}
)


const mapDispatchToProps = {
    ...actions,
}


// const withCompose = compose(withConnect, withRouter)
export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps)(WrappedDescription)
)