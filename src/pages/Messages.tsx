import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Toggle } from "@/components/ui/toggle";
import { Squares2X2Icon, StarIcon } from "@heroicons/react/24/outline";
import {
  ArchiveBoxIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
  ExclamationCircleIcon,
  EyeIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";

const Messages = () => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between px-6 py-8 bg-white border-b">
        <div className="flex">
          <div className="pe-4 border-e-2 me-4">
            <Checkbox className="data-[state=checked]:bg-blue-600 h-5 w-5" />
          </div>
          <div className="flex gap-4">
            <TrashIcon className="h-6 w-6" />
            <ArchiveBoxIcon className="h-6 w-6" />
            <ExclamationCircleIcon className="h-6 w-6" />
            <EllipsisVerticalIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="hidden lg:flex gap-4">
          <Squares2X2Icon className="h-6 w-6" />
          <ChevronLeftIcon className="h-6 w-6" />
          <ChevronRightIcon className="h-6 w-6" />
          <div>Show 1-5 of 4,787</div>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="grid grid-cols-6 py-4 px-6 border-b-2 bg-gray-100 items-center relative">
          <div className="col-span-6 lg:col-span-1 flex gap-2 items-center">
            <Checkbox className="data data-[state=checked]:bg-blue-600 h-5 w-5" />
            <Toggle className="group">
              <StarIcon className="size-6 group-data-[state=on]:fill-yellow-400" />
            </Toggle>
            <img
              src="https://picsum.photos/200"
              alt="200"
              className="h-8 w-8 rounded-sm"
            />
            <div className="font-bold">Bonnie Green</div>
          </div>
          <p className="overflow-hidden whitespace-nowrap text-ellipsis col-span-6 lg:col-span-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            illo eius hic similique placeat cumque, corrupti ducimus voluptates
            in quisquam dolores deleniti repellendus aliquid perferendis
            provident eveniet maiores modi nam! Maxime ipsa accusantium nemo
            culpa quod sit mollitia quos iste harum natus assumenda impedit
            similique labore reprehenderit velit beatae quaerat incidunt
            exercitationem, minima ratione! Alias inventore veritatis amet
            possimus ipsa. Velit rem reprehenderit atque amet mollitia nulla
            rerum sed ullam eveniet debitis, recusandae id dolore accusamus
            dolores laborum corrupti porro! Placeat dolore harum consequatur
            ducimus, vel unde laborum officia nam!
          </p>
          <div className="absolute lg:relative top-2 lg:top-0 right-2 lg:right-0 col-span-1 flex justify-end">
            12:48 PM
          </div>
        </div>
      </div>
      <div className="p-6 bg-white">
        <div className="hidden lg:flex justify-between">
          <div className="w-64">
            <div className="text-gray-400">3.24 GB of 15 GB</div>
            <Progress value={(3.24 / 15) * 100} />
          </div>
          <div className="text-gray-400 flex gap-3 items-center">
            Last account activity: <b className="text-black">2 hours ago</b>{" "}
            <EyeIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="lg:hidden">
          <div className="flex gap-4">
            <Squares2X2Icon className="h-6 w-6" />
            <ChevronLeftIcon className="h-6 w-6" />
            <ChevronRightIcon className="h-6 w-6" />
            <div>Show 1-5 of 4,787</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
