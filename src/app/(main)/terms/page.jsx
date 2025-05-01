import { Container } from '@/components/Container'
import fs from 'fs'
import path from 'path'
import Markdown from 'markdown-to-jsx'

export const metadata = {
  title: 'Syarat & Ketentuan | Rexo',
  description: 'Syarat dan ketentuan penggunaan layanan Rexo.',
}

// Read markdown content from file
export function generateStaticParams() {
  return []
}

// Custom components for markdown rendering
const CustomHeading = ({ children, ...props }) => {
  return props.level === 1 ? (
    <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl mb-8" {...props}>
      {children}
    </h1>
  ) : props.level === 2 ? (
    <h2 className="text-2xl font-medium text-gray-900 mt-12 mb-6" {...props}>
      {children}
    </h2>
  ) : (
    <h3 className="text-xl font-medium text-gray-800 mt-10 mb-4" {...props}>
      {children}
    </h3>
  )
}

const CustomParagraph = ({ children }) => {
  return <p className="text-gray-700 mb-6 leading-relaxed">{children}</p>
}

const CustomList = ({ children }) => {
  return <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">{children}</ul>
}

const CustomLink = ({ children, href }) => {
  return <a href={href} className="text-teal-600 hover:text-teal-700 underline">{children}</a>
}

export default function TermsAndConditions() {
  // Read the markdown file
  const markdownContent = fs.readFileSync(
    path.join(process.cwd(), 'src/markdown/terms-conditions.md'),
    'utf8'
  )

  return (
    <main className="py-20 sm:py-24">
      <Container className="prose-lg max-w-3xl mx-auto">
        <div className="bg-white p-8 rounded-xl shadow-sm">
          <Markdown
            options={{
              overrides: {
                h1: {
                  component: CustomHeading,
                  props: { level: 1 },
                },
                h2: {
                  component: CustomHeading,
                  props: { level: 2 },
                },
                h3: {
                  component: CustomHeading,
                  props: { level: 3 },
                },
                p: { component: CustomParagraph },
                ul: { component: CustomList },
                a: { component: CustomLink },
              },
            }}
          >
            {markdownContent}
          </Markdown>
        </div>
      </Container>
    </main>
  )
} 