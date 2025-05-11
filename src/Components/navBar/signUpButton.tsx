export function SignUpButtonNavBar(){

    function handleClick(){
        console.log('sign up clicked')
    }
    return (
        <button type="button" className="sign-up-button-nav-bar" onClick={handleClick}>Sign Up</button>
    )
}