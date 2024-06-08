import axios from "axios"
import { loginProps, registerProps } from "../utils/type"

export async function registerForm(data:registerProps ){
    let axiosConfig = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}auth/signup`
    return axios.post(
        url,
        {
           
            firstName:data.firstName,
            lastName:data.lastName,
            pseudo:data.pseudo,
            city:data.city,
            email: data.email,
            password: data.password,
            promoCode: data.promoCode
        },
        axiosConfig
    )
      
}

export async function loginForm(data:loginProps ){
    let axiosConfig = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}auth/signin`
    return axios.post(
        url,
        {
            email: data.email,
            password: data.password,
        },
        axiosConfig
    )
      
}

export async function getAllCrypto ( jwt :any){
    let axiosConfig = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${jwt}`
        },
        
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}crypto/all`
    return axios.get( url, axiosConfig )
    
      
}