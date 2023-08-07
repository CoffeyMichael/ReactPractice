export const NameList = () => {
    const names = ['Mike', 'Bree', 'Clark']

    return (
    <div>
        {
            names.map((name) => {
                return <h2 key={name}>{name}</h2>
            })
        }
    </div>
    )
}