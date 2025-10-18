import React from 'react'
import { ScrollTimeline } from "@/components/lightswind/scroll-timeline"

const gettimeLine = async () => await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/timeline`)

const Timeline = async () => {
    const timeLine = await (await gettimeLine()).json()
  return (
    <div>
        <ScrollTimeline 
      events={timeLine}
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