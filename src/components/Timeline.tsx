import React from 'react'
import { ScrollTimeline } from "@/components/lightswind/scroll-timeline"

const gettimeLine = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/timeline`)
        if (!res.ok) {
            throw new Error('Failed to fetch timeline')
        }
        return res.json()
    } catch (error) {
        console.error('Error fetching timeline:', error)
        return [] 
    }
}

const Timeline = async () => {
    const timeLine = await gettimeLine()
  return (
    <section id='timeline' className='w-full'>
        <ScrollTimeline 
      events={timeLine}
      title="My Journey"
      subtitle="Scroll to explore the timeline"
      progressIndicator={true}
      cardAlignment="alternating"
      revealAnimation="fade"
    />
    </section>
  )
}

export default Timeline