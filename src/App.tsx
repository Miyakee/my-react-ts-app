import * as React from 'react';
import {ContentContainer} from "./page/content/containers/ContentContainer";
import {Footer} from "./page/footer/containers/Footer";
import {Title} from "./page/header/containers/Title";
import './TodoMvc.css';


// const store = createStore(todoApp);
class App extends React.Component {
  public render() {
    return (

      <div className="TodoMvc">
          <Title />
          <ContentContainer />
          <Footer />
      </div>

    );
  }
}

export default App;
