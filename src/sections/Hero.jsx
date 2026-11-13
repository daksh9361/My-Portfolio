import RESUME from "./RESUME.pdf";

function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="container hero__grid">
        <div className="hero__content">
          <h2 className="eyebrow hero__eyebrow">Hello, I&apos;m</h2>
          <h1 id="hero-heading">Ajay Kumar</h1>
          <p className="hero__role">Full Stack Developer</p>
          <p className="hero__intro">
            Full Stack Developer passionate about building responsive and user-friendly web
            applications. I enjoy turning ideas into clear, practical digital experiences.
          </p>

          <div className="hero__actions">
            <a className="button button--primary" href="#skills">
              View My Work
            </a>
            <a
              className="button button--secondary"
              href={RESUME}
              download="RESUME.pdf"
            >
              Download Resume
            </a>
          </div>

          <div className="social-links" aria-label="Professional links">
            <a href="https://github.com/daksh9361" title="">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ajay-kumar-a01755315" title="">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero__visual" aria-label="Developer profile illustration">
          <div className="code-card">
            <div className="code-card__topbar" aria-hidden="true">
              <span />
              <span />
              <span />
              <p>developer.js</p>
            </div>
            <div className="code-card__content">
              <p><span className="code-keyword">const</span> developer = {'{'}</p>
              <p className="code-indent">name: <span className="code-string">&apos;Ajay Kumar&apos;</span>,</p>
              <p className="code-indent">role: <span className="code-string">&apos;Full Stack Developer&apos;</span>,</p>
              <p className="code-indent">focus: <span className="code-string">&apos;Responsive web apps&apos;</span></p>
              <p>{'}'};</p>
              <p className="code-comment">// building with purpose</p>
            </div>
          </div>
          <div className="tech-badge tech-badge--one">&lt;/&gt;</div>
          <div className="tech-badge tech-badge--two">JS</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
