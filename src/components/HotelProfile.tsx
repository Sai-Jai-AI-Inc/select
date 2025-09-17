import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star, Wifi, Car, Coffee, Utensils, Dumbbell, Waves, Mail, Phone, Globe, Calendar, Users, Camera } from "lucide-react"
import { useParams } from '@tanstack/react-router'

// Mock hotel data
const hotels = {
  1: {
    name: "The Siam Heritage Bangkok",
    description: "A luxury boutique hotel in the heart of Bangkok, blending traditional Thai architecture with modern amenities.",
    location: "Bangkok, Thailand",
    address: "123 Silom Road, Bang Rak, Bangkok 10500",
    rating: 4.8,
    category: "Luxury Boutique",
    totalRooms: 48,
    website: "thesiamheritage.com",
    email: "partnerships@thesiamheritage.com",
    phone: "+66 2 123 4567",
    amenities: [
      { name: "Free WiFi", icon: Wifi },
      { name: "Valet Parking", icon: Car },
      { name: "Rooftop Bar", icon: Coffee },
      { name: "Fine Dining", icon: Utensils },
      { name: "Fitness Center", icon: Dumbbell },
      { name: "Pool & Spa", icon: Waves }
    ],
    currentOffers: [
      {
        id: 1,
        title: "Heritage Suite Experience",
        description: "2 nights in our signature Heritage Suite with breakfast and spa credits",
        value: "$800",
        requirements: "Minimum 10K followers, travel/lifestyle content focus",
        deliverables: ["3-5 Instagram posts", "5-8 Instagram stories", "1 Reel showcasing hotel"],
        dates: "Available July - September 2024"
      },
      {
        id: 2,
        title: "Rooftop Dining Collaboration",
        description: "Complimentary dinner for two at our award-winning rooftop restaurant",
        value: "$200",
        requirements: "Food/travel content creators preferred",
        deliverables: ["2-3 Instagram posts", "3-5 Instagram stories"],
        dates: "Available weekdays only"
      }
    ],
    pastCollaborations: [
      {
        creator: "@FoodieAdventures",
        followers: 35000,
        reach: "45K impressions",
        engagement: "1.8K likes, 89 comments",
        date: "March 2024"
      },
      {
        creator: "@LuxuryNomad",
        followers: 28000,
        reach: "38K impressions",
        engagement: "1.2K likes, 67 comments",
        date: "February 2024"
      },
      {
        creator: "@BackpackerLife",
        followers: 22000,
        reach: "29K impressions",
        engagement: "980 likes, 45 comments",
        date: "January 2024"
      }
    ],
    contentGuidelines: [
      "Natural, authentic photography preferred over heavily edited images",
      "Tag @thesiamheritage and use #SiamHeritageExperience",
      "Highlight unique Thai cultural elements and local experiences",
      "Include hotel amenities and local neighborhood features",
      "Content must be posted within 2 weeks of stay"
    ],
    roomTypes: [
      { name: "Deluxe Room", size: "35 sqm", guests: 2 },
      { name: "Heritage Suite", size: "55 sqm", guests: 4 },
      { name: "Royal Suite", size: "85 sqm", guests: 4 }
    ]
  }
}

export default function HotelProfile() {
  const { id } = useParams({ from: '/hotel/$id' })
  const hotel = hotels[parseInt(id) as keyof typeof hotels]

  if (!hotel) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Hotel not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hotel Header */}
        <Card className="border-border mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-32 h-32 bg-muted rounded-lg flex items-center justify-center shrink-0">
                <Camera className="h-16 w-16 text-muted-foreground" />
              </div>

              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-3xl font-medium tracking-tight">{hotel.name}</h1>
                  <Badge variant="secondary">{hotel.category}</Badge>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(hotel.rating) ? 'text-foreground fill-current' : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {hotel.rating} • {hotel.totalRooms} rooms
                  </span>
                </div>

                <p className="text-muted-foreground mb-4 max-w-2xl">
                  {hotel.description}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{hotel.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4" />
                    <span>{hotel.website}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    <span>{hotel.email}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    <span>{hotel.phone}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-muted-foreground mb-3">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {hotel.amenities.map((amenity, index) => {
                      const Icon = amenity.icon
                      return (
                        <Badge key={index} variant="outline" className="flex items-center gap-1">
                          <Icon className="h-3 w-3" />
                          {amenity.name}
                        </Badge>
                      )
                    })}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button>
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Hotel
                  </Button>
                  <Button variant="outline">
                    View Website
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Offers */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl font-medium">Current Collaboration Offers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {hotel.currentOffers.map((offer) => (
                  <div key={offer.id} className="p-6 bg-muted/20 rounded-lg">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-lg font-medium">{offer.title}</h3>
                      <Badge className="bg-foreground text-background">{offer.value} value</Badge>
                    </div>

                    <p className="text-muted-foreground mb-4">{offer.description}</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="text-sm font-medium mb-2">Requirements</h4>
                        <p className="text-sm text-muted-foreground">{offer.requirements}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-medium mb-2">Deliverables</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {offer.deliverables.map((item, index) => (
                            <li key={index}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        <span>{offer.dates}</span>
                      </div>
                      <Button size="sm">Apply for Collaboration</Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Past Collaborations */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-xl font-medium">Success Stories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {hotel.pastCollaborations.map((collab, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-muted/10 rounded-lg">
                      <div>
                        <h4 className="font-medium">{collab.creator}</h4>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{collab.followers.toLocaleString()} followers</span>
                          </div>
                          <span>{collab.reach}</span>
                          <span>{collab.engagement}</span>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">{collab.date}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Room Types */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Room Types</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {hotel.roomTypes.map((room, index) => (
                  <div key={index} className="p-3 bg-muted/10 rounded-lg">
                    <div className="font-medium text-sm">{room.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {room.size} • Up to {room.guests} guests
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Content Guidelines */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Content Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm space-y-2">
                  {hotel.contentGuidelines.map((guideline, index) => (
                    <li key={index} className="text-muted-foreground">
                      • {guideline}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Location */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-lg font-medium">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm">
                  <p className="font-medium mb-1">{hotel.name}</p>
                  <p className="text-muted-foreground">{hotel.address}</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}