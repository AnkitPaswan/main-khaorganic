
import { Link } from "react-router-dom";
import "./CategoryItem.css";


const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem">
      <Link to={`/products/${item.cat}`} >
          <h1>{item.title}</h1>
      </Link>
    </div>
  );
};


export default CategoryItem;
