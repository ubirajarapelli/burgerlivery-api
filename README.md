# Burgerlivery API

Simple Mock API REST Based to comunicate with Burgerlivery front-end application.

## Endpoints

### URL Base

`https://burgerlivery-api.vercel.app`

___

#### `GET` **/categories**  

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
___

#### `GET` **/hamburgers**  

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
___

#### `GET` **/appetizers**

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
___

#### `GET` **/desserts**

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
___

#### `GET` **/beverages**

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
___

#### `GET` **/payment/options**

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
___

#### `POST` **/order/create-order**  

**Params:**
```TS
{
  items: [
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
___

#### `POST` **/user/login**

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
  userName: string,
  email: string,
  token: string
}
```

## Login data

### User 1
  **login:** eliane_almeida@gmail.com.br  
  **password:** Prior8756@  

### User 2
  **login:** manoeljuandapaz@gmail.com.br  
  **password:** Pedra0143@  
