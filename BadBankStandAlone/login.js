function Login(){
  const ctx = React.useContext(UserContext);
  const [name, setName] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus] = React.useState(false);
  const [loggedInUser, setLoggedInUser] = React.useState(false);
  const [display, setDisplay] = React.useState(true);
  const users = ctx[1].users


const validateUser = (user) => {
  if (user.name == name && user.password == password) {
    return true
  }
  return false
}

const validateForm = (type, label) => {
  if (!type) {
    setStatus(`Please enter a ${label}`);
    setTimeout(() => setStatus(''),3000);
    return false
  }
  return true
}

const logInUser = () => {
  event.preventDefault();
  if(!validateForm(name, 'name')) return
  if(!validateForm(password, 'password')) return
  let validUser = users.filter(validateUser);
  ctx[0].loggedIn = validUser[0].name
  setLoggedInUser(true)

}

  return (
    <Card
      bgcolor="dark"
      header={loggedInUser ? 'USER : ' + ctx[0].loggedIn : 'Login'}
      status={status}
      body={!loggedInUser ? (
        <>
          <form >
            <label>Name</label>
            <br />
            <input placeholder='Enter Name' onChange={e => setName(e.target.value)}></input>
            <label>Password</label>
            <input placeholder='Enter Password' onChange={e => setPassword(e.target.value)}></input>
            <br />
            <br />
            <button onClick={logInUser} type="submit" className="btn btn-light">Create Account</button>
          </form>
        </>
      ) : (
        <>
        <h1>Login Successful</h1>
        </>
      )
        }
    />
  )  
}
