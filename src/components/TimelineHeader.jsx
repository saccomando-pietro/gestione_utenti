const months = [
  { name: "Gennaio", days: 31 },
  { name: "Febbraio", days: 28 },
  { name: "Marzo", days: 31 },
  { name: "Aprile", days: 30 },
  { name: "Maggio", days: 31 },
  { name: "Giugno", days: 30 },
  { name: "Luglio", days: 31 },
  { name: "Agosto", days: 31 },
  { name: "Settembre", days: 30 },
  { name: "Ottobre", days: 31 },
  { name: "Novembre", days: 30 },
  { name: "Dicembre", days: 31 }
];

const TimelineHeader = () => {
  return (
    <div className="timeline-header" style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 120px)' }}>
      {months.map((month) => (
        <div key={month.name} className="month" style={{
          borderLeft: '1px solid #ccc',
          textAlign: 'center',
          padding: '4px 0',
          fontSize: '13px',
          color: '#888'
        }}>
          {month.name}
        </div>
      ))}
    </div>
  );
};

export default TimelineHeader;
