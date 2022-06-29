import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import {createStore} from 'redux'

const counterReducer = (state = 0, action) =>{
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
      case 'DECREMENT': 
      return state - 1
      case 'ZERO':
      return  0
      default:
        return state
  }
}

const store = createStore(counterReducer)


function App() {
  return (
    <div className="App">
     <h1>Counter {store.getState()}</h1>

     <button onClick={(e) =>store.dispatch({type: 'INCREMENT'})} >Icrement</button>

     <button onClick={(e) => store.dispatch({type: 'DECREMENT'})}>Decrement</button>
     <button onClick={(e) => store.dispatch({type: 'ZERO'})} >Reset</button>
     
    </div>
  );

 
}

const renderApp = () => {
  ReactDOM.createRoot(document.getElementById('root')).render(<App />)
}


renderApp()
store.subscribe(renderApp)



