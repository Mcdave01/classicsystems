import '@/app/globals.css'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function TransCard(children, icon, className) {
  return (
    
      <div className={`flex w-[300px] h-[300px] bg-transparent-400 shadow-md rounded-lg  text-center ${className}`}>
    
        <p>{children}</p>
      </div>
    
  );
}

export default TransCard;


