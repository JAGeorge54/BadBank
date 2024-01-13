function AllData(){
  const ctx = React.useContext(UserContext);
  let cardInfo = ctx[1].users.map((user, i) => {
    return <Card
    key={i}
    txtcolor="black"
    header={user.name}
    title={user.email}
    body={<ul>
      <li>Password: {user.password}</li>
      <li>Balnce: ${user.balance}</li>
    </ul>}
    />
  })

  function MakeCard(users) {
    let context = ctx[1].users;
    const card = context.map((user, i) => {
      return (
        <div key={i} className='card'>
          <h1 className='card-header'>{user.name}</h1>
          <ul>
            <li>User:{user.email}</li>
            <li>User:{user.password}</li>
            <li>User:{user.balance}</li>
          </ul>
        </div>
      )
    })
    return card
  }
  return (
    <>
      <h5>All Data in Store</h5>
      {/* {JSON.stringify(ctx)}<br/> */}
      {cardInfo}
      <MakeCard/>
    </>
  );
}
