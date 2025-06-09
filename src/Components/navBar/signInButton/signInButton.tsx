export function SignInButtonNavBar(){
    
    function handleClick(){
        console.log('sign in clicked')
    }

    return (
        <button type="button" className="hover:border-violet-500" onClick={handleClick}>
            Sign In
        </button>
    )
}