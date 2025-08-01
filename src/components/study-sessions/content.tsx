"use client"

import { UploadNotesSection } from './upload-notes-section'
import { DashboardSection } from './dashboard-section'
import { MyNotesSection } from './my-notes-section'
import { BrowseSection } from './browse-section'
import { GroupsSection } from './groups-section'
import { ForumsSection } from './forums-section'
import { SettingsSection } from './settings-section'

interface StudySessionsContentProps {
  section: string
}

export function StudySessionsContent({ section }: StudySessionsContentProps) {
  switch (section) {
    case 'dashboard':
      return <DashboardSection />
    case 'my-notes':
      return <MyNotesSection />
    case 'upload':
      return <UploadNotesSection />
    case 'browse':
      return <BrowseSection />
    case 'groups':
      return <GroupsSection />
    case 'forums':
      return <ForumsSection />
    case 'settings':
      return <SettingsSection />
    default:
      return <DashboardSection />
  }
}