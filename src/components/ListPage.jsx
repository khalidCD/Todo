import{ useState } from 'react';
import { Link } from 'react-router-dom';

function ListPage() {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  );
  
  const [showCount, setShowCount] = useState(5);

  const handleCheckbox = (id) => {
    const newItems = items.map(item => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  const handleDelete = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
    localStorage.setItem('items', JSON.stringify(newItems));
  };

  const handleShowMore = () => {
    setShowCount(showCount + 5);
  };

  return (
    <div>
      <h1>My Items</h1>
      <Link to="/">Add New Item</Link>
      
      <div className="list">
        {items.slice(0, showCount).map(item => (
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
        ))}
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