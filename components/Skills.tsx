'use client'

import skillsData from '@/data/skills.json'
import certificationsData from '@/data/certifications.json'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const skillCategories = [
  { key: 'languages', title: 'Languages' },
  { key: 'cloud', title: 'Cloud' },
  { key: 'databases', title: 'Databases' },
  { key: 'bigData', title: 'Big Data' },
  { key: 'devops', title: 'DevOps' },
  { key: 'frameworks', title: 'Frameworks' },
  { key: 'tools', title: 'Tools' },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="container-custom">
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-light mb-4">
            Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category) => {
            const skills = (skillsData as any)[category.key] || []
            if (skills.length === 0) return null

            return (
              <div key={category.key}>
                <h3 className="text-lg font-light mb-3">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill: { name: string; level: number }) => (
                    <Badge key={skill.name} variant="outline" className="text-xs py-0.5">
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="text-lg font-light mb-4">Certifications</h3>
          <div className="space-y-3">
            {certificationsData.map((cert) => (
              <Card key={cert.id} className="border-border">
                <CardContent className="pt-6">
                  <div className="text-sm font-light mb-1">
                    {cert.name}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {cert.issuer} · {cert.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
