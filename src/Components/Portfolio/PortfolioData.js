import PerfectDecision from "../../Components/Images/PerfectDecision.png"
import ColorRunner from "../../Components/Images/ColorRunner.png"
import BlindMazeGame from "../../Components/Images/BlindMazeGame.png"
import Uchugun from "../../Components/Images/Uchugun.png"
import RubeGoldberg from "../../Components/Images/RubeGoldberg.png"
import ABET from "../../Components/Images/ABET.png"

const PortfolioData = [
  {
    id: 1,
    category: "Game Development",
    title: "Parkinson's Research Study",
    image: PerfectDecision,
    link: "https://christopher-chiechi.itch.io/parkinsons-game?secret=sP4rE9NA2SapNq0lxWT7kAb8BRc",
    desc: "A video game test to evaluate patients for mild cognitive impairment (MCI), which is common in patients with Parkinson's disease (PD). A research study is being conducted at Florida State University to evaluate 90 participants (30 with PD and MCI, 30 with PD and without MCI, and 30 without PD) using both traditional and video game modalities. The study aims to determine the potential video games present as an effective tool for future clinical examinations to detect early signs of MCI in individuals with PD. Made with Unity.",
  },
  {
    id: 2,
    category: "Game Development",
    title: "First Person Shooter",
    image: ColorRunner,
    link: "https://christopher-chiechi.itch.io/color-runner?secret=Gkq4W6ZbYllQsO2eqpF1SUoe4",
    desc: "A first-person shooter time trial made in Unreal Engine. The player must navigate the course by sprinting, double jumping, wall running, sliding, and crouching. The player must also switch between four weapons of differing types and shoot moving targets of the same color as their weapon. Three seconds are added for every target missed, and the best time is saved.",
  },
  {
    id: 3,
    category: "Game Development",
    title: "Audio Game Experiment",
    image: BlindMazeGame,
    //link: "https://github.com/ChristopherChiechi/BlindMazeGame",
    link: "https://christopher-chiechi.itch.io/blind-maze-game",
    desc: "This game is an experiment to determine how effective audio cues are in guiding the player. Half of the levels will be played with visuals only, while the other half will be played with audio only. The results will help to evaluate the effectiveness of audio cues in both normal games and audio games for the blind. Results are posted to a Firebase database for comparison. Made with Unity.",
  },
  {
    id: 4,
    category: "Game Development",
    title: "Shoot 'Em Up",
    image: Uchugun,
    link: "https://github.com/ChristopherChiechi/ShmupGame",
    desc: "A shmup game inspired by the Japanese arcade game \"Ikaruga\" developed by Treasure. This was the first game I made, and it was created using the LARC Engine.",
  },
  {
    id: 5,
    category: "Game Development",
    title: "Rube Goldberg Machine",
    image: RubeGoldberg,
    link: "https://github.com/ChristopherChiechi/RubeGoldbergMachine",
    desc: "A physics-based rube goldberg machine created using the LARC Engine and Box2d.",
  },
  {
    id: 6,
    category: "Web Development",
    title: "University Website",
    image: ABET,
    link: "https://github.com/ChristopherChiechi/ABET_Course_Assessment_Tool",
    desc: "A full stack application that will be used by computer science and engineering students and staff at the University of North Texas to maintain the university's ABET accreditation. Students can submit course surveys. Instructors and coordinators can submit reports for their courses. Admins can edit semesters, assigned courses, course outcomes, course lists, faculty lists, major lists, and survey questions. Admins can also generate student surveys, section reports, outcome mappings, and full reports. ",
  },
]

export default PortfolioData