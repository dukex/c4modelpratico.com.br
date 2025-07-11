# C4 Model Prático - Landing Page

Landing page para o minicurso **C4 Model Prático**, destinado a CTOs, arquitetos de software e tech leaders.

## 🎯 Sobre o Projeto

Esta landing page foi desenvolvida para promover o minicurso de C4 Model, focando em:
- Comunicação clara da proposta de valor
- Design responsivo e profissional
- Integração com a plataforma Hotmart
- Otimização para conversão

## 🚀 Tecnologias Utilizadas

- **Next.js 14** - Framework React para produção
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **GitHub Pages** - Hospedagem estática

## 📁 Estrutura do Projeto

```
├── app/
│   ├── globals.css      # Estilos globais
│   ├── layout.tsx       # Layout principal
│   └── page.tsx         # Página principal
├── public/
│   └── CNAME           # Configuração de domínio customizado
├── .github/
│   └── workflows/
│       └── deploy.yml  # Workflow de deploy automático
└── README.md
```

## 🛠️ Desenvolvimento

### Pré-requisitos
- Node.js 18+
- npm

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Lint
```bash
npm run lint
```

## 🌐 Deploy

O projeto está configurado para deploy automático no GitHub Pages:

1. Push para a branch `main` aciona o workflow de deploy
2. O site é buildado estaticamente
3. Deploy automático para `c4modelpratico.com.br`

### Configuração Manual do Deploy

1. Habilite GitHub Pages nas configurações do repositório
2. Configure para usar GitHub Actions como fonte
3. Adicione o domínio customizado `c4modelpratico.com.br`

## 📊 Métricas e Analytics

- Google Analytics (configurar quando necessário)
- Tracking de conversão via Hotmart
- Monitoramento de performance

## 🎨 Design e UX

### Seções da Landing Page

1. **Hero Section** - Proposta de valor principal
2. **Problemas** - Pain points do público-alvo
3. **Solução** - Como o C4 Model resolve
4. **Módulos** - Estrutura do curso
5. **Instrutor** - Credibilidade técnica
6. **FAQ** - Dúvidas frequentes
7. **CTA Final** - Conversão

### Responsividade
- Mobile-first design
- Breakpoints otimizados para dispositivos móveis
- Menu hambúrguer para mobile

## 🔗 Integrações

- **Hotmart** - Plataforma de vendas do curso
- **WhatsApp** - Comunidade do curso
- **LinkedIn** - Social proof e marketing

## 📈 Otimizações

### SEO
- Meta tags otimizadas
- Structured data
- URLs amigáveis
- Sitemap automático

### Performance
- Geração estática
- Otimização de imagens
- CSS e JS minificados
- CDN via GitHub Pages

## 🚀 Próximos Passos

1. Adicionar Google Analytics
2. Implementar A/B testing
3. Adicionar testimoniais
4. Criar sistema de lead capture
5. Implementar chat ao vivo

## 📝 Conteúdo

O conteúdo está alinhado com:
- Curso oficial na Hotmart
- Material de referência em `/hotmart-course-reference.md`
- Tom profissional para público executivo
- Foco em resultados práticos

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature
3. Commit suas mudanças
4. Push para a branch
5. Abra um Pull Request

## 📄 Licença

Projeto proprietário - Todos os direitos reservados.

---

**Curso ministrado por:** Emerson Almeida  
**Website:** https://c4modelpratico.com.br  
**Hotmart:** https://hotmart.com/pt-br/marketplace/produtos/c4-model-desenho-de-arquitetura-pratica-para-tech-leaders/J100276778N