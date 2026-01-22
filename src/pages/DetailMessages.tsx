import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { TagIcon } from "@heroicons/react/24/outline";
import {
  ArchiveBoxIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUturnLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  EllipsisHorizontalIcon,
  ExclamationCircleIcon,
  FaceSmileIcon,
  FolderOpenIcon,
  PaperAirplaneIcon,
  PaperClipIcon,
  PhotoIcon,
  PrinterIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const DetailMessages = () => {
  const [isReply, setIsReply] = useState(false);
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between px-6 py-8 bg-white border-b">
        <div className="flex items-center">
          <div className="pe-4 border-e-2 me-4">
            <ArrowLeftIcon className="h-5 w-5" />
          </div>
          <div className="hidden lg:flex gap-4">
            <ClockIcon className="h-6 w-6" />
            <ExclamationCircleIcon className="h-6 w-6" />
            <ArchiveBoxIcon className="h-6 w-6" />
            <TagIcon className="h-5 w-5" />
            <div className="text-gray-400 text-sm">Today, 08:34 AM</div>
          </div>
          <div className="flex lg:hidden gap-4">
            <FolderOpenIcon className="h-6 w-6" />
            <ArchiveBoxIcon className="h-6 w-6" />
            <ArrowUturnLeftIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="hidden lg:flex gap-4">
          <ArrowUturnLeftIcon className="h-6 w-6" />
          <TrashIcon className="h-6 w-6" />
          <ChevronLeftIcon className="h-6 w-6" />
          <ChevronRightIcon className="h-6 w-6" />
        </div>
        <div className="flex lg:hidden gap-4">
          <EllipsisHorizontalIcon className="h-6 w-6" />
        </div>
      </div>
      <div className="flex-1 overflow-auto p-6 flex flex-col gap-6">
        <div className="flex relative gap-6">
          <img
            src="https://picsum.photos/200"
            alt="200"
            className="h-20 w-20 rounded-full"
          />
          <div>
            <div className="font-bold text-lg">Michael Gough</div>
            <div className="text-gray-400">name@company.com</div>
          </div>
          <div className="lg:hidden absolute bottom-0 right-0 text-gray-400 text-sm">
            Today, 08:34 AM
          </div>
        </div>
        <div className="text-2xl font-bold">
          Website Hosting Reviews Free The Best Resource For Hosting Comparison
        </div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus
          possimus aperiam non, temporibus adipisci sunt ipsam illo doloribus
          nesciunt. Vitae provident rerum reprehenderit blanditiis quis
          cupiditate deleniti minima pariatur? Ratione. Nemo quidem, fuga
          veritatis at facere quod praesentium corporis impedit laudantium quos
          fugit aliquam molestiae velit molestias illum enim. Maxime ipsa
          officia distinctio facere eaque, perspiciatis expedita labore cumque
          rem?
        </p>
        <p>
          Best Regards, <br /> Michael Gough
        </p>
      </div>
      <div className="p-6 bg-white flex flex-wrap gap-4">
        <div className="hidden lg:block">
          {isReply && (
            <div className="w-full">
              <Textarea
                placeholder="Write text here..."
                className="bg-gray-100 h-32"
              />
            </div>
          )}
          {!isReply ? (
            <div className="flex gap-4 border-e-2 border-gray-200 pe-4">
              <Button
                className="bg-blue-600"
                onClick={() => setIsReply(!isReply)}
              >
                <ArrowUturnLeftIcon className="h-4 w-4" />
                Reply
              </Button>
              <Button
                className="bg-white text-black border-gray-400"
                variant={"outline"}
              >
                <ArrowRightIcon className="h-4 w-4" />
                Forward
              </Button>
            </div>
          ) : (
            <div className="flex gap-4 border-e-2 border-gray-200 pe-4">
              <Button className="bg-blue-600">
                <PaperAirplaneIcon className="h-4 w-4" />
                Send
              </Button>
            </div>
          )}
        </div>
        <div className="lg:hidden">
          <div className="flex gap-4 border-e-2 border-gray-200 pe-4">
            <Button className="bg-blue-600">
              <PaperAirplaneIcon className="h-4 w-4" />
              Send
            </Button>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <FaceSmileIcon className="h-6 w-6" />
          <PaperClipIcon className="h-6 w-6" />
          <PhotoIcon className="h-6 w-6" />
          <PrinterIcon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default DetailMessages;
