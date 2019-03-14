import React, { Component } from 'react';
import { Panel, ControlLabel, Glyphicon } from 'react-bootstrap';
import './Profile.css';
import API from "../../utils/API";


class Profile extends Component {
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
  var data={
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
          <h1>{profile.name}</h1>
          <Panel header="Profile">
            <img src={profile.picture} alt="profile" />
            <div>
              <ControlLabel><Glyphicon glyph="user" /> Nickname</ControlLabel>
              <h3>{profile.nickname}</h3>
            </div>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
          </Panel>
        </div>
      </div>
    );
  }
}

export default Profile;
