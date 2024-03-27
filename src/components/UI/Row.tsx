
const Row: React.FC<{children: any; className?: string}> = ({children, className}) => {
    
    let classes = "row ";

    if (className) {
        classes += className;
    }
    
    return (
        <div className={classes}>{children}</div>
    )
}

export default Row;