# Prisma Graphql Example

## Query:

```graphql
query all {
  users {
    id
    name
    email
    posts {
      id
      title
      published
    }
  }
  
  posts {
    id
    title
    published
    author{
      id
      email
    }
  }
}

mutation createUser($createUser: CreateUserInput!){
  createUser(input:$createUser) {
    id
  }
}

mutation createPost($createPost: PostInput!){
  createPost(input: $createPost) {
    id
  }
}

mutation updateUser($updateUser: UpdateUserInput!) {
  updateUser(input: $updateUser) {
    id
    role
  }
}
```

## Variables:

```json
{
  "createPost":{
    "title" :"My Great test Post",
    "authorId": "ckiuv5s430000c9v9wvhu51ez",
    "published": true
  },
  "createUser": {
    "name":"Tester",
    "email":"test@test.com",
    "role":"ADMIN"
  },
  "updateUser": {
    "id": "ckiuv5s430000c9v9wvhu51ez",
    "role":"USER"
  }
}
```
