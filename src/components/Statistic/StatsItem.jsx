import React from "react";
import PropTypes from "prop-types";
import style from "./Statistics.module.css";

const StatsItem = ({ label, percentage }) => {
  return (
    <li className={style.item} style={{ backgroundColor: `${randomColor()}` }}>
      <span className={style.label}>{label}</span>
      <span className={style.percentage}>{percentage}%</span>
    </li>
  );
};

function randomColor() {
  const bgColor = `#${(() =>
    Math.floor(Math.random() * 16777215).toString(16))()}`;
  return bgColor;
}

StatsItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};

export default StatsItem;
