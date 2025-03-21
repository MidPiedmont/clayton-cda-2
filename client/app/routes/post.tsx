import type { Route } from "./+types/post";

export async function loader({ params }: Route.LoaderArgs) {
  let postID = params.postID;
  return { postID };
}

export async function action() {}

export default function Post({ loaderData }: Route.ComponentProps) {
  return(
    <div className="flex flex-col items-center justify-center min-h-svh">
      {" "}
      <p>Post ID: {loaderData.postID}</p>
    </div>
  )
}
