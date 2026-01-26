import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Dropzone } from "@/components/ui/dropzone";
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
import { Textarea } from "@/components/ui/textarea";
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
  PlusIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

const Products = () => {
  const [isOpenEditProduct, setIsOpenEditProduct] = useState(false);
  const [isOpenAddProduct, setIsOpenAddProduct] = useState(false);
  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between p-4 bg-white border-b">
        <div className="flex w-full lg:flex-1 flex-wrap lg:flex-nowrap gap-4 items-center">
          <InputGroup className="bg-gray-50">
            <InputGroupInput placeholder="Search" />
            <InputGroupAddon>
              <MagnifyingGlassIcon className="w-5 h-5" />
            </InputGroupAddon>
          </InputGroup>
          <div className="flex gap-4 w-full justify-between lg:justify-start">
            <Button
              className="bg-blue-600 text-white lg:hidden"
              onClick={() => setIsOpenAddProduct(!isOpenAddProduct)}
            >
              <PlusIcon className="h-4 w-4" />
              Add Product
            </Button>
            <div className="flex gap-4">
              <Cog8ToothIcon className="h-6 w-6" />
              <TrashIcon className="h-6 w-6" />
              <ExclamationCircleIcon className="h-6 w-6" />
              <EllipsisVerticalIcon className="h-6 w-6" />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex gap-4 lg:items-center">
          <Button
            className="bg-blue-600 text-white"
            onClick={() => setIsOpenAddProduct(!isOpenAddProduct)}
          >
            <PlusIcon className="h-4 w-4" />
            Add Product
          </Button>
          <div className="flex gap-4">
            <ChevronLeftIcon className="h-6 w-6" />
            <ChevronRightIcon className="h-6 w-6" />
            <div>Show 1-5 of 4,787</div>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold flex gap-4 items-center">
                <Checkbox />
                NAME
              </TableHead>
              <TableHead className="font-bold">TECHNOLOGY</TableHead>
              <TableHead className="font-bold">ID</TableHead>
              <TableHead className="font-bold">PRICE</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <Checkbox />
                  <div>
                    <div className="font-bold">Education Dashboard</div>
                    <div className="text-xs text-gray-400">Html templates</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>React JS</TableCell>
              <TableCell>#12345</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">$123</div>
              </TableCell>
              <TableCell className="flex justify-end px-4">
                <Button
                  className="bg-blue-600 text-white"
                  onClick={() => setIsOpenEditProduct(!isOpenEditProduct)}
                >
                  <PencilSquareIcon className="h-4 w-4" />
                  Edit Item
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <Checkbox />
                  <div>
                    <div className="font-bold">Education Dashboard</div>
                    <div className="text-xs text-gray-400">Html templates</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>React JS</TableCell>
              <TableCell>#12345</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">$123</div>
              </TableCell>
              <TableCell className="flex justify-end px-4">
                <Button
                  className="bg-blue-600 text-white"
                  onClick={() => setIsOpenEditProduct(!isOpenEditProduct)}
                >
                  <PencilSquareIcon className="h-4 w-4" />
                  Edit Item
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <Checkbox />
                  <div>
                    <div className="font-bold">Education Dashboard</div>
                    <div className="text-xs text-gray-400">Html templates</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>React JS</TableCell>
              <TableCell>#12345</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">$123</div>
              </TableCell>
              <TableCell className="flex justify-end px-4">
                <Button
                  className="bg-blue-600 text-white"
                  onClick={() => setIsOpenEditProduct(!isOpenEditProduct)}
                >
                  <PencilSquareIcon className="h-4 w-4" />
                  Edit Item
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <Checkbox />
                  <div>
                    <div className="font-bold">Education Dashboard</div>
                    <div className="text-xs text-gray-400">Html templates</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>React JS</TableCell>
              <TableCell>#12345</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">$123</div>
              </TableCell>
              <TableCell className="flex justify-end px-4">
                <Button
                  className="bg-blue-600 text-white"
                  onClick={() => setIsOpenEditProduct(!isOpenEditProduct)}
                >
                  <PencilSquareIcon className="h-4 w-4" />
                  Edit Item
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <Checkbox />
                  <div>
                    <div className="font-bold">Education Dashboard</div>
                    <div className="text-xs text-gray-400">Html templates</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>React JS</TableCell>
              <TableCell>#12345</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">$123</div>
              </TableCell>
              <TableCell className="flex justify-end px-4">
                <Button
                  className="bg-blue-600 text-white"
                  onClick={() => setIsOpenEditProduct(!isOpenEditProduct)}
                >
                  <PencilSquareIcon className="h-4 w-4" />
                  Edit Item
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <Checkbox />
                  <div>
                    <div className="font-bold">Education Dashboard</div>
                    <div className="text-xs text-gray-400">Html templates</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>React JS</TableCell>
              <TableCell>#12345</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">$123</div>
              </TableCell>
              <TableCell className="flex justify-end px-4">
                <Button
                  className="bg-blue-600 text-white"
                  onClick={() => setIsOpenEditProduct(!isOpenEditProduct)}
                >
                  <PencilSquareIcon className="h-4 w-4" />
                  Edit Item
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex gap-4 items-center">
                  <Checkbox />
                  <div>
                    <div className="font-bold">Education Dashboard</div>
                    <div className="text-xs text-gray-400">Html templates</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>React JS</TableCell>
              <TableCell>#12345</TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">$123</div>
              </TableCell>
              <TableCell className="flex justify-end px-4">
                <Button
                  className="bg-blue-600 text-white"
                  onClick={() => setIsOpenEditProduct(!isOpenEditProduct)}
                >
                  <PencilSquareIcon className="h-4 w-4" />
                  Edit Item
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="p-4 bg-white flex justify-between flex-wrap lg:flex-nowrap gap-2 lg:hidden">
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
        open={isOpenEditProduct}
        onOpenChange={() => setIsOpenEditProduct(!isOpenEditProduct)}
        key={"modal-edit"}
      >
        <DialogContent>
          <DialogHeader className="border-b pb-2">
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          <div className="max-h-[80vh] overflow-auto no-scrollbar">
            <form>
              <FieldGroup className="grid grid-cols-2">
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Product Name</FieldLabel>
                  <Input value={"Apple Imac 27"} />
                </Field>
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Category</FieldLabel>
                  <Input value={"Electronics"} />
                </Field>
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Brand</FieldLabel>
                  <Input value={"Apple"} />
                </Field>
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Price</FieldLabel>
                  <Input value={"$2999"} />
                </Field>
                <Field className="col-span-2">
                  <FieldLabel>Details</FieldLabel>
                  <Textarea
                    className="h-40"
                    value={
                      "Standard glass\n3.8GHz 8-core 10th-generation Intel Core i7 processor Turbo Boost up 5.0GHz\n8GB 2666MHz DDR4 memory\nRadeon Pro 5500 XT with 8GB of GDDR6 memory\n512GB SSD storage\nGigabit Ethernet\nMagic Mouse 2\nMagic Keyboard - US"
                    }
                  />
                </Field>
                <Field className="col-span-2">
                  <div className="flex flex-wrap col-span-2 gap-2">
                    <div className="h-24 w-24 rounded-md bg-[url(https://picsum.photos/200/1)] relative">
                      <TrashIcon className="h-5 w-5 text-red-600 absolute bottom-2 left-2" />
                    </div>
                    <div className="h-24 w-24 rounded-md bg-[url(https://picsum.photos/200/1)] relative">
                      <TrashIcon className="h-5 w-5 text-red-600 absolute bottom-2 left-2" />
                    </div>
                    <div className="h-24 w-24 rounded-md bg-[url(https://picsum.photos/200/1)] relative">
                      <TrashIcon className="h-5 w-5 text-red-600 absolute bottom-2 left-2" />
                    </div>
                  </div>
                  <Dropzone
                    onDrop={(files) => {
                      console.log(files);
                    }}
                    accept={{
                      "image/*": [".png", ".jpg", ".jpeg"],
                    }}
                    maxSize={2 * 1024 * 1024}
                    multiple={false}
                  />
                </Field>
              </FieldGroup>
            </form>
          </div>
          <DialogFooter>
            <div className="flex flex-wrap lg:flex-nowrap w-full gap-2">
              <Button className="bg-blue-500 text-white w-full lg:w-auto">
                Save
              </Button>
              <Button className="bg-red-500 text-white w-full lg:w-auto">
                Delete Product
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog
        open={isOpenAddProduct}
        onOpenChange={() => setIsOpenAddProduct(!isOpenAddProduct)}
        key={"modal-add"}
      >
        <DialogContent>
          <DialogHeader className="border-b pb-2">
            <DialogTitle>Add Product</DialogTitle>
          </DialogHeader>
          <div className="max-h-[80vh] overflow-auto no-scrollbar">
            <form>
              <FieldGroup className="grid grid-cols-2">
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Product Name</FieldLabel>
                  <Input value={"Apple Imac 27"} />
                </Field>
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Category</FieldLabel>
                  <Input value={"Electronics"} />
                </Field>
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Brand</FieldLabel>
                  <Input value={"Apple"} />
                </Field>
                <Field className="col-span-2 lg:col-span-1">
                  <FieldLabel>Price</FieldLabel>
                  <Input value={"$2999"} />
                </Field>
                <Field className="col-span-2">
                  <FieldLabel>Details</FieldLabel>
                  <Textarea
                    className="h-40"
                    value={
                      "Standard glass\n3.8GHz 8-core 10th-generation Intel Core i7 processor Turbo Boost up 5.0GHz\n8GB 2666MHz DDR4 memory\nRadeon Pro 5500 XT with 8GB of GDDR6 memory\n512GB SSD storage\nGigabit Ethernet\nMagic Mouse 2\nMagic Keyboard - US"
                    }
                  />
                </Field>
                <Field className="col-span-2">
                  <div className="flex flex-wrap col-span-2 gap-2">
                    <div className="h-24 w-24 rounded-md bg-[url(https://picsum.photos/200/1)] relative">
                      <TrashIcon className="h-5 w-5 text-red-600 absolute bottom-2 left-2" />
                    </div>
                    <div className="h-24 w-24 rounded-md bg-[url(https://picsum.photos/200/1)] relative">
                      <TrashIcon className="h-5 w-5 text-red-600 absolute bottom-2 left-2" />
                    </div>
                    <div className="h-24 w-24 rounded-md bg-[url(https://picsum.photos/200/1)] relative">
                      <TrashIcon className="h-5 w-5 text-red-600 absolute bottom-2 left-2" />
                    </div>
                  </div>
                  <Dropzone
                    onDrop={(files) => {
                      console.log(files);
                    }}
                    accept={{
                      "image/*": [".png", ".jpg", ".jpeg"],
                    }}
                    maxSize={2 * 1024 * 1024}
                    multiple={false}
                  />
                </Field>
              </FieldGroup>
            </form>
          </div>
          <DialogFooter>
            <div className="flex flex-wrap lg:flex-nowrap w-full gap-2">
              <Button className="bg-blue-500 text-white w-full lg:w-auto">
                Save
              </Button>
              <Button className="bg-red-500 text-white w-full lg:w-auto">
                Delete Product
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Products;
