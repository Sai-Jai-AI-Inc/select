import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bell, Eye, Mail, MailOpen, MapPin, Calendar, Users, Clock, Camera } from "lucide-react"
import { Link } from '@tanstack/react-router'

// Mock notification data with enhanced personality
const notifications = [
  {
    id: 1,
    creator: {
      name: "Anna Rodriguez",
      handle: "@TravelWithAnna",
      followers: 25000,
      profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b547?w=150&h=150&fit=crop&crop=face",
      country: "Spain",
      city: "Barcelona",
      personality: "Adventure Seeker",
      contentStyle: "Authentic storytelling with vibrant photography",
      lastActivity: "Posted 3 hours ago",
      recentContent: "Street art tour in Barcelona"
    },
    destination: "Bangkok",
    dates: "July 10-14, 2024",
    tripPurpose: "Food & culture exploration",
    isRead: false,
    receivedAt: "2 hours ago",
    priority: "high"
  },
  {
    id: 2,
    creator: {
      name: "Mike Chen",
      handle: "@WanderlustMike",
      followers: 50000,
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      country: "United States",
      city: "San Francisco",
      personality: "Luxury Travel Enthusiast",
      contentStyle: "High-end experiences and premium destinations",
      lastActivity: "Posted yesterday",
      recentContent: "Michelin-starred dining in Tokyo"
    },
    destination: "Bangkok",
    dates: "August 15-20, 2024",
    tripPurpose: "Luxury hotels & fine dining",
    isRead: false,
    receivedAt: "5 hours ago",
    priority: "high"
  },
  {
    id: 3,
    creator: {
      name: "Sophie Laurent",
      handle: "@SophieExplores",
      followers: 18000,
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      country: "France",
      city: "Paris",
      personality: "Cultural Explorer",
      contentStyle: "Artistic photography focusing on local culture",
      lastActivity: "Posted 2 days ago",
      recentContent: "Hidden gems in Montmartre"
    },
    destination: "Bangkok",
    dates: "September 5-10, 2024",
    tripPurpose: "Temple architecture & local markets",
    isRead: true,
    receivedAt: "1 day ago",
    priority: "medium"
  },
  {
    id: 4,
    creator: {
      name: "James Wright",
      handle: "@BackpackerJames",
      followers: 32000,
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      country: "Australia",
      city: "Melbourne",
      personality: "Budget Explorer",
      contentStyle: "Practical travel tips and budget-friendly adventures",
      lastActivity: "Posted 4 days ago",
      recentContent: "Backpacking through Vietnam"
    },
    destination: "Bangkok",
    dates: "October 1-7, 2024",
    tripPurpose: "Backpacking & street food",
    isRead: true,
    receivedAt: "3 days ago",
    priority: "low"
  }
]

export default function HotelDashboard() {
  const unreadCount = notifications.filter(n => !n.isRead).length

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-medium mb-4 tracking-tight">Hotel Dashboard</h1>
          <p className="text-muted-foreground">
            Stay updated on creators planning trips to your city
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Unread Notifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4 text-foreground" />
                <span className="text-2xl font-medium">{unreadCount}</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-foreground" />
                <span className="text-2xl font-medium">12</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-foreground" />
                <span className="text-2xl font-medium">1.2M</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Notifications */}
        <div>
          <h2 className="text-2xl font-medium mb-6 tracking-tight">Recent Notifications</h2>

          <div className="space-y-6">
            {notifications.map((notification) => {
              const MailIcon = notification.isRead ? MailOpen : Mail
              return (
                <Card
                  key={notification.id}
                  className={`border-border transition-all duration-200 hover:shadow-sm ${
                    !notification.isRead
                      ? 'bg-background shadow-sm border-foreground/10'
                      : 'bg-muted/20 border-muted'
                  }`}
                >
                  <CardContent className="p-0">
                    <div className="flex gap-6 p-6">
                      {/* Profile Picture - Hero Element */}
                      <div className="shrink-0">
                        <div className="relative">
                          <img
                            src={notification.creator.profileImage}
                            alt={notification.creator.name}
                            className="w-20 h-20 rounded-full object-cover border-2 border-background shadow-sm"
                          />
                          {!notification.isRead && (
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-foreground rounded-full border-2 border-background"></div>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        {/* Header with mail icon and status */}
                        <div className="flex items-center gap-2 mb-3">
                          <MailIcon className={`h-4 w-4 ${!notification.isRead ? 'text-foreground' : 'text-muted-foreground'}`} />
                          <span className="text-sm text-muted-foreground">Creator trip notification</span>
                          {!notification.isRead && (
                            <Badge className="bg-foreground text-background text-xs px-2 py-0.5">New</Badge>
                          )}
                          <span className="text-xs text-muted-foreground ml-auto">{notification.receivedAt}</span>
                        </div>

                        {/* Creator name and personality */}
                        <div className="mb-3">
                          <h3 className="text-lg font-medium mb-1">
                            {notification.creator.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {notification.creator.personality}
                            </Badge>
                            <span className="text-sm text-muted-foreground">
                              {notification.creator.handle}
                            </span>
                          </div>
                        </div>

                        {/* Trip details */}
                        <div className="mb-4">
                          <p className="text-sm font-medium mb-2">
                            Planning a trip to <span className="font-semibold">{notification.destination}</span> for {notification.tripPurpose}
                          </p>

                          <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground mb-3">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-3 w-3" />
                              <span>{notification.dates}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              <span>{notification.creator.city}, {notification.creator.country}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-3 w-3" />
                              <span>{notification.creator.followers.toLocaleString()} followers</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              <span>{notification.creator.lastActivity}</span>
                            </div>
                          </div>
                        </div>

                        {/* Content style and recent activity */}
                        <div className="mb-4 p-3 bg-muted/30 rounded-lg">
                          <p className="text-xs text-muted-foreground mb-1">Content Style</p>
                          <p className="text-sm">{notification.creator.contentStyle}</p>
                          <div className="flex items-center gap-1 mt-2">
                            <Camera className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              Recent: {notification.creator.recentContent}
                            </span>
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex gap-2 flex-wrap">
                          <Button asChild size="sm">
                            <Link to={`/creator/$id`} params={{ id: `${notification.id}` }}>
                              View Full Profile
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm">
                            Send Collaboration Offer
                          </Button>
                          {!notification.isRead && (
                            <Button variant="ghost" size="sm" className="text-muted-foreground">
                              Mark as Read
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}