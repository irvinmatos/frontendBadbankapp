
const Route       = ReactRouterDOM.Route;
const Link        = ReactRouterDOM.Link;
const HashRouter  = ReactRouterDOM.HashRouter;
const UserContext = React.createContext(null);
const [show, setShow]          = React.useState(true);
const [status, setStatus]      = React.useState('');
const [name, setName]          = React.useState('');
const [email, setEmail]        = React.useState('');
const [deposit, setDeposit]    = React.useState('');
let balance = users[currentUserIndex].balance;
let userName = users[currentUserIndex].name;
let users = [...ctx.users];



function Card(props){
  const [email, setEmail]        = React.useState('');
  const [name, setName]          = React.useState('');

    function classes() {
      const bg  = props.bgcolor ? ' bg-' + props.bgcolor : ' ';
      const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
      return 'card mb-3 ' + bg + txt;
    }

    function clearForm() {
      setName('');
      setEmail('');
      setPassword('');
      setDeposit('');
      setShow(true);
  }
    function dodeposit() {
      console.log(email, `Deposit amount: ${deposit}`);
      if (!validate(email,       'email'))       return;
      if (!validate(deposit,    'deposit'))    return;
      if (email === users[currentUserIndex].email) {
        //ctx.users.push({deposit});
        users[currentUserIndex].balance += Number(deposit);
        setShow(false);
        return;
      } else {
          alert(`Incorrect User input.`);
          clearForm();
          setShow(true);
      }
  }
  
    return (
      <div className={classes()} style={{maxWidth: "22rem", }}>
        <div className="card-header">{props.header}</div>
        <div className="card-body">
          {props.title && (<h5 className="card-title">{props.title}</h5>)}
          {props.text && (<p className="card-text">{props.text}</p>)}
          {props.body}
          {props.status && (<div id='createStatus'>{props.status}</div>)}
        
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
