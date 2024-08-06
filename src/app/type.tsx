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

interface TimelineCardData {
    label: string,
    date: string,
    content: string,
    image: {
        link: string,
        label: string
    }
}