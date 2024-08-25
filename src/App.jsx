import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Button from "./components/Button";
import SearchInput from "./components/Searchinput";
import Card from "./components/Card";

function App() {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState(" ");
  const [priceSearch, setPriceSearch] = useState(""); 
  // const [colour, setcolour ] = useState ('orange');
  // const [student , setstudent ] = useState (' ');

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  // const productArr = product.filter((data)=>{data.title.indexOf(search) != -1 });
  const productArr = product.filter(
    (data) => data.title.toLowerCase().indexOf(search.toLowerCase()) !== -1,
    // (data) => data.price.toString().indexOf(search) !== -1

  );

  const filteredByPrice = product.filter((data) => {
    return priceSearch
      ? data.price. indexOf(priceSearch) !== -1
      : true;
  });


  return (
    <div>
      <SearchInput onChange={(e) => setSearch(e.target.value)} />
      <SearchInput onChange={(e) => setSearch(e.target.value)} />

      <div className="w-full grid grid-cols-4 gap-10 mt-8">

      {productArr.map((data, index) => (
        <Card
          key={index}
          pic={data.image}
          title={data.title}
          price={data.price.toString()}
        />
      ))}
      {filteredByPrice.map((data, index) => (
        <Card
          key={index}
          pic={data.image}
          title={data.title}
          price={data.price.toString()}
        />
      ))}

</div>

      {/* {useEffect(()=>{
  productArr.map((data)=>{
  <Card pic={data.image} title={data.title} price={data.price}  />
  })}, [])} */}

      {/* <Button tittle='black' onClick={()=>{setcolour('black')}} />
      <Button tittle='black' onClick={()=>{setcolour('')}} />
      <Button tittle='black' onClick={()=>{setcolour('black')}} />
      <Button tittle='black' onClick={()=>{setcolour('black')}} />
      <div style={{
        height : 200,
        width : "100%",
        backgroundColor : colour
      }}></div>
      <input onChange={(e)=>{}} /> */}
      {/* <Button onClick = {()=>{alert("click like button")}} tittle = "like bttn"/>
 <Button onClick = {()=>{alert("click share button")}} tittle = "share bttn"/>
 <Button onClick = {()=>{alert("click comment button")}} tittle = "comment bttn"/>
 <Button onClick = {()=>{alert("click follow button")}} tittle = "follow bttn"/> */}
    </div>
  );
}

export default App;
