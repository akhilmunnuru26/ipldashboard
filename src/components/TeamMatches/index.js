import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class TeamMatches extends Component {
  state = {
    teamBanner: '',
    latestMatchDetails: {},
    recentMatches: [],
    isLoading: true,
    bgColor: '',
  }

  componentDidMount() {
    this.getTeamMatchDetails()
  }

  getTeamMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    // console.log(data)
    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }

    const {teamBannerUrl, latestMatchDetails, recentMatches} = formattedData
    const updatedLatestMatchDetails = {
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      date: latestMatchDetails.date,
      firstInnings: latestMatchDetails.first_innings,
      id: latestMatchDetails.id,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      matchStatus: latestMatchDetails.match_status,
      result: latestMatchDetails.result,
      secondInnings: latestMatchDetails.second_innings,
      umpires: latestMatchDetails.umpires,
      venue: latestMatchDetails.venue,
    }

    const updatedRecentMatches = recentMatches.map(item => ({
      competingTeam: item.competing_team,
      competingTeamLogo: item.competing_team_logo,
      date: item.date,
      firstInnings: item.first_innings,
      id: item.id,
      manOfTheMatch: item.man_of_the_match,
      matchStatus: item.match_status,
      result: item.result,
      secondInnings: item.second_innings,
      umpires: item.umpires,
      venue: item.venue,
    }))

    this.setState({
      teamBanner: teamBannerUrl,
      latestMatchDetails: updatedLatestMatchDetails,
      recentMatches: updatedRecentMatches,
      isLoading: false,
      bgColor: id,
    })
  }

  render() {
    const {
      teamBanner,
      latestMatchDetails,
      recentMatches,
      isLoading,
      bgColor,
    } = this.state
    return (
      <div className={`bg-container ${bgColor}`}>
        {isLoading ? (
          <div className="loader">
            <Loader type="Oval" height={50} width={50} color="#ffffff" />
          </div>
        ) : (
          <div className="app-container">
            <Link to="/" className="back">
              <p>back</p>
            </Link>
            <div className="banner-container">
              <img src={teamBanner} alt="team banner" className="team-banner" />
            </div>
            <h1 className="heading">Latest Matches</h1>
            <LatestMatch
              key={latestMatchDetails.id}
              matchDetails={latestMatchDetails}
            />
            <ul className="team-match">
              {recentMatches.map(item => (
                <MatchCard key={item.id} matchResults={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default TeamMatches
