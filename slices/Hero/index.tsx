import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/bounded";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  const components: JSXMapSerializer = {
    heading2: ({ children }) => (
      <h2 className="mb-2 text-2xl font-bold leading-10 md:text-4xl">{children}</h2>
    )
  };

  return (
    <>
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
      >
        <div className="relative w-full h-[128px] md:h-[328px] overflow-hidden drop-shadow-lg rounded-lg ring ring-white">
          <PrismicNextImage
            field={slice.primary.banner}
            className="object-cover rounded-lg"
            fill
          />
        </div>
        <div className="flex items-start pl-4 md:pl-20 gap-x-6">
          <PrismicNextImage
            field={slice.primary.avatar}
            className="object-cover w-20 h-20 -mt-4 rounded-lg md:w-40 md:h-40 drop-shadow-lg ring ring-white"
          />
          <div className="py-4">
            <PrismicRichText
              field={slice.primary.name}
              components={components}
            />
            <p>{slice.primary.city}</p>
            <p>{slice.primary.state}</p>
            {slice.primary.is_open ? <p>Aberto</p> : <p>Fechado</p>}
          </div>
        </div>
      </Bounded>
    </>
  );
};

export default Hero;
