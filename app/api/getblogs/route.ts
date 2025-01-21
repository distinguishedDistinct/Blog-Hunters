import { NextResponse } from "next/server";
import fs from "fs/promises";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const slug = url.searchParams.get("slug"); // Get the slug from query parameter

  if (!slug) {
    return NextResponse.error(); // Return an error if the slug is missing
  }

  try {
    const filePath = `app/blogdata/${slug}.json`;
    const data = await fs.readFile(filePath, "utf-8"); // Read the JSON file
    const parsedData = JSON.parse(data); // Parse the JSON content
    return NextResponse.json(parsedData); // Return the parsed data
  } catch (err) {
    console.error("Error reading file:", err);
    return NextResponse.json("No such file was found"); // Handle the error if the file is not found
  }
}
