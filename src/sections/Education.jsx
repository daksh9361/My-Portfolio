import Reveal from '../components/Reveal'

const education = [
  {
    qualification: 'B.Tech - Computer Science & Engineering',
    institution: 'I.T.S Engineering College, Greater Noida',
    period: '2023-2027',
    detail: 'CGPA: 7.2/10',
  },
  {
    qualification: 'Class XII - CBSE',
    institution: 'New Sainik Public School, Noida',
    period: '2022',
  },
  {
    qualification: 'Class X - CBSE',
    institution: 'Rahul Public School, Delhi',
    period: '2020',
  },
]

function Education() {
  return (
    <section className="section section--muted education" id="education" aria-labelledby="education-heading">
      <Reveal className="container">
        <div className="section-heading">
          <p className="eyebrow">Education</p>
          <h2 id="education-heading">Academic background</h2>
          <p>My foundation in computer science and continued preparation for a career in software development.</p>
        </div>

        <ol className="education-timeline">
          {education.map((item) => (
            <li className="education-item" key={item.qualification}>
              <span className="timeline-marker" aria-hidden="true" />
              <article>
                <div className="education-item__topline">
                  <h3>{item.qualification}</h3>
                  <time>{item.period}</time>
                </div>
                <p>{item.institution}</p>
                {item.detail && <strong>{item.detail}</strong>}
              </article>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}

export default Education
