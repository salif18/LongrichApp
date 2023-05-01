import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from 'yup'
import axios from 'axios';
import AddIcon from '@mui/icons-material/Add';
const AddProducts = () => {
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
       const res = await axios.post(`http://localhost:3001/products`,formData,{
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
    <div className="add-products">
    <h1 className="add-title">Ajouter des nouveaux produits</h1>
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
                  placeholder="Nom du produit..."
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
                  placeholder="Lien de l'image du produit..."
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
                  placeholder="Prix du produit..."
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
                  placeholder="Details du produit..."
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
                  placeholder="Stock du produit..."
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
                  className="btn btn-add"
                  type="submit"
                  disabled={!formik.isValid || formik.isSubmitting}
                >
                  Publier
                </button>
              </div>
            </>
            </Form>
          )}
        
      </Formik>
    </div>
  );
};

export default AddProducts;
