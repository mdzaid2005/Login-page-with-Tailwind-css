import React from "react";
import { Card, CardContent, CardDescription, CardTitle, CardHeader, CardFooter } from "./components/ui/card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MiddleCard = ({ title, value, icon, des, percentage, footer }) => {
  return (
    <div>
      <Card className="w-96 items-center m-[2.6vh]">
        <div className="px-5">

        <div className="flex justify-between my-5 mr-5">
          <div className="flex items-center">
            <FontAwesomeIcon icon={icon} className="text-cyan-800 text-xl" />
            <CardTitle className="ml-2">{title}</CardTitle>
          </div>
          <div>
            <CardDescription className="mr-5">{des}</CardDescription>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <CardTitle className="text-2xl font-semibold">{value}</CardTitle>
          <h4 className="text-green-400 text-xl font-semibold">{percentage}</h4>
        </div>

        <div>
          <CardFooter className="text-sm text-gray-500 mt-5 ">{footer}</CardFooter>
        </div>
        </div>
      </Card>
    </div>
  );
};

export default MiddleCard;
