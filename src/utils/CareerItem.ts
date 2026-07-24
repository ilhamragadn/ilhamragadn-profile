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
        period: "August 2024 - July 2025",
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
    {
        period: "August 2025 - March 2026",
        title: "Fulltime Fullstack Web Developer and DevOps at PT. Data Kreatif",
        body: [
            {
                first: "Develop and build several features for a website-based hospital management information system according to user requests with clean code principles and work as a team."
            },
            {
                second: "Maintain and optimize the system, perform database queries, manage servers, and fix bugs or errors immediately."
            },
            {
                third: "Contributed around 30-40% to developing several features that have been used directly by users and helped increase productivity by up to 90%."
            }
        ]
    },
    {
        period: "April 2026 - Present",
        title: "Information Technology Support Specialist at PT. Yokogawa Indonesia",
        body: [
            {
                first: "Responsible for delivering end-to-end IT support, infrastructure administration, and digital workplace solutions across the organization."
            },
            {
                second: "Deploy, configure, and maintain Windows-based endpoints, including operating system installation, device provisioning, software deployment, and security configuration."
            },
            {
                third: "Manage device enrollment and integration with Active Directory, Microsoft Azure Active Directory (Entra ID), and enterprise endpoint management solutions."
            },
            {
                fourth: "Support large-scale laptop deployment projects, ensuring compliance with corporate standards, security policies, and user requirements."
            },
            {
                fifth: "Administer and troubleshoot endpoint technologies including BitLocker encryption, Microsoft Office, enterprise applications, and configuration management platforms."
            },
            {
                sixth: "Monitor and troubleshoot network connectivity, infrastructure issues, and end-user technical problems to maintain business continuity."
            },
            {
                seventh: "Provide technical support for hardware, software, operating systems, and enterprise IT services across multiple departments."
            },
        ]
    }
];