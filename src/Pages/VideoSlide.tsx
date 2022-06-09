import { AutoplayType } from 'embla-carousel-autoplay';
import { EmblaCarouselType } from 'embla-carousel-react';
import { useEffect, useRef } from 'react';
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
  const currentSlide = emblaApi?.slidesInView()[0];
  const videoPlayer = useRef<ReactPlayer>(null);

  useEffect(() => {
    // if slide changed to video slide, rewind video back to start
    // also pause the carousel's autoplay until the video is done playing
    if (currentSlide === 2) {
      videoPlayer.current?.seekTo(0);
      autoPlay?.stop();
    }
  }, [currentSlide]);

  return (
    <div className="embla__slide flex items-center justify-center bg-base-100 p-12">
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-black ">
        <ReactPlayer
          style={{ borderRadius: '0.5rem', overflow: 'hidden' }}
          width={'100%'}
          height={'100%'}
          onEnded={() => {
            setTimeout(() => {
              emblaApi?.scrollNext();
              autoPlay?.play();
            }, 2000);
          }}
          ref={videoPlayer}
          url={videoURL}
          playing={true}
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
          wid
        />
      </div>
    </div>
  );
}

export default VideoSlide;
