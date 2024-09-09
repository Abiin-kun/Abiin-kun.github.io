import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getFirestore } from "firebase-admin/firestore";

export const POST: APIRoute = async ({ request, redirect }) => {
  const formData = await request.formData();
  const post = formData.get("post")?.toString();
  const comment = formData.get("comment")?.toString();
  const author = formData.get("author")?.toString();
  if (!post || !comment || !author) {
    return new Response("Missing required fields", {
      status: 400,
    });
  }
  try {
    const db = getFirestore(app);
    const commentsRef = db.collection("comments");
    var currentdate = new Date(); 
    await commentsRef.add({
      timeAdded :currentdate,
      author: author,
      comment: comment,
      postId: post,
    });
  } catch (error) {
    return new Response("Something went wrong, error for reference" + error, {
      status: 500,
    });
  }
  return redirect("/blog/"+post);
};