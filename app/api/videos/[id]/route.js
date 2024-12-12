import videoData from "@/lib/video.json";

export async function GET(request, { params }) {
  const videoByID = videoData.find((video) => video.videoId === params.id);

  return new Response(JSON.stringify(videoByID), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export async function PATCH(request, { params }) {
  const data = await request.json();

  const allowedFields = ["title", "description"];

  // Check if there are any fields in the request that are not allowed
  const invalidFields = Object.keys(data).filter(
    (key) => !allowedFields.includes(key)
  );

  if (invalidFields.length > 0) {
    return new Response(
      JSON.stringify({
        message: `Invalid fields: ${invalidFields.join(", ")}`,
      }),
      {
        status: 400, // Bad Request
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }

  if (data.title || data.description) {
    // Update the video with the matching videoId
    const updatedData = videoData.map((video) => {
      return video.videoId === params.id
        ? {
            ...video,
            title: data.title || video.title,
            description: data.description || video.description,
          }
        : video;
    });

    // Find the updated video by videoId
    const updatedVideo = updatedData.find(
      (video) => video.videoId === params.id
    );

    // If video is found, return the updated video, otherwise return a not found response
    if (updatedVideo) {
      return new Response(JSON.stringify(updatedVideo), {
        status: 200,
        headers: {
          "Content-Type": "application/json", // Fixed Content-Type header
        },
      });
    } else {
      return new Response(JSON.stringify({ message: "Video not found" }), {
        status: 404,
        headers: {
          "Content-Type": "application/json", // Fixed Content-Type header
        },
      });
    }
  } else {
    return new Response(
      JSON.stringify({ message: "at least one field need to update" }),
      {
        status: 404,
        headers: {
          "Content-Type": "application/json", // Fixed Content-Type header
        },
      }
    );
  }
}

export async function DELETE(request, { params }) {
  // Find the item to be deleted
  const deletedItem = videoData.find((video) => video.videoId === params.id);

  if (!deletedItem) {
    // If no video was found, return an error (video not found)
    return new Response(JSON.stringify({ message: "Video not found" }), {
      status: 404, // Not Found
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  // Filter out the deleted item
  const filteredData = videoData.filter((video) => video.videoId !== params.id);

  // Return the deleted item in the response
  return new Response(
    JSON.stringify({ message: "Video deleted successfully", deletedItem }),
    {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
}
