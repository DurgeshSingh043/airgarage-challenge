import { SearchBox, SearchResults } from '../../components/organisms';

const Search = () => {
  return (
    <div className="search">
      <SearchBox className="mb-3" />
      <SearchResults />
    </div>
  );
};

export default Search;
