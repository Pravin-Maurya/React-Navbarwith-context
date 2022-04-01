import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const aboutBgClassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const aboutImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const aboutTextClassName = isDarkTheme
        ? 'about-light-text'
        : 'about-dark-text'

      return (
        <div className={`about-container ${aboutBgClassName}`}>
          <Navbar />
          <div className="about-card">
            <div className="about-img-heading-container">
              <img src={aboutImage} alt="about" className="about-img" />
              <h1 className={`about-heading ${aboutTextClassName}`}>About</h1>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default About
