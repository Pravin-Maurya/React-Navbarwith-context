// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const homeImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeTextClassName = isDarkTheme
        ? 'home-light-text'
        : 'home-dark-text'

      return (
        <div className={`home-container ${homeBgClassName}`}>
          <Navbar />
          <div className="home-card">
            <div className="home-img-heading-container">
              <img src={homeImage} alt="home" className="home-img" />
              <h1 className={`home-heading ${homeTextClassName}`}>home</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default Home
