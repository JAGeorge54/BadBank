function Balance(){
  const { useState, useEffect }             = React;
  const [balance, setBalance]               = useState()
  const [user, setUser]                     = useState()
  const ctx = React.useContext(UserContext);

  useEffect(() => {
    const getLoggedInUser = () => {
      ctx[1].users.map((user, i) => {
        if(user.name == ctx[0].loggedIn){
          let tempUser = [ctx[1].users[i]];
          setUser(tempUser[0].name);
          setBalance(tempUser[0].balance);
        }
      })
    }
    getLoggedInUser();
  }, []);

  return (
    <Card
          bgcolor='dark'
          txtcolor="white"
          header={`User : ${user}`}
          title='balance'
          body={balance}
        />
  )
}
