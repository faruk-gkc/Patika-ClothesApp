import {useState,useEffect} from 'react'
import axios from 'axios'

const useGetAxios =(url)=>{
    const[request,setRequest] = useState({
        loading:false,
        data:null,
        error:false
    })

    useEffect( ()=>{
        setRequest({
            loading:true,
            data:null,
            error:false
        })
        axios.get(url)
            .then(res =>{
                setRequest({
                    loading:false,
                    data:res.data,
                    error:false
                })
            })
            .catch(()=>{
                setRequest({
                    loading:false,
                    data:null,
                    error:true
                })
            })
    },[url])
    
    return request
}
export default useGetAxios