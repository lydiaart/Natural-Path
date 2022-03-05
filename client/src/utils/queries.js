import { gql } from '@apollo/client';

export const QUERY_PRODUCTS = gql`
query product($_id:ID!){
  product(_id:$_id){
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
`;

export const QUERY_CHECKOUT = gql`
query checkout($products: [ID]!){
  checkout(products:$products){
    session
  }
}
`;

export const QUERY_ALL_PRODUCTS = gql`
  query products($category:ID, $name: String) {
  products(category: $category, name: $name){
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
`;

export const QUERY_CATEGORIES = gql`
query categories{
categories {
  _id
  name
}
}
`;

export const QUERY_USER = gql`
  query user{
  user{
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
`;

export const QUERY_ORDER = gql`
query order($_id:ID!){
  order(_id:$_id){
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
`

export const CARTS = gql`
query carts{
  carts{
    _id
    firstName
    lastName
    email
    phone
    carts{
      _id
      name
      image
      price
      quantity
    }
  }
}
`