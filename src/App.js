import React from "react"
import {Accordion,Button} from "react-bootstrap";

const App=()=> {
  return (
    <div >
      <container>
     <Accordion>
  <h1>Hello, world!</h1>
  <p>
    This is a simple hero unit, a simple jumbotron-style component for calling
    extra attention to featured content or information.
  </p>
  
  <p>
    <Button variant="primary">Learn more</Button>
  </p>
</Accordion>
</container>
    </div>
  );
}

export default App;
