'use client'

import { FiMapPin } from 'react-icons/fi'
import experienceData from '@/data/experience.json'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

export default function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-border">
      <div className="container-custom">
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-light mb-4">
            Experience
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />
          
          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <div key={exp.id} className="relative flex gap-4 md:gap-8">
                <div className="hidden md:flex flex-col items-center w-16">
                  <div className={cn(
                    "w-4 h-4 rounded-full border-2 border-background bg-primary z-10 relative",
                    index === 0 && "mt-1"
                  )} />
                </div>
                
                <div className="flex-1 pb-8">
                  <Card className="border-border">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                        <div>
                          <CardTitle className="text-xl mb-1">{exp.role}</CardTitle>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm">
                            <FiMapPin className="w-4 h-4" />
                            <span>{exp.company}, {exp.location}</span>
                          </div>
                        </div>
                        <span className="text-sm text-muted-foreground whitespace-nowrap">
                          {exp.startDate} — {exp.endDate}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                        {exp.description}
                      </p>
                      <ul className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, idx) => (
                          <li
                            key={idx}
                            className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                          >
                            <span className="text-primary mt-1.5">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
