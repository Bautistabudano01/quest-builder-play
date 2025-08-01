"use client"

import { useState } from 'react'
import { Upload, FileText, X, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function UploadNotesSection() {
  const [dragActive, setDragActive] = useState(false)
  const [files, setFiles] = useState<File[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [currentTag, setCurrentTag] = useState('')

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const newFiles = Array.from(e.dataTransfer.files)
      setFiles(prev => [...prev, ...newFiles])
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files)
      setFiles(prev => [...prev, ...newFiles])
    }
  }

  const removeFile = (index: number) => {
    setFiles(prev => prev.filter((_, i) => i !== index))
  }

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags(prev => [...prev, currentTag.trim()])
      setCurrentTag('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(prev => prev.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-foreground mb-2">Subir Apuntes</h1>
        <p className="text-muted-foreground">Comparte tu material de estudio con la comunidad</p>
      </div>

      <div className="grid gap-6">
        {/* Upload Area */}
        <Card>
          <CardHeader>
            <CardTitle>Archivos</CardTitle>
          </CardHeader>
          <CardContent>
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragActive 
                  ? 'border-primary bg-primary/5' 
                  : 'border-muted-foreground/25 hover:border-primary hover:bg-primary/5'
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">Arrastra tus archivos aquí</p>
              <p className="text-muted-foreground mb-4">o</p>
              <Button asChild>
                <label htmlFor="file-upload" className="cursor-pointer">
                  Seleccionar archivos
                </label>
              </Button>
              <input
                id="file-upload"
                type="file"
                multiple
                className="hidden"
                onChange={handleFileInput}
                accept=".pdf,.doc,.docx,.txt,.ppt,.pptx"
              />
              <p className="text-sm text-muted-foreground mt-4">
                Formatos soportados: PDF, DOC, DOCX, TXT, PPT, PPTX
              </p>
            </div>

            {/* Selected Files */}
            {files.length > 0 && (
              <div className="mt-6">
                <h3 className="font-semibold mb-3">Archivos seleccionados</h3>
                <div className="space-y-2">
                  {files.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="w-5 h-5 text-primary" />
                        <div>
                          <p className="font-medium">{file.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {(file.size / 1024 / 1024).toFixed(2)} MB
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeFile(index)}
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Metadata Form */}
        <Card>
          <CardHeader>
            <CardTitle>Información del Material</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="title">Título*</Label>
                <Input id="title" placeholder="Ej: Álgebra Lineal - Tema 5" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Materia*</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar materia" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="matematica">Matemática</SelectItem>
                    <SelectItem value="fisica">Física</SelectItem>
                    <SelectItem value="quimica">Química</SelectItem>
                    <SelectItem value="programacion">Programación</SelectItem>
                    <SelectItem value="historia">Historia</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="career">Carrera*</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar carrera" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ingenieria">Ingeniería en Sistemas</SelectItem>
                    <SelectItem value="medicina">Medicina</SelectItem>
                    <SelectItem value="derecho">Derecho</SelectItem>
                    <SelectItem value="economia">Economía</SelectItem>
                    <SelectItem value="psicologia">Psicología</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="university">Universidad*</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar universidad" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="uba">Universidad de Buenos Aires</SelectItem>
                    <SelectItem value="unlp">Universidad Nacional de La Plata</SelectItem>
                    <SelectItem value="utn">Universidad Tecnológica Nacional</SelectItem>
                    <SelectItem value="unsam">Universidad Nacional de San Martín</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea 
                id="description" 
                placeholder="Describe brevemente el contenido de los apuntes..."
                rows={4}
              />
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label>Tags (opcional)</Label>
              <div className="flex gap-2">
                <Input
                  value={currentTag}
                  onChange={(e) => setCurrentTag(e.target.value)}
                  placeholder="Agregar tag"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                />
                <Button onClick={addTag} variant="outline" size="icon">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                      {tag}
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-auto w-auto p-0 ml-1"
                        onClick={() => removeTag(tag)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <div className="flex justify-end">
          <Button size="lg" className="learnify-gradient text-white">
            Subir Material
          </Button>
        </div>
      </div>
    </div>
  )
}