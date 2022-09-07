import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class TeamCard extends Component {
  render() {
    const {teamDetails} = this.props
    const {name, id, teamImageUrl} = teamDetails
    return (
      <Link className="link-item" to={`/team-matches/${id}`}>
        <li className="team-card-item">
          <div className="team-card">
            <img src={teamImageUrl} alt={name} className="team-logo" />
            <p className="team-name">{name}</p>
          </div>
        </li>
      </Link>
    )
  }
}

export default TeamCard
