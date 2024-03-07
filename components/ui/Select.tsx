interface SelectProps {
  options: string[] | number[];
  selectedOption: string | number;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectProps> = ({
  options,
  selectedOption,
  onChange,
}) => {
  return (
    <div className="flex items-center">
      <select
        className="block appearance-none w-64 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        value={selectedOption}
        onChange={onChange}
      >
        <option value="" disabled hidden>
          Выберите элемент
        </option>
        {options.map((option: string | number, index: number) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
