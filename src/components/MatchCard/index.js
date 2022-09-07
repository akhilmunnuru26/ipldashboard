import {Component} from 'react'
import './index.css'

class MatchCard extends Component {
  render() {
    const {matchResults} = this.props
    const {competingTeam, competingTeamLogo, matchStatus, result} = matchResults
    const status = matchStatus === 'Lost' ? 'lost' : 'won'
    return (
      <li className="match-card">
        <img
          className="result-team-logo"
          src={competingTeamLogo}
          alt={`competing team ${competingTeam}`}
        />
        <p className="team">{competingTeam}</p>
        <p className="result">{result}</p>
        <p className={`match-status ${status}`}>{matchStatus}</p>
      </li>
    )
  }
}

export default MatchCard
