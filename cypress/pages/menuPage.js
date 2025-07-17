class MenuPage{
    selectorsList ()  {
        const selectors = {
            adminModule: "[href='/web/index.php/admin/viewAdminModule']",
            pimModule: "[href='/web/index.php/pim/viewPimModule']",
            leaveModule: "[href='/web/index.php/leave/viewLeaveModule']",
            timeModule: "[href='/web/index.php/time/viewTimeModule']",
            recruitModule: "[href='/web/index.php/recruitment/viewRecruitmentModule']",
            myInfoModule: "[href='/web/index.php/pim/viewMyDetails']",
            performanceModule: "[href='/web/index.php/performance/viewPerformanceModule']",
            dashboardModule: "[href='/web/index.php/dashboard/index']",
            directoryModule: "[href='/web/index.php/directory/viewDirectory']",
            maintenanceModule: "[href='/web/index.php/maintenance/viewMaintenanceModule']",
            claimModule: "[href='/web/index.php/claim/viewClaimModule']",
            buzzModule: "[href='/web/index.php/buzz/viewBuzz']"
        }

        return selectors
    }

    useModule(moduleName){
        cy.get(this.selectorsList()[moduleName]).click()
    }
}

export default MenuPage
