import React, { createContext } from 'react'

export const DashboardDataContext = createContext(null)
function DashboardContext({ children }) {
    const data = [
        {
            color: "primary",
            value: "40,000",
            head: "Earnings (Monthly)",
            logo: "fa-calendar"
        },
        {
            color: "success",
            value: "215,000",
            head: "Earnings (Annual)",
            logo: "fa-dollar-sign"
        },
        {
            isLoading: true,
            color: "info",
            value: "50",
            head: "Tasks",
            logo: "fa-clipboard-list"
        },
        {
            color: "warning",
            value: "18",
            head: "Pending Requests",
            logo: "fa-comments"
        }
    ]
    return (
        <DashboardDataContext.Provider value={{data}}>
            {children}
        </DashboardDataContext.Provider>
    )
}

export default DashboardContext