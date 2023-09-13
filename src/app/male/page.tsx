import React, { FunctionComponent } from "react";
import ProductCard from "../components/ProductCard";
import Wrapper from "../components/Wrapper";
import { createClient } from "contentful";
import RecipeCard from "../components/RecipeCard";
import { client } from "../../../sanity/lib/sanityClients";
 import { Image as IImage} from "sanity";
import Image from "next/image";

const getProductData = async () => {
    const res = client.fetch(`*[_type=='product' && category -> name == 'Male'] {
        title,type,
          _id, price,image,slug,
          category ->{
            name
          }
      }`);
  return res;
};
 
interface IProd{
  title:string;
  type:string;
  slug:{
    current:string,
    _type:string
  }
  _id:string;
  price:number;
  image: IImage;
  category: string;
}

export default async function Male() {

  const data:IProd[] = await getProductData();
 
  return (
    <section>
      <Wrapper>
        {/* ALL PRODUCTS CONTAINER - START */}
        <div className="grid grid-cols-4 gap-y-16">
        {
          data.map((item,index) =>(
            <ProductCard key={index} title={item.title} id={item._id} price={item.price} image={item.image} slug={item.slug} type={item.type} />
          ))
        }           
        </div>
        {/* ALL PRODUCTS CONTAINER - END */}
      </Wrapper>
    </section>
  );
}
