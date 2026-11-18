interface SectionHeadingProps {
  index: string
  title: string
  description?: string
}

export default function SectionHeading({ index, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-20">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-sm text-primary">// {index}</span>
        <span className="h-px flex-1 bg-border" />
      </div>
      <h2 className="text-4xl sm:text-5xl font-light mb-4">{title}</h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl">{description}</p>
      )}
    </div>
  )
}
