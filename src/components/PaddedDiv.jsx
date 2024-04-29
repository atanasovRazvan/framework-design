const PaddedDiv = ({ children, title }) => {
    return (
        <div className="p-5 m-5 border-2 w-1/2">
            <h1 className={"mb-10 font-bold font-serif"}>{title}</h1>
            <>{children}</>
        </div>
    )
}

export default PaddedDiv;