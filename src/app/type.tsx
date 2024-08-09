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

interface ContentfulProduct {
    sys: { id:  number | null | undefined; }; 
    fields: {
        name: string;  
        slug: string;
        image: { fields: 
            { file: 
                { url: string; }; 
            }; 
        };
        sideImage: { fields: 
            { file: 
                { url: string; }; 
            }; 
        };
        description: string;
        tags: string[];
        suggest: string[];
        bgColor: string;
        price: number;
        rating: number;
    }
}