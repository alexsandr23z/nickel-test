import { useState } from 'react';
import Header from './header/header'
import Card from './card/card';
import { ProductType } from '../const';
import { productsMock } from '../mocks/mocks';

import '../sass/app.scss'

function App() {
  const [idFilter, setIdFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [materialFilter, setMaterialFilter] = useState<ProductType>(ProductType.all);

  const filteredProducts = productsMock.filter(product => {
    const idMatches = String(product.id).includes(idFilter);
    const nameMatches = product.name.toLowerCase().includes(nameFilter.toLowerCase());
    const materialMatches = materialFilter === ProductType.all || product.type.toLowerCase() === materialFilter;
    return idMatches && nameMatches && materialMatches;
  });
 
  return (
    <>
      <Header
       idFilter={idFilter}
       setIdFilter={setIdFilter}
       nameFilter={nameFilter}
       setNameFilter={setNameFilter}
       materialFilter={materialFilter}
       setMaterialFilter={setMaterialFilter}
      />
      <div className="product_card">
        {filteredProducts.map((product) => <Card key={product.id} product={product}/>)}
      </div>
    </>
  )
}

export default App

