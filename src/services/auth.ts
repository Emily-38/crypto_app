import axios, { AxiosResponse } from "axios"
import { CreateOffer, allOfferType, crypto, loginProps, registerProps } from "../utils/type"


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

  export async function getHistory(id :string) {
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
  