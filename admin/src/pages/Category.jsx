import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Category = () => {
   const [prod,setProd]=useState([])
    const [category,setCategory] = useState('')
    
   const catego = ['Cafe','Dentifrice','Parfum','Pommade','Savon']
   const handleChange =(e)=>{
    setCategory(e.target.value)
   }

console.log(category)

  const handleSubmit=(e)=>{
    e.preventDefault()
     axios.get(`http://localhost:3001/products/${category}`)
    .then(res => res.data)
    .then(data => setProd(data))
    .catch(err => console.error(err))

  }
   
  
   console.log(prod)
    return (
        <div className='category'>
        <h3>Categories des produits</h3>
        <div className='cate-container'>
        <form onSubmit={handleSubmit} >
            <select className='cate' value={category} onChange={handleChange}>
               {catego.map((ite,i)=>(<option key={i} value={ite}>{ite}</option>))}
            </select>
        </form>
        {prod.map((item)=>(
        <div>
          <p>{item.name}</p>
        </div>
        ))}

        </div>
        </div>
    );
};

export default Category;