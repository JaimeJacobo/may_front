import React from 'react'
import './App.css'
import axios from 'axios'

class App extends React.Component {
  state = {
    inputNewUser: {
      username: '',
      password: '',
    },
    user: {},
  }

  // componentDidMount() {
  //   axios({
  //     method: 'get',
  //     url: 'http://localhost:5000/',
  //   })
  //     .then((result) => {
  //       console.log(result)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
  // }

  handleInput(event) {
    const { name, value } = event.target
    this.setState({
      ...this.state,
      inputNewUser: { ...this.state.inputNewUser, [name]: value },
    })
  }

  submitSignUp(event) {
    event.preventDefault()
    axios({
      withCredentials: true,

      method: 'post',
      url: 'https://may-back.herokuapp.com/auth/signup',
      data: {
        username: this.state.inputNewUser.username,
        password: this.state.inputNewUser.password,
      },
    })
      .then((result) => {
        console.log(result)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  submitLogIn(event) {
    event.preventDefault()
    fetch('https://may-back.herokuapp.com/auth/login', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        username: this.state.inputNewUser.username,
        password: this.state.inputNewUser.password,
      }),
    })
      .then(function (res) {
        console.log(res)
      })
      .catch(function (res) {
        console.log(res)
      })
    // axios({
    //   withCredentials: true,
    //   method: 'post',
    //   url: 'https://may-back.herokuapp.com/auth/login',
    //   data: {
    //     username: this.state.inputNewUser.username,
    //     password: this.state.inputNewUser.password,
    //   },
    // })
    //   .then((result) => {
    //     console.log(result)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }

  render() {
    return (
      <div className="App">
        <h1>Componente App</h1>
        <h2>Create new user</h2>
        <form
          onSubmit={(event) => {
            this.submitSignUp(event)
          }}
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(event) => this.handleInput(event)}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={(event) => this.handleInput(event)}
          />
          <button>Create User</button>
        </form>
        <h2>Log in</h2>
        <form
          onSubmit={(event) => {
            this.submitLogIn(event)
          }}
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={(event) => this.handleInput(event)}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={(event) => this.handleInput(event)}
          />
          <button>Log in</button>
        </form>
      </div>
    )
  }
}

export default App
