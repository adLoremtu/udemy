import { useLocation, useSearchParams } from "react-router-dom";

const products = [
  {
    id: 1,
    api_key: "iPhone",
    price: 1000,
  },
  {
    id: 2,
    api_key: "iPad",
    price: 500,
  },
  {
    id: 3,
    api_key: "iPod",
    price: 40,
  },
  {
    id: 4,
    api_key: "MacBook",
    price: 2000,
  },
];

export const Page5 = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsValue = searchParams.get("api_key") || "";
  console.log(searchParams.get("api_key"));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const params = value !== "" ? { api_key: value } : undefined;

    setSearchParams(params);
  };
  
  const searchProducts = () => {
    return products.filter((product) => {
      return product.api_key.includes(searchParams.get("api_key") || "") || ''
    })
  }

  return (
    <>
      <h2>Page5(その他のフック)</h2>
      <input type="text" onChange={handleChange} value={paramsValue} />
      <ul>
        {searchProducts().map((product) => (
          <li key={product.id}>
            {product.api_key} / {product.price}
          </li>
        ))}
      </ul>
    </>
  );
};
