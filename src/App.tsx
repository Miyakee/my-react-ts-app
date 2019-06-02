import * as React from 'react';
import {Content} from "./page/content/containers/Content";
import {Footer} from "./page/footer/containers/Footer";
import {Title} from "./page/header/containers/Title";
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
