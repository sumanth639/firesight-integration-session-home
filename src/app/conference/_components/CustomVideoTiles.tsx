'use client';
import React from 'react';
import {
  LiveKitRoom,
  VideoConference,
  GridLayout,
  ParticipantTile,
  RoomAudioRenderer,
  ControlBar,
  useTracks,
} from '@livekit/components-react';
import { Track } from 'livekit-client';
import '@livekit/components-styles';

interface EmojiData {
  emoji: string;
  timestamp: number;
  username: string;
}

interface CustomVideoTilesProps {
  serverUrl: string;
  token: string;
  activeEmojis: { [key: string]: EmojiData };
}

export default function CustomVideoTiles({
  serverUrl,
  token,
  activeEmojis,
}: CustomVideoTilesProps) {
  console.log(activeEmojis);
  
  return (
    <LiveKitRoom
      token={token}
      serverUrl={serverUrl}
      connect={true}
      className="w-full h-[70vh] rounded-lg overflow-hidden bg-gray-900"
      data-lk-theme="default"
    >
      <VideoRoomContent activeEmojis={activeEmojis} />
    </LiveKitRoom>
  );
}

interface VideoRoomContentProps {
  activeEmojis: { [key: string]: EmojiData };
}

function VideoRoomContent({ activeEmojis }: VideoRoomContentProps) {
  const tracks = useTracks([Track.Source.Camera, Track.Source.ScreenShare]);

  // You can use activeEmojis here if needed, for example:
  console.log(activeEmojis);

  return (
    <VideoConference>
      <GridLayout tracks={tracks}>
        <ParticipantTile />
      </GridLayout>
      <RoomAudioRenderer />
      <ControlBar />
    </VideoConference>
  );
}
