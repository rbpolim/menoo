import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

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
      <h2 className="text-2xl font-bold leading-10 md:text-4xl">{children}</h2>
    )
  };

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mt-28"
    >
      <div className="relative w-full h-[128px] md:h-[180px] overflow-hidden drop-shadow-lg rounded-lg ring ring-white">
        <PrismicNextImage
          field={slice.primary.banner}
          className="object-cover rounded-lg"
          fill
        />
      </div>
      <div className="flex items-start h-full pl-4 md:pl-20 gap-x-6">
        <PrismicNextImage
          field={slice.primary.avatar}
          className="object-cover w-20 h-20 -mt-4 rounded-lg md:w-40 md:h-40 drop-shadow-lg ring ring-white"
        />
        <div className="flex flex-col w-full h-full gap-4 mt-2">
          <PrismicRichText
            field={slice.primary.name}
            components={components}
          />
          <div className="flex flex-row gap-2 md:flex-col">
            <p className="text-sm">{slice.primary.city} | {slice.primary.state}</p>
            {slice.primary.is_open ? (
              <div className="flex items-center p-2 text-sm border rounded-md shadow-sm w-fit">
                <CheckCircle2 className="inline-block w-6 h-6 mr-2 text-emerald-700" />
                <p>Aberto agora</p>
              </div>
            ) : (
              <div className="flex items-center p-2 text-sm border rounded-md shadow-sm w-fit">
                <AlertCircle className="inline-block w-6 h-6 mr-2 text-rose-700" />
                <p>Fechado agora</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
