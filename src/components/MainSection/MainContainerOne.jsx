import { useState } from 'react'
import graphicIcon from '../../assets/graphic-design.png'
import starIcon from '../../assets/star.png'

const MainContainerOne = ({ toast }) => {
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(true)

  const handleInputChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
    if (emailRegex.test(email)) {
      // Valid email
      setIsValid(true)
      toast.success('you subscribed successfully!')
    } else {
      // Invalid email
      setIsValid(false)
      toast.error('Invalid email! Please enter a valid email address.')
    }
    setEmail('')
  }

  return (
    <div className="main-container-1">
      <div className="main-header-box">
        <div className="main-header">
          <h1 className="main-heading">
            Community of designers{' '}
            <img src={graphicIcon} className="header-icon" /> <br /> made by
            designers
            <img src={starIcon} className="header-icon" />
          </h1>
          <p className="main-cta-text">
            Get latest design inspirations, articles, tips&tricks.
            <br /> Everything is crafted by expert designers.
          </p>
        </div>
        <div className="main-cta">
          <form action="submit-form" onSubmit={handleSubmit}>
            <p className="submit-form-cta">
              Join to get free updates every week
            </p>
            <div className="input-btn-holder">
              <input
                value={email}
                onChange={handleInputChange}
                type="text"
                className="email-input"
                placeholder="Enter your email address!"
              />
              <button type="submit" className="submit-btn">
                Join now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default MainContainerOne
