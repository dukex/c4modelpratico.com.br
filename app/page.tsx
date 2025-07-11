'use client'

import { useState } from 'react'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-xl font-bold text-primary">C4 Model Prático</h1>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#curso" className="text-gray-600 hover:text-primary transition-colors">O Curso</a>
              <a href="#modulos" className="text-gray-600 hover:text-primary transition-colors">Módulos</a>
              <a href="#instrutor" className="text-gray-600 hover:text-primary transition-colors">Instrutor</a>
              <a href="#faq" className="text-gray-600 hover:text-primary transition-colors">FAQ</a>
              <a href="https://hotmart.com/pt-br/marketplace/produtos/c4-model-desenho-de-arquitetura-pratica-para-tech-leaders/J100276778N" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="btn-primary">
                Inscrever-se Agora
              </a>
            </div>
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-primary focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
              <a href="#curso" className="block px-3 py-2 text-gray-600 hover:text-primary">O Curso</a>
              <a href="#modulos" className="block px-3 py-2 text-gray-600 hover:text-primary">Módulos</a>
              <a href="#instrutor" className="block px-3 py-2 text-gray-600 hover:text-primary">Instrutor</a>
              <a href="#faq" className="block px-3 py-2 text-gray-600 hover:text-primary">FAQ</a>
              <a href="https://hotmart.com/pt-br/marketplace/produtos/c4-model-desenho-de-arquitetura-pratica-para-tech-leaders/J100276778N" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="block px-3 py-2 btn-primary text-center">
                Inscrever-se Agora
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Transforme a <span className="text-primary">Complexidade</span> em <span className="text-primary">Clareza</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Domine o C4 Model e aprenda a criar diagramas de arquitetura que realmente comunicam. 
              Prático, direto ao ponto e focado em resultados para CTOs, arquitetos e tech leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="https://hotmart.com/pt-br/marketplace/produtos/c4-model-desenho-de-arquitetura-pratica-para-tech-leaders/J100276778N" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="btn-primary text-lg px-8 py-4">
                Quero Começar Agora
              </a>
              <a href="#curso" className="btn-secondary text-lg px-8 py-4">
                Conhecer o Curso
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Você já enfrentou esses desafios?
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Documentação Desatualizada</h3>
              <p className="text-gray-600">
                Diagramas que não refletem a realidade do sistema, criando confusão e decisões erradas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Falhas de Comunicação</h3>
              <p className="text-gray-600">
                Dificuldade para explicar arquitetura para stakeholders não técnicos e desenvolvedores.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-red-500 mb-4">
                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Débito Técnico</h3>
              <p className="text-gray-600">
                Falta de visão clara da arquitetura dificulta refatorações e evoluções do sistema.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="curso" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Solução: C4 Model Prático
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma abordagem sistemática e prática para criar diagramas de arquitetura que realmente funcionam.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">O que você vai dominar:</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span><strong>Fundamentos do C4 Model</strong> - As 4 abstrações principais e notações para máxima clareza</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span><strong>Modelagem Prática</strong> - Crie diagramas de Contexto, Contêiner e Componentes com um caso real</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span><strong>Architecture as Code</strong> - Domine o Structurizr para documentação viva e versionada</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span><strong>Adoção Estratégica</strong> - Como implementar na sua equipe e manter a documentação sempre atual</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg">
              <h4 className="text-xl font-semibold mb-4">Resultado Garantido:</h4>
              <p className="text-gray-700 mb-6">
                Ao final do curso, você terá as ferramentas e conhecimento para criar diagramas de arquitetura 
                que realmente comunicam, facilitam decisões e mantêm sua equipe alinhada.
              </p>
              <a href="https://hotmart.com/pt-br/marketplace/produtos/c4-model-desenho-de-arquitetura-pratica-para-tech-leaders/J100276778N" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="btn-primary w-full text-center block">
                Garantir Minha Vaga
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="modulos" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Módulos do Curso
            </h2>
            <p className="text-xl text-gray-600">
              Conteúdo estruturado e prático, direto ao ponto
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">1</span>
                <h3 className="text-2xl font-bold">Fundamentos do C4 Model</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Entenda a ideia central, as quatro principais abstrações e as melhores práticas de notação para clareza máxima.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Por que o C4 Model resolve os problemas de documentação</li>
                <li>• As 4 abstrações: Contexto, Contêiner, Componente e Código</li>
                <li>• Notações e convenções para máxima clareza</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">2</span>
                <h3 className="text-2xl font-bold">Modelagem Prática</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comece esboçando suas arquiteturas de forma rápida e colaborativa, definindo o escopo de um sistema real.
              </p>
              <ul className="text-gray-600 space-y-2">
                <li>• Caso prático: Sistema de Processamento de Pedidos</li>
                <li>• Criando diagramas de Contexto, Contêiner e Componentes</li>
                <li>• Técnicas de colaboração e refinamento</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md border-2 border-primary">
              <div className="flex items-center mb-4">
                <span className="bg-primary text-white rounded-full w-10 h-10 flex items-center justify-center font-bold mr-4">+</span>
                <h3 className="text-2xl font-bold">Módulos Extras</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Introdução ao Structurizr</h4>
                  <p className="text-gray-600">
                    Descubra o poder da "arquitetura como código", compreenda a DSL do Structurizr e configure o Structurizr Lite.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Adoção Estratégica</h4>
                  <p className="text-gray-600">
                    Dicas sobre como integrar o C4 Model no workflow da sua equipe e manter a documentação viva.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Section */}
      <section id="instrutor" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Seu Instrutor
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-300 rounded-full mx-auto mb-6"></div>
              <h3 className="text-2xl font-bold mb-2">Emerson Almeida</h3>
              <p className="text-primary font-semibold">Tech Leader & Arquiteto de Software</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-4">Experiência Prática em Arquitetura</h4>
              <p className="text-gray-600 mb-6">
                Com anos de experiência liderando equipes técnicas e desenhando arquiteturas escaláveis, 
                Emerson entende os desafios reais que CTOs e tech leaders enfrentam no dia a dia.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Especialista em arquitetura de software e documentação técnica
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Experiência prática com C4 Model e Structurizr em projetos reais
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  Focado em soluções práticas e diretas ao ponto
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="space-y-6">
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-semibold text-lg cursor-pointer">
                Este curso é para mim se eu nunca usei o C4 Model antes?
              </summary>
              <p className="mt-4 text-gray-600">
                Sim! O curso foi desenvolvido para profissionais que querem começar do zero com C4 Model. 
                Começamos pelos fundamentos e evoluímos gradualmente para conceitos mais avançados.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-semibold text-lg cursor-pointer">
                Quanto tempo preciso investir para completar o curso?
              </summary>
              <p className="mt-4 text-gray-600">
                O curso é prático e direto ao ponto. Você pode completar todo o conteúdo em algumas horas, 
                mas recomendamos praticar os exercícios propostos para fixar o aprendizado.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-semibold text-lg cursor-pointer">
                Preciso de ferramentas específicas?
              </summary>
              <p className="mt-4 text-gray-600">
                Não! Começamos com esboços simples e depois apresentamos o Structurizr. 
                Todas as ferramentas necessárias são gratuitas e de fácil instalação.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-semibold text-lg cursor-pointer">
                Como posso aplicar isso na minha equipe?
              </summary>
              <p className="mt-4 text-gray-600">
                O curso inclui um módulo específico sobre adoção estratégica, 
                com dicas práticas para implementar o C4 Model no workflow da sua equipe.
              </p>
            </details>
            
            <details className="bg-white p-6 rounded-lg shadow-md">
              <summary className="font-semibold text-lg cursor-pointer">
                Há certificado de conclusão?
              </summary>
              <p className="mt-4 text-gray-600">
                Sim! Ao completar o curso, você recebe um certificado de conclusão 
                que pode ser usado para comprovar seu conhecimento em C4 Model.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para Transformar sua Arquitetura?
          </h2>
          <p className="text-xl mb-8">
            Junte-se aos profissionais que já estão criando diagramas mais claros e eficazes.
          </p>
          <a href="https://hotmart.com/pt-br/marketplace/produtos/c4-model-desenho-de-arquitetura-pratica-para-tech-leaders/J100276778N" 
             target="_blank" 
             rel="noopener noreferrer"
             className="inline-block bg-white text-primary font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-colors">
            Começar Agora
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 C4 Model Prático. Todos os direitos reservados.
            </p>
            <p className="text-gray-400 mt-2">
              Curso ministrado por Emerson Almeida
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}