import React, {  } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';
import { useEffect,useState } from 'react';
import SearchBar from '../components/SearchBar';
import { assets } from '../assets/frontend_assets/assets';
function collection() {

 const[sortType, setSortType] = useState('relevant');
 const [category, setCategory] =useState([]);
const [subCategory, setSubCategory] = useState([]);
  const { products,search,showSearch,setSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = React.useState(false);
  const [filterProducts, setFilterProducts] = React.useState([]);

const sortProduct = ()=>{
  let fpCopy = filterProducts.slice();
  switch(sortType){
    case 'low-high':
      setFilterProducts(fpCopy.sort((a,b)=>(a.price-b.price)));
      break
    case 'high-low':
      setFilterProducts(fpCopy.sort((a,b)=>(b.price-a.price)));
      break;
      default:
        applyFilter();
        break;

  }
}
useEffect(()=>{
sortProduct();
},[sortType])

  useEffect(()=>{

    applyFilter();
  },[category,subCategory,search,showSearch])

  const applyFilter =()=>{
    let productsCopy = products.slice();
    if(category.length > 0){
      productsCopy = productsCopy.filter(item=>category.includes(item.category))
    }
    if(subCategory.length > 0){
      productsCopy = productsCopy.filter(item=>subCategory.includes(item.subCategory))
    }
    if(showSearch && search){
      productsCopy=productsCopy.filter(item=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    setFilterProducts(productsCopy)
  }
  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev =>prev.filter(item=>item!== e.target.value))

  }
  else{
    setCategory(prev => [...prev, e.target.value])
  }}

  const toggleSubCategory = (e) => {
    console.log(e.target.value,"hello")
    if(subCategory.includes(e.target.value)){
      setSubCategory(prev =>prev.filter(item=>item!== e.target.value))

  }
  else{
    setSubCategory(prev => [...prev, e.target.value])
  }
}
  return (
    <div className='flex flex-col
    sm:flex-row gap-1
    sm:gap-10
    pt-10 border-t relative '>
     
      {/* filter option
         */}
      <div className='min-w-60 '>
        <p className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS</p>
        {/* Category Filter */}
        <div className=' inline-flex items-center justify-center border border-gray-300 rounded-full
          py-2 sm:px-5 w-full
            sm:w-full my-4'>
              <input type="text" value={search}
              onChange={(e)=>{
                setSearch(e.target.value)
              } }className="bg-inherit
              flex-1 outline-none 
              text-sm" placeholder='search'/>
              <img className=' w-4 -translate-x-4' src={assets.search_icon}
              alt=""/>
            </div>
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? " " : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory}/> Men
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Kids'}onChange={toggleCategory} /> kids
            </p>
          </div>
        </div>
        {/*  sub category filter*/}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? " " : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>Type</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Topwear'}
              onChange={toggleSubCategory} /> Topwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Bottomwear'} onChange={toggleSubCategory}/> Bottomwear
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Winterwear'} onChange={toggleSubCategory}/> Winterwear
            </p>
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between
        text-base
        sm:text-xl
        mb-4'>
          <Title text1={"All"}
          text2={"Collections"}/>
          {/* Product Sort */}
          <select onChange={e=>setSortType(e.target.value)} className='border-2 border-gray-300 texxt-sm px-2'>
            <option value="relavent">Sort by:Relavent</option>
            <option value="low-high">
              sort by:Low to High
            </option>
            <option value="high-low">sort by:High to Low</option>
            </select>
        </div>
        {/* map product */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {filterProducts.map((item,index) => (
           <ProductItem key={index} name={item.name} id={item._id} price={item. price} image={item.image} />
            
          ))}
          </div>
      </div>

    </div>
  )
}

export default collection
