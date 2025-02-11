"use client";

import React, { useState } from "react";
import { IKUpload } from "imagekitio-next";
import { IKUploadResponse } from "imagekitio-next/dist/types/components/IKUpload/props";
import { Loader2 } from "lucide-react";

const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

interface FileUploadProps {
  onSuccess: (response: IKUploadResponse) => void;
  onProgress?: (progress: number) => void;
  fileType?: "video" | "image";
}

export default function FileUpload({
  onSuccess,
  onProgress,
  fileType = "image",
}: FileUploadProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onError = (err: { message: string }) => {
    setError(err.message);
    setIsLoading(false);
  };

  const handleSuccess = (res: IKUploadResponse) => {
    console.log(res);
    onSuccess(res);
    setError(null);
    setIsLoading(false);
  };

  const onUploadStart = () => {
    setIsLoading(true);
    setError(null);
  };

  const onUploadProgress = (evt: ProgressEvent) => {
    if (evt.lengthComputable && onprogress) {
      const percentageCompleted = (evt.loaded / evt.total) * 100;
      return Math.round(percentageCompleted);
    }
  };

  const validateFile = (file: File) => {
    if (fileType === "video") {
      if (!file.type.startsWith("video/")) {
        throw new Error("please upload a valid video type");
        return false;
      }
      if (file.size > 100 * 1024 * 1024) {
        throw new Error("video file size exceeds the limit");
        return false;
      }
    } else {
      const imageTypes = ["image/jpeg", "image/png", "image/jpg"];
      if (!imageTypes.includes(file.type)) {
        throw new Error("please upload valid type images");
        return false;
      }
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("image file size exceeds the limit");
        return false;
      }
    }
    return true;
  };

  return (
    <div className="space-y-2">
      <IKUpload
        fileName={fileType === "video" ? "video" : "image"}
        useUniqueFileName={true}
        validateFile={validateFile}
        folder={fileType === "video" ? "/videos" : "/images"}
        onError={onError}
        onSuccess={onSuccess}
        onUploadProgress={onUploadProgress}
        onUploadStart={onUploadStart}
        accept={fileType === "video" ? "video/*" : "image/*"}
      />

      {isLoading && (
        <div className="flex items-center gap-2 text-sm text-primary">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span>Uploading...</span>
        </div>
      )}

      {error && <div className="text-error text-sm">{error}</div>}
    </div>
  );
}
