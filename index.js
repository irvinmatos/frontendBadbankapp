function Spa() {
  
  return (
    <HashRouter>
      <NavBar/>
      <UserContext.Provider value={{users:[{id: 1, name: 'Irvin Matos', email:'matos.irvin@gmail.com',password:'secret', balance:100}]}}>
        <div className="container" style={{padding: "30px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
