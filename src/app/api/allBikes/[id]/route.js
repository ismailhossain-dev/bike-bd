//manage product delete api
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
  try {
    const id = await params;
    console.log(id);

    const query = { _id: new ObjectId(id) };

    // console.log("id console", id, query, result);
    if (result.deletedCount === 1) {
      return NextResponse.json({ message: "Deleted successfully" }, { status: 200 });
    } else {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }
  } catch (error) {
    return NextResponse.json({ message: "Error", error: error.message }, { status: 500 });
  }
}
