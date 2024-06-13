const GoogleCalendarButton = ({ setShowPopup }) => {
  return (
    <div className="fixed px-10 top-0 left-0 w-screen h-screen flex justify-center items-center">
      <div className="relative bg-csBlue container mx-auto   z-20 flex justify-center items-center">
        <iframe title="Set Appointment" src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0HOPrsOvIk68FI74uxaOhqWp5kgGREQKkQi0HJwzNwVdCNv4_iHZL7U-ALZ7XwavCkq1g25EKD?gv=true" style={{ border: 0 }} width="100%" height={600} frameBorder={0} />
      </div>
      <div
        onClick={() => {
          setShowPopup(false);
        }}
        className="fixed top-0 left-0 z-10 w-screen h-screen bg-black opacity-80"
      />
    </div>
  );
};

export default GoogleCalendarButton;
