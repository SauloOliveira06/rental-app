import './App.css';
import { RentalCard } from './components/rental/RentalCard';
import { Header } from './shared/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='container'>
        <section id='rentalListing'>
          <h1 className='page-title'>Your Home All Around the World</h1>
          <div className='row'>
            <RentalCard />
            <RentalCard />
            <RentalCard />
          </div>
        </section>
      </div>

    </div>
  );
}

export default App;
