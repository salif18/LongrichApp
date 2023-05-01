import React, { useState,useEffect } from 'react';
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from 'yup'
import axios from 'axios';
import SaveIcon from '@mui/icons-material/Save';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
const UpdateProduct = () => {
    const [item , setItem] =useState([])
    const {id} = useParams()
  const navigate = useNavigate()
    useEffect(()=>{
        const getItem =async()=>{
           try{
              const res = await axios.get(`http://localhost:3001/products/${id}`)
              if(res){
                const data = await res.data
                setItem(data)
              }
           }catch(e){
            console.log(e)
           }
        }
        getItem()
      },[])
console.log(item)
    const validationSchema = yup.object({
        name:yup.string().required('Nom du produit est obligatoire'),
        image:yup.string().required("l'image du produit est obligatoire"),
        category:yup.string().required('Veuillez selection la categorie du produit'),
        price:yup.number().required('Le prix du produit est obligatoire'),
        details:yup.string().required("Veuillez d'ecrire le produit"),
        stock:yup.number().required('Veuillez preciser le nombre de stock')
     });
     const initialValue = {
       name: "",
       image: "",
       category: "",
       price: "",
       details: "",
       stock: "",
       likes: [],
       dislikes: [],
       comments: [],
     };
   
     const options =[
       {value:'',label:'Select-category'},
       {value:'Cafe',label:'Cafe'},
       {value:'Dentifrice',label:'Dentifrice'},
       {value:'Parfum',label:'Parfum'},
       {value:'Pommade',label:'Pommade'},
       {value:'Savon',label:'Savon'}
   ]
   
   
   const formSubmission =()=>{
       return new Promise((resolve, reject)=>{
         setTimeout(()=>{
           resolve('user registered')
         },2000)
       })
     }
   
   const handleSubmit=async(formData , onSubmittingProps)=>{
       try{
          const res = await axios.put(`http://localhost:3001/products/${id}`,formData,{
              headers:{
                  'Content-Type':'application/json'
              }
          })
          if(res){
            await res.data
          }
          await formSubmission(formData)
          onSubmittingProps.resetForm()
       }catch(e){
        console.error(e)
       }
     }
    return (
        <div className='update-product'>
        <div className='update'>
            <div className='update-header'>
             <button className='btn-back' onClick={()=>navigate('/products')}>Retour aux produits</button>
             <h2>Modifier produit</h2>
            
            </div>
            <div>
            <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        
          {(formik) => (
            <Form className="formulaire">
            <>
              <div className="left">
              <div>
                <label htmlFor="name">Nom du Produit</label><br/>
                <Field
                  className='inputForm'
                  type="text"
                  id="name"
                  name="name"
                  placeholder={item.name}
                />
                <ErrorMessage
                  className="text-danger"
                  name="name"
                  component="span"
                />
              </div>
              <div>
                <label htmlFor="image">Photo</label><br/>
                <Field
                  className='inputForm'
                  type="text"
                  id="image"
                  name="image"
                  placeholder={item.image}
                />
                <ErrorMessage
                  className="text-danger"
                  name="image"
                  component="span"
                />
               </div>
               <div>
                <label htmlFor="category">Category</label><br/>
                <Field name='category' >
                {({field})=>(
                     <>
                       <select {...field} className='inputForm'>
                       {options.map((option)=>(
                         <option key={option.value} value={option.value}>
                           {option.label}
                         </option>
                       ))}
                       </select>
                       <ErrorMessage className='text-danger' name='category' component='span' />
                     </>
                   ) }
                </Field>
                <ErrorMessage
                  className="text-danger"
                  name="category"
                  component="span"
                />
                </div>
              </div>

              <div className="rigth">
              <div>
                <label htmlFor="price">Price</label><br/>
                <Field
                  className='inputForm'
                  type="number"
                  id="price"
                  name="price"
                  placeholder={item.price}
                />
                <ErrorMessage
                  className="text-danger"
                  name="price"
                  component="span"
                />
              </div>
              <div>
                <label htmlFor="details">Description</label><br/>
                <Field
                  className='inputForm'
                  type="text"
                  id="details"
                  name="details"
                  rows={120}
                  placeholder={item.details}
                />
                <ErrorMessage
                  className="text-danger"
                  name="details"
                  component="span"
                />
             </div>
             <div>
                <label htmlFor="stock">Stock</label><br/>
                <Field
                  className='inputForm'
                  type="number"
                  id="stock"
                  name="stock"
                  placeholder={item.stock}
                />
                <ErrorMessage
                  className="text-danger"
                  name="stock"
                  component="span"
                />
              </div>
              </div>
              <div>
                <button
                  className="btn-save"
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Enregistrer
                  <SaveIcon style={{marginLeft:10}}/>
                </button>
              </div>
            </>
            <div className='container-img'>
                <img className='item-image' src={item.image} alt={item.name}/>
                <h2 style={{marginLeft:10,fontSize:18,}}>Stock: {item.stock}</h2>
            </div>
            </Form>
          )}
        
      </Formik>

            </div>

            <div className='infos-sur-prod'>
            <div className='notes'>
             <h3 className='title-note'>Apprecies</h3>
              <p>{item.likes}</p>
              <h3 className='title-note'>Non apprecies</h3>
              <p>{item.dislikes}</p>
              </div>
              <h2>Les commentaires</h2>
              <div className='zone-comment'>
                <div><img className='comment-img' src=''/></div>
                <div><p className='comments'>{item.comments}</p></div>
              </div>

            </div>
        </div>
            
        </div>
    );
};

export default UpdateProduct;