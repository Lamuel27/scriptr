import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';
import API from "../../utils/API";
import '../../Auth/Auth';


class Profile extends Component {
  style = {
    cardBackground: {
      "backgroundColor": "rgb(255,195,99)",
      "width": "1000px",
      "height": "400px",
      "marginLeft": "auto",
      "marginRight": "auto",
      "zIndex": "10",
      "boxShadow": "0px 5px 20px rgba(0,0,0,.5)",
      "borderRadius": "5px"
    },
    cardImage: {
      "height":"75%"
    },
    cardContent: {
      "width": "50%",
      "position": "relative",
      "left": "48%",
      "top": "-500px"
    },
    cardTitle: {
      "fontWeight": "semibold",
      "color":"black"
    },
    cardSubtitle: {
      "fontWeight": "lighter",
      "color":"black"
    }
  }

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
      });
    } else {
      this.setState({ profile: userProfile });
    }
  };

  componentDidMount() {
    const { userProfile } = this.props.auth;
    if (userProfile) {
      this.saveUser(userProfile)
      console.log(userProfile)
    }
  }
  saveUser = (userProfile) => {
    var data = {
      sub: userProfile.sub,
      nickname: userProfile.nickname,
      name: userProfile.name,
      picture: userProfile.picture,
      updated_at: userProfile.updated_at
    };
    API.saveUser(data).catch(err => console.log(err));

  }

  render() {
    console.log(this.props.auth)


    const { profile } = this.state;
    return (
      <div className="container">
        <div className="profile-area">
          <div className="col s12 m7">
            <div className="card horizontal" style={this.style.cardBackground}>
              <div className="card-image">
                <img src={profile.picture} style={this.style.cardImage} alt=""></img>
              </div>
              <div className="card-content" style={this.style.cardContent}>
                <p style={this.style.cardTitle}>Name</p>
                <h3 style={this.style.cardSubtitle}>{profile.nickname}</h3>
                <br />
                <p style={this.style.cardTitle}>Average Score</p>
                <h3 style={this.style.cardSubtitle}>...</h3>
                <br />
                <p style={this.style.cardTitle}>Level</p>
                <h3 style={this.style.cardSubtitle}>...</h3>
              </div>
            </div>
          </div>

          {/* <h1>{profile.name}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </Panel> */}

        </div>
      </div>
    );
  }
}

export default Profile;
