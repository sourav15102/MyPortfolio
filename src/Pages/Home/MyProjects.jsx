import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h4 className="skills--section--heading">Projects</h4>
      </div>
      <div className="skills--section--container">
        {data?.projects?.map((item, index) => (
          <div key={index} className="skills--section--card">
          <div className="skills--section--img">
            <a href={item.gsrc} target="_blank">
              <img src={item.gsrc} alt="Github" style={{ color: 'red' }} />
            </a>
            <a href={item.dsrc} target="_blank">
              <img src={item.dsrc} alt="Demo" style={{ color: 'blue' }} />
            </a>
          </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}