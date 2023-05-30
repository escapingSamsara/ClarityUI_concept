import ContainerThree from './ContainerThree'
import MainContainerOne from './MainContainerOne'
import MainContainerTwo from './MainContainerTwo'
import './MainSection.css'

const MainSection = ({ toast, theme }) => {
  return (
    <div className="main-section-container">
      <div className="main-container-box">
        <MainContainerOne toast={toast} />
        <MainContainerTwo theme={theme} />
      </div>
      <ContainerThree />
    </div>
  )
}
export default MainSection
