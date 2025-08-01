"use client"

import { cn } from '@/lib/utils'
import { 
  BookOpen, 
  Users, 
  FileText, 
  Upload, 
  MessageSquare, 
  Settings, 
  Home 
} from 'lucide-react'

interface SidebarProps {
  onSectionChange: (section: string) => void
  selectedSection: string
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: Home },
  { id: 'my-notes', label: 'Mis Apuntes', icon: BookOpen },
  { id: 'upload', label: 'Subir Apuntes', icon: Upload },
  { id: 'groups', label: 'Grupos de Estudio', icon: Users },
  { id: 'forums', label: 'Foros', icon: MessageSquare },
  { id: 'browse', label: 'Explorar Material', icon: FileText },
  { id: 'settings', label: 'Configuración', icon: Settings },
]

export function Sidebar({ onSectionChange, selectedSection }: SidebarProps) {
  return (
    <div className="w-64 bg-sidebar border-r border-sidebar-border">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 learnify-gradient rounded-lg flex items-center justify-center">
            <BookOpen className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-bold text-sidebar-foreground">Learnify</span>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                  selectedSection === item.id
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </button>
            )
          })}
        </nav>
      </div>
    </div>
  )
}