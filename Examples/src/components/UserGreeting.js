export const UserGreeting = () => {
    const isLoggedIn = false
    return (
        <div>
            {/* Welcome {isLoggedIn ? 'Mike' : 'Guest'} */}
            Welcome {isLoggedIn && 'Mike'}
        </div>
    )
}