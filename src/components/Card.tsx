import { BicepsFlexed } from "lucide-react";
import Pill from "./Pill";
import profile from '../../public/1585108244083.jpeg'

function Card() {
  const skills = [
    { skill: 'HTML/CSS', icon: BicepsFlexed, backgroundColor: 'blue', color: 'white' },
    { skill: 'JS', icon: BicepsFlexed, backgroundColor: 'red', color: 'white' },
    { skill: 'Node JS', icon: BicepsFlexed, backgroundColor: 'yellow', color: 'red' },
    { skill: 'React JS', icon: BicepsFlexed, backgroundColor: 'green', color: 'white' },
    { skill: 'Nest JS', icon: BicepsFlexed, backgroundColor: 'purple', color: 'white' }
  ]
  return (
    <div className="card">
      <img src={profile} alt="profile_image" />
      <div className="details">
        <h3>Rajan Midun Magar</h3>
        <p>Full-stack web developer and teacher at Udemy. When not coding or preparing a course, I like to play board games, to cook (and eat), or to just enjoy the greenary.</p>
        <div className="pills" >
          {
            skills.map(({ skill, ...rest }) => (
              <Pill text={skill} {...rest} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Card;