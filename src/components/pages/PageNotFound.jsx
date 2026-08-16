import { ArrowLeft } from 'lucide-react'

const PageNotFound = () => {
  return (
    <main className="not-found">
      <p className="eyebrow">404 · Wrong turn</p>
      <h1>This cup is empty.</h1>
      <p>The page you were looking for isn’t on today’s menu.</p>
      <a className="button button--primary" href="/"><ArrowLeft size={18} /> Back to Kaapi House</a>
    </main>
  )
}

export default PageNotFound
