
function NavBar(){
  $(function () {
    $('[data-bs-toggle="tooltip"]').tooltip()
  })
 
  return(
    <>
    
    <nav class="navbar navbar-expand-md navbar-dark ">
      <a className="navbar-brand" href="#" data-bs-toggle="tooltip" data-bs-placement="bottom" title="home">BadBank</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav" >
      <ul className="navbar-nav ">
      <li className="nav-item">
            <a className="nav-link" href="#/CreateAccount/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="To create account we need Name, Email and Password.">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/login/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Need credential to login and see BadBank Account.">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/deposit/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Hooray!">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/withdraw/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Hooray!">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/balance/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Hooray!">Balance</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#/alldata/" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Hooray!">AllData</a>
          </li> 

        </ul>
      </div>
    </nav>
    
    
    </>
  
  );

}