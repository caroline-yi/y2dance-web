import CalendarMonthView from "react-calendar-month-view";

const Class = (props) => {
  const datestring = "2021-03-04T15:00:00Z";

  function renderDay(day) {
    console.log(day)
    if (day === '2022-01-09T08:00:00.000Z') {
      return <div> 1-2 Basic Jazz Class </div>;
    } else {
      return ;
    }
    //return day === '2021-12-16T08:00:00.000Z' ? <div>  the 16th </div>
  }

  return (
    <div>
      <CalendarMonthView renderDay={renderDay} />;
    </div>
  );
};

export default Class