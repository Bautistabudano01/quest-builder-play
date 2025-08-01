"use client"

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { FileText, Download, Eye, Trash2 } from 'lucide-react'

export function MyNotesSection() {
  const notes = [
    {
      id: 1,
      title: "Álgebra Lineal - Vectores y Matrices",
      subject: "Matemática",
      career: "Ingeniería en Sistemas",
      downloads: 24,
      rating: 4.5,
      uploadDate: "2024-01-15",
      fileSize: "2.4 MB",
      type: "PDF"
    },
    {
      id: 2,
      title: "Programación Orientada a Objetos",
      subject: "Programación",
      career: "Ingeniería en Sistemas",
      downloads: 18,
      rating: 4.8,
      uploadDate: "2024-01-10",
      fileSize: "1.8 MB",
      type: "PDF"
    }
  ]

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">Mis Apuntes</h1>
        <p className="text-muted-foreground">Material que has compartido con la comunidad</p>
      </div>

      <div className="space-y-4">
        {notes.map((note) => (
          <Card key={note.id}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <FileText className="w-5 h-5 text-primary" />
                    <h3 className="text-lg font-semibold">{note.title}</h3>
                    <Badge variant="secondary">{note.type}</Badge>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline">{note.subject}</Badge>
                    <Badge variant="outline">{note.career}</Badge>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Download className="w-4 h-4" />
                      {note.downloads} descargas
                    </span>
                    <span>★ {note.rating}</span>
                    <span>{note.fileSize}</span>
                    <span>Subido: {new Date(note.uploadDate).toLocaleDateString()}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 ml-4">
                  <Button variant="outline" size="icon">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {notes.length === 0 && (
        <div className="text-center py-12">
          <FileText className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">No tienes apuntes subidos</h3>
          <p className="text-muted-foreground mb-4">Comienza compartiendo tu material de estudio</p>
          <Button>Subir primer apunte</Button>
        </div>
      )}
    </div>
  )
}