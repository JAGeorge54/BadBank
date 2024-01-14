function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  // validates the form fields are not empty
  function validate(field, label){
      if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  /*calls validate to make sure fields are not empty
  then alerts user if password is under 8 characters
  pushs user info into context and changes show so bottom
  of form displays instead*/
  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'name'))     return;
    if (!validate(email,    'email'))    return;
    if (!validate(password, 'password')) return;
    if (password.length < 8 ) {
      alert('Password must be more then 8 characters');
    } else {
      ctx[1].users.push({name,email,password,balance:100});
      setShow(false);
    }
  }

// clears form
  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

/*button component returns a disabled button if name, email, and password
fields are empty*/
  const Button = () => {
    if ((name && email && password) == '') {
      return <button disabled='disable' type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
    } else {
      return <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
    }
  }

  return (
    <Card
      bgcolor="dark"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => {
                setName(e.currentTarget.value)
                console.log(name)
              }} /><br/>
              Email address<br/>
              <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <Button />
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}