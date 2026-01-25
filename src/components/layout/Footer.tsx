import { Facebook, Github, Globe, Twitter } from "lucide-react";
import { Card, CardContent } from "../ui/card";

const Footer = () => {
  return (
    <Card className="lg:flex py-8 mt-4 hidden">
      <CardContent>
        <div className="flex justify-between">
          <div className="text-sm text-gray-500">
            &copy; 2026 Your Company. All rights reserved.
          </div>
          <div className="flex gap-2">
            <Facebook className="h-5 w-5" />
            <Twitter className="h-5 w-5" />
            <Github className="h-5 w-5" />
            <Globe className="h-5 w-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Footer;
