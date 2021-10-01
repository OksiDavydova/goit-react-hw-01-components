import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "./FriendsListItem";
import s from "./FriendList.module.css";

function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((el) => (
        <FriendListItem key={el.id} friend={el} />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
export default FriendList;
