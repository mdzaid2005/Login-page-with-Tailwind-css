import React, { useState } from "react";
import { faCreditCardAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./components/ui/select";

const CreditCard = () => {
  const [selectedCard, setSelectedCard] = useState("");

  const getCardDetails = (cardType) => {
    switch (cardType) {
      case "visa":
        return { name: "Visa", cardNumber: "918024038384"};
      case "credit-card":
        return { name: "Credit Card", cardNumber: "1298803737332748" };
      case "debit-card":
        return { name: "Debit Card", cardNumber: "2308402379359872357326" };
      case "american-express":
        return { name: "American Express", cardNumber: "2439857324759437598" };
      default:
        return { name: "", cardNumber: "" };
    }
  };

  const { name, cardNumber } = getCardDetails(selectedCard);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="bg-green-400 p-2 rounded-full">
            <FontAwesomeIcon icon={faCreditCardAlt} className="text-white" />
          </div>
          <h4 className="text-lg font-semibold">My Cards</h4>
        </div>

        <Select onValueChange={setSelectedCard}>
          <SelectTrigger className="w-40">
            <SelectValue placeholder="Select Card" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Cards</SelectLabel>
              <SelectItem value="visa">Visa</SelectItem>
              <SelectItem value="credit-card">Credit Card</SelectItem>
              <SelectItem value="debit-card">Debit Card</SelectItem>
              <SelectItem value="american-express">American Express</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {selectedCard && (
        <div className="mt-6 flex justify-center">
          <div className="bg-teal-600 w-72 h-40 p-4 rounded-lg text-white flex flex-col justify-between shadow-lg">
            <div className="text-lg font-semibold">{name}</div>
            <div className="text-xl font-mono">{cardNumber}</div>
            <div className="text-sm mt-2">Valid Thru: 12/25</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCard;
