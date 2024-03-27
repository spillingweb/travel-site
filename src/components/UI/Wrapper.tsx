const Wrapper: React.FC<{ children: any; className?: string }> = ({
  children, className
}) => {
    let classes = "wrapper ";

    if (className) {
        classes += className;
    }

  return <div className={classes}>{children}</div>;
};

export default Wrapper;
