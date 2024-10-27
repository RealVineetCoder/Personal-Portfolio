import { cn } from "@/utils/cn";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    img: "/images/image1.jpg",
  },
  {

    img: "/images/image2.jpg",
  },
  {

    img: "/images/image3.jpg",
  },
  {

    img: "/images/image4.jpg",
  },
  {

    img: "/images/image5.jpg",
  },
  {

    img: "/images/image6.jpg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded" width="60" height="60" alt="" src={img} />
      </div>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review,index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review,index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
