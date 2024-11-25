"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music2, Loader2 } from "lucide-react";
import useSWR from "swr";

interface DiscordStatus {
  isPlaying: boolean;
  title?: string;
  artist?: string;
  albumName?: string;
  albumImageUrl?: string;
  songUrl?: string;
  startedAt?: number;
  endsAt?: number;
  error?: string;
}

const fetcher = async (url: string) => {
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export default function DiscordNowPlaying() {
  const { data, error, isLoading, mutate } = useSWR<DiscordStatus>(
    "/api/discord-status",
    fetcher,
    {
      refreshInterval: 1000,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      dedupingInterval: 1000,
    }
  );

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        mutate();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, [mutate]);

  useEffect(() => {
    const interval = setInterval(() => {
      mutate();
    }, 1000);
    return () => clearInterval(interval);
  }, [mutate]);

  if (isLoading) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground w-[200px]">
        <Loader2 className="h-4 w-4 animate-spin" />
        <span>Chargement...</span>
      </div>
    );
  }

  if (error || !data?.isPlaying) {
    return (
      <div className="flex items-center gap-2 text-sm text-muted-foreground w-[200px]">
        <Music2 className="h-4 w-4" />
        <span>Aucune lecture en cours</span>
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait">
      <motion.a
        key={`${data.title}-${data.artist}`}
        href={data.songUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 rounded-md bg-secondary/50 backdrop-blur-sm px-3 py-1.5 hover:bg-secondary/70 transition-colors group w-[200px]"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
      >
        {data.albumImageUrl && (
          <div className="relative flex-shrink-0 w-8 h-8 rounded-md overflow-hidden">
            <motion.img
              src={data.albumImageUrl}
              alt={`${data.title} album art`}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/30 group-hover:from-black/20 group-hover:to-black/40 transition-colors" />
          </div>
        )}

        <div className="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div className="relative overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-sm font-medium inline-block">
                {data.title}
              </span>
              {data.title && data.title.length > 15 && (
                <>
                  <span className="text-sm font-medium inline-block mx-3 text-muted-foreground">
                    •
                  </span>
                  <span className="text-sm font-medium inline-block">
                    {data.title}
                  </span>
                </>
              )}
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="animate-marquee whitespace-nowrap">
              <span className="text-xs text-muted-foreground inline-block">
                {data.artist}
              </span>
              {data.artist && data.artist.length > 20 && (
                <>
                  <span className="text-xs text-muted-foreground inline-block mx-3">
                    •
                  </span>
                  <span className="text-xs text-muted-foreground inline-block">
                    {data.artist}
                  </span>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="flex-shrink-0 flex space-x-1">
          <span className="w-1 h-3 bg-primary rounded-full animate-music-bar [animation-delay:0.5s]" />
          <span className="w-1 h-3 bg-primary rounded-full animate-music-bar [animation-delay:1s]" />
          <span className="w-1 h-3 bg-primary rounded-full animate-music-bar [animation-delay:2s]" />
        </div>
      </motion.a>
    </AnimatePresence>
  );
}
