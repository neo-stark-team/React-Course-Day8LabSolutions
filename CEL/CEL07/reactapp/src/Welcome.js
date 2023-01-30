import PropTypes from "prop-types";
function Welcome(props) {
    return (
      <p>
        Greetings for the day! I'm {props.name}, a {props.age} years old {props.occupation}.
        Thank you for the Welcome Message!
      </p>
    );
  }

  Welcome.propTypes = {
    name: PropTypes.string.isRequired, // must be a string and defined
    age: PropTypes.number.isRequired, // must be a number and defined
    occupation: PropTypes.string.isRequired  // must be a string and defined
  }; 

  export default Welcome;

  /* function Welcome(props) {
    return (
      <p>
        Greetings for the day! I'm {props.name}, a {props.age} years old {props.occupation}.
        Thank you for the Welcome Message!
      </p>
    );
  } */