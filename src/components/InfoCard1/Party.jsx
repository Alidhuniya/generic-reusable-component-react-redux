import { compose } from "redux";
import { connect } from "react-redux";
import { InfoCard1component as Component } from './InfoCard1component';


const mapDispatchToProps = (dispatch, { payment }) => {
  return {
    title: "Party",
    subtitle1: "From me",
    
    subtitle2: "To the peoples",
   
    buttonText: "Cheers",
    onClick: () => alert("Accepted"),
    dispatch
  };
};

export const Party = compose(
  connect(
    null,
    mapDispatchToProps
  )
)(Component);
