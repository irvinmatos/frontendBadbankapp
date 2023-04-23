
const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);

function Card(props){
  const [email, setEmail]        = React.useState('');
  const [deposit, setDeposit]    = React.useState('');
  const [show, setShow]          = React.useState(true);
  const [status, setStatus]      = React.useState('');
  const [newdeposit, setNewdeposit] = React.useState(users);
  const ctx = React.useContext(UserContext);
  let users = [...ctx.users];
  let total;

let currentUserIndex = "1";

function assignUserID(userID) {
  let currentUserIndex = 1;
    currentUserIndex = userID-1;
    return currentUserIndex;
};


    function classes() {
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }

    function validate(field, label){
      if (!field) {
        
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 3000);
        
        return false;
        
      }
    }

    function clearForm() {
      setName('');
      setEmail('');
      setPassword('');
      setDeposit('');
      setShow(true);
  }
    function calcDeposit(total) {
      total = Number(props.deposit[3]) + Number(deposit);
      
      return total;
    }
    
    function dodeposit() {
      console.log(email, `Deposit amount: ${calcDeposit(total)}`);
    
      if (!validate(email,       'email'))       return;
      if (!validate(deposit,    'deposit'))    return;
      const newBalance = newdeposit.map(user => {
        if (email === user.email){
          
          return{
            ...user,
            balance: user.balance + total,
          }

        } else {
          alert(`Incorrect User input.`);
          clearForm();
          setShow(true);
          return
      }
      
  })
  setNewdeposit(newBalance);
}
  
    return (
      <div className={classes()} style={{maxWidth: "22rem", }}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
          
          {props.depositForm || props.deposit  && show ? (

            
              <>
                Your Account Balance is: {props.deposit[3]}  <br/><br/>
      
                Email Address <br/>
                <input type="input" 
                className="form-control" 
                id="email" 
                placeholder="Enter Email" 
                value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
    
                Deposit Amount<br/>
                <input type="number" 
                  className="form-control" 
                  id="Amount"
                  placeholder="Enter amount" 
                  value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>

                <button type="submit" 
                  className="btn btn-light" 
                  onClick={dodeposit}>Deposit</button>
              </>
               ):(props.depositresponse && (
                <>
                <h5>Success</h5>
                <button type="submit" className="btn btn-light" onClick={clearForm}> {props.depositresponse}</button>
                </>
              ))
            }
          

          {props.allData && (
            <>
              Name: {props.allData[0]}<br/>
              Email: {props.allData[1]}<br/>
              Password: {props.allData[2]}<br/>
              Balance: {props.allData[3]}<br/>
            </> 
            )
          }
          

                 
        </div>
      </div>      
    )    
  }
