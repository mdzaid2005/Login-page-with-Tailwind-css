import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Card as ShadCard } from "./components/ui/card";
import { CardContent, CardTitle, CardDescription } from './components/ui/card';
import { ButtonGroup } from './ButtonGroup';
import BarGraph from './BarGraph';
import IncomeExpenseCards from './IncomeExpenseCards';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDownUpAcrossLine, faBuildingColumns, faCoins, faDollarSign, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';

import MiddleCard from "./MiddleCard";

import DataTable from "./DataTable";

import CreditCard from './CreditCard';

import SideBar from "./Layout"

import {Layout} from "./TLayout";

const Dashboard = () => {
  const navigate = useNavigate();

  return (

    <Layout >
    <div className="min-h-screen bg-white p-8">
     
      <SideBar>
      <div className="flex justify-center mb-8">
        <ShadCard className="w-full bg-cyan-800 text-white p-8 rounded-lg flex items-center justify-between">
          <div>
            <CardTitle className="text-base">Total Balance</CardTitle>
            <CardDescription className="text-3xl text-white">€320.845,20</CardDescription>
          </div>
          <div className="pr-[600px] pt-7 flex items-center">
            <h4 className="text-green-400 mr-2">15.8%</h4>
            <FontAwesomeIcon icon={faArrowUp} className="text-green-400" />
          </div>
          <ButtonGroup />
        </ShadCard>
      </div>

      <ShadCard className="rounded-lg">
        <div className="flex justify-between mb-8 ">
          <div className="w-2/3">
            <div className='flex gap-2 ml-10 mt-7'>
              <FontAwesomeIcon icon={faArrowDownUpAcrossLine} className="text-green-400 mt-2 h-4" />
              <div className="text-black text-xl mb-4">Cash Flow</div>
            </div>
            <BarGraph className="w-5" />
          </div>
          <div className="w-1/3 space-y-4">
            <IncomeExpenseCards />
          </div>
        </div>
      </ShadCard>

      <div className="flex gap-8 justify-center">
        <MiddleCard
          title="Business Account"
          value="€8.672,20"
          icon={faBuildingColumns}
          des="Last 30 days"
          percentage="15.8%"
          footer="vs.7.120.14 Last period"
        />
        <MiddleCard
          title="Total Saving"
          value="€3.765,35"
          icon={faCoins}
          des="Last 30 days"
          percentage="8.2%"
          footer="vs.7.120.14 Last period"
        />
        <MiddleCard
          title="Tax Reserve"
          value="€14.376,16"
          icon={faFileInvoiceDollar}
          des="Last 30 days"
          percentage="35.2%"
          footer="vs.7.120.14 Last period"
        />

        
      </div>

      <div className='flex justify-between'>
      <Card className="w-11/12 p-5">
          <DataTable />
        </Card>

        <Card className="w-2/4">
        <CreditCard />
        </Card>
        </div>
      
        </SideBar>

        
    </div>

    </Layout>
  );
};

export default Dashboard;
