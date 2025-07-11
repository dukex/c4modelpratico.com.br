# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains the landing page for the **Mini-Curso C4 Model**, a Portuguese-language course targeting CTOs, tech leaders, and software architects. The landing page will be used to market and sell the course, which teaches visualization and documentation of software architecture using the C4 Model framework.

## Course Content Reference

The course content is maintained in a separate Obsidian vault called "knowledge" at `01 - Projects/PROJ - Mini-Curso - C4 Model/`. 

**Official Hotmart Course Page Information**: See `hotmart-course-reference.md` for detailed content extracted from the official Hotmart course page, including exact messaging, course structure, and marketing copy that should be aligned with your landing page.

Key course details for landing page content:

### Target Audience
- CTOs, Software Architects, Tech Leads
- Senior developers seeking architecture communication skills
- Technical professionals wanting better documentation practices

### Course Value Proposition
- Transforms complex architecture into clear, understandable diagrams
- Teaches both manual sketching (Excalidraw) and "Architecture as Code" (Structurizr)
- Practical, hands-on approach with real-world "Order Processing Service" example
- Addresses pain points: outdated documentation, communication gaps, technical debt

### Course Structure
- **Module 1**: Welcome and C4 Model fundamentals
- **Module 2**: Understanding C4 abstractions and notation
- **Module 3**: Hands-on modeling with practical exercises

### Course Materials Available
- Course content in Portuguese
- Excalidraw library for C4 diagrams
- PDF resources and checklists
- Certificate of completion
- WhatsApp community access

## Landing Page Requirements

### Essential Landing Page Elements
1. **Hero Section**: Clear value proposition for CTOs/architects
2. **Pain Point Identification**: Address documentation chaos, outdated diagrams
3. **Course Preview**: Module breakdown and learning outcomes
4. **Social Proof**: Professional credibility indicators
5. **Pricing/CTA**: Integration with Hotmart purchase flow
6. **About Instructor**: Technical leadership credibility
7. **FAQ Section**: Address common technical concerns

### Content Strategy
- **Language**: Brazilian Portuguese
- **Tone**: Professional but approachable for senior technical roles
- **Focus**: Practical results and ROI for technical teams
- **Keywords**: C4 Model, arquitetura de software, documentação técnica, Structurizr

### Marketing Integration
- **Platform**: Hosted on Hotmart for course delivery
- **Affiliate Program**: Partnership with "Platform Rocks" community
- **Social Media**: LinkedIn content targeting senior tech professionals
- **Pricing Model**: Freemium with core content + paid advanced modules

## Technical Recommendations

### Technology Stack Suggestions
For a professional, fast-loading landing page:

1. **Static Site Generator**: Next.js with static export for performance
2. **Styling**: Tailwind CSS for rapid, consistent styling
3. **Deployment**: Vercel/Netlify for easy deployment and CDN
4. **Analytics**: Google Analytics for conversion tracking
5. **Forms**: Netlify Forms or Formspree for contact/lead capture

### Performance Requirements
- **Page Speed**: Target <3s load time for Brazilian users
- **Mobile First**: Responsive design for mobile tech leaders
- **SEO Optimized**: Meta tags, structured data for course discovery
- **Conversion Optimized**: Clear CTAs, minimal friction to Hotmart

### Development Workflow
```bash
# Typical development commands (when using Next.js)
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Lint code
npm run test         # Run tests (if implemented)
```

## Content Guidelines

### Professional Messaging
- **Value Focus**: Emphasize time savings and team productivity
- **Technical Credibility**: Use proper technical terminology
- **Practical Benefits**: Show real-world application examples
- **Executive Appeal**: Frame benefits in business/leadership terms

### Compliance Requirements
- **LGPD Compliance**: Privacy policy for Brazilian data protection
- **Hotmart Integration**: Proper affiliate tracking and purchase flow
- **Accessibility**: WCAG guidelines for professional accessibility

### Asset Management
- **Images**: High-quality diagrams showing C4 examples
- **Videos**: Course preview/testimonial content
- **Downloads**: Free resources as lead magnets
- **Branding**: Consistent with course materials and professional appearance

## Integration Points

### External Systems
- **Hotmart**: Course purchase and delivery platform
- **WhatsApp**: Community access links
- **LinkedIn**: Social proof and content marketing
- **Email**: Lead nurturing and course updates

### Analytics and Tracking
- **Conversion Tracking**: Hotmart purchase completions
- **Lead Generation**: Email capture for course updates
- **User Behavior**: Heat mapping and scroll tracking
- **A/B Testing**: Headlines, CTAs, and pricing presentation

## Content Management

### Source Material
- Reference course content from Knowledge vault for accuracy
- Ensure consistency with actual course curriculum
- Use actual course outcomes and benefits
- Maintain alignment with instructor's established expertise

### Update Workflow
- Course content changes should reflect on landing page
- Marketing messages should align with current course status
- Pricing and availability should sync with Hotmart
- Testimonials and social proof should be regularly updated

## Success Metrics

### Primary KPIs
- **Conversion Rate**: Visitors to course purchases
- **Lead Generation**: Email signups for course updates
- **Traffic Quality**: Qualified technical professional visits
- **Page Performance**: Load speed and user experience metrics

### Technical Requirements
- **Mobile Responsiveness**: 100% mobile-friendly
- **Page Speed**: Lighthouse score >90
- **SEO Performance**: Technical keywords ranking
- **Uptime**: 99.9% availability for professional credibility

## Development Notes

### Code Standards
- Use meaningful variable names reflecting course content
- Comment complex conversion tracking or integration code
- Follow accessibility best practices for professional audience
- Implement proper error handling for form submissions and external integrations

### Testing Strategy
- Test purchase flow integration with Hotmart
- Validate mobile experience on various devices
- Verify analytics and tracking implementation
- Test form submissions and lead capture functionality