import React, { useState } from 'react';

function MyForm() {

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [Category, setCategory] = useState('');
  const [Qaulity, setQuility] = useState('');
  const [Price, setPrice] = useState('');



  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', { name, description });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <form onSubmit={handleSubmit} style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
      <div>
        <p style={{ marginLeft:'100px',color:'blue'}}>New Product</p>
      </div>
      <br></br>

        <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <br></br> <br></br>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <br></br> <br></br>

      <div>
        <label htmlFor="Category">Category:</label>
        <textarea
          id="Category"
          value={Category}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <br></br> <br></br>
      <div>
        <label htmlFor="Quality">Quality:</label>
        <textarea
          id="Quality"
          value={Qaulity}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <br></br> <br></br>
      <div>
        <label htmlFor="Price">Price:</label>
        <textarea
          id="Price"
          value={Price}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>


      <br></br>
      <div>
      <button type="submit" style={{ backgroundColor: 'blue', color: 'white', marginRight: '100px' }}>
            Submit
          </button>
          <button type="button" style={{ backgroundColor: 'gray', color: 'black' }}>
          Cancel
        </button>
      </div>
    </form>
    </div>
  );
}

export default MyForm;