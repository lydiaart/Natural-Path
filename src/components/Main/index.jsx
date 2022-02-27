function main(props) {
    return <> 
    {/* make the header the parent wrapper so that it wraps all children inside of the header*/}
    {props.children}
    </>
}

export default main;