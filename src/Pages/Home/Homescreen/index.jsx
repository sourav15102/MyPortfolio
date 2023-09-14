import Introduction from '../Introduction'
import MyProjects from '../MyProjects';
import MySkills from '../MySkills';
import MyExperience from '../MyExperience';
import AboutMe from '../AboutMe'
import ContactMe from '../ContactMe'
import Footer from '../Footer'


function Home() {
    return (
        <div>
            <Introduction />
            <MyProjects />
            <MyExperience />
            <MySkills />
            <ContactMe />
        </div>
    )
}

export default Home;