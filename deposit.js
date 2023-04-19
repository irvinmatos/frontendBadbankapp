
function Deposit() {
  //const ctx = React.useContext(UserContext);
  const ctx = React.useContext(UserContext);
  const [status, setStatus]     = React.useState('');
  const [deposit, setDeposit]    = React.useState('');
  let users = [...ctx.users];
  console.log(JSON.stringify(users));
  let balance = 100;

  function dodeposit() {
      console.log(email, `Deposit amount: ${deposit}`);
      if (!validate(email,       'email'))       return;
      if (!validate(deposit,    'deposit'))    return;
      if (email === users[1].email) {
        //ctx.users.push({deposit});
        users[1].balance += Number(deposit);
        setShow(false);
        return;
      } else {
          alert(`Incorrect User input.`);
          clearForm();
          setShow(true);
      }
  }

  function validate(field, label){
    if (!field) {
      
      setStatus('Error: ' + label);
      setTimeout(() => setStatus(''), 3000);
      
      return false;
      
    }}

  function clearForm(){
    setName('');
    setEmail('');
    setDeposit('');
    setShow(true);
  }
  

  return (
    <Card
      bgcolor="primary"
      header="Deposit"
      status={status}
      body={(  
              <>
                Your Account Balance is: {balance}  <br/><br/>
      
                Email Address <br/>
                <input type="input" 
                className="form-control" 
                id="email" 
                placeholder="Enter Email" 
                value={email} onChange={e => setName(e.currentTarget.value)} /><br/>

                Deposit Amount<br/>
                <input type="number" 
                  className="form-control" 
                  id="deposit"
                  placeholder="Enter amount" 
                  value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>

                <button type="submit" 
                  className="btn btn-light" 
                  onClick={dodeposit}>Deposit</button>
              </>
            )}
    />
  )
}

  /*
  return (
      <Card
        bgcolor="primary"
        header="Deposit"
        deposit={handle}
        depositMsg="Deposit Successful"
      />
  )
}
*/