import { NextRequest,NextResponse } from "next/server"
import {db, cartTable} from '@/../sanity/lib/drizzle'
import {v4 as uuid} from 'uuid'
import { cookies } from "next/headers"
import { InferModel, eq, sql } from 'drizzle-orm';

export async function GET(request: NextRequest, {params} : {params : {id : string}}) {
      
    try {
        const res = await db.select().from(cartTable).where(eq(cartTable.user_id, params.id))
        const data = res.filter((e)=> e.user_id === params.id)
        //console.log(data);
        
        return NextResponse.json(data)
    } catch (error) {
        console.log(error);
        return NextResponse.json({message : "Data not Found!"})
        
    }
  }

  export async function DELETE(request : NextRequest, {params}:{ params :{id : any}}){
    const {id} = params;

    // delete that product id from database 
    try {
            //query for deleteting user_id data 
    const res = await db.delete(cartTable).where(eq(cartTable.product_id , params.id));
    console.log("data deleted",res);
    return NextResponse.json(res);

    } catch (error) {
        console.log(error);
        return NextResponse.json({message : "Data Not Found!"})
        
    }
}