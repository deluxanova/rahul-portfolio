'use client'

import skillsData from '@/data/skills.json'
import certificationsData from '@/data/certifications.json'
import SectionHeading from '@/components/SectionHeading'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'

const skillCategories = [
  { key: 'languages', title: 'languages' },
  { key: 'cloud', title: 'cloud' },
  { key: 'databases', title: 'databases' },
  { key: 'bigData', title: 'big_data' },
  { key: 'devops', title: 'devops' },
  { key: 'frameworks', title: 'frameworks' },
  { key: 'tools', title: 'tools' },
]

export default function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-border">
      <div className="container-custom">
        <SectionHeading index="02" title="Skills" description="$ ls ./skills --recursive" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {skillCategories.map((category) => {
            const skills = (skillsData as any)[category.key] || []
            if (skills.length === 0) return null

            return (
              <div key={category.key}>
                <h3 className="font-mono text-sm text-primary mb-3">
                  ./{category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill: { name: string; level: number }) => (
                    <Badge
                      key={skill.name}
                      variant="outline"
                      className="font-mono text-xs py-1 pl-2 pr-2.5 gap-1.5 hover:border-primary/50 hover:text-primary transition-colors"
                    >
                      <span className="w-1 h-1 rounded-full bg-primary" />
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <h3 className="font-mono text-sm text-primary mb-4">./certifications</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {certificationsData.map((cert) => (
              <Card key={cert.id} className="border-border glow-card">
                <CardContent className="pt-6">
                  <div className="text-sm font-light mb-1">
                    {cert.name}
                  </div>
                  <div className="font-mono text-xs text-muted-foreground">
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
