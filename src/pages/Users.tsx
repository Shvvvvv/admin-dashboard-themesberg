import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Cog8ToothIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  EllipsisVerticalIcon,
  ExclamationCircleIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Users = () => {
  const [isOpenEditUser, setIsOpenEditUser] = useState(false);
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between p-4 bg-white border-b">
        <div className="flex md:w-full lg:w-fit md:flex-wrap lg:flex-nowrap gap-4 items-center">
          <InputGroup className="bg-gray-50">
            <InputGroupInput placeholder="Search" />
            <InputGroupAddon>
              <MagnifyingGlassIcon className="w-5 h-5" />
            </InputGroupAddon>
          </InputGroup>
          <div className="flex gap-4 md:justify-end md:w-full">
            <Cog8ToothIcon className="h-6 w-6" />
            <TrashIcon className="h-6 w-6" />
            <ExclamationCircleIcon className="h-6 w-6" />
            <EllipsisVerticalIcon className="h-6 w-6" />
          </div>
        </div>
        <div className="hidden lg:flex gap-4 lg:items-center">
          <Button variant={"outline"}>
            <DocumentArrowDownIcon className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>NAME</TableHead>
              <TableHead>POSITION</TableHead>
              <TableHead>COUNTRY</TableHead>
              <TableHead>STATUS</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex gap-2">
                  <img
                    src="https://picsum.photos/200/1"
                    alt="200"
                    className="h-7 w-7 rounded-full"
                  />
                  <div>
                    <div className="font-bold">Neil Sims</div>
                    <div className="text-xs text-gray-400">
                      bonnie@example.com
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-bold">Front End Developer</TableCell>
              <TableCell>United States</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <div className="bg-green-400 h-2 w-2 rounded-full"></div>
                  Active
                </div>
              </TableCell>
              <TableCell className="flex justify-end px-4">
                <Button className="bg-blue-600 text-white">
                  <PencilSquareIcon className="h-4 w-4" />
                  Edit Item
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex gap-2">
                  <img
                    src="https://picsum.photos/200/2"
                    alt="200"
                    className="h-7 w-7 rounded-full"
                  />
                  <div>
                    <div className="font-bold">Neil Sims</div>
                    <div className="text-xs text-gray-400">
                      bonnie@example.com
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-bold">Front End Developer</TableCell>
              <TableCell>United States</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <div className="bg-green-400 h-2 w-2 rounded-full"></div>
                  Active
                </div>
              </TableCell>
              <TableCell className="flex justify-end px-4">
                <Button
                  className="bg-blue-600 text-white"
                  onClick={() => setIsOpenEditUser(!isOpenEditUser)}
                >
                  <PencilSquareIcon className="h-4 w-4" />
                  Edit Item
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex gap-2">
                  <img
                    src="https://picsum.photos/200/3"
                    alt="200"
                    className="h-7 w-7 rounded-full"
                  />
                  <div>
                    <div className="font-bold">Neil Sims</div>
                    <div className="text-xs text-gray-400">
                      bonnie@example.com
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-bold">Front End Developer</TableCell>
              <TableCell>United States</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <div className="bg-green-400 h-2 w-2 rounded-full"></div>
                  Active
                </div>
              </TableCell>
              <TableCell className="flex justify-end px-4">
                <Button className="bg-blue-600 text-white">
                  <PencilSquareIcon className="h-4 w-4" />
                  Edit Item
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex gap-2">
                  <img
                    src="https://picsum.photos/200/4"
                    alt="200"
                    className="h-7 w-7 rounded-full"
                  />
                  <div>
                    <div className="font-bold">Neil Sims</div>
                    <div className="text-xs text-gray-400">
                      bonnie@example.com
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-bold">Front End Developer</TableCell>
              <TableCell>United States</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <div className="bg-red-400 h-2 w-2 rounded-full"></div>
                  Offline
                </div>
              </TableCell>
              <TableCell className="flex justify-end px-4">
                <Button className="bg-blue-600 text-white">
                  <PencilSquareIcon className="h-4 w-4" />
                  Edit Item
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex gap-2">
                  <img
                    src="https://picsum.photos/200/5"
                    alt="200"
                    className="h-7 w-7 rounded-full"
                  />
                  <div>
                    <div className="font-bold">Neil Sims</div>
                    <div className="text-xs text-gray-400">
                      bonnie@example.com
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell className="font-bold">Front End Developer</TableCell>
              <TableCell>United States</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  <div className="bg-green-400 h-2 w-2 rounded-full"></div>
                  Active
                </div>
              </TableCell>
              <TableCell className="flex justify-end px-4">
                <Button className="bg-blue-600 text-white">
                  <PencilSquareIcon className="h-4 w-4" />
                  Edit Item
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="p-4 bg-white flex justify-between flex-wrap lg:flex-nowrap gap-2">
        <div>
          <div className="flex gap-4">
            <ChevronLeftIcon className="h-6 w-6" />
            <ChevronRightIcon className="h-6 w-6" />
            <div>Show 1-5 of 4,787</div>
          </div>
        </div>
        <div className="hidden text-gray-400 lg:flex gap-3 items-center">
          Last account activity: <b className="text-black">2 hours ago</b>{" "}
          <EyeIcon className="h-5 w-5" />
        </div>
        <div className="lg:hidden flex gap-2 w-full">
          <Button variant={"outline"} className="flex-1">
            <ChevronLeftIcon />
            Previous
          </Button>
          <Button className="flex-1 bg-blue-600 text-white">
            Next
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
      <Dialog
        open={isOpenEditUser}
        onOpenChange={() => setIsOpenEditUser(!isOpenEditUser)}
      >
        <DialogContent>
          <DialogHeader className="border-b pb-2">
            <DialogTitle>Edit User</DialogTitle>
          </DialogHeader>
          <div className="max-h-[50vh] overflow-auto no-scrollbar">
            <form>
              <FieldGroup className="grid grid-cols-2">
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>First Name</FieldLabel>
                  <Input value={"Jose"}/>
                </Field>
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Last Name</FieldLabel>
                  <Input value={"Leos"}/>
                </Field>
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Email</FieldLabel>
                  <Input value={"jose@example.com"} type="email"/>
                </Field>
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Phone Number</FieldLabel>
                  <Input value={"+62 897498497897"}/>
                </Field>
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Company</FieldLabel>
                  <Input value={"Jose"}/>
                </Field>
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Department</FieldLabel>
                  <Input value={"Jose"}/>
                </Field>
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Current Password</FieldLabel>
                  <Input value={"Jose"}/>
                </Field>
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>New Password</FieldLabel>
                  <Input value={"Jose"}/>
                </Field>
              </FieldGroup>
            </form>
          </div>
          <DialogFooter>
            <div className="flex flex-wrap lg:flex-nowrap w-full gap-2">
              <Button className="bg-blue-500 text-white w-full lg:w-auto">Save</Button>
              <Button className="bg-red-500 text-white w-full lg:w-auto">Delete User</Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Users;
