function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext); 
  let users = [...ctx.users];

  //This will make the create account button disable until all input are filled up.
  const areAllFieldsFilled = (name != "") && (email != "") && (password.length > 7)

  function validate(field, label){
      if (!field) {
        
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 3000);
        
        return false;
        
      }
      if (password.length < 8) {

        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''), 3000);
        return false;

      } else if (password.length >= 8) {
        const newpw = document.getElementById("password").className = "form-control-is-valid";
        return newpw;
      }

      //return true;
      
  }

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'Please provide name'  ))   return;
    if (!validate(email,    'Please provide email'))    return;
    if (!validate(password, 'Please provide an 8 digit password')) return;
    ctx.users.push({id: users.length+1, name, email, password, balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    <Card
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              
              <input type="input" className="form-control is-invalid" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} required/><br/>
              
              Email address<br/>
              <input type="input" className="form-control is-invalid" id="email"  placeholder="Enter email"  value={email} onChange={e => setEmail(e.currentTarget.value)} required /><br/>
              Password<br/>
              <input type="password" className="form-control is-invalid" id="password" placeholder="Enter password"  minLength="8" value={password} onChange={e => setPassword(e.currentTarget.value)} required /><br/>
            
              <button type="submit" className="btn btn-light" id="btnsubmit" onClick={handleCreate} disabled={!areAllFieldsFilled} >Create Account</button>
              </>
            ):(
              <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
  )
}