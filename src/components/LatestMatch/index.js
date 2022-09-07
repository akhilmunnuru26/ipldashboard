import {Component} from 'react'
import './index.css'

class LatestMatch extends Component {
  render() {
    const {matchDetails} = this.props
    const {
      competingTeam,
      competingTeamLogo,
      date,
      venue,
      result,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
    } = matchDetails

    return (
      <div className="latest-matches-bg-box">
        <div className="details-card">
          <div className="">
            <p className="competing-team">{competingTeam}</p>
            <p className="date">{date}</p>
            <p className="venue">{venue}</p>
            <p className="venue">{result}</p>
          </div>
          <img
            className="logo"
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
          />
        </div>
        <div className="stats-box">
          <h1 className="labels">First Innings</h1>
          <p className="results">{firstInnings}</p>
          <h1 className="labels">Seconds Innings</h1>
          <p className="results">{secondInnings}</p>
          <h1 className="labels">Man Of The Match</h1>
          <p className="results">{manOfTheMatch}</p>
          <h1 className="labels">Umpires</h1>
          <p className="results">{umpires}</p>
        </div>
      </div>
    )
  }
}

export default LatestMatch
