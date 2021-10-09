import { getSession } from 'next-auth/client';
import prisma from '../../../lib/prisma'

//POST api/post
export default async function handler(req, res) {
  const { title, content } = req.body;
  
  const session = await getSession({ req })
  

  /* let email = undefined;
  if (session.user.email !== null) {
    email = session.user.email;
  } */
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      //author: { connect: { email: session?.user?.name } },
    }
  });
  res.json(result);
}