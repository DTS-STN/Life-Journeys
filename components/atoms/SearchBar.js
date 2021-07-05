import PropTypes from "prop-types";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 *  component
 */
export function SearchBar(props) {
  return (
    <div>
      <form
        className="w-full inline-flex h-9 lg:w-full xl:w-80 w-full border border-solid border-gray-light-100"
        onSubmit={props.onSubmit}
        data-cy={props.dataCy}
      >
        <label htmlFor="searchBar" className="invisible w-0 hidden">
          Search
        </label>

        <input
          type="text"
          placeholder={props.placeholder}
          className="placeholder-text-gray text-text-gray font-body py-1 px-2 focus:outline-none w-full"
          onChange={props.onChange}
          id="searchBar"
        />

        <button
          title="Search bar button"
          type="submit"
          className={
            "bg-custom-blue-dark text-white text-center text-base rounded-none pt-0.5 h-full w-10 hover:bg-gray-dark active:bg-gray-dark focus:bg-gray-dark"
          }
        >
          <FontAwesomeIcon icon={faSearch} color="white" />
        </button>
      </form>
    </div>
  );
}

SearchBar.propTypes = {
  /**
   * Placeholder for the search bar
   */
  placeholder: PropTypes.string.isRequired,

  /**
   * Action to do on input change
   */
  onChange: PropTypes.func,

  /**
   * Action to do on form submit
   */
  onSubmit: PropTypes.func,
};
