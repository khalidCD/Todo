import { useState } from 'react';
import { Link } from 'react-router-dom';

function ListPage() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );

  const [showCount, setShowCount] = useState(5);

  const handleCheckbox = (id) => {
    const updatedItems = [];
    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      if (item.id === id) {
        updatedItems.push({
          ...item,
          completed: !item.completed
        });
      } else {
        updatedItems.push(item);
      }
    }
    setItems(updatedItems);
    localStorage.setItem('items', JSON.stringify(updatedItems));
  };

  const handleDelete = (id) => {
    const remainingItems = [];
    for (let i = 0; i < items.length; i++) {
      if (items[i].id !== id) {
        remainingItems.push(items[i]);
      }
    }
    setItems(remainingItems);
    localStorage.setItem('items', JSON.stringify(remainingItems));
  };

  const handleShowMore = () => {
    setShowCount(showCount + 5);
  };

  const renderItems = () => {
    const elements = [];
    for (let i = 0; i < items.length && i < showCount; i++) {
      const item = items[i];
      elements.push(
        <div key={item.id} className="list-item">
          <input
            type="checkbox"
            checked={item.completed}
            onChange={() => handleCheckbox(item.id)}
          />

          <div className={`content ${item.completed ? 'completed' : ''}`}>
            <h3>{item.title}</h3>
            <p>Category: {item.category}</p>
          </div>

          <button onClick={() => handleDelete(item.id)}>
            Delete
          </button>
        </div>
      );
    }
    return elements;
  };

  return (
    <div>
      <h1>My Items</h1>
      <Link to="/">Add New Item</Link>

      <div className="list">
        {renderItems()}
      </div>

      {showCount < items.length && (
        <div className="show-more">
          <button onClick={handleShowMore}>Show More</button>
        </div>
      )}
    </div>
  );
}

export default ListPage;

