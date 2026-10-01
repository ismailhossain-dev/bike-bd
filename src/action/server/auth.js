"use server";
// register and api work
import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import { ObjectId } from "mongodb";


export const postUser = async (payload) => {

  const hashPassword = await bcrypt.hash(payload.password, 10);

  const newUser = {
    ...payload,
    createAt: new Date().toISOString(),
    role: "user",
    password: hashPassword,
  };

  // console.log(newUser);

  const result = await dbConnect("users").insertOne(newUser);

  if (result.acknowledged) {
    return {
      success: true,
      message: `user create with ${result.insertedId.toString()}`,
    };
  }
  //server takle else cholbe
  else {
    return {
      success: false,
      message: "Something went long, try again",
    };
  }
};

//single data get bikes

export const getSingleProduct = async (id) => {
  try {
    const collection = dbConnect("bikeData");

    // 2. Query ready korun
    const query = { _id: new ObjectId(id) };

    const product = await collection.findOne(query);

    return product;
  } catch (error) {
    console.error("Data khujthe somossa hoyeche:", error);
    return null;
  }
};
