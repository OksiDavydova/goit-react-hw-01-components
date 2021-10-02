import React from "react";
// import PropTypes from "prop-types";
import TransitionItem from "./TransitionItem";
import PropTypes from "prop-types";
import style from "./TransactionHistory.module.css";

function TransactionHistory({ items }) {
  return (
    <table className={style.transactionHistory}>
      <thead className={style.tableHead}>
        <tr>
          <th className={style.tableTitle}>Type</th>
          <th className={style.tableTitle}>Amount</th>
          <th className={style.tableTitle}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <TransitionItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TransactionHistory;
