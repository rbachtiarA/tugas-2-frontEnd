interface EmployeeData {
    id: string,
    name: string,
    picture: string,
    country: string
}

interface TeamData {
    field: string,
    employeeData: EmployeeData[],
}