import Reveal from '../components/Reveal'

function About() {
  return (
    <section className="section section--muted" id="about" aria-labelledby="about-heading">
      <Reveal className="container about__grid">
        <div className="about__visual">
          <div className="about__monogram" aria-hidden="true">AK</div>
          <div className="about__visual-copy">
            <span>Building for the web</span>
            <strong>Thoughtful, responsive, and practical.</strong>
          </div>
        </div>

        <div className="about__content">
          <p className="eyebrow">About me</p>
          <h2 id="about-heading">A focused developer, ready to contribute.</h2>
          <p>
            I&apos;m Ajay Kumar, a B.Tech Computer Science and Engineering student with a growing
            interest in full stack and web development.
          </p>
          <p>
            I enjoy creating responsive web applications that are simple to use and built with
            attention to the people using them. I am preparing for placement opportunities where I
            can keep learning, collaborate with a team, and contribute reliable work.
          </p>
          <a className="text-link" href="#skills">Explore my skills <span aria-hidden="true">&rarr;</span></a>
        </div>
      </Reveal>
    </section>
  )
}

export default About
