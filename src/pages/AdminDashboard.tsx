import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Shield,
  Plus,
  Users,
  BarChart3,
  Settings,
  Eye,
  Edit,
  Trash2,
  LogOut,
  Crown
} from "lucide-react";
import { mockCategories, type Category } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

export const AdminDashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: "", password: "" });
  const [categories] = useState<Category[]>(mockCategories);
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple hardcoded authentication for demo
    if (loginForm.username === "admin" && loginForm.password === "kwara2024") {
      setIsAuthenticated(true);
      toast({
        title: "Login Successful",
        description: "Welcome to the admin dashboard!",
      });
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid username or password.",
        variant: "destructive",
      });
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setLoginForm({ username: "", password: "" });
    toast({
      title: "Logged Out",
      description: "You have been successfully logged out.",
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/20">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle className="text-2xl">Admin Login</CardTitle>
            <p className="text-muted-foreground">
              Access the Kwara Vendors Award admin panel
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={loginForm.username}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, username: e.target.value })
                  }
                  placeholder="Enter username"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={loginForm.password}
                  onChange={(e) =>
                    setLoginForm({ ...loginForm, password: e.target.value })
                  }
                  placeholder="Enter password"
                  required
                />
              </div>
              <Button type="submit" variant="admin" size="lg" className="w-full">
                <Shield className="h-4 w-4 mr-2" />
                Login to Dashboard
              </Button>
            </form>
            <div className="mt-6 p-4 bg-muted/50 rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Demo Credentials:</strong><br />
                Username: admin<br />
                Password: kwara2024
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const totalVotes = categories.reduce(
    (total, category) =>
      total + category.participants.reduce((sum, participant) => sum + participant.votes, 0),
    0
  );

  const totalParticipants = categories.reduce(
    (total, category) => total + category.participants.length,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <Crown className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                Admin Dashboard
              </h1>
              <p className="text-muted-foreground">Manage the Kwara Vendors Award</p>
            </div>
          </div>
          <Button variant="ghost" onClick={handleLogout}>
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BarChart3 className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{totalVotes}</p>
                  <p className="text-muted-foreground">Total Votes</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Users className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{totalParticipants}</p>
                  <p className="text-muted-foreground">Participants</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Settings className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{categories.length}</p>
                  <p className="text-muted-foreground">Categories</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Crown className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">
                    {categories.filter(c => c.isActive).length}
                  </p>
                  <p className="text-muted-foreground">Active Categories</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="categories" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="results">Vote Results</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="categories" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Manage Categories</h2>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="admin">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Category
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Add New Category</DialogTitle>
                    <DialogDescription>
                      Create a new voting category for the award.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label>Category Name</Label>
                      <Input placeholder="e.g., Best Vegetable Vendor" />
                    </div>
                    <div className="space-y-2">
                      <Label>Batch</Label>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Batch A</Button>
                        <Button variant="outline" size="sm">Batch B</Button>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Input placeholder="Brief description of the category" />
                    </div>
                    <Button variant="admin" className="w-full">
                      Create Category
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <div className="grid gap-6">
              {categories.map((category) => (
                <Card key={category.id}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0">
                    <div className="flex items-center space-x-4">
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div>
                        <CardTitle className="text-xl">{category.name}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge variant={category.batch === "A" ? "default" : "secondary"}>
                            Batch {category.batch}
                          </Badge>
                          <Badge variant={category.isActive ? "default" : "secondary"}>
                            {category.isActive ? "Active" : "Inactive"}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        {category.participants.length} participants
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Total votes: {category.participants.reduce((sum, p) => sum + p.votes, 0)}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="results" className="space-y-6">
            <h2 className="text-2xl font-semibold">Vote Results</h2>
            
            <div className="grid gap-6">
              {categories.map((category) => (
                <Card key={category.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      {category.name}
                      <Badge variant={category.batch === "A" ? "default" : "secondary"}>
                        Batch {category.batch}
                      </Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.participants.map((participant) => (
                        <div key={participant.id} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-4">
                            <img
                              src={participant.image}
                              alt={participant.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <span className="font-medium">{participant.name}</span>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">
                              {participant.votes}
                            </div>
                            <div className="text-sm text-muted-foreground">votes</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            <h2 className="text-2xl font-semibold">System Settings</h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Voting Configuration</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label>Daily Vote Limit per Category</Label>
                    <Input type="number" defaultValue="5" />
                  </div>
                  <div className="space-y-2">
                    <Label>Batch A Status</Label>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">Active</Button>
                      <Button variant="ghost" size="sm">Inactive</Button>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label>Batch B Status</Label>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">Active</Button>
                      <Button variant="outline" size="sm">Inactive</Button>
                    </div>
                  </div>
                  <Button variant="admin" className="w-full">
                    Save Settings
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Data Management</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full">
                    Export All Results (CSV)
                  </Button>
                  <Button variant="outline" className="w-full">
                    Backup Database
                  </Button>
                  <Button variant="destructive" className="w-full">
                    Reset All Votes
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};