export const formatDate = (createdAt) => {
    const currentDate = new Date();
    const createdAtDate = new Date(createdAt);
  
    // Calculate the time difference in milliseconds
    const timeDifference = currentDate - createdAtDate;
  
    // Convert milliseconds to seconds
    const secondsDifference = Math.floor(timeDifference / 1000);
  
    // Convert seconds to minutes, hours, days, months, or years
    if (secondsDifference < 60) {
      return `${secondsDifference}.seconds ago`;
    } else if (secondsDifference < 3600) {
      const minutes = Math.floor(secondsDifference / 60);
      return `${minutes}.minute${minutes > 1 ? 's' : ''} ago`;
    } else if (secondsDifference < 86400) {
      const hours = Math.floor(secondsDifference / 3600);
      return `${hours}.hour${hours > 1 ? 's' : ''} ago`;
    } else if (secondsDifference < 2592000) { // Approximately 30 days
      const days = Math.floor(secondsDifference / 86400);
      return `${days}.day${days > 1 ? 's' : ''} ago`;
    } else {
      const months = Math.floor(secondsDifference / 2592000); // Approximately 30 days per month
      return `${months} month${months > 1 ? 's' : ''} ago`;
    }
  };


  export const formatDate2 = (createdAt, format) => {
    const date = new Date(createdAt);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
  
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
  
    // Pad single-digit day, month, hour, minute, and second with leading zero
    const pad = (value) => (value < 10 ? '0' + value : value);
  
    if (format === 'date') {
      return `${pad(day)}.${pad(month)}.${year}`;
    } else if (format === 'time') {
      return (
        <>
                       <span className={`${pad(hours)<=24? "text-success" : "text-danger"}`}> {pad(hours)}h.{pad(minutes)}m.{pad(seconds)}s</span>
        </>
      );
    } else {
      // Default to returning full date and time
      return (
        <span>
          {pad(day)}
          <span className="text-success">.</span>
          {pad(month)}
          <span className="text-success">.</span>
          {year} 
          <span className={`${pad(hours)<=24? "text-success" : "text-danger"}`}> {pad(hours)}h.{pad(minutes)}m.{pad(seconds)}s</span>  
        </span>
      );
    };
  };