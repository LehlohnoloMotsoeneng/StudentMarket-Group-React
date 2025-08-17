import React from "react";
import { useParams, Link } from "react-router-dom";

const Transaction = () => {
  const { productId } = useParams();

  const transactions = [
    { id: 1, date: "2025-08-15", description: "Payment from John Doe", amount: 250.0 },
    { id: 2, date: "2025-08-14", description: "Grocery Store", amount: -75.5 },
    { id: 3, date: "2025-08-13", description: "Electricity Bill", amount: -120.0 },
    { id: 4, date: "2025-08-12", description: "Freelance Project", amount: 500.0 },
  ];

  const selectedTransaction = productId
    ? transactions.find((txn) => txn.id.toString() === productId)
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">
          {productId ? "Transaction Details" : "Transaction History"}
        </h1>

        {productId ? (
          selectedTransaction ? (
            <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md mx-auto">
              <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                  <span className="font-semibold">Date:</span>
                  <span>{selectedTransaction.date}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="font-semibold">Description:</span>
                  <span>{selectedTransaction.description}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span className="font-semibold">Amount:</span>
                  <span
                    className={`font-bold ${
                      selectedTransaction.amount > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {selectedTransaction.amount > 0
                      ? `+R${selectedTransaction.amount.toFixed(2)}`
                      : `-R${Math.abs(selectedTransaction.amount).toFixed(2)}`}
                  </span>
                </div>

                <Link
                  to="/transaction"
                  className="mt-6 block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg transition"
                >
                  Back to Transactions
                </Link>
              </div>
            </div>
          ) : (
            <p className="text-red-600 text-center font-semibold">
              Transaction not found.
            </p>
          )
        ) : (
          <div className="grid gap-6 md:gap-8">
            {transactions.map((txn) => (
              <div
                key={txn.id}
                className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition flex justify-between items-center"
              >
                <div>
                  <p className="text-gray-800 font-semibold text-lg">
                    {txn.description}
                  </p>
                  <p className="text-gray-500 text-sm">{txn.date}</p>
                </div>
                <div className="text-right">
                  <p
                    className={`font-bold text-lg ${
                      txn.amount > 0 ? "text-green-500" : "text-red-500"
                    }`}
                  >
                    {txn.amount > 0
                      ? `+R${txn.amount.toFixed(2)}`
                      : `-R${Math.abs(txn.amount).toFixed(2)}`}
                  </p>
                  <Link
                    to={`/transaction/${txn.id}`}
                    className="text-blue-600 hover:underline text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Transaction;
