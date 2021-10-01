import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendLIst/FriendList";
import Statistical from "./components/Statistic/statistical";

//===================*json*====================//
import friends from "./components/FriendLIst/friends.json";
import user from "./components/Profile/user.json";
import statisticalData from "./components/Statistic/statistical-data.json";

function App() {
  return (
    <div className="App">
      <Profile {...user} />
      <FriendList friends={friends} />
      <Statistical title="Upload stats" stats={statisticalData} />
      {/* <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}
    </div>
  );
}

export default App;
