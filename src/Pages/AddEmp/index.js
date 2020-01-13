import AddEmp from './AddEmp'
import {connect} from "react-redux"
import * as actions from '../../Shared/Redux/empList/actions'



const mapStateToProps = state=>({
    employee: state.data,
    
  })
  
  const mapDispatchToProps = {
    ...actions,
  }
  
 
  
export default connect(
    mapStateToProps,
    mapDispatchToProps,
  ) (AddEmp)