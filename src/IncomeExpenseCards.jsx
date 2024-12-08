import React, { useState } from 'react';
import { Card as ShadCard } from './components/ui/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare, faArrowDown, faCog } from '@fortawesome/free-solid-svg-icons';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";

import { Button } from './components/ui/button';

const IncomeExpenseCards = () => {
  const [selectedTab, setSelectedTab] = useState('weekly');

  const incomeData = {
    daily: '€1.230,10',
    weekly: '€12.378,20',
  };

  const expenseData = {
    daily: '€2.150,50',
    weekly: '€55.788,21',
  };

  const income = selectedTab === 'daily' ? incomeData.daily : incomeData.weekly;
  const expense = selectedTab === 'daily' ? expenseData.daily : expenseData.weekly;

  return (
    <div className="space-y-4">
      <div className='flex justify-between pt-5'>
        <Tabs value={selectedTab} onValueChange={setSelectedTab}>
          <TabsList className="grid w-72 grid-cols-2">
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="daily">Daily</TabsTrigger>
          </TabsList>
        </Tabs>

        <Tabs>
          <TabsList className="flex-row gap-2 w-25 mr-4">
            <FontAwesomeIcon icon={faCog} className='w-6 mr-2' />
            <TabsTrigger value="weekly">Manage</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className='mr-5'>
        <ShadCard className="bg-white text-green-700 p-4 rounded-lg shadow-lg ">
          <div className='flex justify-between items-center space-x-20 space-x-reverse'>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='w-8 text-green-700 mr-4 h-7' />
            <ShadCard className="bg-white text-green-700 p-4 px-10 rounded-lg w-[400px] ">
              <div className="flex-row justify-between items-center">
                <h3 className="text-xl font-semibold">Income</h3>
                <div className="text-2xl font-bold text-green-400">{income}</div>
              </div>
            </ShadCard>
            <div className='mr-56'>
              <h4>45.0%</h4>
            </div>
          </div>
        </ShadCard>

        <ShadCard className="bg-white text-red-700 p-4 rounded-lg shadow-lg ">
          <div className='flex justify-between items-center space-x-20 space-x-reverse'>
            <FontAwesomeIcon icon={faArrowDown} className='w-8 text-red-700 mr-4 h-7' />
            <ShadCard className="bg-white text-red-700 p-4 px-10 w-[400px]   ">
              <div className="flex-row justify-between items-center">
                <h3 className="text-xl font-semibold">Expense</h3>
                <div className="text-2xl font-bold text-red-400">{expense}</div>
              </div>
            </ShadCard>
            <div className='mr-55'>
              <h4>12.5%</h4>
            </div>
          </div>
        </ShadCard>
      </div>
    </div>
  );
};

export default IncomeExpenseCards;
