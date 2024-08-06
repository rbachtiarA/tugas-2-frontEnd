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
interface ProductData {
    product: Product
}
interface Product {
    name: string,
    slug: string,
    images: any,
    sideImages: any,
    description: string,
    tags: string[],
    suggest: string[],
    bgColor: string,
    price: number,
    rating: number

}