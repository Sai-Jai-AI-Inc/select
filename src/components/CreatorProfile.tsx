import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Heart, MessageCircle, Instagram, Globe, Mail } from "lucide-react"
import { useParams } from '@tanstack/react-router'

// Mock creator data
const creators = {
  1: {
    name: "Anna Rodriguez",
    handle: "@TravelWithAnna",
    bio: "Travel photographer & storyteller from Barcelona. Sharing authentic experiences from around the world.",
    followers: 25000,
    following: 1200,
    posts: 486,
    engagementRate: 4.2,
    country: "Spain",
    city: "Barcelona",
    profileImage: "/api/placeholder/120/120",
    website: "travelwithanna.com",
    email: "hello@travelwithanna.com",
    upcomingTrips: [
      {
        destination: "Bangkok, Thailand",
        dates: "July 10-14, 2024",
        duration: "4 days"
      },
      {
        destination: "Ho Chi Minh City, Vietnam",
        dates: "July 15-20, 2024",
        duration: "5 days"
      }
    ],
    recentPosts: [
      {
        id: 1,
        image: "/api/placeholder/300/300",
        caption: "Golden hour in Santorini never gets old ✨",
        likes: 1250,
        comments: 89,
        date: "3 days ago"
      },
      {
        id: 2,
        image: "/api/placeholder/300/300",
        caption: "Street food adventures in Bangkok 🍜",
        likes: 980,
        comments: 67,
        date: "1 week ago"
      },
      {
        id: 3,
        image: "/api/placeholder/300/300",
        caption: "Morning yoga session overlooking rice terraces",
        likes: 1420,
        comments: 102,
        date: "2 weeks ago"
      }
    ],
    audienceCountries: [
      { country: "Spain", percentage: 35 },
      { country: "United States", percentage: 28 },
      { country: "United Kingdom", percentage: 12 },
      { country: "Germany", percentage: 10 },
      { country: "France", percentage: 8 }
    ]
  }
}

export default function CreatorProfile() {
  const { id } = useParams({ from: '/creator/$id' })
  const creator = creators[parseInt(id) as keyof typeof creators]

  if (!creator) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Creator not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Profile Header */}
        <Card className="border-border mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center shrink-0">
                <Users className="h-16 w-16 text-muted-foreground" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-medium tracking-tight">{creator.name}</h1>
                  <Badge variant="secondary">{creator.handle}</Badge>
                </div>

                <p className="text-muted-foreground mb-4 max-w-2xl">
                  {creator.bio}
                </p>

                <div className="grid grid-cols-3 gap-8 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-medium">{creator.followers.toLocaleString()}</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-medium">{creator.posts}</div>
                    <div className="text-sm text-muted-foreground">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-medium">{creator.engagementRate}%</div>
                    <div className="text-sm text-muted-foreground">Engagement</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{creator.city}, {creator.country}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    <span>{creator.website}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Instagram className="h-4 w-4" />
                    <span>{creator.handle}</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button>
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Creator
                  </Button>
                  <Button variant="outline">
                    View Instagram
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Trips */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl font-medium">Upcoming Trips</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {creator.upcomingTrips.map((trip, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                    <div>
                      <h3 className="font-medium">{trip.destination}</h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{trip.dates}</span>
                        </div>
                        <span>{trip.duration}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      Send Offer
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl font-medium">Recent Posts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  {creator.recentPosts.map((post) => (
                    <div key={post.id} className="space-y-3">
                      <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                        <Instagram className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="text-sm line-clamp-2 mb-2">{post.caption}</p>
                        <div className="flex items-center gap-4 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Heart className="h-3 w-3" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="h-3 w-3" />
                            <span>{post.comments}</span>
                          </div>
                          <span>{post.date}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Audience Demographics */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Top Audience Countries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {creator.audienceCountries.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-sm">{item.country}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-foreground rounded-full"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                      <span className="text-sm text-muted-foreground">{item.percentage}%</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Mail className="h-4 w-4" />
                    <span>Email</span>
                  </div>
                  <p className="font-medium">{creator.email}</p>
                </div>

                <div className="text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground mb-1">
                    <Instagram className="h-4 w-4" />
                    <span>Instagram</span>
                  </div>
                  <p className="font-medium">{creator.handle}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}