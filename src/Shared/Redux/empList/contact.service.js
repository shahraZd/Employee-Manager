import axios from 'axios'
import URL from './constants'

export const fetchEmployee = async () => {
  const result = await axios.get(URL.baseApiUrl() + URL.employee.getAll)
  return result.data
}

export const deleteEmployee = async (id) => {
  const result = await axios.delete(URL.baseApiUrl() + URL.employee.delete(id))
  return result.data
}
export const addEmployee = async (newEmp) => {
  const result = await axios.post(URL.baseApiUrl() + URL.employee.post,newEmp)
  return result.data
}
export const getEmployee = async (id) => {
  const result = await axios.get(URL.baseApiUrl() + URL.employee.get(id))
  return result.data
}
export const editEmployee = async (id,editEmp) => {
  const result = await axios.put(URL.baseApiUrl() + URL.employee.put(id),editEmp)
  return result.data
}

