import { defineField } from "sanity";


export const product = {
    name: "product",
    type: "document",
    title: "My Products",
    fields: [
        {
            name:"title",
            title:"Product Title",
            type:"string"
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: (input:string) => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          },
          {
            name:"type",
            title:"Product Type",
            type:"string"
        },        
        {
            name:"description",
            title:"Product Description",
            type:"string"
        },
        {
            name:"price",
            title:"Product Price",
            type:"number"
        },
        {
            name:"image",
            title:"Product Image",
            type:"image"
        },
        defineField({
            name:"category",
            title:"Product Category",
            type:"reference",
            to:[{
                type:"category"
            }]

        })
    ]
}