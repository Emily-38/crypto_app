import axios, { AxiosResponse } from "axios"
import { CreateCryptoType, CreateOffer, CreatePromocodeType,   crypto, loginProps, promoCodeType, registerProps } from "../utils/type"


export async function registerForm(data:registerProps ){
    let axiosConfig = {
        headers: {
            'content-type': 'application/json;charset=utf-8',
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
            promoCode: data.promoCode,
            age: 20 
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

export async function getCryptoByName( jwt:any, input:string): Promise<AxiosResponse<any, crypto[]>>{
    let axiosConfig = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${jwt}`
        }, 
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}crypto/search/${input}`

    return await axios.get( url, axiosConfig ) 
}

export async function getCryptoName( jwt:any, params:string): Promise<AxiosResponse<any, crypto[]>>{
    let axiosConfig = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${jwt}`
        }, 
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}crypto/search/${params}`

    return await axios.get( url, axiosConfig ) 
}

export async function getOffer( jwt:any){
    let axiosConfig = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            Authorization: `Bearer ${jwt}`
        }, 
    }
    const url = `${process.env.NEXT_PUBLIC_LIEN_API}offer/all`

    return await axios.get( url, axiosConfig ) 
}


export async function getAllCryptos() {
  let url = `${process.env.NEXT_PUBLIC_LIEN_API}crypto/all`

  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }
  return axios
    .get(
      url,

      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}

export async function buyCrypto(cryptoid: string, amount: number) {
  let url = `${process.env.NEXT_PUBLIC_LIEN_API}crypto/buy`

  let axiosConfig = {
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    },
  }
  return axios
    .post(
      url,
      {
        id_crypto: cryptoid,
        amount: amount,
      },
      axiosConfig
    )
    .then((res) => {
      return res
    })
    .catch((e) => {
      throw new Error(e)
    })
}

export async function buyOffer(id_offer: string) {
    let url = `${process.env.NEXT_PUBLIC_LIEN_API}trade/create`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }
    return axios
      .post(url, { id_offer: id_offer }, axiosConfig)
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
  }
export async function myAsset() {
    let url = `${process.env.NEXT_PUBLIC_LIEN_API}user/my-assets`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }
    return axios
      .get(url, axiosConfig)
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
  }
  export async function CreateOffert({id_crypto, amount} :CreateOffer) {
    let url = `${process.env.NEXT_PUBLIC_LIEN_API}offer/create`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }
    return axios
      .post(url,{id_crypto: id_crypto , amount:Number(amount)}, axiosConfig)
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
  }

  export async function getHistory(id :string|undefined) {
    let url = `${process.env.NEXT_PUBLIC_LIEN_API}crypto/history/${id}`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }
    return axios
      .get(
        url,
  
        axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
  }
  
  export async function getallUser(){
    let url = `${process.env.NEXT_PUBLIC_LIEN_API}user/users-assets`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }
    return axios
      .get(
        url,
  
        axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
  }
  
  export async function getallPromocode(){
    let url = `${process.env.NEXT_PUBLIC_LIEN_API}promoCode/all`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }
    return axios
      .get(
        url,
        axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
  }
  
  export async function CreatePromocode({name, value}:CreatePromocodeType){
    let url = `${process.env.NEXT_PUBLIC_LIEN_API}promoCode/create`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }
    return axios
      .post(
        url,{name, value},axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
  }
   export async function DeletePromocode(id: string){
    let url = `${process.env.NEXT_PUBLIC_LIEN_API}promoCode/delete/${id}`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }
    return axios
      .delete(
        url,axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
   }
   export async function UpdatePromocode({name, value, id}:promoCodeType){
    let url = `${process.env.NEXT_PUBLIC_LIEN_API}promoCode/update/${id}`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }
    return axios
      .patch(
        url,{name,value},axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
   }
   export async function CreateCrypto(data:CreateCryptoType){
    let url = `${process.env.NEXT_PUBLIC_LIEN_API}crypto/create`
  
    let axiosConfig = {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        Authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
    }
    return axios
      .post(
        url,{
          name:data.name,
          value:data.value,
          image:data.image,
          quantity:data.quantity
        },axiosConfig
      )
      .then((res) => {
        return res
      })
      .catch((e) => {
        throw new Error(e)
      })
   }