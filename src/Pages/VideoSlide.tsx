import { AutoplayType } from 'embla-carousel-autoplay';
import { EmblaCarouselType } from 'embla-carousel-react';
import { useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

function VideoSlide({
  emblaApi,
  autoPlay,
}: {
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
    <div className="embla__slide flex items-center justify-center bg-slate-200 p-12">
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-white ">
        {' '}
        <p className="text-xl font-extrabold">
          <ReactPlayer
            onEnded={() => autoPlay?.play()}
            ref={videoPlayer}
            url={'https://www.youtube.com/watch?v=jXiiulGxrT4'}
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
        </p>
      </div>
    </div>
  );
}

export default VideoSlide;
