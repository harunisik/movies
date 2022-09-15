import { ReactComponent as SearchIcon } from './search-icon.svg';

const FilterOption = ({ label, placeholder }: any) => (
  <div className="filterOption">
    <h5>{label}</h5>
    <p>{placeholder}</p>
  </div>
);

const SearchButton = ({ placeholder }: any) => (
  <div className="searchBtn">
    <SearchIcon />
    <p>{placeholder}</p>
  </div>
);

function MainScreen() {
  return (
    <div className="mainScreen">
      <div className="content">
        <h1>
          {`Rethink your 
            living & renting`}
        </h1>
        <p>Make your stay painless with us</p>
      </div>
      <div className="filterBox">
        <FilterOption label="CITY" placeholder="Select your city" />
        <FilterOption label="DATES" placeholder="Select your dates" />
        <FilterOption label="GUESTS" placeholder="Add guests" />
        <SearchButton placeholder="Search" />
      </div>
    </div>
  );
}

export default MainScreen;
