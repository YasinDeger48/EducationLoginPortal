import React from "react";
import { connect } from "react-redux";
import { userInit } from "store/userReducer";

class LoginView extends React.Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: ""
    };
  }

  emailChanged(e) {
    this.setState({
      email: e.target.value,
    });
  }

  passwordChanged(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onUserClick() {
    console.log(this.state);

    //http call

    const user = {
      name: "yasin deger",
      email: "yasin@deger.com",
      age: 33,
      gender: "male",
    };
    this.props.loginUserData(user);
  }

  render() {
    const onViewChange = this.props.onViewChange;

    if (this.props.userData.name) {
      return <div>Login oldu</div>;
    } else {
      return (
        <div>
          <form className="form-inline">
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="email@email.com"
                value={this.state.email}
                onChange={this.emailChanged.bind(this)}
                required
              />
            </div>
            <div className="form-group mx-sm-3 mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="*******"
                value={this.state.password}
                onChange={this.passwordChanged.bind(this)}
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-primary mb-2"
              onClick={this.onUserClick.bind(this)}
            >
              Sign In
            </button>
            <a
              href=""
              onClick={(e) => {
                e.preventDefault();
                onViewChange(3);
              }}
            >
              Reset Password
            </a>
          </form>
          <p>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onViewChange(2);
              }}
            >
              Create an Account
            </a>
          </p>
        </div>
      );
    }
  }
}

// state property e baglanır
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUserData: (user) => dispatch(userInit(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);

// export default LoginView;
