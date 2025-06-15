export interface AboutItem {
    title: string;
    body: { [key: string]: string }[];
    detailBody: string;
}

export const aboutDatas: AboutItem[] = [
    {
        title: "Head of Human Resources Development Division (2023-2024)",
        body:
            [
                {
                    first: "Coordinating related fields in order to realize the organization of their respective work domains.",
                    second: "Implementing a structured and dynamic regeneration system. Also, determining the general policy of the division concerned.",
                    third: ""
                }
            ],
        detailBody: ""
    },
    {
        title: "Associate Degree of Informatic Engineering (2021-2024)",
        body:
            [
                {
                    first: "Graduated from PENS with an Associate Degree in Informatics Engineering with a GPA of 3.49 and a final project entitled NOTAKOS: Boarding Student Tuition Management Application.",
                    second: "NOTAKOS: Boarding Student Tuition Management Application (Final Project).",
                    third: ""
                }
            ],
        detailBody: "NOTAKOS is a personal finance recording system with flexible money allocation features based on android application. NOTAKOS is developed with react native framework and uses backend services (API) with Laravel to manage user authentication and data storage."
    }
];