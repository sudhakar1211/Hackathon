import React from 'react';
import './Tablet.css'; // Import the CSS file

class Tablets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
    this.tablets = [
      {
        name: 'Dolo 650',
        description: 'Pain relief tablet',
        image: './Photos/dolo.png',
        cost: 40, // Cost in dollars
      },
      {
        name: 'Azithromycin ',
        description: 'Cold tablet',
        image: './Photos/azithro.png',
        cost: 32.50,
      },
    ];
    this.syrups = [
      {
        name: 'Cough Syrup',
        description: 'For relieving cough',
        image: 'cough_syrup.jpg',
        cost: 15,
      },
      {
        name: 'Paracetamol Syrup',
        description: 'Fever reducer',
        image: 'paracetamol_syrup.jpg',
        cost: 8,
      },
    ];
  }

  handleAddToCart = (item, quantity) => {
    const { cartItems } = this.state;
    const newItem = { ...item, quantity, totalCost: item.cost * quantity };
    this.setState({ cartItems: [...cartItems, newItem] });
  };

  render() {
    const { cartItems } = this.state;
    return (
      <div className="tablets-container">
      
       
        <div>
          <h2>Tablets</h2>
          {this.tablets.map((tablet, index) => (
            <div key={index} className="tablet-card">
              <img src={tablet.image} alt={tablet.name} className="tablet-image" />
              <h3 className="card-title">{tablet.name}</h3>
              <p className="card-description">{tablet.description}</p>
              <p className="card-cost">Cost: ₹{tablet.cost}</p>
              <div>
                <input type="number" defaultValue="1" min="1" max="10" className="card-quantity-input" id={`quantity-tablet-₹{index}`} />
                <button onClick={() => this.handleAddToCart(tablet, parseInt(document.getElementById(`quantity-tablet-₹{index}`).value, 10))} className="add-to-cart-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>

       

        {/* Cart */}
        <div>
          <h2>Cart</h2>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>{item.quantity} x {item.name} - Total Cost: ₹{item.totalCost}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Tablets;
