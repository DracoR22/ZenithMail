import { ICONS } from "@/shared/utils/icons"

const DashboardOverviewCard = () => {
  return (
    <div className="w-full xl:py-4 flex bg-white border rounded">
    {/* subscribers */}
    <div className="w-[33.33%] border-r p-5 text-lg">
      <h5 className="text-lg">Subscribers</h5>
      <div className="w-full flex items-center justify-between">
        <span className="font-medium pt-2">
          {/* {loading ? "..." : 1} */}20
        </span>
        <div className="h-[30px] flex p-2 items-center bg-[#DCFCE6] rounded-full">
          <span className="text-[#21C55D]">{ICONS.topArrow}</span>
          <span className="text-sm pl-1">100%</span>
        </div>
      </div>
      <small className="block text-sm opacity-[.7] pt-2">
        from 0 (last 4 weeks)
      </small>
    </div>
    {/* Open Rate */}
    <div className="w-[33.33%] border-r p-5 text-lg">
      <h5 className="text-lg">Open Rate</h5>
      <div className="w-full flex items-center justify-between">
        <span className="font-medium pt-2">0</span>
        <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
          <span className="text-xl">-</span>
          <span className="text-sm pl-1">0%</span>
        </div>
      </div>
      <small className="block text-sm opacity-[.7] pt-2">
        from 0 (last 4 weeks)
      </small>
    </div>
    {/* Click Rate */}
    <div className="w-[33.33%] border-r p-5 text-lg">
      <h5 className="text-lg">Click Rate</h5>
      <div className="w-full flex items-center justify-between">
        <span className="font-medium pt-2">0</span>
        <div className="h-[30px] flex p-3 items-center bg-[#F3F4F6] rounded-full">
          <span className="text-xl">-</span>
          <span className="text-sm pl-1">0%</span>
        </div>
      </div>
      <small className="block text-sm opacity-[.7] pt-2">
        from 0 (last 4 weeks)
      </small>
    </div>
  </div>
  )
}

export default DashboardOverviewCard