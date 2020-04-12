import React, { Component } from "react";

const MainContext = React.createContext({
  comments: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setTeamId: () => {},
  setTeamList: () => {},
  setUserId: () => {},
  setTeamIssues: () => {},
  clearProduct: () => {},
  addProduct: () => {}
});

export default MainContext;

export class MainProvider extends Component {
  state = {
    teamId: null,
    userId: null,
    teamList: ['user'],
    error: null,
    teamIssues: ['issue,issue', 'isue']
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

  setTeamList = teamList => {
    this.setState({ teamList });
  };

  setTeamIssues = teamIssues => {
      this.setState({ teamIssues })
  }


  render() {
    const value = {
      teamId: this.state.teamId,
      userId: this.state.userId,
      teamList: this.state.teamList,
      saleProducts: this.state.saleProducts,
      teamIssues: this.state.teamIssues,
      setSaleProducts: this.setSaleProducts,
      addProduct: this.addProduct,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setTeamId: this.setTeamId,
      setTeamIssues: this.setTeamIssues,
      setUserId: this.setUserId,
      setTeamList: this.setTeamList
    };
    return (
      <MainContext.Provider value={value}>
        {this.props.children}
      </MainContext.Provider>
    );
  }
}
