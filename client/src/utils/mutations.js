import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email:String!, $password: String!){
  login(email:$email, password:$password){
    token 
    user{
      email
    }
  }
}
`;

export const ADD_ORDER = gql`
mutation addOrder($products:[ID]!){
  addOrder(products:$products){
    _id
    purchaseDate
    products{
      _id
      name
      description
      image
      quantity
      price
      category{
        _id
        name
      }
    }
  }
}
`;

export const ADD_USER = gql`
 mutation addUser ($firstName: String!, $lastName: String!, $email: String!, $password: String!, $phone: String!)
{
  addUser(firstName:$firstName, lastName:$lastName, email:$email, password:$password, phone:$phone){
    token
    user{
      email
    }
  }
}


`;

export const UPDATE_USER = gql`
mutation updateUser($firstName: String, $lastName: String, $email: String, $password:String){
  updateUser(firstName:$firstName, lastName:$lastName, email:$email, password:$password){
    _id
    firstName
    lastName
    email
    phone
    orders{
      _id
      purchaseDate
      products{
        _id
        name
        description
        image
        quantity
        price
        category{
          _id
          name
        }
      }
    }
  }
}
`