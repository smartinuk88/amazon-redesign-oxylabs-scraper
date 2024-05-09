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
import AddToCart from "@/components/AddToCart";
import { List, NotepadText, PenLine, Star } from "lucide-react";
import PrimeTick from "@/public/images/amazon-prime-transparent.png";
import Link from "next/link";

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
    <div className="mx-7 md:mr-8 md:ml-52 mt-32 mb-20 min-h-screen">
      <div className="flex flex-col lg:flex-row mb-10">
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

        <div className="flex-1 w-full p-5 space-y-5">
          <h1 className="text-3xl font-bold">{product.title}</h1>

          <div className="flex items-center space-x-4">
            {product.rating && (
              <p className="text-amazon text-sm">
                {product.rating} ★
                <span className="text-gray-400 ml-2">
                  ({product.reviews_count} reviews)
                </span>
              </p>
            )}

            {product.is_prime_eligible && (
              <Image src={PrimeTick} alt="Amazon Prime tick icon" height={15} />
            )}
          </div>

          <p className="text-2xl font-bold mt-2">
            {product?.currency} {product.price}
          </p>

          <AddToCart product={product} />

          {product.variation && product.variation.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.variation.map((item) => (
                <Link
                  href={{ pathname: "/product", query: { asin: item.asin } }}
                  key={item.asin}
                  className={`flex items-center justify-center  rounded-md transition-all duration-75 p-2 cursor-pointer ${
                    item.selected
                      ? "border-2 border-amazon"
                      : "border border-cloudy"
                  }`}
                >
                  <Image
                    src={item.tooltip_image}
                    alt={`Variation for ${item.asin}`}
                    width={50}
                    height={50}
                    className="rounded-sm"
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      <hr />

      <div className="flex items-center justify-between space-x-4 border border-cloudy rounded-md shadow-md p-8 mb-10">
        <div className="hidden md:flex h-full items-center justify-center">
          <p className="text-center font-bold">Suggested Products</p>
        </div>
        <div className="flex overflow-x-auto justify-between items-center space-x-8 ">
          {product.ads.map((ad) => (
            <Link
              href={{ pathname: "/product", query: { asin: ad.asin } }}
              key={ad.asin}
              className="flex flex-col items-center justify-center w-[150px] h-[150px] p-4 transition-all duration-75 cursor-pointer hover:border-b-2 hover:border-b-amazon"
            >
              <div className="flex justify-center relative w-full mb-2">
                <Image
                  src={ad.images[0]}
                  alt={ad.title}
                  height={75}
                  width={75}
                />
              </div>
              <p className="text-center text-sm font-medium line-clamp-2">
                {ad.title}
              </p>
            </Link>
          ))}
        </div>
      </div>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center space-x-2">
              <NotepadText className="text-amazon" />{" "}
              <span className="font-bold">Overview</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p>{product.description}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <div className="flex items-center space-x-2">
              <List className="text-amazon" />{" "}
              <span className="font-bold">Features</span>
            </div>
          </AccordionTrigger>
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
          <AccordionTrigger>
            <div className="flex items-center space-x-2">
              <PenLine className="text-amazon" />{" "}
              <span className="font-bold">Specifications</span>
            </div>
          </AccordionTrigger>
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
          <AccordionTrigger>
            <div className="flex items-center space-x-2">
              <Star className="text-amazon" />{" "}
              <span className="font-bold">Top Review</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <p>{product.top_review}</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default ProductPage;
