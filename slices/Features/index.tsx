import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { Bounded } from "@/components/bounded";
import { FeaturesList } from "@/components/features-list";

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="min-h-screen py-16"
    >
      <FeaturesList
        title={slice.primary.title}
        features={slice.items}
      />
    </Bounded>
  );
};

export default Features;
