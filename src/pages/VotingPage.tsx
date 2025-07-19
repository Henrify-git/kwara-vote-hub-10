import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Vote, CheckCircle, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { getCategory, type Participant } from "@/data/mockData";

export const VotingPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const { toast } = useToast();
  const [selectedParticipant, setSelectedParticipant] = useState<string | null>(null);
  const [remainingVotes, setRemainingVotes] = useState(5);
  const [hasVoted, setHasVoted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const category = categoryId ? getCategory(categoryId) : null;

  useEffect(() => {
    // Simulate checking remaining votes for this IP/category
    // In real app, this would be an API call
    const storedVotes = localStorage.getItem(`votes_${categoryId}`);
    if (storedVotes) {
      const votes = parseInt(storedVotes, 10);
      setRemainingVotes(Math.max(0, 5 - votes));
    }
  }, [categoryId]);

  const handleVote = async () => {
    if (!selectedParticipant || !category) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Update local storage (in real app, this would be handled by backend)
      const currentVotes = parseInt(localStorage.getItem(`votes_${categoryId}`) || "0", 10);
      localStorage.setItem(`votes_${categoryId}`, (currentVotes + 1).toString());
      
      setRemainingVotes(prev => Math.max(0, prev - 1));
      setHasVoted(true);
      setSelectedParticipant(null);
      
      toast({
        title: "Vote Submitted Successfully!",
        description: `Your vote for ${category.participants.find(p => p.id === selectedParticipant)?.name} has been recorded.`,
      });
    } catch (error) {
      toast({
        title: "Vote Failed",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      setHasVoted(false);
    }
  };

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Category Not Found</h2>
            <p className="text-muted-foreground mb-4">
              The voting category you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!category.isActive) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-6">
            <AlertCircle className="h-12 w-12 text-warning mx-auto mb-4" />
            <h2 className="text-xl font-semibold mb-2">Voting Not Available</h2>
            <p className="text-muted-foreground mb-4">
              Voting for this category will be available soon. Please check back later.
            </p>
            <Button asChild>
              <Link to="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Categories
            </Link>
          </Button>
          
          <div className="text-center">
            <Badge variant="default" className="mb-4">
              Batch {category.batch}
            </Badge>
            <h1 className="text-4xl font-bold mb-2 bg-gradient-primary bg-clip-text text-transparent">
              {category.name}
            </h1>
            <p className="text-muted-foreground text-lg mb-6">
              {category.description}
            </p>
            
            <div className="flex items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Vote className="h-4 w-4 text-primary" />
                <span>{remainingVotes} votes remaining today</span>
              </div>
              {remainingVotes === 0 && (
                <Badge variant="secondary">Daily limit reached</Badge>
              )}
            </div>
          </div>
        </div>

        {/* Participants */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
          {category.participants.map((participant: Participant) => (
            <Card
              key={participant.id}
              className={`cursor-pointer transition-all duration-300 hover:shadow-elegant ${
                selectedParticipant === participant.id
                  ? "ring-2 ring-primary shadow-glow bg-accent/50"
                  : "hover:scale-105"
              }`}
              onClick={() => remainingVotes > 0 && setSelectedParticipant(participant.id)}
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <img
                    src={participant.image}
                    alt={participant.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover shadow-md"
                  />
                  {selectedParticipant === participant.id && (
                    <CheckCircle className="absolute -top-2 -right-2 h-8 w-8 text-primary bg-background rounded-full" />
                  )}
                </div>
                <h3 className="text-lg font-semibold mb-2">{participant.name}</h3>
                <div className="space-y-2">
                  <div className="w-full h-2 bg-muted rounded-full">
                    <div
                      className="h-2 bg-gradient-primary rounded-full transition-all duration-500"
                      style={{ width: `${Math.min(100, (participant.votes / 100) * 100)}%` }}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vote Button */}
        <div className="text-center">
          {remainingVotes > 0 ? (
            <Button
              variant="vote"
              size="xl"
              onClick={handleVote}
              disabled={!selectedParticipant || isSubmitting}
              className="min-w-48"
            >
              {isSubmitting ? (
                "Submitting..."
              ) : (
                <>
                  <Vote className="h-5 w-5 mr-2" />
                  Submit Vote
                </>
              )}
            </Button>
          ) : (
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <AlertCircle className="h-8 w-8 text-warning mx-auto mb-2" />
              <p className="text-muted-foreground">
                You've reached your daily voting limit for this category.
                <br />
                Come back tomorrow to vote again!
              </p>
            </div>
          )}

          {selectedParticipant && remainingVotes > 0 && (
            <p className="text-muted-foreground mt-4">
              You're about to vote for{" "}
              <span className="font-semibold text-primary">
                {category.participants.find(p => p.id === selectedParticipant)?.name}
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};