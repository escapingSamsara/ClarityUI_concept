import ContainerThree from './ContainerThree'
import MainContainerOne from './MainContainerOne'
import MainContainerTwo from './MainContainerTwo'
import './MainSection.css'

const MainSection = () => {
  return (
    <div className="main-section-container">
      <div className="main-container-box">
        <MainContainerOne />
        <MainContainerTwo />
      </div>
      <ContainerThree />
    </div>
  )
}
export default MainSection
