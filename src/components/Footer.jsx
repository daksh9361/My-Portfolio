const footerNavigation = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Skills', '#skills'],
  ['Projects', '#projects'],
  ['Education', '#education'],
  ['Contact', '#contact'],
]

function Footer() {
  const goToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="site-footer">
      <div className="container site-footer__grid">
        <div>
          <a className="brand" href="#home">AJAY KUMAR</a>
          <p>Full Stack Developer</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          {footerNavigation.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </nav>
        <div className="footer-socials">
          <a href="#replace-with-github-url">GitHub</a>
          <a href="#replace-with-linkedin-url">LinkedIn</a>
        </div>
        <button className="back-to-top" type="button" onClick={goToTop} aria-label="Back to top" title="Back to top">Up</button>
      </div>
      <div className="container site-footer__bottom">Copyright {new Date().getFullYear()} Ajay Kumar. All rights reserved.</div>
    </footer>
  )
}

export default Footer
