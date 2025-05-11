export function SignInButtonNavBar(){
    
    function handleClick(){
        console.log('sign in clicked')
    }

    return (
        <button type="button" className={'sign-in-button-nav-bar'} onClick={handleClick}>
            Sign In
        </button>
    )
}