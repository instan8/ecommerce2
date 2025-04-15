import { createContext ,useEffect,useState} from "react";
import { products } from "../assets/frontend_assets/assets";
import { useNavigate } from "react-router-dom";
export const ShopContext = createContext(null);

const ShopContextProvider =(props) => {
  
    const currency ='$';
    const [user,setUser]=useState(null)
    const deliveryFee = 10;
    const [search, setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(true);
    const [cartItems, setCartItems] = useState({});
    const navigate= useNavigate();
    const[loginToast,setloginToast]= useState(false);
    const[toastItem,setToastItem] = useState([]);
    function closeToastNotification(id){
        let newNotification = 
         setToastItem(item =>item.filter((i)=>i!==id));
       }
    const addToCart = async (itemId,size)=>{
 let cartData = structuredClone(cartItems);
   if(cartData[itemId]){
    if(cartData[itemId][size]){
        cartData[itemId][size] += 1;
    }
    else{
        cartData[itemId][size] = 1;
    }
   }
   else{
    cartData[itemId]={};
    cartData[itemId][size]=1
   }
   setCartItems(cartData)
    }
    const updateQuantity= async(itemId,size,quantity) =>{
        let cartData = structuredClone(cartItems);
       
        cartData[itemId][size]=quantity;
        setCartItems(cartData);
    }
    const getCartCount = () => {
        let totalCount = 0;
        for(const items in cartItems){
        for (const item in cartItems [items]){
        try {
        if (cartItems[items][item] > 0) {
        totalCount += cartItems [items] [item];
        }
        } catch (error) {
        }
        }
        }
        return totalCount;}
        const getCartAmount =  () => {
            let totalAmount = 0;
            console.log(cartItems,"cartitems")
            for (const items in cartItems) {
            let itemInfo = products.find((product)=> product._id === items);
            for (const item in cartItems [items]){
            try {
            if (cartItems[items][item] > 0) {
            totalAmount += itemInfo.price * cartItems[items][item];
            }
            } catch (error) {
            }
            }
            
            }
            return totalAmount;}
    const value={
        products,currency,deliveryFee,search,setShowSearch,showSearch,setSearch,cartItems,addToCart,setToastItem,toastItem,closeToastNotification,updateQuantity,getCartCount,getCartAmount,navigate,user,setUser,loginToast,setloginToast
    }
 
 useEffect(()=>{
    console.log(cartItems,"cartItems")
 },[cartItems])
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;