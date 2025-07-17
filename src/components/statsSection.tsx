import { Headphones, Download, Smile, Users } from "lucide-react"
import LocalizedText from "@/components/LocalizedText";

export default function StatsComponent() {
  const stats = [
    {
      icon: Headphones,
      value: "100%",
      label: "Client satisfaction",
    },
    {
      icon: Download,
      value: "400+",
      label: "Products available",
    },
    {
      icon: Smile,
      value: "180+",
      label: "Happy clients",
    },
    {
      icon: Users,
      value: "30+",
      label: "Team members",
    },
  ]

  return (
    <div className="w-full py-12 px-4" style={{ direction: 'ltr' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            let arLabel = stat.label;
            if (stat.label === "Client satisfaction") arLabel = "رضا العملاء";
            else if (stat.label === "Products available") arLabel = "المنتجات المتوفرة";
            else if (stat.label === "Happy clients") arLabel = "عملاء سعداء";
            else if (stat.label === "Team members") arLabel = "أعضاء الفريق";
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
                  <div className="text-gray-600 text-sm md:text-base mt-1">
                    <LocalizedText en={stat.label} ar={arLabel} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}
