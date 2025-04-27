

const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const noteId = searchParams.get("noteId");
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/note/${noteId}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return new Response(JSON.stringify(data));
}


const POST = async (req: Request) => {
  const { title, content } = await req.json();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/note`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        title,
        content,
      }),
    }
  );
  const data = await response.json();
  return new Response(JSON.stringify(data));
}

const PUT = async (req: Request) => {
  const { noteId, title, content } = await req.json();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/note/${noteId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      body: JSON.stringify({
        title,
        content,
      }),
    }
  );
  const data = await response.json();
  return new Response(JSON.stringify(data));
}

const DELETE = async (req: Request) => {
  const { noteId } = await req.json();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/note/${noteId}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    }
  );
  const data = await response.json();
  return new Response(JSON.stringify(data));
}
export { GET, POST, PUT, DELETE };