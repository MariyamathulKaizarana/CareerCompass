import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, FileQuestion, Users } from "lucide-react";

export default function AdminDashboardPage() {
  const stats = [
    { title: "Total Users", value: "1,254", icon: <Users className="h-6 w-6 text-muted-foreground" /> },
    { title: "Careers Managed", value: "4", icon: <Book className="h-6 w-6 text-muted-foreground" /> },
    { title: "Quiz Questions", value: "5", icon: <FileQuestion className="h-6 w-6 text-muted-foreground" /> },
  ];

  return (
    <div className="w-full">
      <h1 className="font-headline text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        Admin Overview
      </h1>
      <p className="mt-2 text-lg text-muted-foreground">
        Welcome to the CareerCompass control center.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stats.map(stat => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">
                +2.1% from last month
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Activity feed will be displayed here.</p>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
