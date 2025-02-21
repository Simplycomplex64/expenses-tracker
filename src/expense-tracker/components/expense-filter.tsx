interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      <option value="Parent">Parent</option>
      <option value="Child">Child</option>
      <option value="Guest">Guest</option>
    </select>
  );
};

export default ExpenseFilter;
