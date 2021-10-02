import React from "react";
import PropTypes from "prop-types";
import style from "./TransactionHistory.module.css";

function TransitionItem({ type, amount, currency}) {
  return <tr className={style.tableItem}>
    <td className={ style.type}>{ type}</td>
    <td>{ amount}</td>
    <td>{ currency}</td>
  </tr>
}

TransitionItem.propType = {
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
}

export default TransitionItem;