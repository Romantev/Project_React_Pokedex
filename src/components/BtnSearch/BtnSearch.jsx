import "./BtnSearch.css";

const BtnSearch = ({setOpen}) => {
  return (
    <>
    {/* onClick function mit onClick={functionName} die function bekommst du über die props vom eltern element */}
      <button onClick={() => setOpen(false)} className="BtnSearch">SEARCH</button>
    </>
  );
};

export default BtnSearch;
