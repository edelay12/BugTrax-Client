import React, { Component } from "react";

const MainContext = React.createContext({
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTeamId: () => {},
  setTeamList: () => {},
  setUserId: () => {},
  setUser: () => {},
  setTeamIssues: () => {},
  setTimeline: () => {},
  clearProduct: () => {},
  addProduct: () => {}
});

export default MainContext;

export class MainProvider extends Component {
  state = {
    teamId: null,
    userId: null,
    user: null,
    teamList: ['user'],
    error: null,
    teamIssues: [],
    activeIssues: [],
    resolvedIssues: [],
    teamTimeline: [],
  };

  setError = error => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setTeamId = teamId => {
    this.setState({ teamId });
  };

  setUserId = userId => {
    this.setState({ userId });
  };

  setUser = user => {
    this.setState({ user });
  };

  setTeamList = teamList => {
    this.setState({ teamList });
  };

  setTeamIssues = teamIssues => {
      this.setState({ teamIssues })
      console.log(teamIssues)
  }

  setActiveIssues = activeIssues => {
      this.setState({ activeIssues })
  }

  setResolvedIssues = resolvedIssues => {
      this.setState({ resolvedIssues })
  }

  setTimeline = teamTimeline => {
    this.setState({ teamTimeline })
  }




  render() {
    const value = {
      teamId: this.state.teamId,
      userId: this.state.userId,
      user: this.state.user,
      teamList: this.state.teamList,
      saleProducts: this.state.saleProducts,
      teamIssues: this.state.teamIssues,
      teamTimeline: this.state.teamTimeline,
      activeIssues: this.state.activeIssues,
      resolvedIssues: this.state.resolvedIssues,
      //change to use timeline resolved issues
      newIssues: this.state.teamIssues.filter((v, i) => {return v.resolution === 'new'}),
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTeamId: this.setTeamId,
      setTeamIssues: this.setTeamIssues,
      setActiveIssues: this.setActiveIssues,
      setResolvedIssues: this.setResolvedIssues,
      setUserId: this.setUserId,
      setUser: this.setUser,
      setTeamList: this.setTeamList,
      setTimeline: this.setTimeline,
    };
    return (
      <MainContext.Provider value={value}>
        {this.props.children}
      </MainContext.Provider>
    );
  }
}
