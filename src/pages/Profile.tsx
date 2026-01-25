import {
  Card,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { HeartIcon } from "@heroicons/react/24/outline";
import {
  BriefcaseIcon,
  ChatBubbleBottomCenterTextIcon,
  EllipsisVerticalIcon,
  MapPinIcon,
} from "@heroicons/react/24/solid";
import { Apple, Figma, GoalIcon, Twitch } from "lucide-react";

const Profile = () => {
  return (
    <>
      <div className="grid grid-cols-4 h-full">
        <div className="col-span-4 lg:col-span-1 p-2">
          <img
            src="https://picsum.photos/200/1"
            alt="1"
            className="h-26 w-26 rounded-sm"
          />
          <div className="font-bold text-xl">Thomas Lean</div>
          <div className="flex gap-2 py-1 items-cente">
            <BriefcaseIcon className="h-5 w-5" />
            <div className="text-sm text-gray-600">Front End Developer</div>
          </div>
          <div className="flex gap-2 py-1 items-cente">
            <MapPinIcon className="h-5 w-5" />
            <div className="text-sm text-gray-600">United State of America</div>
          </div>
          <div className="pt-4">
            <div className="text-gray-600">Email Address</div>
            <div>thomas@example.com</div>
          </div>
          <div className="pt-4">
            <div className="text-gray-600">Home Address</div>
            <div>
              92 Miles Drive, Newark, NJ 07103, Califarnia, United States of
              America
            </div>
          </div>
          <div className="pt-4">
            <div className="text-gray-600">Phone Number</div>
            <div>+00 123 456 789 / +12 345 678</div>
          </div>
          <div className="pt-4">
            <div className="font-bold mb-2">About Me</div>
            <p className="text-gray-600">
              Dedicated, passionate, and accomplished Full Stack Developer with
              9+ years of progressive experience working as an Independent
              Contractor for Google and developing and growing my educational
              social network that helps others learn programming, web design,
              game development, networking.
            </p>
          </div>
          <div className="pt-4">
            <div className="font-bold mb-2">Software Skill</div>
            <div>
              <Figma />
            </div>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-2 bg-white hidden lg:flex flex-col gap-2 p-2 max-h-full overflow-auto">
          <Card className="w-full h-fit">
            <CardContent>
              <div className="flex gap-4 w-full mb-4">
                <img
                  src="https://picsum.photos/200/1"
                  alt="2"
                  className="h-16 w-16 rounded-md"
                />
                <div>
                  <div className="font-bold">Thomas Lean</div>
                  <div className="text-gray-600 text-xs">
                    12 April at 09.28 PM
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <EllipsisVerticalIcon className="h-6 w-6 self-end" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <div>
                  <p>
                    Hi <b>@everyone,</b> the new design are attached. Go check
                    them out and let me know if I missed anything. Thanks!
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://picsum.photos/200/1"
                    alt="2"
                    className="h-44 w-44 rounded-2xl"
                  />
                  <img
                    src="https://picsum.photos/200/1"
                    alt="2"
                    className="h-44 w-44 rounded-2xl"
                  />
                </div>
              </div>
              <div className="flex gap-10 py-2 border-y">
                <div className="flex gap-2 items-center">
                    <ChatBubbleBottomCenterTextIcon className="h-5 w-5"/>
                    <div>7</div>
                    Comments
                </div>
                <div className="flex gap-2 items-center">
                    <HeartIcon className="h-5 w-5"/>
                    <div>12</div>
                    Likes
                </div>
              </div>
            </CardContent>
            <CardFooter>
                <Textarea placeholder="Write comment" className="rounded-xl bg-gray-100"/>
            </CardFooter>
          </Card>
          <Card className="w-full h-fit">
            <CardContent>
              <div className="flex gap-4 w-full mb-4">
                <img
                  src="https://picsum.photos/200/1"
                  alt="2"
                  className="h-16 w-16 rounded-md"
                />
                <div>
                  <div className="font-bold">Thomas Lean</div>
                  <div className="text-gray-600 text-xs">
                    12 April at 09.28 PM
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <EllipsisVerticalIcon className="h-6 w-6 self-end" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <div>
                  <p>
                    Hi <b>@everyone,</b> the new design are attached. Go check
                    them out and let me know if I missed anything. Thanks!
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://picsum.photos/200/1"
                    alt="2"
                    className="h-44 w-44 rounded-2xl"
                  />
                  <img
                    src="https://picsum.photos/200/1"
                    alt="2"
                    className="h-44 w-44 rounded-2xl"
                  />
                </div>
              </div>
              <div className="flex gap-10 py-2 border-y">
                <div className="flex gap-2 items-center">
                    <ChatBubbleBottomCenterTextIcon className="h-5 w-5"/>
                    <div>7</div>
                    Comments
                </div>
                <div className="flex gap-2 items-center">
                    <HeartIcon className="h-5 w-5 fill-red-600"/>
                    <div>12</div>
                    Likes
                </div>
              </div>
            </CardContent>
            <CardFooter>
                <Textarea placeholder="Write comment" className="rounded-xl bg-gray-100"/>
            </CardFooter>
          </Card>
          <Card className="w-full h-fit">
            <CardContent>
              <div className="flex gap-4 w-full mb-4">
                <img
                  src="https://picsum.photos/200/1"
                  alt="2"
                  className="h-16 w-16 rounded-md"
                />
                <div>
                  <div className="font-bold">Thomas Lean</div>
                  <div className="text-gray-600 text-xs">
                    12 April at 09.28 PM
                  </div>
                </div>
                <div className="flex-1 flex flex-col">
                  <EllipsisVerticalIcon className="h-6 w-6 self-end" />
                </div>
              </div>
              <div className="flex flex-col gap-2 mb-4">
                <div>
                  <p>
                    Hi <b>@everyone,</b> the new design are attached. Go check
                    them out and let me know if I missed anything. Thanks!
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <img
                    src="https://picsum.photos/200/1"
                    alt="2"
                    className="h-44 w-44 rounded-2xl"
                  />
                  <img
                    src="https://picsum.photos/200/1"
                    alt="2"
                    className="h-44 w-44 rounded-2xl"
                  />
                </div>
              </div>
              <div className="flex gap-10 py-2 border-y">
                <div className="flex gap-2 items-center">
                    <ChatBubbleBottomCenterTextIcon className="h-5 w-5"/>
                    <div>7</div>
                    Comments
                </div>
                <div className="flex gap-2 items-center">
                    <HeartIcon className="h-5 w-5"/>
                    <div>12</div>
                    Likes
                </div>
              </div>
            </CardContent>
            <CardFooter>
                <Textarea placeholder="Write comment" className="rounded-xl bg-gray-100"/>
            </CardFooter>
          </Card>
        </div>
        <div className="col-span-4 lg:col-span-1 p-2">
          <h2 className="font-bold mb-2 mt-4 lg:mt-0">Experience</h2>
          <div className="flex gap-2 items-center border-b py-2">
            <div>
              <Twitch />
            </div>
            <div>
              <div className="font-bold">Twitch</div>
              <div className="text-xs text-gray-600">
                Web Developer, New York USA
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center border-b py-2">
            <div>
              <Apple />
            </div>
            <div>
              <div className="font-bold">Apple</div>
              <div className="text-xs text-gray-600">
                Web Developer, Palo Alto USA
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center border-b py-2">
            <div>
              <GoalIcon />
            </div>
            <div>
              <div className="font-bold">Google</div>
              <div className="text-xs text-gray-600">
                Frontend Developer, California USA
              </div>
            </div>
          </div>
          <h2 className="font-bold mb-2 mt-4">Education</h2>
          <div className="flex gap-2 items-center border-b py-2">
            <div>
              <Twitch />
            </div>
            <div>
              <div className="font-bold">Twitch</div>
              <div className="text-xs text-gray-600">
                Web Developer, New York USA
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center border-b py-2">
            <div>
              <Apple />
            </div>
            <div>
              <div className="font-bold">Apple</div>
              <div className="text-xs text-gray-600">
                Web Developer, Palo Alto USA
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center border-b py-2">
            <div>
              <GoalIcon />
            </div>
            <div>
              <div className="font-bold">Google</div>
              <div className="text-xs text-gray-600">
                Frontend Developer, California USA
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
