import '@/assets/styles/globals.css'

// this is rendered on the server: good for SEO.

export const metadata = {
    title: 'Property Finder',
    description: 'Find your dream home',
    keywords: 'real estate, property, home',
}

const MainLayout = ({children}) => {
  return (
    <html lang="en">
        <body>
        <div>
          {children}
        </div>
        </body>
        
    </html>
  )
}

export default MainLayout
