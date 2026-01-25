'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FiCalendar, FiClock } from 'react-icons/fi'

// Blog data structure - you can move this to data/blog.json later
const blogPosts: Array<{
  id: number
  title: string
  description: string
  date: string
  readTime: string
  tags: string[]
  slug?: string
}> = [
  // Add your blog posts here or load from data/blog.json
]

export default function Blog() {
  return (
    <section id="blog" className="section-padding border-t border-border">
      <div className="container-custom">
        <div className="mb-20">
          <h2 className="text-4xl sm:text-5xl font-light mb-4">
            Blog
          </h2>
          <p className="text-muted-foreground text-lg">
            Thoughts, insights, and updates on data engineering, technology, and more.
          </p>
        </div>

        {blogPosts.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg mb-4">
              Blog posts coming soon...
            </p>
            <p className="text-sm text-muted-foreground">
              Check back later for articles on data engineering, best practices, and technical insights.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="border-border hover:border-primary/50 transition-colors cursor-pointer">
                <CardHeader>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center gap-1">
                      <FiCalendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FiClock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {post.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
