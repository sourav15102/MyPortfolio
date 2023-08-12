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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              <br /> Dolorum, quas. Amet soluta assumenda cum?
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
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