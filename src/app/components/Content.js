import ContentDetails from "./ContentDetails";

export default async function Content() {
  const res = await fetch(
    "https://5d76bf96515d1a0014085cf9.mockapi.io/product"
  );
  const data = await res.json();
//   console.log(data);

  return (
    <div id="mainContainer">
      <h1 id="Clothing"> clothing for men and women </h1>
      <div id="containerClothing">
        {data.map((ele) => {
          return ele.isAccessory ? null : (
            <ContentDetails ele={ele} key={ele.id} />
          );
        })}
      </div>

      <h1 id="Accessories"> accessories for men and women </h1>
      <div id="containerAccessories">
        {data.map((ele) => {
          return ele.isAccessory ? (
            <ContentDetails ele={ele} key={ele.id} />
          ) : null;
        })}
      </div>
    </div>
  );
}
