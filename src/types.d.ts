interface DepartmentObject {
  name: String
  location: String[]
  employees: String[]
}

interface FilterOptionsObject {
  company: String
  departments: Array<DepartmentObject>
}

interface FilterValuesObject {
  companyName: PropType<Ref<string>>
  departmentName: PropType<Ref<string>>
  locationName: PropType<Ref<string>>
  employeeName: PropType<Ref<string>>
}

interface LogsData {
  data: never[]
  per_page: number
  total_pages: number
  current_page: number
  totalRows: number
}
