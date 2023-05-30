import graphicIcon from '../../assets/graphic-design.png'
import starIcon from '../../assets/star.png'
const MainContainerOne = () => {
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
          <form action="submit-form">
            <p className="submit-form-cta">
              Join to get free updates every week
            </p>
            <div className="input-btn-holder">
              <input
                type="text"
                className="email-input"
                placeholder="Enter email address"
                required
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
