import LeftContent from "./LeftContent"
import RightContent from "./RightContent"


const Bottom = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-5">
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Bottom
