function FormatDate({date}){


  function monthDateYear(date){

    // creating a date object from the given string
    const dates= new Date(date);

    // array of months
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const month=monthNames[dates.getMonth()];
    const day=dates.getDate();
    const year=dates.getFullYear();

    return `${month} ${day},${year}`

  }


  return(
    <>
      {monthDateYear(date)}
    </>
  )
}
export default FormatDate;