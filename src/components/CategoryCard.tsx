import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Vote } from "lucide-react";
import { Link } from "react-router-dom";

interface CategoryCardProps {
  id: string;
  name: string;
  image: string;
  batch: "A" | "B";
  participantCount: number;
  isActive: boolean;
  description?: string;
}

export const CategoryCard = ({
  id,
  name,
  image,
  batch,
  participantCount,
  isActive,
  description,
}: CategoryCardProps) => {
  return (
    <Card className="group overflow-hidden bg-gradient-card shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 border-border/50">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3">
          <Badge
            variant={batch === "A" ? "default" : "secondary"}
            className="bg-primary/90 text-primary-foreground shadow-md"
          >
            Batch {batch}
          </Badge>
        </div>
        {!isActive && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="secondary" className="bg-warning text-warning-foreground">
              Coming Soon
            </Badge>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-card-foreground group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {description && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {description}
          </p>
        )}
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span className="text-sm">{participantCount} contestants</span>
          </div>
        </div>
        
        {isActive ? (
          <Button
            asChild
            variant="vote"
            size="lg"
            className="w-full"
          >
            <Link to={`/vote/${id}`}>
              <Vote className="h-4 w-4 mr-2" />
              Vote Now
            </Link>
          </Button>
        ) : (
          <Button disabled size="lg" className="w-full">
            <Vote className="h-4 w-4 mr-2" />
            Voting Starts Soon
          </Button>
        )}
      </CardContent>
    </Card>
  );
};