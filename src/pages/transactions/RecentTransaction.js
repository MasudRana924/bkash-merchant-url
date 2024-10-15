import React from "react";
import TransactionList from './TransactionsList';
const RecentTransaction = () => {
  return (
    <div className="popup-container sm:w-3/4 md:w-2/4 lg:w-2/4 xl:w-2/4 2xl:w-1/4 mt-2">
     <TransactionList/>
    </div>
  );
};
export default RecentTransaction;
