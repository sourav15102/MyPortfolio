export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      <div className="text-center">
        <div className="footer--social--icon">
          <ul>
            <li>
              <a
                href="https://github.com/sourav15102"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src="img/githubimg.png" alt="GitHub" className="social-logo" width="100" height="100" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/sghai96"
                className="navbar--content"
                target="_blank"
                rel="noreferrer"
              >
                <img src="img/Linkedinimg.png" alt="LinkedIn" className="social-logo" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="divider" />
    </section>
  );
}
