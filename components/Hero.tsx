'use client'

import { useEffect, useState } from 'react'
import { FiDownload, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import personalData from '@/data/personal.json'
import { Button } from '@/components/ui/button'

const LINES = [
  { prompt: '$', text: 'whoami' },
  { prompt: '>', text: `${personalData.name} — ${personalData.role}`, muted: true },
  { prompt: '$', text: 'cat summary.txt' },
]

function useTypedLines(lines: typeof LINES, speed = 22) {
  const [output, setOutput] = useState<string[]>(lines.map(() => ''))
  const [lineIndex, setLineIndex] = useState(0)
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (lineIndex >= lines.length) {
      setDone(true)
      return
    }
    const target = lines[lineIndex].text
    let charIndex = 0
    const interval = setInterval(() => {
      charIndex += 1
      setOutput((prev) => {
        const next = [...prev]
        next[lineIndex] = target.slice(0, charIndex)
        return next
      })
      if (charIndex >= target.length) {
        clearInterval(interval)
        setTimeout(() => setLineIndex((i) => i + 1), 180)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [lineIndex, lines, speed])

  return { output, done, activeLine: lineIndex }
}

function LiveStat({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div className="font-mono">
      <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
        <span className="w-1.5 h-1.5 rounded-full bg-primary dot-live" />
        {label}
      </div>
      <div className="text-xl sm:text-2xl text-foreground tabular-nums">
        {value}
        {suffix && <span className="text-muted-foreground text-sm ml-1">{suffix}</span>}
      </div>
    </div>
  )
}

export default function Hero() {
  const { output, done, activeLine } = useTypedLines(LINES)
  const [eventsPerSec, setEventsPerSec] = useState(2014)

  useEffect(() => {
    const interval = setInterval(() => {
      setEventsPerSec((prev) => {
        const jitter = Math.floor(Math.random() * 120) - 60
        const next = prev + jitter
        return Math.min(2400, Math.max(1850, next))
      })
    }, 1400)
    return () => clearInterval(interval)
  }, [])

  const handleDownloadResume = () => {
    window.open('/resume.pdf', '_blank')
  }

  return (
    <section
      id="home"
      className="relative section-padding min-h-screen flex items-center justify-center pt-28 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade pointer-events-none" />

      <div className="container-custom relative">
        <div className="max-w-3xl mx-auto">
          <div className="rounded-lg border border-border bg-card/60 backdrop-blur-sm overflow-hidden mb-10 animate-slide-up">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-secondary/40">
              <span className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-primary/70" />
              <span className="w-2.5 h-2.5 rounded-full bg-muted-foreground/40" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">
                rahul@shyftlabs: ~
              </span>
            </div>
            <div className="p-6 sm:p-8 font-mono text-sm leading-relaxed min-h-[180px]">
              {LINES.map((line, idx) => {
                if (idx > activeLine) return null
                const text = output[idx]
                const isActive = idx === activeLine && !done
                return (
                  <div key={idx} className="mb-2">
                    <span className={line.prompt === '$' ? 'text-primary' : 'text-muted-foreground'}>
                      {line.prompt}{' '}
                    </span>
                    <span className={line.muted ? 'text-muted-foreground' : 'text-foreground'}>
                      {text}
                    </span>
                    {isActive && <span className="caret" />}
                  </div>
                )
              })}
              {done && (
                <p className="text-muted-foreground mt-3 animate-fade-in">
                  {personalData.summary}
                  <span className="caret" />
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12 animate-fade-in">
            <LiveStat label="events/sec" value={eventsPerSec.toLocaleString()} />
            <LiveStat label="uptime" value="99.9" suffix="%" />
            <LiveStat label="events/day" value="50M+" />
            <LiveStat label="team led" value="4" suffix="eng" />
          </div>

          <div className="flex flex-wrap gap-4 mb-14">
            <Button
              onClick={() => {
                const element = document.querySelector('#projects')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              size="lg"
              className="font-mono text-sm"
            >
              ./view_projects
            </Button>
            <Button
              onClick={handleDownloadResume}
              variant="outline"
              size="lg"
              className="font-mono text-sm"
            >
              <span className="flex items-center gap-2">
                <FiDownload className="w-4 h-4" /> ./resume.pdf
              </span>
            </Button>
          </div>

          <div className="flex gap-6">
            <a
              href={personalData.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={personalData.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalData.email}`}
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
