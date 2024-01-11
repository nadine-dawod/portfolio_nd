

const Button = ({children, handleClick}) => {
    return (
        <Button 
            className="button"
            onClick={handleClick}
        >{children}
        </Button>
    );
};

export default Button;