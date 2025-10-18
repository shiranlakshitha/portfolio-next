import React from 'react'
import { ScrollTimeline } from "@/components/lightswind/scroll-timeline"

const events = [
  {
    year: "2023",
    title: "Major Achievement",
    subtitle: "Organization Name",
    description: "Description of the achievement."
  },
  {
    year: "2022",
    title: "Important Milestone",
    subtitle: "Organization Name",
    description: "Details about the milestone."
  },
  {
    year: "2022",
    title: "Important Milestone",
    subtitle: "Organization Name",
    description: "Details about the milestone."
  },
  {
    year: "2022",
    title: "Important Milestone",
    subtitle: "Organization Name",
    description: "Details about the milestone."
  },
]

const Timeline = () => {
  return (
    <div>
        <ScrollTimeline 
      events={events}
      title="My Journey"
      subtitle="Scroll to explore the timeline"
      progressIndicator={true}
      cardAlignment="alternating"
      revealAnimation="fade"
    />
    </div>
  )
}

export default Timeline