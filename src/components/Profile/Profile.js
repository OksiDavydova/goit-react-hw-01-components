import React from "react";
import PropTypes from "prop-types";
import avatarDefault from "./avatar.jpg";
import s from "./Profile.module.css";

function Profile({ name, tag, location, avatar, stats }) {
  // const { name, tag, location, avatar, stats } = user;
  // const { followers, views, likes } = stats;
  return (
    <div className={s.profileSection}>
      <div className={s.description}>
        <img src={avatar} alt={name} className={s.avatar} width="150px" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.defaultProps = {
  avatar: avatarDefault,
  location: "it's a secret",
};

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }).isRequired,
};

export default Profile;
