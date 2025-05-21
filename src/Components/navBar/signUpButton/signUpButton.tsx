export function SignUpButtonNavBar(){

    function handleClick(){
        console.log('sign up clicked')
    }
    return (
        <button type="button" className="hover:border-violet-500" onClick={handleClick}>Sign Up</button>
    )
}