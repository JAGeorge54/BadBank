function Balance(){
  const { useState, useEffect }             = React;
  const [balance, setBalance]               = useState()
  const [user, setUser]                     = useState()
  const [show, setShow]                     = useState()
  const ctx = React.useContext(UserContext);

  /* useEffect onload sets user, balance and set show*/
  useEffect(() => {
    const getLoggedInUser = () => {
      ctx[1].users.map((user, i) => {
        if(user.name == ctx[0].loggedIn){
          let tempUser = [ctx[1].users[i]];
          setUser(tempUser[0].name);
          setBalance(tempUser[0].balance);
          loggedIn()
        }
      })
    }
    getLoggedInUser();
  }, []);

  // checks loggedin user and sets show
  const loggedIn = () => {
    if (ctx[0].loggedIn == 'none') {
      setShow(false)
    } else setShow(true)
  }

  return (
    <Card
      bgcolor='dark'
      txtcolor="white"
      header={ show ? `User : ${user}` : `Please Login`}
      title='Balance'
      body={ show ? `$${balance}` : `No User Logged In`}
    />
  )
}
