
import React, { Dispatch, SetStateAction } from "react"

export type  inputProps={
    type :string
     placeholder :string
      name :string
      register :any
      errors?: any
      option?:any
      
}

export type formulaireProps={
    title: string
    handleSubmit: any
    onSubmit: any
    children : React.ReactNode
}
export type buttonProps={
    title: string 
    
}

//type auth
export type registerProps={
    firstName: string,
    lastName: string,
    pseudo: string,
    city: string,
    email: string,
    password: string,
    promoCode?: string
    age?: number
    
  }
export type loginProps={
    email: string,
    password: string
}
export type cardCryptoProps={
    width: string,
    image: string,
    name: string,
    value: number
}
export type cryptoTableaux={
    data:crypto[]


}
export type crypto={
    id:string
    image: string
    name: string
    value:number
    quantity:number

}
export type propsParams={
    params:{
    name:string
}
}

export type CardType={
    id: string
   user?:string
    lien: string 
    name: string
    quantity: number
    value:number
    setIsReloadNeeded: Dispatch<SetStateAction<boolean>>
}

export type allOfferType={
    id: string
    amount: number
    User:{
        pseudo:string
    }
    Crypto: offerCrypto
}
export type offerCrypto={
    id: string
    name: string
    value: number
    image: string
}

export type CryptoProps = {
    created_at: string
    id: string
    image: string
    name: string
    quantity: number
    updated_at: string
    value: number
  }
  export type HeaderNavProps={
    name:string 
    lien:string
  }
  export type userProps={
    firstName: string 
    lastName:string 
    pseudo: string 
    dollarAvailables:number
    UserHasCrypto:myCryptoProps[]
  }
  export type myCryptoProps={
    Crypto:{
            created_at: string
            id: string
            image: string
            name: string
            quantity: number
            updated_at: string
            value: number
    }
    amount:number

  }
 export type CardUserCrypto={
    name: string
    lien :string
    quantity: number
    value: number
 }
 export type CreateOffer={
    id_crypto: string
    amount: number
 }
 export type historyProps={
    
        id: string,
        id_crypto: string,
        value: number,
        created_at: string,
        updated_at: string
    
 }
 export type AllUserProps={
    UserHasCrypto: myCryptoProps[]
    dollarAvailables: number
    firstName: string
    lastName: string
    pseudo: string
}
export type promoCodeType={
        "id": string
        "name": string
        "value": number
}
export type CreatePromocodeType={
    "name": string
    "value": number
}
export type CreateCryptoType={
    "name": string
    "value": number
    "quantity": number
    "image": string
}