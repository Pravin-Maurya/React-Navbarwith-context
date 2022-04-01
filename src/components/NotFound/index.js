// Write your code here
import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassName = isDarkTheme
        ? 'notFound-bg-dark'
        : 'notFound-bg-light'

      const notFoundTextClassName = isDarkTheme
        ? 'notFound-light-text'
        : 'notFound-dark-text'

      const notFoundDetailsClassName = isDarkTheme
        ? 'not-found-details-light'
        : 'not-found-details-dark'

      return (
        <div className={`notFound-container ${notFoundBgClassName}`}>
          <Navbar />
          <div className="notFound-card">
            <div className="notFound-img-heading-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                alt="not found"
                className="notFound-img"
              />
              <h1 className={`notFound-heading ${notFoundTextClassName}`}>
                Lost Your Way?
              </h1>
              <p className={`notFound-details ${notFoundDetailsClassName}`}>
                We cannot seem to find the page.
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)
export default NotFound
