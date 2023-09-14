import data from "../../data/index.json";

export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h4 className="skills--section--heading">Skills</h4>
      </div>
      <div className="skills--section--container">
        {data?.skills?.map((item, index) => (
            <div className="skills--section--img">
              <img src={item.src} alt={item.title} />
            </div>
        ))}
      </div>
    </section>
  );
}