import { AutoplayType } from 'embla-carousel-autoplay';
import useEmblaCarousel, { EmblaCarouselType } from 'embla-carousel-react';
import { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';

function VideoSlide({
  videoURL,
  emblaApi,
  autoPlay,
}: {
  videoURL: string;
  emblaApi: EmblaCarouselType | undefined;
  autoPlay: AutoplayType | undefined;
}) {
  const videoPlayer = useRef<ReactPlayer>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    // if slide changed to video slide, rewind video back to start
    // also pause the carousel's autoplay until the video is done playing
    emblaApi?.on('settle', () => {
      setPlaying(false);

      if (emblaApi?.selectedScrollSnap() == 2) {
        autoPlay?.stop();
        videoPlayer.current?.seekTo(0);
        setPlaying(true);
      }
    });

    return () => {
      emblaApi?.off('settle', () => {});
    };
  }, [emblaApi]);

  return (
    <div className="embla__slide flex items-center justify-center bg-base-100 p-12">
      <div className=" flex h-full w-full items-center justify-center rounded-[10%]">
        <ReactPlayer
          style={{
            borderRadius: '0.5rem',
            overflow: 'hidden',
          }}
          width={'auto'}
          height={'100%'}
          onEnded={() => {
            setTimeout(() => {
              emblaApi?.scrollNext();
              autoPlay?.play();
            }, 2000);
          }}
          ref={videoPlayer}
          url={videoURL}
          playing={playing}
          muted={true}
          config={{
            youtube: {
              playerVars: {
                showinfo: 0,
                controls: 0,
                autoPlay: 0,
                modestbranding: 1,
                rel: 0,
                cc_load_policy: 1,
              },
              embedOptions: {
                showinfo: 0,
                controls: 0,
                autoPlay: 0,
                modestbranding: 1,
                rel: 0,
                cc_load_policy: 1,
              },
            },
          }}
        />
      </div>
    </div>
  );
}

export default VideoSlide;
