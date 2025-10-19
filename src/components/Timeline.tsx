import React from 'react'
import { ScrollTimeline } from "@/components/lightswind/scroll-timeline"

const gettimeLine = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/timeline`)
    return res.json()
}

const Timeline = async () => {
    const timeLine = await gettimeLine()
  return (
    <div className='w-full'>
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