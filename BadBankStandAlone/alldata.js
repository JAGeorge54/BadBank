function AllData(){
  const ctx = React.useContext(UserContext);
  function MakeCard(users) {
    let context = ctx[1].users;
    const card = context.map((user, i) => {
      return (
        <Card
          key={i}
          bgcolor='dark'
          txtcolor="white"
          header={`User : ${user.name}`}
          title={`Email : ${user.email}`}
          body={<ul>
                  <li>Password : {user.password}</li>
                  <li>Balnce : ${user.balance}</li>
                </ul>}
        />
      )
    })
    return card
  }
  return (
    <>
      <h5>All Data in Store</h5>
      {/* {JSON.stringify(ctx)}<br/> */}
      <MakeCard/>
    </>
  );
}
