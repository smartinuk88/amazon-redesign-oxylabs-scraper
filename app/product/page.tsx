import fetchProduct from "@/lib/fetchProduct";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {
  searchParams: {
    asin: string;
  };
};

async function ProductPage({ searchParams: { asin } }: Props) {
  const product = await fetchProduct(asin);
  if (!product) return notFound();

  const detailsArray = Object.entries(product.product_details).map(
    ([key, value]) => ({
      key,
      value,
    })
  );

  const bulletsArray = product.bullet_points.split("\n");

  console.log(product);
  return (
    <div className="mx-7 md:mr-8 md:ml-52 mt-32 mb-20 min-h-screen flex flex-col lg:flex-row">
      <div className="hidden lg:inline space-y-2">
        {product.images.map((image, i) => (
          <Image
            key={image}
            src={image}
            alt={product.title + " " + i}
            width={50}
            height={50}
            className="border border-cloudy rounded-md"
          />
        ))}
      </div>

      <Carousel
        opts={{
          loop: true,
        }}
        className="w-2/6 mb-10 lg:mb-0 self-start flex items-center max-w-xl mx-auto lg:mx-20"
      >
        <CarouselContent>
          {product.images.map((image, i) => (
            <CarouselItem key={i}>
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center relative">
                  <Image
                    key={image}
                    src={image}
                    alt={product.title + " " + i}
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className="flex-1 border border-cloudy rounded-md w-full p-5 space-y-5">
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <div className="space-y-5"></div>

        {product.rating && (
          <p className="text-yellow-500 text-sm">
            {product.rating} ★
            <span className="text-gray-400 ml-2">
              ({product.reviews_count} reviews)
            </span>
          </p>
        )}

        <p className="text-2xl font-bold mt-2">
          {product?.currency} {product.price}
        </p>

        <hr />

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Overview</AccordionTrigger>
            <AccordionContent>
              <p>{product.description}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Features</AccordionTrigger>
            <AccordionContent>
              <ul className="list-disc pl-5 space-y-2">
                {bulletsArray.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-2">
            <AccordionTrigger>Specifications</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="">Specification</TableHead>
                    <TableHead>Value</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {detailsArray.map((detail) => (
                    <TableRow key={detail.key}>
                      <TableCell className="font-bold">
                        {detail.key.replace(/_/g, " ")}
                      </TableCell>
                      <TableCell>{detail.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-3">
            <AccordionTrigger>Top Review</AccordionTrigger>
            <AccordionContent>
              <p>{product.top_review}</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}

export default ProductPage;
