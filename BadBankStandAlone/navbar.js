function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" data-toggle="tooltip" data-placement="top" title="Creat an account!">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/" data-toggle="tooltip" data-placement="top" title="Have an account? Log in here!">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" data-toggle="tooltip" data-placement="top" title="Make a deposit">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" data-toggle="tooltip" data-placement="top" title="Make a withdrawl">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/" data-toggle="tooltip" data-placement="top" title="Check your balance">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" data-toggle="tooltip" data-placement="top" title="All data for users">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}