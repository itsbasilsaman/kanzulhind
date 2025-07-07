import { Headphones, Download, Smile, Users } from "lucide-react"

export default function StatsComponent() {
  const stats = [
    {
      icon: Headphones,
      value: "100%",
      label: "Client satisfaction",
    },
    {
      icon: Download,
      value: "200+",
      label: "Products available",
    },
    {
      icon: Smile,
      value: "90+",
      label: "Happy clients",
    },
    {
      icon: Users,
      value: "30+",
      label: "Team members",
    },
  ]

  return (
    <div className="w-full py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <div
                key={index}
                className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 justify-center lg:justify-start"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-[#41574B]  rounded-full flex items-center justify-center">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 leading-none">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base mt-1">{stat.label}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
