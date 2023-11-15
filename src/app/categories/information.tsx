import About from "../components/section/About"
import Career from "../components/section/Career"
import Project from "../components/section/Project"
import Skill from "../components/section/Skill"

export const categories = [
    {'content': 'About me', 'component':<About/>},
    {'content': 'Skill', 'component':<Skill/>},
    {'content': 'Project', 'component':<Project />},
    {'content': 'Career', 'component':<Career />},
]