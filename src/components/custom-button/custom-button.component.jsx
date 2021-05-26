import './custom-button.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    // {...otherProps} and {children} mean that we are passing the props from the
    // input type from the form (ie. submit) to this button. 'Submit' is the props
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
