import React from "react";
import PropTypes from "prop-types";
import StatsItem from "./StatsItem";
import style from "./Statistics.module.css";

function Statistical({ title, stats }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={style.statList}>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} label={label} percentage={percentage} />
        ))}
      </ul>
    </section>
  );
}

Statistical.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Statistical;
