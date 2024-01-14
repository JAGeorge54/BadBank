function Login(){
  const [name, setName]                 = React.useState('');
  const [password, setPassword]         = React.useState('');
  const [status, setStatus]             = React.useState(false);
  const [loggedInUser, setLoggedInUser] = React.useState(false);
  const ctx = React.useContext(UserContext);
  const users = ctx[1].users;

//checks that name and password matches
const validateUser = (user) => {
  if (user.name == name && user.password == password) {
    return true
  }
  return false
}

// validates the the form fields are not empty
const validateForm = (type, label) => {
  if (!type) {
    setStatus(`Please enter a ${label}`);
    setTimeout(() => setStatus(''),3000);
    return false
  }
  return true
}

/* validates form fields are not empty
then filters for user that matches name and password
then sets logged in user in context*/
const logInUser = () => {
  event.preventDefault();
  if(!validateForm(name, 'name')) return
  if(!validateForm(password, 'password')) return
  let validUser = users.filter(validateUser);
  ctx[0].loggedIn = validUser[0].name;
  setLoggedInUser(true);

}

  return (
    <Card
      bgcolor="dark"
      header={loggedInUser ? 'USER : ' + ctx[0].loggedIn : 'Login'}
      status={status}
      body={!loggedInUser ? (
        <>
          
            <label>Name</label>
            <br />
            <input placeholder='Enter name' onChange={e => setName(e.target.value)}></input>
            <label>Password</label>
            <input placeholder='Enter password' onChange={e => setPassword(e.target.value)}></input>
            <br />
            <br />
            <button onClick={logInUser} type="submit" className="btn btn-light">Login</button>
          
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
