import { Link } from "react-scroll";

function Introduction() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Sourav</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color">Software Developer</span>
            </h1>
            <p className="hero--section-description">
              Master in Applied Computer Science student at Dalhousie University with 3.5 years of experience at MathWorks as a Software Engineer.
            </p> 
          </div>
          <br />
          <Link
            onClick={closeMenu}
            activeClass="navbar--active-content"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            to="Contact"
            className="btn btn-outline-primary"
          >
            Get In Touch
          </Link>
        </div>
        <div className="hero--section--img">
            <div className="circle-photo">
            <img src="./img/Photo2.jpg" alt="My pic" />
            </div>
        </div>
      </section>
    );
  }

export default Introduction;