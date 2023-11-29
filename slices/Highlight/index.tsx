import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Bounded } from "@/components/bounded";
import { Heading } from "@/components/heading";
import { CategoriesList } from "@/components/categories-list";

/**
 * Props for `Highlight`.
 */
export type HighlightProps = SliceComponentProps<Content.HighlightSlice>;

/**
 * Component for "Highlight" Slices.
 */
const Highlight = ({ slice }: HighlightProps): JSX.Element => {
  const components: JSXMapSerializer = {
    heading2: ({ children }) => <Heading>{children}</Heading>,
    heading4: ({ children }) => (
      <CardTitle className="text-lg md:text-xl">
        {children}
      </CardTitle>
    ),
  }

  return (
    <>
      <Bounded
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="py-16"
      >
        <PrismicRichText field={slice.primary.title} components={components} />

        <div className="grid grid-cols-1 gap-4 mt-8 md:gap-6 md:grid-cols-3">
          {slice.items.map((item, index) => {
            const formatted = new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(item.price!)

            return (
              <Card key={index}>
                <CardHeader>
                  <div className="relative w-full h-40 overflow-hidden">
                    <PrismicNextImage
                      field={item.image}
                      className="object-cover rounded-lg"
                      fill
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <PrismicRichText field={item.name} components={components} />
                  <CardDescription className="line-clamp-2">
                    {item.description}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <p>{formatted}</p>
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </Bounded>
      <div className="sticky top-0 w-full px-4 bg-background md:px-6">
        <CategoriesList />
      </div>
    </>
  );
};

export default Highlight;
