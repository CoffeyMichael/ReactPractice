export const Greet = (props) => {
    return( 
        <div>
            <h1>
                Hello {props.name} A.K.A. {props.heroName}
            </h1>
            {props.children}
        </div>
    )
}

//export default Greet
