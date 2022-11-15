import './App.scss'
import officeLiteLogo from './assets/shared/logo.svg'
import illustrationCharts from './assets/home/illustration-charts.svg'

function App() {
  return (
    <div className="App">
      <div className="top">
        <img src={officeLiteLogo} className="office-lite-logo" alt="officelite logo" />
        <img src={illustrationCharts} className="illustration-charts" alt="Illustration charts" />
        <h1 className="slogan">A simple solution to complex tasks is coming soon</h1>

        <p className="slogan-text">Say goodbye to inefficient juggling of multiple apps, teams, and projects. Officelite is the new
        collaboration platform built with an intuitive interface to improve productivity.</p>

        Get Started

        Basic
        Free
        Up to 5 users for free
        Basic document collaboration
        2 gb storage
        Great security and support
        Try for Free

        Pro
        $9.99
        Per user, billed monthly
        All essential integrations
        50 gb storage
        More control and insights
        Try for Free

        Ultimate
        $19.99
        Per user, billed monthly
        Robust work management
        100 gb storage
        VIP support
        Try for Free

        If you're choosing to make this date dynamic, set it to 30 days in the future from the moment the visitor views the page
        Coming 4 Nov 2020

        If you're choosing to make this timer dynamic, have it countdown from the date you set above
        47 Days
        07 Hours
        56 Min
        14 Sec
        Get Started
      </div>

    </div>
  )
}

export default App
