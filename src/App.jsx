import React from "react";
// import Accordions from "./components/Accordions";
// import { accordionData } from "./utils/content";
import Form from "./components/Form";

const App = () => {
  return (
    <div>
      {/* <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordions title={title} content={content} />
        ))}
      </div> */}

      <div>
        <Form />
      </div>
    </div>
  );
};

export default App;
