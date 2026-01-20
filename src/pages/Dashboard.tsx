import Footer from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ItemDescription, ItemTitle } from "@/components/ui/item";
import LineChartCustom from "@/components/ui/line-chart";
import PieChartWithPaddingAngle from "@/components/ui/pie-chart-simple";
import SimpleAreaChart from "@/components/ui/simple-area-chart";
import SimpleBarChart from "@/components/ui/simple-bar-chart";
import StackedBarChart from "@/components/ui/stacked-bar-chart";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

const transactions = [
  {
    transaction: "Payment from John Doe",
    date: "2024-10-01 14:23",
    amount: "$250.00",
    status: "Completed",
  },
  {
    transaction: "Subscription Renewal",
    date: "2024-10-01 10:05",
    amount: "$49.99",
    status: "Completed",
  },
  {
    transaction: "Payment from Jane Smith",
    date: "2024-09-30 18:42",
    amount: "$120.00",
    status: "Pending",
  },
  {
    transaction: "Refund to Michael Lee",
    date: "2024-09-30 09:15",
    amount: "-$75.00",
    status: "Refunded",
  },
  {
    transaction: "Invoice #INV-2309",
    date: "2024-09-29 16:30",
    amount: "$980.00",
    status: "Completed",
  },
  {
    transaction: "Payment Failed (Card Declined)",
    date: "2024-09-29 08:54",
    amount: "$340.00",
    status: "Failed",
  },
  {
    transaction: "Stripe Payout",
    date: "2024-09-28 21:10",
    amount: "$2,450.00",
    status: "Completed",
  },
];

const colorBadge = {
  Completed: "bg-green-100 text-green-800 border-0",
  Pending: "bg-yellow-100 text-yellow-800 border-0",
  Refunded: "bg-blue-100 text-blue-800 border-0",
  Failed: "bg-red-100 text-red-800 border-0",
};

const Dashboard = () => {
  return (
    <div className="text-gray-900">
      <Card className="w-full bg-white min-h-96">
        <CardHeader>
          <CardTitle>Sales</CardTitle>
          <CardAction>
            <ButtonGroup>
              <Button
                className="bg-white text-gray-900 border shadow-md"
                size={"sm"}
              >
                Year
              </Button>
              <Button
                className="bg-white text-gray-900 border shadow-md"
                size={"sm"}
              >
                Month
              </Button>
              <Button
                className="bg-blue-600 text-white border shadow-md"
                size={"sm"}
              >
                Day
              </Button>
            </ButtonGroup>
          </CardAction>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <LineChartCustom />
          </div>
        </CardContent>
      </Card>
      <div className="grid grid-cols-6 gap-4 mt-4">
        <Card className="col-span-6 md:col-span-3 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl">$45,897</CardTitle>
            <CardDescription className="text-xs">Today Sales</CardDescription>
            <CardAction>
              <div className="text-sm text-green-600 flex gap-1 items-center">
                4,3%
                <ArrowUpIcon className="w-3 h-3 text-green-600" />
              </div>
            </CardAction>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-48">
              <SimpleBarChart />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-6 md:col-span-3 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl">5,678</CardTitle>
            <CardDescription className="text-xs">
              Today Visitors
            </CardDescription>
            <CardAction>
              <div className="text-sm text-green-600 flex gap-1 items-center">
                4,3%
                <ArrowUpIcon className="w-3 h-3 text-green-600" />
              </div>
            </CardAction>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-48">
              <SimpleAreaChart />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-6 md:col-span-3 lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-2xl">566,768</CardTitle>
            <CardDescription className="text-xs">
              This week visitors
            </CardDescription>
            <CardAction>
              <div className="text-sm text-red-600 flex gap-1 items-center">
                4,3%
                <ArrowDownIcon className="w-3 h-3 text-red-600" />
              </div>
            </CardAction>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-48">
              <StackedBarChart />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-6 md:col-span-3">
          <CardHeader>
            <CardTitle className="text-sm">Latest Customers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2 pb-1 border-b items-center">
                <img
                  className="rounded-full w-8 h-full"
                  src="https://picsum.photos/200"
                  alt="img1"
                />
                <div className="flex-1">
                  <ItemTitle>John Doe</ItemTitle>
                  <ItemDescription className="text-xs">
                    eemail@example.com
                  </ItemDescription>
                </div>
                <div className="font-bold">$367</div>
              </div>
              <div className="flex gap-2 pb-1 border-b items-center">
                <img
                  className="rounded-full w-8 h-full"
                  src="https://picsum.photos/200"
                  alt="img1"
                />
                <div className="flex-1">
                  <ItemTitle>John Doe</ItemTitle>
                  <ItemDescription className="text-xs">
                    eemail@example.com
                  </ItemDescription>
                </div>
                <div className="font-bold">$367</div>
              </div>
              <div className="flex gap-2 pb-1 border-b items-center">
                <img
                  className="rounded-full w-8 h-full"
                  src="https://picsum.photos/200"
                  alt="img1"
                />
                <div className="flex-1">
                  <ItemTitle>John Doe</ItemTitle>
                  <ItemDescription className="text-xs">
                    eemail@example.com
                  </ItemDescription>
                </div>
                <div className="font-bold">$367</div>
              </div>
              <div className="flex gap-2 pb-1 border-b items-center">
                <img
                  className="rounded-full w-8 h-full"
                  src="https://picsum.photos/200"
                  alt="img1"
                />
                <div className="flex-1">
                  <ItemTitle>John Doe</ItemTitle>
                  <ItemDescription className="text-xs">
                    eemail@example.com
                  </ItemDescription>
                </div>
                <div className="font-bold">$367</div>
              </div>
              <div className="flex gap-2 pb-1 border-b items-center">
                <img
                  className="rounded-full w-8 h-full"
                  src="https://picsum.photos/200"
                  alt="img1"
                />
                <div className="flex-1">
                  <ItemTitle>John Doe</ItemTitle>
                  <ItemDescription className="text-xs">
                    eemail@example.com
                  </ItemDescription>
                </div>
                <div className="font-bold">$367</div>
              </div>
              <div className="flex gap-2 pb-1 border-b items-center">
                <img
                  className="rounded-full w-8 h-full"
                  src="https://picsum.photos/200"
                  alt="img1"
                />
                <div className="flex-1">
                  <ItemTitle>John Doe</ItemTitle>
                  <ItemDescription className="text-xs">
                    eemail@example.com
                  </ItemDescription>
                </div>
                <div className="font-bold">$367</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="hidden lg:block col-span-3">
          <CardHeader>
            <CardTitle className="text-sm">Sessions by device</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-60 w-full">
              <PieChartWithPaddingAngle />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-6">
          <CardHeader>
            <CardTitle>Transactions</CardTitle>
            <CardDescription className="text-xs">
              This is a list of latest transactions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-xl overflow-hidden">
              <Table>
                <TableHeader className="bg-gray-100">
                  <TableRow>
                    <TableHead className="font-bold text-sm">
                      TRANSACTION
                    </TableHead>
                    <TableHead className="font-bold text-sm">
                      DATE & TIME
                    </TableHead>
                    <TableHead className="font-bold text-sm">AMOUNT</TableHead>
                    <TableHead className="font-bold text-sm">STATUS</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactions.map((tx, index) => (
                    <TableRow key={index}>
                      <TableCell>{tx.transaction}</TableCell>
                      <TableCell>{tx.date}</TableCell>
                      <TableCell>{tx.amount}</TableCell>
                      <TableCell>
                        <Badge variant={"outline"} className={
                            colorBadge[tx.status as keyof typeof colorBadge]
                        }>{tx.status}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
