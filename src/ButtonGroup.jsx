import React from 'react';
import { Button } from './components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faPaperPlane, faUserPlus, faEllipsisH, faArrowUp } from '@fortawesome/free-solid-svg-icons';

export const ButtonGroup = () => {
  return (
    <div className="flex space-x-2">
      <Button 
        variant="ghost" 
        className="bg-green-400 text-white px-4 py-2 rounded-md hover:bg-green-500 shadow-lg focus:outline-none backdrop-blur-lg"
      >
        <FontAwesomeIcon icon={faPlus} className="mr-2" />
        Add
      </Button>

      <Button 
        variant="ghost" 
        className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 shadow-lg focus:outline-none backdrop-blur-lg"
      >
        <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
        Send
      </Button>

      <Button 
        variant="ghost" 
        className="bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 shadow-lg focus:outline-none backdrop-blur-lg"
      >

        <FontAwesomeIcon icon={faArrowUp} className="mr-2" />
        Request
      </Button>

      <Button 
        variant="ghost" 
        className="bg-teal-700 text-white px-4 py-2 rounded-md hover:bg-teal-800 shadow-lg focus:outline-none backdrop-blur-lg"
      >
        <FontAwesomeIcon icon={faEllipsisH} className="mr-2" />
      </Button>
    </div>
  );
};
