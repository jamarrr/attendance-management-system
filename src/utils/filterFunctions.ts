import FILTER_OPTIONS from './data/filter-options.json'

/**
 * Extract all departments that will be used when ALL option in the company dropdown is selected
 */
const getAllDepartments = () =>
  FILTER_OPTIONS.map((option: FilterOptionsObject) => option.departments)
    .map((departments) => departments.flatMap((deparment) => deparment.name))
    .flatMap((dep) => dep)

/**
 * Get department details from the selected company
 */
const getCompanyDepartment = (companyName: String) =>
  FILTER_OPTIONS.filter(
    (option: FilterOptionsObject) => option.company === companyName
  )[0].departments

/**
 * Get department names from the selected company
 */
const getCompanyDepartments = (companyName: String) =>
  getCompanyDepartment(companyName).map(
    (department: DepartmentObject) => department.name
  )

/**
 * Extract all location that will be used when ALL option is selected
 */
const getAllLocations = () =>
  FILTER_OPTIONS.map((option: FilterOptionsObject) => option.departments)
    .map((departments) =>
      departments.flatMap((deparment) =>
        deparment.location.map((loc: String) => loc)
      )
    )
    .flatMap((location) => location)

/**
 * Get locations from the selected departments
 */
const getDepartmentLocations = (
  departments: DepartmentObject[],
  selectedDepartment: String
) =>
  selectedDepartment !== ''
    ? departments
        .filter((department) => department.name === selectedDepartment)[0]
        .location.map((loc: String) => loc)
    : []

/**
 * Extract all employes that will be used when ALL option is selected
 */
const getAllEmployees = () =>
  FILTER_OPTIONS.map((option: FilterOptionsObject) => option.departments)
    .map((departments) =>
      departments.flatMap((deparment) =>
        deparment.employees.map((emp: String) => emp)
      )
    )
    .flatMap((employee) => employee)

/**
 * Get employees from the selected departments
 */
const getDepartmentEmployees = (
  departments: DepartmentObject[],
  selectedDepartment: String
) =>
  selectedDepartment !== ''
    ? departments
        .filter((department) => department.name === selectedDepartment)[0]
        .employees.map((emp: String) => emp)
    : []

export {
  getAllDepartments,
  getCompanyDepartments,
  getCompanyDepartment,
  getAllLocations,
  getDepartmentLocations,
  getAllEmployees,
  getDepartmentEmployees
}
