const PATHS = {
    USER: '/usr',
    HR: '/hr',
    EMPLOYEE: '/emp'
}


const userTypeNavigation = [
    {name: "Dashboard", href: `${PATHS.USER}`, auth: true, current: true},
    {name: "Job Listings", auth: false, href: `/job`, current: false},
    {name: "Companies", auth: false, href: `/company`, current: false},
    // {name: "Contact", auth: false, href: `/contact`, current: false},
    // {name: "About", auth: false, href: `/about`, current: false},
]

const hrTypeNavigation = [
    {name: "Dashboard", href: `/${PATHS.USER}`, auth: true, current: true},
    {name: "Employees", auth: true, href: `${PATHS.HR}/job`, current: false},
    {name: "Jobs", auth: true, href: `${PATHS.HR}/company`, current: false},
]

const employeeTypeNavigation = [
    {name: "Dashboard", href: `${PATHS.EMPLOYEE}/`, auth: true, current: true},
    // {name: "Notices", auth: true, href: `${PATHS.EMPLOYEE}/notice`, current: false},
    {name: "Company Directory", auth: true, href: `${PATHS.EMPLOYEE}/directory`, current: false},
]


const exposed = {
    userTypeNavigation,
    hrTypeNavigation,
    employeeTypeNavigation,
}

export default exposed