export interface timelineCareerItem {
    period: string;
    title: string;
    body: { [key: string]: string }[];
}

export const timelineCareer: timelineCareerItem[] = [
    {
        period: "July 2023 - December 2023",
        title: "Internship at PT PLN UP3 Pasuruan",
        body: [
            {
                first:
                    "Develop a website which can manage a lot of customers data with Laravel framework. So, the staff easily control customers data.",
            },
            {
                second:
                    "Communicate and discuss with staff as client. Success to increase efficient of staff works.",
            },
        ],
    },
    {
        period: "August 2024 - 2025",
        title: "Fulltime IT Staff at RS Muhammadiyah Kalikapas",
        body: [
            {
                first:
                    "Successfully executed hospital system migration within 4-5 months to meet electronic medical record requirements.",
            },
            {
                second:
                    "Interacted with other units to assist in the use of the new system so that unit members understood and could run the new system optimally.",
            },
            {
                third:
                    "Developed a company web profile, self-registration platform, and web portal that assisted visitors in obtaining hospital information and improving both quality and flexibility of hospital information system.",
            },
        ],
    },
];