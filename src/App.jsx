import { useState } from "react";

import "./App.css";
import PageContainer from "./container/PageContainer";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <PageContainer>
        <Header />
      </PageContainer>
    </div>
  );
}

export default App;
