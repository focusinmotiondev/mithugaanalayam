import './globals.css'

export const metadata = {
  title: 'Mithu Gaana Layam Fine Arts | Carnatic Music — Durham, Ontario',
  icons: { icon: '/images/logo.jpg', apple: '/images/logo.jpg' },
  description:
    'Learn Carnatic vocal and violin with Smt. Tharmini Thishyan at Mithu Gaana Layam Fine Arts. In-person classes in Durham, Ontario and online. Now enrolling new students.',
  keywords: 'Carnatic music, Tamil music, violin lessons, vocal lessons, music school Durham Ontario, Indian classical music Canada',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
