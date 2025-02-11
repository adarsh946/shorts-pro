import { authOption } from "@/lib/authOption";
import connectDb from "@/lib/connectdb";

import Video, { IVideo } from "@/models/Video";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

async function GET() {
  try {
    await connectDb();
    const video = await Video.find({}).sort({ createdAt: -1 }).lean();

    if (!video || video.length === 0) {
      return NextResponse.json([], { status: 200 });
    }

    return NextResponse.json(video);
  } catch (error) {
    return NextResponse.json(
      {
        error: "unable to fetch the video",
      },
      { status: 500 }
    );
  }
}

async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOption);
    if (!session) {
      return NextResponse.json(
        { message: "user in not authenticated" },
        { status: 404 }
      );
    }
    await connectDb();
    const body: IVideo = await req.json();

    console.log(body);

    if (
      !body.title ||
      !body.description ||
      !body.videoUrl ||
      !body.thumbnailUrl
    ) {
      return NextResponse.json(
        { message: "please provide all fields" },
        { status: 400 }
      );
    }

    const newVideoData = {
      ...body,
      controls: body.controls ?? true,
      transformation: {
        height: 1920,
        width: 1080,
        quality: body.transformation?.quality ?? 100,
      },
    };

    const newVideo = await Video.create(newVideoData);

    return NextResponse.json(newVideo, { status: 200 });
  } catch (error) {
    console.error("Error creating video:", error);
    return NextResponse.json(
      { error: "Failed to create video" },
      { status: 500 }
    );
  }
}
