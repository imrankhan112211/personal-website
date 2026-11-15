import { shortBio } from '~/content/about'
import { articles } from '~/content/articles'
import { expertise } from '~/content/home'
import { media } from '~/content/media'
import { person, SITE_URL } from '~/content/person'
import { recognition } from '~/content/recognition'
import { ventures } from '~/content/ventures'

/**
 * /llms.txt — a plain-language summary for AI assistants and answer engines (llmstxt.org convention).
 * Generated at build time from the same content as the visible site, so the facts always match.
 */
export function loader() {
  const u = (p: string) => SITE_URL + p
  const lines = [
    `# ${person.name.en}`,
    '',
    `> ${person.description.en}`,
    '',
    shortBio.en,
    '',
    `- Official website: ${u('/')}`,
    `- Professional title: ${person.title.en}`,
    `- Also written as: ${person.alternateNames.join(', ')}`,
    ...(person.email ? [`- Contact: ${person.email}`] : []),
    '',
    '## Ventures',
    ...ventures.map((v) => `- ${v.name}${v.role && v.roleVerified ? ` (${v.role.en})` : ''}: ${v.description.en}${v.url ? ` ${v.url}` : ''}`),
    '',
    '## Areas of expertise',
    ...expertise.map((e) => `- ${e.title.en}: ${e.body.en}`),
    '',
    '## Recognition',
    ...recognition.map((r) => `- ${r.title.en} — ${r.organization.en}${r.date ? ` (${r.date})` : ''}${r.description ? `: ${r.description.en}` : ''}${r.sourceUrl ? ` Source: ${r.sourceUrl}` : ''}`),
    '',
    '## Key pages',
    `- [Biography](${u('/about/biography/')}): official reference biography`,
    `- [About](${u('/about/')})`,
    `- [Consulting](${u('/consulting/')}): social media security, digital brand protection and online business advisory`,
    `- [Training](${u('/training/')}): cyber safety and social media safety training`,
    `- [Ventures](${u('/ventures/')})`,
    `- [Media coverage](${u('/media/')})`,
    `- [Blog](${u('/blog/')}): articles`,
    `- [Contact](${u('/contact/')})`,
    `- Bengali version: ${u('/bn/')}`,
    '',
    '## Official profiles',
    ...person.socials.filter((s) => s.url).map((s) => `- ${s.label}: ${s.url}`),
    '',
    '## Selected media coverage',
    ...[...media].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 15).map((m) => `- ${m.outlet} (${m.date}): ${m.headline} — ${m.url}`),
    ...(articles.length ? ['', '## Articles', ...articles.map((a) => `- [${a.title.en}](${u(`/blog/${a.slug}/`)}): ${a.excerpt.en}`)] : []),
    '',
  ]
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
