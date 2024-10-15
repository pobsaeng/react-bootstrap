## How to integrate React and Bootstrap

1) Create a React App:
   ```
   npm create-react-app react-bootstrap
   ```
2) Once the setup is complete, navigate into the product directory.
   ```
   cd react-bootstrap
   ```
3) Install Bootstrap and React Bootstrap:
   ```
   npm install react-bootstrap bootstrap
   ```

4) Configure Bootstrap in the index.js file:
   ```
   import "bootstrap/dist/css/bootstrap.min.css";
   ```
 
5) Create a directory named components and add `CssComponent.js` and `ReactComponent.js`, then import them into the index.js file:
     ```
     [index.js]
     import CssComponent from './components/CssComponent';
     import ReactComponent from './components/ReactComponent';

     const root = ReactDOM.createRoot(document.getElementById('root'));
     root.render(
       <React.StrictMode>
          <CssComponent />
          <ReactComponent />
       </React.StrictMode>
     );
     ```
6) Run the App in Development Mode: Start the app and navigate to http://localhost:3000:
     ```bash
     npm start
     ```
