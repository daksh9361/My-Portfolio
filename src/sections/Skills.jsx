import Reveal from '../components/Reveal'

const skillGroups = [
  {
    title: 'Frontend',
    skills: [
      ['HTML', 'HT'],
      ['CSS', 'CS'],
      ['React.js', 'RE'],
      ['Bootstrap', 'BO'],
      ['Tailwind CSS', 'TC'],
    ],
  },
  {
    title: 'Backend',
    skills: [
      ['Node.js', 'NO'],
      ['Express.js', 'EO'],
      ['REST APIs', 'RA'],
    ],
  },
  {
    title: 'Programming',
    skills: [['Java', 'JV'],
              ['JavaScript', 'JS'],
            ['C', 'C']],
  },
  {
    title: 'Database',
    skills: [['MongoDB', 'MD'],
              ['SQL', 'S']],
  },
  {
    title: 'Tools',
    skills: [
      ['Git', 'GT'],
      ['GitHub', 'GH'],
      ['VS Code', 'VS'],
    ],
  },
  {
    title: 'Concepts',
    skills: [
      ['DSA', 'DS'],
      ['OOP', 'OP'],
      ['DBMS', 'DB'],
    ],
  },
]

function Skills() {
  return (
    <section className="section skills" id="skills" aria-labelledby="skills-heading">
      <Reveal className="container">
        <div className="section-heading">
          <p className="eyebrow">Skills</p>
          <h2 id="skills-heading">Technologies I&apos;m building with</h2>
          <p>Core tools I&apos;m actively using and developing through web projects.</p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.skills.map(([name, abbreviation]) => (
                  <li key={name}>
                    <span className="skill-icon" aria-hidden="true">{abbreviation}</span>
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Skills
