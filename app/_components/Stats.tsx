"use client"
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react"
import { Activity, Calendar, UserPlus, Users } from "lucide-react";


function Stats() {
  const stats = useQuery(api.stats.getStats);
  const statItems = [
        { label: "Expert Doctors", value: stats?.doctors || 0, icon: Users },
        { label: "Medical Departments", value: stats?.departments || 0, icon: Activity },
        { label: "Happy Patients", value: stats?.patients || 0, icon: UserPlus },
        { label: "Years Experience", value: stats?.experience || 0, icon: Calendar },
    ];

  console.log(stats);
  return (
    <section className='bg-primary py-12 relative overflow-hidden'>
            <div className='container mx-auto px-4'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
                    {statItems.map((item) => (
                        <div

                            key={item.label}
                            className="flex flex-col items-center text-primary-foreground">

                            <div className="mb-4 p-3 bg-white/10 rounded-full">
                                <item.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-4xl font-bold mb-1">
                                {stats ? item.value.toLocaleString() : "..."}
                                {item.label === "Happy Patients" && "+"}
                            </h3>
                            <p className="text-primary-foreground/80 font-medium">{item.label}</p>

                        </div>
                    ))}
                </div>
            </div>
        </section>
  )
}

export default Stats