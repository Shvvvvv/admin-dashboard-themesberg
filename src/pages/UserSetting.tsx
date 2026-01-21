import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Cog8ToothIcon } from "@heroicons/react/24/solid";
import { Dribbble, Facebook, GithubIcon, Twitter } from "lucide-react";

const UserSetting = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4">
        <div className="col-span-6 lg:col-span-2 grid gap-4 order-2 lg:order-1">
          <Card className="py-4 hidden lg:block">
            <CardContent className="px-4">
              <div className="flex gap-2 h-full">
                <img
                  className="rounded-sm h-full w-16"
                  src="https://picsum.photos/200"
                  alt="img1"
                />
                <div>
                  <CardTitle className="text-sm">Thomas Lean</CardTitle>
                  <CardDescription className="text-xs">
                    Senior Software Engineer
                  </CardDescription>
                  <Button
                    size={"sm"}
                    className="bg-blue-600 hover:bg-blue-600/50 text-xs rounded-xl py-0 mt-3 flex gap-2"
                  >
                    <Cog8ToothIcon />
                    Change Picture
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="py-4 gap-2">
            <CardHeader className="px-4">
              <CardTitle>Language & Time</CardTitle>
            </CardHeader>
            <CardContent className="px-4">
              <FieldGroup className="gap-4 md:grid md:grid-cols-2 lg:grid-cols-none">
                <Field className="md:col-span-1">
                  <FieldLabel>Select Language</FieldLabel>
                  <Select>
                    <SelectTrigger className="w-full text-gray-400 bg-gray-100 rounded-xl">
                      <SelectValue placeholder="Select a language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Language</SelectLabel>
                        <SelectItem value="uk">English [UK]</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
                <Field className="col-span-1">
                  <FieldLabel>Time Zone</FieldLabel>
                  <Select>
                    <SelectTrigger className="w-full text-gray-400 bg-gray-100 rounded-xl">
                      <SelectValue placeholder="Select a timezone" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Timezone</SelectLabel>
                        <SelectItem value="GMT+01:00">GMT+01:00</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>
              </FieldGroup>
            </CardContent>
          </Card>
          <Card className="py-4">
            <CardContent className="px-4">
              <div className="flex flex-col">
                <div className="font-bold pb-1 border-b">Social accounts</div>
                <div className="flex flex-wrap md:flex-nowrap gap-1 items-start py-2 border-b">
                  <Facebook className="h-4 w-4" />
                  <div className="flex flex-col flex-1">
                    <div className="text-sm font-semibold">
                      Facebook account
                    </div>
                    <div className="text-xs text-blue-600">
                      www.facebook.com/themesberg
                    </div>
                  </div>
                  <Button variant={"outline"} className="text-xs py-2 w-full md:w-fit">
                    Disconnect
                  </Button>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-1 items-start py-2 border-b">
                  <Twitter className="h-4 w-4" />
                  <div className="flex flex-col flex-1">
                    <div className="text-sm font-semibold">Twitter account</div>
                    <div className="text-xs text-blue-600">
                      www.twitter.com/themesberg
                    </div>
                  </div>
                  <Button variant={"outline"} className="text-xs py-2 w-full md:w-fit">
                    Disconnect
                  </Button>
                </div>
                <div className="flex flex-wrap md:flex-nowrap gap-1 items-start py-2 border-b">
                  <GithubIcon className="h-4 w-4" />
                  <div className="flex flex-col flex-1">
                    <div className="text-sm font-semibold">Github account</div>
                    <div className="text-xs text-gray-400">Not connected</div>
                  </div>
                  <Button className="text-xs py-2 bg-blue-600 hover:bg-blue-600/70 w-full md:w-fit">
                    Connect
                  </Button>
                </div>
                <div className="flex gap-1 items-start pt-2 flex-wrap md:flex-nowrap">
                  <Dribbble className="h-4 w-4" />
                  <div className="flex flex-col flex-1">
                    <div className="text-sm font-">Dribbble account</div>
                    <div className="text-xs text-gray-400">Not connected</div>
                  </div>
                  <Button className="text-xs py-2 bg-blue-600 hover:bg-blue-600/70 w-full md:w-fit">
                    Connect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="py-4">
            <CardContent className="px-4">
              <div className="flex flex-col">
                <div className="font-bold pb-1 border-b">Another accounts</div>
                <div className="flex gap-2 items-start py-2 border-b flex-wrap md:flex-nowrap">
                  <img
                    src="https://picsum.photos/200"
                    alt="acc1"
                    className="rounded-full h-8 w-8"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="text-sm font-semibold">Bonnie Green</div>
                    <div className="text-xs text-blue-600">New York, USA</div>
                    <div className="text-xs text-gray-400">
                      Last seen: 1 minute ago
                    </div>
                  </div>
                  <Button variant={"outline"} className="text-xs py-2 w-full md:w-fit">
                    Disconnect
                  </Button>
                </div>
                <div className="flex gap-2 items-start py-2 border-b flex-wrap md:flex-nowrap">
                  <img
                    src="https://picsum.photos/200"
                    alt="acc1"
                    className="rounded-full h-8 w-8"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="text-sm font-semibold">Bonnie Green</div>
                    <div className="text-xs text-blue-600">New York, USA</div>
                    <div className="text-xs text-gray-400">
                      Last seen: 1 minute ago
                    </div>
                  </div>
                  <Button variant={"outline"} className="text-xs py-2 w-full md:w-fit">
                    Disconnect
                  </Button>
                </div>
                <div className="flex gap-2 items-start pt-2 flex-wrap md:flex-nowrap">
                  <img
                    src="https://picsum.photos/200"
                    alt="acc1"
                    className="rounded-full h-8 w-8"
                  />
                  <div className="flex flex-col flex-1">
                    <div className="text-sm font-semibold">Bonnie Green</div>
                    <div className="text-xs text-blue-600">New York, USA</div>
                    <div className="text-xs text-gray-400">
                      Last seen: 1 minute ago
                    </div>
                  </div>
                  <Button variant={"outline"} className="text-xs py-2 w-full md:w-fit">
                    Disconnect
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-6 lg:col-span-4 grid gap-4 order-1 lg:order-2">
          <Card className="py-4">
            <CardHeader className="px-4">
              <CardTitle>General Information</CardTitle>
            </CardHeader>
            <CardContent className="px-4">
              <form>
                <FieldGroup className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      First Name
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Thomas"
                      required
                    />
                  </Field>
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Birthday
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="12/09/1786"
                      required
                      type="date"
                      className="text-gray-500"
                    />
                  </Field>
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Country
                    </FieldLabel>
                    <Select>
                      <SelectTrigger className="w-full text-gray-400 bg-gray-100 rounded-xl">
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Language</SelectLabel>
                          <SelectItem value="uk">English [UK]</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Phone Number
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Evil Rabbit"
                      required
                    />
                  </Field>
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Last Name
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Evil Rabbit"
                      required
                    />
                  </Field>
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Address
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Evil Rabbit"
                      required
                    />
                  </Field>
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Organization
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Evil Rabbit"
                      required
                    />
                  </Field>
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Email
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Evil Rabbit"
                      required
                    />
                  </Field>
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Zip/Postal Code
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Evil Rabbit"
                      required
                    />
                  </Field>
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Department
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Evil Rabbit"
                      required
                    />
                  </Field>
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      City
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Evil Rabbit"
                      required
                    />
                  </Field>
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Country
                    </FieldLabel>
                    <Select>
                      <SelectTrigger className="w-full text-gray-400 bg-gray-100 rounded-xl">
                        <SelectValue placeholder="Select a language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Language</SelectLabel>
                          <SelectItem value="uk">English [UK]</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </Field>
                </FieldGroup>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-600/75">
                  Update
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card className="py-4">
            <CardHeader className="px-4">
              <CardTitle>Password Information</CardTitle>
            </CardHeader>
            <CardContent className="px-4">
              <form>
                <FieldGroup className="grid grid-cols-2 gap-4">
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Current password
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Enter your current password"
                      required
                    />
                  </Field>
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      New password
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Enter your new password"
                      required
                      className="text-gray-500"
                    />
                  </Field>
                  <Field className="col-span-2 md:col-span-1">
                    <FieldLabel htmlFor="checkout-7j9-card-name-43j">
                      Confirm new password
                    </FieldLabel>
                    <Input
                      id="checkout-7j9-card-name-43j"
                      placeholder="Confirm your new password"
                      required
                      className="text-gray-500"
                    />
                  </Field>
                  <div className="col-span-2 lg:col-span-1">
                    <div>Password requirements:</div>
                    <p className="text-xs text-gray-400">
                      Ensure that these requirements are met:
                    </p>
                    <div className="flex flex-col text-xs text-gray-400 ms-4">
                      At least 10 character (and up to 1000 character)
                    </div>
                    <div className="flex flex-col text-xs text-gray-400 ms-4">
                      At least one lowercase character
                    </div>
                    <div className="flex flex-col text-xs text-gray-400 ms-4">
                      Inclusion of at least one special, e.g., special character
                    </div>
                  </div>
                </FieldGroup>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-600/75">
                  Update
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <Card className="py-4 col-span-1">
          <CardHeader>
            <CardTitle>Alert & Notifications</CardTitle>
            <CardDescription>
              <div>You can set up Themesberg to notificion </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4">
            <div className="flex flex-col">
              <div className="flex gap-2 items-start py-2 border-b flex-wrap md:flex-nowrap">
                <div className="flex flex-col flex-1">
                  <div className="text-sm font-semibold">Company News</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </div>
                </div>
                <Switch className="text-blue-600"></Switch>
              </div>
              <div className="flex gap-2 items-start py-2 border-b">
                <div className="flex flex-col flex-1">
                  <div className="text-sm font-semibold">Company News</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </div>
                </div>
                <Switch className="text-blue-600"></Switch>
              </div>
              <div className="flex gap-2 items-start py-2 border-b">
                <div className="flex flex-col flex-1">
                  <div className="text-sm font-semibold">Acccount Activity</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </div>
                </div>
                <Switch className="text-blue-600"></Switch>
              </div>
              <div className="flex gap-2 items-start py-2 border-b">
                <div className="flex flex-col flex-1">
                  <div className="text-sm font-semibold">Meetups Near You</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </div>
                </div>
                <Switch className="text-blue-600"></Switch>
              </div>
              <div className="flex gap-2 items-start py-2 border-b">
                <div className="flex flex-col flex-1">
                  <div className="text-sm font-semibold">Meetups Near You</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </div>
                </div>
                <Switch className="text-blue-600"></Switch>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hidden lg:block py-4 col-span-1">
          <CardHeader>
            <CardTitle>Email Settings</CardTitle>
            <CardDescription>
              <div>You can set up Themesberg to notificion </div>
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4">
            <div className="flex flex-col">
              <div className="flex gap-2 items-start py-2 border-b">
                <div className="flex flex-col flex-1">
                  <div className="text-sm font-semibold">Company News</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </div>
                </div>
                <Switch className="text-blue-600"></Switch>
              </div>
              <div className="flex gap-2 items-start py-2 border-b">
                <div className="flex flex-col flex-1">
                  <div className="text-sm font-semibold">Company News</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </div>
                </div>
                <Switch className="text-blue-600"></Switch>
              </div>
              <div className="flex gap-2 items-start py-2 border-b">
                <div className="flex flex-col flex-1">
                  <div className="text-sm font-semibold">Acccount Activity</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </div>
                </div>
                <Switch className="text-blue-600"></Switch>
              </div>
              <div className="flex gap-2 items-start py-2 border-b">
                <div className="flex flex-col flex-1">
                  <div className="text-sm font-semibold">Meetups Near You</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </div>
                </div>
                <Switch className="text-blue-600"></Switch>
              </div>
              <div className="flex gap-2 items-start py-2 border-b">
                <div className="flex flex-col flex-1">
                  <div className="text-sm font-semibold">Meetups Near You</div>
                  <div className="text-xs text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  </div>
                </div>
                <Switch className="text-blue-600"></Switch>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default UserSetting;
