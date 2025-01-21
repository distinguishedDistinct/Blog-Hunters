import { NextResponse } from "next/server";
import fs from "fs/promises";

export async function GET(req: Request) {
  try {
    const data = await fs.readdir("app/blogdata"); // Read the directory to get files
    let allBlogs = []; // Array to store the content of all blog files

    // Loop through each item in the directory
    for (const item of data) {
      console.log(item);
      const fileContent = await fs.readFile("app/blogdata/" + item, "utf-8"); // Wait for the file content to be read
      console.log(fileContent);
      allBlogs.push(JSON.parse(fileContent)); // Assuming the file content is JSON
    }

    return NextResponse.json(allBlogs); // Return the parsed data (all blog contents)
  } catch (err) {
    console.error("Error reading file:", err);
    return NextResponse.json({ message: "No such folder was found" }); // Handle error properly
  }
}
