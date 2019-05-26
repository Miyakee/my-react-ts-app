import * as React from 'react';
import {Content} from "./containers/Content";
import {Footer} from "./containers/Footer";
import {Title} from "./containers/Title";
import './TodoMvc.css';


class App extends React.Component {
  public render() {
    return (
        <>
      <div className="TodoMvc">
          <Title />
          <Content />
          <Footer />
      </div>
        </>
    );
  }
}

export default App;
