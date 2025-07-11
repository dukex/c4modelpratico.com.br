import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'C4 Model Prático - Transforme Complexidade em Clareza',
  description: 'Minicurso prático de C4 Model para CTOs, arquitetos e tech leaders. Aprenda a criar diagramas de arquitetura claros e eficazes.',
  keywords: 'C4 Model, arquitetura de software, documentação técnica, Structurizr, tech leaders, CTO',
  authors: [{ name: 'Emerson Almeida' }],
  openGraph: {
    title: 'C4 Model Prático - Transforme Complexidade em Clareza',
    description: 'Minicurso prático de C4 Model para CTOs, arquitetos e tech leaders.',
    url: 'https://c4modelpratico.com.br',
    siteName: 'C4 Model Prático',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'C4 Model Prático - Transforme Complexidade em Clareza',
    description: 'Minicurso prático de C4 Model para CTOs, arquitetos e tech leaders.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="font-sans">{children}</body>
    </html>
  )
}