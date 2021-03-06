# Beppo | e-commerce | Coder Houses

![Project Image](https://res.cloudinary.com/dfprmjlir/image/upload/c_scale,w_1000/v1648317470/BEPPO/Captura_de_Pantalla_2022-03-26_a_la_s_14.50.51_v6wosv.png) <br />
> E-commerce store developed over the online ReactJS course dictated by Coder House.

### Table of Contents.

- [DESCRIPTION](#description) <br />
- [GIF](#gif) <br />
- [HOW TO USE](#procedure) <br />
- [DEPENDENCIES](#dependencies) <br />
- [ROUTES](#routes) <br />

---

### Descripition.
<div style="text-align: justify">
In this project I was able to develop the front end of an online store with a shopping cart, using components such as React and Firebase as a server in the cloud. A friendly user experience was created, with instant visual updates, and scalable code. <br />

The online store is for an Argentinian timber furniture company which produces beautiful decoration objetcs made from wood-turned monopieces. We can also find leather made elements such as notebook cases, 'materos', bags, among others.

The store is organized in different sections:
- Cutting Boards.
- Home Deco.
- Leather.
- Side Tables.

The company is in a constant development of new products, which was taken into consideration during the design of the website to be able to make new adaptations in an efficient and simple way in the future.
</div>
<br />
<br />

<div>

&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
<img src="https://res.cloudinary.com/dfprmjlir/image/upload/c_scale,w_60/v1648323615/BEPPO/ICONS/react_ttll2b.png"/> &nbsp; &nbsp;
<img src="https://res.cloudinary.com/dfprmjlir/image/upload/c_scale,w_60/v1648339044/BEPPO/ICONS/git-2_rj7qad.png"/> &nbsp; &nbsp;
<img src="https://res.cloudinary.com/dfprmjlir/image/upload/c_scale,w_60/v1648323615/BEPPO/ICONS/vscode_gxqfeg.png"/> &nbsp; &nbsp; &nbsp;
<img src="https://res.cloudinary.com/dfprmjlir/image/upload/c_scale,w_60/v1648338909/BEPPO/ICONS/npm-3_zuxujk.png" /> &nbsp; &nbsp;
<img src="https://res.cloudinary.com/dfprmjlir/image/upload/c_scale,w_60/v1648444310/BEPPO/ICONS/formik.256x256_at1hwy.png" />&nbsp; &nbsp;
<img src="https://res.cloudinary.com/dfprmjlir/image/upload/c_scale,w_60/v1648323614/BEPPO/ICONS/firebase_ykuull.png" /> &nbsp; &nbsp;
<img src="https://res.cloudinary.com/dfprmjlir/image/upload/c_scale,w_60/v1648338765/BEPPO/ICONS/github-2_lmx8uu.png" /> &nbsp; &nbsp;
<img src="https://res.cloudinary.com/dfprmjlir/image/upload/c_scale,w_60/v1648338221/BEPPO/ICONS/css3-2_a6yzw9.png" /> &nbsp;
<img src="https://res.cloudinary.com/dfprmjlir/image/upload/c_scale,w_60/v1648338308/BEPPO/ICONS/javascript_birp8o.png" /> &nbsp; &nbsp;

</div>

<br />
<br />

---

### GIF
![gif](https://user-images.githubusercontent.com/89430084/160871565-7b805bbf-50ff-42d3-8e5d-12e035988bb4.gif) <br />
> Buying products.

---

### Procedure to run the application locally.
<div style="text-align: justify">

1. We locate ourselves on the root folder `appbeppo`, open a new terminal and clone the repository with the following command:
`git clone https://github.com/Rocio-Moroni/react-beppo.git`
2. Create a `.env` file at the root of the project and include the provided environment variables inside.
3. From the terminal we locate ourselves in the root folder of the project and install all the dependencies with the command:
`npm install`
4. Finally, we run the app with the following command:
`npm start`

</div>


---

### Dependencies
<div style="text-align: justify">

- **[React Router (v6.2.1)](https://reactrouter.com/docs/en/v6)** It facilitates the navigability and grants a dynamic routing to the application.
- **[React Icons](https://react-icons.github.io/react-icons/)** Allows you to include popular icons in your React projects easily, which utilizes ES6 imports that gives you the opportunity to only include the icons that your project is using.
- **[Formik](https://formik.org)** Is the world's most popular open source form library for React and React Native. It comes with battle-tested solutions for input validation, formatting, masking, arrays, and error handling.
- **[Firebase (v9.6.7)](https://firebase.google.com)** It is a service provided by Google to meet the different needs that an application and its development cycle may have, within which we find:
    - Security and authentication.
    - Storage and Query.
    - Hosting.
    - Monitoring.
    - Functions and more.

<div>

---

### Routes

<div style="text-align: justify">

- **MAIN (/)** Renders the home page of the web, in which a header with a background image is displayed along with a category navbar.
In a second viewport you can see a section with the products categories: 'Cutting Boards', 'Home Deco', 'Leather' and 'Side Tables', when clicking on each one of them leads to a new router. Then, a short description of Beppo is developed in the About Us section. Finally, a Coming Soon section is shown where we can see some images of the next products that will be for sale. Last but not least, we've got the footer of our e-commerce.
- **CATEGORY (/category/:categoryId)** Renders filtered products based on their category.
- **ITEM (/item/:productId)** Renders a card with the details of the selected product (Name, Price, Description, Images). Followed by a Dropdown in which the user can select the type of material he wants for his product. It also has a button available that is responsible for adding a certain amount of products to the shopping cart, once the product is added, another button is rendered that gives three different options to the user: redirects him to the home page, to the shopping cart review or directly to the form section for making the payment.
- **CART (/:cart)** Renders the shopping cart with the products added by the user. A resume is shown at the right of the screen where a final price is shown, when the user clicks the button 'Confirm Order' a contact form is shown up to generate an order in the database, when submitting the form, if all the fields are correct, it renders a poster with the ID of the generated order.

</div>
