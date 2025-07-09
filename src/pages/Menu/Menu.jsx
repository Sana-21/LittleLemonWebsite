import React, { useState } from 'react';
import './Menu.css';
import bruschettaImg from '../../assets/bruschetta.svg';
import saladImg from '../../assets/salad.svg';
import lemonImg from '../../assets/lemon.svg';

const menuData = [
  { id: 1, name: 'Bruschetta', category: 'Appetizer', price: '$8', description: 'Grilled bread with garlic, tomatoes, olive oil.', image: bruschettaImg },
  { id: 2, name: 'Greek Salad', category: 'Appetizer', price: '$10', description: 'Crisp lettuce, feta, olives, and vinaigrette.', image: saladImg },
  { id: 3, name: 'Margherita Pizza', category: 'Main', price: '$18', description: 'Classic pizza with tomato, mozzarella, and basil.', image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80' },
  { id: 4, name: 'Lemon Chicken', category: 'Main', price: '$22', description: 'Grilled chicken breast with lemon sauce.', image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80' },
  { id: 5, name: 'Tiramisu', category: 'Dessert', price: '$9', description: 'Coffee-flavored Italian dessert.', image: 'https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80' },
  { id: 6, name: 'Lemon Dessert', category: 'Dessert', price: '$7', description: 'Tangy lemon cake with whipped cream.', image: lemonImg },
];

const categories = ['Appetizer', 'Main', 'Dessert'];

function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('Appetizer');

  const filteredMenu = menuData.filter(item => item.category === selectedCategory);

  return (
    <div className="menu-page">
      <h1>Our Menu</h1>
      <div className="menu-categories">
        {categories.map(cat => (
          <button
            key={cat}
            className={`category-btn${selectedCategory === cat ? ' active' : ''}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="menu-items">
        {filteredMenu.map(item => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} className="menu-item-img" />
            <div className="item-header">
              <h2>{item.name}</h2>
              <span className="item-price">{item.price}</span>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu; 