# DataWowAssignment-FE

This is a [Next.js](https://nextjs.org/) Page Router project that was created for Prach Boonud's Data Wow assignment. The project used Nodejs version 20 during its development so try to match the Nodejs version as closely as possible.

## Running the application

*You need to run the [backend](https://github.com/Pondpdpr/DataWowAssignment-BE) project first*

First, we need to install the dependencies by running:

```
npm install
```

Next, after the dependencies are successfully installed, to start the application run:
```
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Included packages:
### tailwindcss [[doc](https://tailwindcss.com/)]
  This is a CSS framework that is attached to this project during the creation process of the project via Nextjs project creation CLI. Tailwindcss is used to style the component to match Figma's design.
### react-hot-toast  [[doc](https://react-hot-toast.com/)]
  Due to the use of toast in the design, this library is included to lower the development time of toast.
### NextAuth.js  [[doc](https://next-auth.js.org/)]
  This package is included to deal with the authentication process of the website, specifically, JWT because my design for this assignment's backend project used JWT to authenticate users.
  
## Page structure
```
|-- /
|
|-- /user
|   |-- /history
|
|-- /admin
|   |-- /history
|
|-- /auth
```

### Homepage *path('/')*
This page consists of only the text "Data Wow Assignment" and acts as the landing page for unauthenticated users.

### Authpage *path('/auth')*
This page consists of a login and signup form which is used to authenticate users.

### Userpage *path('/user')*
This page shows all concerts including already full concerts. If the user has already made the reservation for any of the concerts, every other concert is labeled as unavailable.

### UserHistorypage *path('/user/history')*
This page shows all of the user's reservation and cancellation logs.

### Adminpage *path('/admin')*
This page shows all concerts including the stats of all concerts combined. The admin can delete and create a concert on this page.

### AdminHistorypage *path('/user/history')*
This page shows the reservation and cancellation log of all users.
