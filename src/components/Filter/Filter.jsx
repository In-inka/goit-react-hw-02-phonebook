const Filter = ({ filter, onChange }) => {
  return (
    <form>
      <label>
        Find contacts by name
        <input type="text" name="filter" value={filter} onChange={onChange} />
      </label>
    </form>
  );
};

export default Filter;
