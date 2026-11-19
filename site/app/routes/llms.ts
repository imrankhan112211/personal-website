import { profileFaqs, shortBio } from '~/content/about'
import { framework, problems } from '~/content/homeStory'
import { articles } from '~/content/articles'
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
    ...ventures.map((v) => `- ${v.name}${v.role && v.roleVerified ? ` (${v.role.en})` : ''}: ${v.description.en}${v.url ? ` ${v.url}` : ''}${v.alsoKnownAs?.length ? ` (also: ${v.alsoKnownAs.map((a) => `${a.name} ${a.url}`).join(', ')})` : ''}`),
    '',
    '## Services',
    `Organised as the Digital Trust Framework: ${framework.map((f) => `${f.name.en} — ${f.line.en}`).join(' ')}`,
    ...problems.map((p) => `- ${p.area.en}: ${p.solutions.map((x) => x.en).join('; ')}.`),
    '',
    '## Frequently asked questions',
    ...profileFaqs.flatMap((f) => [`### ${f.q.en}`, f.a.en]),
    '',
    '## Recognition',
    ...recognition.map((r) => `- ${r.title.en} — ${r.organization.en}${r.date ? ` (${r.date})` : ''}${r.description ? `: ${r.description.en}` : ''}${r.sourceUrl ? ` Source: ${r.sourceUrl}` : ''}`),
    '',
    '## Key pages',
    `- [Biography](${u('/about/biography/')}): official reference biography`,
    `- [About](${u('/about/')})`,
    `- [Consulting](${u('/consulting/')}): business and brand protection, social media solutions and incident response, social commerce, cyber harassment and blackmail response`,
    `- [Training](${u('/training/')}): webinars, workshops, seminars and briefings on cyber safety for entrepreneurs, teams, students and institutions`,
    `- [Ventures](${u('/ventures/')})`,
    `- [Media coverage](${u('/media/')})`,
    `- [Learning](${u('/learning/')}): courses, e-books and free guides (coming soon)`,
    `- [Blog](${u('/blog/')}): articles`,
    `- [Contact](${u('/contact/')})`,
    `- Bengali version: ${u('/bn/')}`,
    '',
    '## Official profiles',
    ...person.socials.filter((s) => s.url).map((s) => `- ${s.label}: ${s.url}`),
    ...person.referenceProfiles.map((r) => `- ${r.label}: ${r.url}`),
    '',
    '## Identity',
    person.disambiguatingDescription.en,
    '',
    '## Selected media coverage',
    ...[...media].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 15).map((m) => `- ${m.outlet} (${m.date}): ${m.headline} — ${m.url}`),
    ...(articles.length ? ['', '## Articles', ...articles.map((a) => `- [${a.title.en}](${u(`/blog/${a.slug}/`)}): ${a.excerpt.en}`)] : []),
    '',
  ]
  return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
}
