import "./App.css";
import Profile from "./components/Profile/Profile";
import FriendList from "./components/FriendLIst/FriendList";
import Statistical from "./components/Statistic/Statistical";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";

//===================*json*====================//
import friends from "./components/FriendLIst/friends.json";
import user from "./components/Profile/user.json";
import statisticalData from "./components/Statistic/statistical-data.json";
import transactions from "./components/TransactionHistory/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistical title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
