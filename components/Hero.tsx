'use client'

import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import personalData from '@/data/personal.json'
import { Button } from '@/components/ui/button'

export default function Hero() {
  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank')
  }

  return (
    <section id="home" className="section-padding min-h-screen flex items-center justify-center pt-20">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-6">
            {personalData.name}
          </h1>

          <h2 className="text-xl sm:text-2xl font-light text-muted-foreground mb-8">
            {personalData.role}
          </h2>

          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            {personalData.summary}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button
              onClick={() => {
                const element = document.querySelector('#projects')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              size="lg"
            >
              View Projects
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="lg"
            >
              <span className="flex items-center gap-2">
                <FiDownload className="w-4 h-4" /> Resume
              </span>
            </Button>
          </div>

          <div className="flex justify-center gap-6 mb-16">
            <a
              href={personalData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={personalData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-border">
            <div>
              <div className="text-2xl font-light mb-1">
                {personalData.highlights.experience}
              </div>
              <div className="text-sm text-muted-foreground">Experience</div>
            </div>
            <div>
              <div className="text-sm font-light mb-1">
                {personalData.highlights.currentRole}
              </div>
              <div className="text-sm text-muted-foreground">Current Role</div>
            </div>
            <div>
              <div className="text-sm font-light mb-1">
                {personalData.highlights.coreTech}
              </div>
              <div className="text-sm text-muted-foreground">Technologies</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
