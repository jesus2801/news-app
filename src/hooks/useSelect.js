import React, {useState} from 'react';

const useSelect = (initState, options) => {
  const [state, saveState] = useState(initState);

  const SelectNews = () => (
    <select
      className="browser-default"
      value={state}
      onChange={e => saveState(e.target.value)}
    >
      {options.map((option, index) => (
        <option value={option.value} key={index}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNews];
};

export default useSelect;
