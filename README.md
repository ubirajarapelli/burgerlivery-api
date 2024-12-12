# Burgerlivery API

Simple API REST Based to comunicate with Burgerlivery front-end application.

## Endpoints

### URL Base

> `https://burgerlivery-api.vercel.app/`

`GET` **/categories**  

**Params:**  
_No params_  

**Response:**  
```TS
[
  { 
    id: number,
    text: string, 
    link: string
  }
]
```

`GET` **/hamburgers**  

**Params:**  
_No params_  

**Response:**  
```TS
[
  {
    id: number,
    image: Array<string>
    title: string,
    description: string
    values: {
      single: number,
      combo: number,
    },
  }
]
```

`GET` **/appetizers**

**Params:**  
_No params_  

**Response:**  
```TS
[
  {
    id: number,
    image: string,
    title: string,
    description: string,
    values: {
      small: number | null,
      large: number | null,
    },
  }
]
```

`GET` **/desserts**

**Params:**  
_No params_  

**Response:**  
```TS
[
  {
    id: number,
    image: string,
    title: string,
    description: string,
    value: number,
  }
]
```

`GET` **/beverages**

**Params:**  
_No params_

**Response:**  
```TS
[
  {
    id: number,
    image: string,
    title: string,
    description: string,
    value: number,
  }
]
```

`GET` **/payment/options**

**Params:**  
_No params_

**Response:**  
```TS
[
  { 
    id: string,
    value: number,
    text: string 
  }
]
```

`POST` **/order/create-order**  

**Params:**
```TS
{
  items [
    {
      title: string,
      value: number
    }
  ],
  paymentOption: string,
}
```
**Response:**
```TS
{
  orderNumber: string,
  createdAt: string,
  message: string,
  details: object,
}
```

`POST` **/user/login**

**Params:**
```TS
{
  login: string,
  password: string
}
```
**Response:**
```TS
{
  userName: string
  email: string
  token: string
}
```
