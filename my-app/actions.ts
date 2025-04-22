"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { prisma } from "./app/utils/db";
import { redirect } from "next/navigation";
import { use } from "react";

export async function handleSubmission(formdata: FormData) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  if (!user) {
    return redirect("/api/auth/register");
  }
  const title = formdata.get("title");
  const content = formdata.get("content");
  const url = formdata.get("url");
  console.log(user);

  await prisma.blogPost.create({
    data: {
      title: title as string,
      content: content as string,
      imageUrl: url as string,
      authorId: user?.id as string,
      authorImage: user?.picture ?? null,
      authorName: user?.given_name as string,
    },
  });
  return redirect("/dashboard");
}
