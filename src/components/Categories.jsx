import { useState } from 'react';

function Categories({ items }) {
  const [first, setfirst] = useState(null);

  const onSelectedItem = (index) => {
    setfirst(index);
  };

  return (
    <div className="categories">
      <ul>
        <li className={first === null ? 'active' : ' '} onClick={() => onSelectedItem(null)}>
          Все
        </li>
        {items &&
          items.map((name, index) => (
            <li
              className={first === index ? 'active' : ' '}
              onClick={() => onSelectedItem(index)}
              key={`${name}_${index}`}>
              {name}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Categories;
