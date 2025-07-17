import userData from '../fixtures/users/userData.json' 
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MyInfoPage from '../pages/myInfoPage.js'
import MenuPage from '../pages/menuPage.js'

const Chance = require('chance')
const chance = new Chance()

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM - Tests', () => {
 it.only('User info update', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboardPage.checkDashboardPage()

    menuPage.useModule('myInfoModule')

    myInfoPage.fillFullName(chance.first(), chance.string(), chance.last())
    myInfoPage.fillEmployeeIdInfo(chance.integer({ min: 1000000000, max: 9999999999 }), chance.integer({ min: 1000000000, max: 9999999999 }), chance.integer({ min: 1000000, max: 90000000000000 }), '2027-06-02')
    myInfoPage.fillStatus('Brazilian', 'Married', '2003-10-03')
    myInfoPage.saveInfomation()

  })
})
