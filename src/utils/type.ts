import React from "react"

export type  inputProps={
    type :string
     placeholder :string
      name :string
      register :any
      errors: any
      
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
    promoCode: string
    
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
    


    
