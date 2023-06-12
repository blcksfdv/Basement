import {useAppSelector,useAppdispatch} from "../hooks/redux"
import { useEffect } from 'react';
import { fetchTotalMint } from "../hooks/Totalsupply";
import { Header } from '../components/Header/Header';
import Footer from "../components/Footer/Footer";
const  Layout = (props:any)=> {


  const dispatch = useAppdispatch();


    useEffect(() => {
     dispatch(fetchTotalMint())
    }, [])
  

    return (
   <div className='bg-[#020E14]'>
   <Header/>
   {props.children}
   <Footer/>
   </div>
    )
  }
  
  
  export default Layout