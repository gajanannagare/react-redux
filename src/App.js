import React from "react";
import { connect } from "react-redux";
import fetch_user from "./actions/fetchUsers";

class App extends React.Component {
  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  
  fetchUser = () => {
    const {fetchUserData} = this.props;
    fetchUserData();
  };
  render() {
    const {users} = this.props;
    return (
      <div className="App">
        <button onClick={this.fetchUser}>FetchUsers</button>
        {users.length === 0 ?
        <p>No Data Found</p> :
        <div>
          {users.map((user)=>(
            <h3>{user.name}</h3>
          ))}
        </div>
        }
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUserData: () => dispatch(fetch_user())
  };
};

const mapStateToProps = (state) => {
  return {
    users : state && state.users
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
