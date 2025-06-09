import React from 'react';
import UserItem from "./UserItem";
import { connect } from "react-redux";
import actions from "../redux/main/duck/actions";

class UserList extends React.Component {
    state = {
      name: '',
    };
  
    handleChange = (e) => {
      this.setState({ name: e.target.value });
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      const { name } = this.state;
      if (!name.trim()) return;
  
      this.props.addUser({ id: Date.now(), name });
      this.setState({ name: '' });
    };
  
    render() {
      const { users } = this.props;
    
      return (
        <>
          <form onSubmit={this.handleSubmit}>
            <div>
              <input value={this.state.name} onChange={this.handleChange} />
              <input type="submit" value="dodaj" />
            </div>
          </form>
  
          <ul>
            {users.map((user) => (
              <UserItem key={user.id} id={user.id} name={user.name} />
            ))}
          </ul>
        </>
      );
    }
  }
  
  const mapStateToProps = (state) => ({
    users: state.main.users,
  });
  
  const mapDispatchToProps = (dispatch) => ({
    addUser: (name) => dispatch(actions.addUser(name)),
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(UserList);