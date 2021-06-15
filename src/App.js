import './App.css';
import Products from './components/Products';


const productData = [
  {
    "img": "./img/cocooil.png",
    "name": "cocooil",
    "price": "30$",
    "description": "BUY NOW"
  },
  {
    "img": "./img/polaroid.png",
    "name": "Polaroid",
    "price": "60$",
    "description": "BUY NOW"
  },
  {
    "img": "./img/maui.png",
    "name": "Maui Mosture",
    "price": "20$",
    "description": "BUY NOW"
  }
]


function App() {
  return (
    <main>
      <h2>SUPERSHOP</h2>
      <div className="container">
        {productData.map((singleData, i) => <Products
          key={i}
          product={singleData}
        />)
        }
      </div>
    </main>
  );
}

export default App;
