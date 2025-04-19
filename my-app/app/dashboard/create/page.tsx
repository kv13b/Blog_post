import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";

export default function CreateBlogroute() {
  return (
    <div>
      <Card className="max-w-lg mx-auto">
        <CardHeader>
          <CardTitle>Create Post</CardTitle>
          <CardDescription>Create a new Post </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label>Title</Label>
              <Input type="text" required placeholder="Title" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Content</Label>
              <Textarea required placeholder="Content" />
            </div>
            <div className="flex flex-col gap-2">
              <Label>Image URL</Label>
              <Input required type="url" placeholder="Image URL" />
            </div>
            <Button>Create Post</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
