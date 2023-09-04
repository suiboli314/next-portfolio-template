"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel, {
  EmblaOptionsType,
  EmblaCarouselType,
} from "embla-carousel-react";
import { DotButton, useDotButton } from "./EmblaCarouselDotButton";
import Autoplay from "embla-carousel-autoplay";
import { flushSync } from "react-dom";
import imageByIndex from "@/components/imageByIndex";

import "./base.css";
import "./embla.css";
import "./sandbox.css";

const TWEEN_FACTOR = 1.2;

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

type PropType = {
  slides: number[];
  options?: EmblaOptionsType;
};

const EmblaCarousel = (props: PropType) => {
  const { slides, options } = props;

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [tweenValues, setTweenValues] = useState<number[][]>([]);

  const onButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
    const { autoplay } = emblaApi.plugins();
    if (!autoplay) return;
    if (autoplay.options.stopOnInteraction !== false) autoplay.stop();
  }, []);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onButtonClick
  );

  // Parallax scroll effect callback
  const onScroll = useCallback(() => {
    if (!emblaApi) return;

    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();

    const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
      let diffToTarget = scrollSnap - scrollProgress;

      if (engine.options.loop) {
        engine.slideLooper.loopPoints.forEach((loopItem) => {
          const target = loopItem.target();
          if (index === loopItem.index && target !== 0) {
            const sign = Math.sign(target);
            if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
            if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
          }
        });
      }
      const tmp = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
      const opacity = numberWithinRange(tmp, 0, 1);

      const tweenValues = diffToTarget * (-1 / TWEEN_FACTOR) * 100;
      return [tweenValues, opacity];
    });
    setTweenValues(styles);
  }, [emblaApi, setTweenValues]);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll();
    emblaApi.on("scroll", () => flushSync(() => onScroll()));
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  return (
    <div className="sandbox theme-dark">
      <div className="sandbox__carousel">
        <div className="embla">
          <div className="embla__viewport" ref={emblaRef}>
            <div className="embla__container">
              {slides.map((index) => (
                <div className="embla__slide" key={index}>
                  {/* <div className="embla__slide__number">
                    <span>{index + 1}</span>
                  </div> */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <div className="embla__parallax">
                    <div
                      className="embla__parallax__layer"
                      style={{
                        ...(tweenValues.length && {
                          transform: `translateX(${tweenValues[index][0]}%)`,
                          opacity: tweenValues[index][1],
                        }),
                      }}
                    >
                      <img
                        className="embla__slide__img"
                        src={imageByIndex(index)}
                        alt="Your alt text"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="embla__dots">
            {scrollSnaps.map((_, index) => (
              <DotButton
                key={index}
                onClick={() => onDotButtonClick(index)}
                className={"embla__dot".concat(
                  index === selectedIndex ? " embla__dot--selected" : ""
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
