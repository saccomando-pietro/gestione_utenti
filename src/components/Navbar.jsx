const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">
        <div className="logo"></div>
        <span className="title">Projects</span>
        <span className="subtitle">Workload</span>
      </div>
      <input type="text" placeholder="Cerca..." />
      <button>+ Progetto</button>
    </div>
  );
};

export default Navbar;
