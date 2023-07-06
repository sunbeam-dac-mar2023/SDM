import { useEffect, useState } from 'react'
import { getProducts } from './services/product'

function Product({ product }) {
  return (
    <div style={{ margin: 10 }}>
      <div>Id: {product['id']}</div>
      <div>Title: {product['title']}</div>
      <div>Description: {product['description']}</div>
      <div>Price: {product['price']}</div>
      <hr />
    </div>
  )
}

function ProductList() {
  const [products, setProducts] = useState([])

  const loadProducts = async () => {
    const data = await getProducts()
    setProducts(data)
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return (
    <div className='container'>
      <h3 style={{ textAlign: 'center', margin: 20 }}>List of Products</h3>

      {products.map((product) => {
        return <Product product={product} />
      })}
    </div>
  )
}

export default ProductList
