import Reveal from '../components/Reveal'

const projects = [
  {
    title: 'TripEasy – Trip Expense Splitter',
    description: 'A full-stack web app to manage trips, split expenses, track settlements, and chat with group members.',
    technologies: ['React.js', 'MongoDB', 'Express.js', 'Node.js'],
    github: 'https://github.com',
    liveDemo: 'https://trip-easy-eight.vercel.app/',
  },
  {
    title: 'Portfolio Website',
    description: 'A responsive personal portfolio designed to present skills, education, projects, and contact details clearly.',
    technologies: ['React', 'JavaScript', 'HTML', 'CSS'],
    liveDemo: 'YOUR_PORTFOLIO_URL',
  },
  {
    title: 'Tic Tac Toe',
    description: 'A simple browser game that demonstrates JavaScript logic, state handling, and straightforward interaction design.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveDemo: true,
  },
  {
    title: 'Simon Says Game',
    description: 'A simple browser game that demonstrates JavaScript logic, state handling, and straightforward interaction design.',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    liveDemo: 'https://simon-game-beige-five.vercel.app/',
  },
]

const placeholderGithubUrl = ''
const placeholderDemoUrl = 'https://trip-easy-eight.vercel.app/'

function Projects() {
  return (
    <section className="section projects" id="projects" aria-labelledby="projects-heading">
      <Reveal className="container">
        <div className="section-heading">
          <p className="eyebrow">Projects</p>
          <h2 id="projects-heading">Selected work and practice projects</h2>
          <p>A few project ideas that reflect my interest in building useful, responsive web experiences.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <span className="project-number" aria-hidden="true">0{index + 1}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-list" aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <div className="project-card__actions">
                <a href={placeholderGithubUrl} title="">GitHub</a>
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" title="">Live Demo</a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  )
}

export default Projects
