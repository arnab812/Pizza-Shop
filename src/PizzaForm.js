/*
import React, { useState } from 'react';

const PizzaForm = ({ onSubmit }) => {
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [base, setBase] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ type, size, base });
    // Reset form fields after submission
    setType('');
    setSize('');
    setBase('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Place Your Pizza Order</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)} style={{ marginLeft: '10px' }}>
            <option value="">Select Type</option>
            <option value="Veg">Veg</option>
            <option value="Non-veg">Non-veg</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)} style={{ marginLeft: '10px' }}>
            <option value="">Select Size</option>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Base:
          <select value={base} onChange={(e) => setBase(e.target.value)} style={{ marginLeft: '10px' }}>
            <option value="">Select Base</option>
            <option value="Thin">Thin</option>
            <option value="Thick">Thick</option>
          </select>
        </label>
      </div>
      <button type="submit" style={{ marginLeft: '10px' }}>Place Order</button>
    </form>
  );
};

export default PizzaForm;
*/

/*
import React, { useState } from 'react';

const PizzaForm = ({ onSubmit }) => {
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [base, setBase] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type && size && base) {
      onSubmit({ type, size, base });
      // Reset form fields after successful submission
      setType('');
      setSize('');
      setBase('');
      setFormError('');
    } else {
      setFormError('Please select options for all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Place Your Pizza Order</h2>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
      <div style={{ marginBottom: '10px' }}>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)} style={{ marginLeft: '10px' }}>
            <option value="">Select Type</option>
            <option value="Veg">Veg</option>
            <option value="Non-veg">Non-veg</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)} style={{ marginLeft: '10px' }}>
            <option value="">Select Size</option>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Base:
          <select value={base} onChange={(e) => setBase(e.target.value)} style={{ marginLeft: '10px' }}>
            <option value="">Select Base</option>
            <option value="Thin">Thin</option>
            <option value="Thick">Thick</option>
          </select>
        </label>
      </div>
      <button type="submit" style={{ marginLeft: '10px' }}>Place Order</button>
    </form>
  );
};

export default PizzaForm;
*/ 

// ! Update functionality: Add validation to ensure all fields (Type, Size, Base) are selected before allowing submission

/*
import React, { useState } from 'react';

const PizzaForm = ({ onSubmit }) => {
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [base, setBase] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type && size && base) {
      onSubmit({ type, size, base });
      // Reset form fields after successful submission
      setType('');
      setSize('');
      setBase('');
      setFormError('');
    } else {
      setFormError('Please select options for all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Place Your Pizza Order</h2>
      {formError && <p style={{ color: 'red' }}>{formError}</p>}
      <div style={{ marginBottom: '10px' }}>
        <label>
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)} style={{ marginLeft: '10px' }}>
            <option value="">Select Type</option>
            <option value="Veg">Veg</option>
            <option value="Non-veg">Non-veg</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)} style={{ marginLeft: '10px' }}>
            <option value="">Select Size</option>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
        </label>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>
          Base:
          <select value={base} onChange={(e) => setBase(e.target.value)} style={{ marginLeft: '10px' }}>
            <option value="">Select Base</option>
            <option value="Thin">Thin</option>
            <option value="Thick">Thick</option>
          </select>
        </label>
      </div>
      <button type="submit" style={{ marginLeft: '10px' }}>Place Order</button>
    </form>
  );
};

export default PizzaForm;

*/ 

// * updated with className -> 

import React, { useState } from 'react';
import './PizzaForm.css'; // Import the CSS file

const PizzaForm = ({ onSubmit }) => {
  const [type, setType] = useState('');
  const [size, setSize] = useState('');
  const [base, setBase] = useState('');
  const [formError, setFormError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type && size && base) {
      onSubmit({ type, size, base });
      // Reset form fields after successful submission
      setType('');
      setSize('');
      setBase('');
      setFormError('');
    } else {
      setFormError('Please select options for all fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-heading">Place Your Pizza Order</h2>
      {formError && <p className="error-message">{formError}</p>}
      <div className="form-field">
        <label className="form-label">
          Type:
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select Type</option>
            <option value="Veg">Veg</option>
            <option value="Non-veg">Non-veg</option>
          </select>
        </label>
      </div>
      <div className="form-field">
        <label className="form-label">
          Size:
          <select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Select Size</option>
            <option value="Large">Large</option>
            <option value="Medium">Medium</option>
            <option value="Small">Small</option>
          </select>
        </label>
      </div>
      <div className="form-field">
        <label className="form-label">
          Base:
          <select value={base} onChange={(e) => setBase(e.target.value)}>
            <option value="">Select Base</option>
            <option value="Thin">Thin</option>
            <option value="Thick">Thick</option>
          </select>
        </label>
      </div>
      <button type="submit" className="submit-button">Place Order</button>
    </form>
  );
};

export default PizzaForm;
