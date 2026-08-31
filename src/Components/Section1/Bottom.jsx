import LeftContent from "./LeftContent"
import RightContent from "./RightContent"


const Bottom = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5 lg:items-stretch">
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Bottom
