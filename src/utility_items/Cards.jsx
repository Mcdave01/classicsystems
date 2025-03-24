import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@/app/globals.css'
const Cards = ({ children, icon, className }) => {
  return (
    <div className={`flex w-[300px] h-[300px] bg-white-800 shadow-md rounded-lg  text-center ${className}`}>
  
      <div> {children} </div>
    </div>
  );
};

export default Cards;
