import videoData from "@/lib/video.json";

export async function GET(request) {
  return new Response(JSON.stringify(videoData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
