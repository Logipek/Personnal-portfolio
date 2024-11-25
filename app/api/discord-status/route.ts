import { NextResponse } from "next/server";
import { headers } from "next/headers";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const userId = process.env.DISCORD_USER_ID;
    const headersList = headers();
    const timestamp = headersList.get("x-timestamp") || Date.now().toString();

    const response = await fetch(
      `https://api.lanyard.rest/v1/users/${userId}?timestamp=${timestamp}`,
      {
        cache: "no-store",
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch Discord status");
    }

    const data = await response.json();
    const spotify = data.data?.spotify;

    if (!spotify) {
      return NextResponse.json(
        { isPlaying: false },
        {
          headers: {
            "Cache-Control": "no-cache, no-store, must-revalidate",
            Pragma: "no-cache",
            Expires: "0",
          },
        }
      );
    }

    return NextResponse.json(
      {
        isPlaying: true,
        title: spotify.song,
        artist: spotify.artist,
        albumName: spotify.album,
        albumImageUrl: spotify.album_art_url,
        songUrl: `https://open.spotify.com/track/${spotify.track_id}`,
        startedAt: spotify.timestamps.start,
        endsAt: spotify.timestamps.end,
      },
      {
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  } catch (error) {
    console.error("Error fetching Discord status:", error);
    return NextResponse.json(
      {
        isPlaying: false,
        error:
          error instanceof Error ? error.message : "An unknown error occurred",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      }
    );
  }
}
