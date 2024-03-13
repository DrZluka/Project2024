import { connect } from 'react-redux';
import './App.css';
import Title from './components/title/title';
import { Component } from 'react';
import { changeTitleCreator } from './components/redus-store/actions';

class App extends Component {
  render() {
    const {modalFromStore, dispatch} = this.props
    return (
      <div className="App">
          {/* some new comment */}
          <h1>blah-blah</h1>
          <h2>marge to main from testing</h2>
        <Title />
        <button onClick={()=> this.props.dispatch(changeTitleCreator("...end I'll use that for good!"))}>chenge title button</button>

      </div>
    );
  }
}


export default connect()(App);
