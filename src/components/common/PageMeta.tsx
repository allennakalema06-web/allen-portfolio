import { useEffect } from 'react'

type PageMetaProps = {
  title: string
  description?: string
}

function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = `${title} | Allen Nakalema`

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')

      metaDescription?.setAttribute('content', description)
    }
  }, [title, description])

  return null
}

export default PageMeta
