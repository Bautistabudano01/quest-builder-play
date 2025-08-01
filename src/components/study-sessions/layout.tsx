"use client"

import { useState } from 'react'
import { Sidebar } from './sidebar'
import { Header } from './header'
import { StudySessionsContent } from './content'

export function StudySessionsLayout() {
  const [selectedSection, setSelectedSection] = useState('dashboard')

  return (
    <div className="flex h-screen bg-background">
      <Sidebar onSectionChange={setSelectedSection} selectedSection={selectedSection} />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <StudySessionsContent section={selectedSection} />
        </main>
      </div>
    </div>
  )
}