import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchCharacters } from "../actions/index";
import CharacterList  from "../components/CharacterList";
// import actions


const CharacterListView = props => {


    useEffect(() => {
        props.fetchCharacters();
    }, []);

console.log(props)
    return (
      <React.Fragment>
      { //Check if message failed
        props.isLoading
          ? <div> Fetching </div> 
          : <CharacterList characters={props.characters} />
      }

      </React.Fragment>










      // <React.Fragment>
      //   <h2>STARWARS</h2>
      //   {props.fetching && (
      //     <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
      //   )}
      //   <div>
      //     {/* <CharacterList characters={props.characters} /> */}
      //   </div>
      //   {props.error && <p className="error">{props.error}</p>}
      //   <Button color="info" onClick={fetchCharacters}>
      //     🛰 See today's photo 📸
      //   </Button>
      // </React.Fragment>
    )
  
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => {
  return {
    characters: state.characters,
    isLoading: state.isLoading, 
    error: state.error
    };
};


export default connect(mapStateToProps, { fetchCharacters })(CharacterListView);

