export default  function Cards (props: any) {
    return (
        <div className="container">
            <div className="row flex-row cards">
                {props.children}
            </div>
        </div>
    )
}