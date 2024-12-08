import React, { useState } from 'react';
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from './components/ui/tabs';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './components/ui/dropdown-menu';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from './components/ui/menubar';

export function ComplexTopBar() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="flex items-center justify-between p-2 bg-white text-white shadow-md">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="text-white bg-cyan-800 font-semibold hover:text-green-400 transition-colors duration-200">
            File
          </MenubarTrigger>
          <MenubarContent className="bg-cyan-800">
            <MenubarItem onClick={() => console.log('New clicked')} className="text-green-500 hover:bg-green-200 transition duration-150">
              New
            </MenubarItem>
            <MenubarItem onClick={() => console.log('Open clicked')} className="text-green-500 hover:bg-green-200 transition duration-150">
              Open
            </MenubarItem>
            <MenubarItem onClick={() => console.log('Save clicked')} className="text-green-500 hover:bg-green-200 transition duration-150">
              Save
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger className="text-white bg-cyan-800 font-semibold hover:text-green-400 transition-colors duration-200">
            Options
          </MenubarTrigger>
          <MenubarContent className="bg-cyan-800">
            <MenubarItem onClick={() => console.log('Settings clicked')} className="text-green-500 hover:bg-green-200 transition duration-150">
              Settings
            </MenubarItem>
            <MenubarItem onClick={() => console.log('Profile clicked')} className="text-green-500 hover:bg-green-200 transition duration-150">
              Profile
            </MenubarItem>
            <MenubarItem onClick={() => console.log('Logout clicked')} className="text-green-500 hover:bg-green-200 transition duration-150">
              Logout
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex space-x-4">
          <TabsTrigger
            value="Home"
            className={`text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 ${activeTab === 'Home' ? 'bg-green-500' : 'bg-cyan-800 hover:bg-cyan-700'}`}
          >
            Home
          </TabsTrigger>
          <TabsTrigger
            value="About"
            className={`text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 ${activeTab === 'About' ? 'bg-green-500' : 'bg-cyan-800 hover:bg-cyan-700'}`}
          >
            About
          </TabsTrigger>
          <TabsTrigger
            value="Contact"
            className={`text-white font-semibold py-2 px-4 rounded-md transition-all duration-300 ${activeTab === 'Contact' ? 'bg-green-500' : 'bg-cyan-800 hover:bg-cyan-700'}`}
          >
            Contact
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Home" className="transition-opacity duration-300 ease-in-out">
          <p>Welcome to the Home Page</p>
        </TabsContent>
        <TabsContent value="About" className="transition-opacity duration-300 ease-in-out">
          <p>Learn more about our company and values.</p>
        </TabsContent>
        <TabsContent value="Contact" className="transition-opacity duration-300 ease-in-out">
          <p>Get in touch with us for any inquiries.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
