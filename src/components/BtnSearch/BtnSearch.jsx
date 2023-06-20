import "./BtnSearch.css";

const BtnSearch = () => {
  return (
    <>
    {/* onClick function mit onClick={functionName} die function bekommst du über die props vom eltern element */}
      <button className="BtnSearch" onClick="search()">SEARCH</button>
    </>
  );
};

export default BtnSearch;
