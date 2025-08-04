// import React, { useState } from "react";

// function FormPage() {
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [description, setDescription] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const savedItems = localStorage.getItem("items");
//     let items = [];
//     if (savedItems) {
//       items = JSON.parse(savedItems);
//     }

//     const newItem = {
//       id: Date.now(),
//       title,
//       category,
//       description,
//       completed: false
//     };
//     localStorage.setItem("items", JSON.stringify([...items, newItem]));
//     setTitle("");
//     setCategory("");
//     setDescription("");
//   };

//   return (
//     <div>
//       <h1>Add New Item</h1>

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Title:</label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Category:</label>
//           <select
//             value={category}
//             onChange={(e) => setCategory(e.target.value)}
//             required
//           >
//             <option value="">Select a category</option>
//             <option value="Work">Work</option>
//             <option value="Personal">Personal</option>
//             <option value="Shopping">Shopping</option>
//             <option value="gym">Gym</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//           />
//         </div>
//         <button type="submit">Add Item</button>
//       </form>
//     </div>
//   );
// }

// export default FormPage;



import React, { useState } from "react";

function FormPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const savedItems = localStorage.getItem("items");
    let items = [];

    if (savedItems) {
      items = JSON.parse(savedItems);
    }

    const newItem = {
      id: Date.now(),
      title,
      category,
      description,
      completed: false
    };

    localStorage.setItem("items", JSON.stringify([...items, newItem]));

    setTitle("");
    setCategory("");
    setDescription("");
  };

  return (
    <div>
      <h1>Add New Item</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Category:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Shopping">Shopping</option>
            <option value="gym">Gym</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <button type="submit">Add Item</button>
      </form>
    </div>
  );
}

export default FormPage;

