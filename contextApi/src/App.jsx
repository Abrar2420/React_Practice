import UserContextProvider from "./context/userContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <h2>HELLO WORLD</h2>
      </UserContextProvider>
    </>
  );
}

export default App;
