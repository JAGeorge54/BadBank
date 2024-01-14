function Withdraw(){
  const { useState, useEffect } = React;
  const [status, setStatus] = useState('');
  const [deposit, setDeposit] = useState('')
  const [loggedInUser, setLoggedInUser] = useState('Please Sign in')
  const [currentBalance, setCurrentBalance] = useState(0)
  const [balance, setBalance] = useState()
  const ctx = React.useContext(UserContext);
  

  useEffect(() => {
    const getLoggedInUser = () => {
      ctx[1].users.map((user, i) => {
        if(user.name == ctx[0].loggedIn){
          let tempUser = [ctx[1].users[i]]
          setLoggedInUser(tempUser[0].name)
          setCurrentBalance(tempUser[0].balance)
        }
      })
    }
    getLoggedInUser();
  }, [balance])

  
  const updateStatus = (deposit) => {
    setStatus(`Successful withdraw of $${deposit}`)
    setTimeout(() => setStatus(''),3000);
  }

  
  const handleSubmit = () => {
    event.preventDefault();
    if (!isNaN(deposit)) {
      if (Math.sign(deposit) == 1) {
        if(deposit <= currentBalance) {
          ctx[1].users.map((user, i) => {
            if(user.name == ctx[0].loggedIn){
              ctx[1].users[i].balance = ctx[1].users[i].balance - deposit
              setBalance(ctx[1].users[i].balance)
              const form = document.querySelector('form');
              form.reset();
              updateStatus(deposit);
              setDeposit('')
            }
          })
        } else {
          alert('insufficient funds')
        }
      } else {
        alert('Please enter a positive number')
      }
    } else {
      alert('please enter a number')
    }
  }

  const Button = () => {
    if(deposit == '') {
      return (
        <button className="btn btn-light" disabled='disable' type='submit' onClick={handleSubmit}>submit</button>
      )
    } else {
      return <button className="btn btn-light" type='submit' onClick={handleSubmit}>submit</button>
    }
  }

  return (
    <>
    <h1>Logged in User: {loggedInUser}</h1>
    <Card
      bgcolor="dark"
      header={`Balance : ${currentBalance}`}
      status={status}
      body={
        <>
          <form onSubmit={handleSubmit}>
            <label>Withdraw</label>
            <input type='text' name='deposit' onChange={e => setDeposit(Number(e.target.value))}></input>
            <br></br>
            <br></br>
            <Button />
          </form>
        </>
        }
    />
    </>
  )
}
