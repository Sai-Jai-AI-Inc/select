import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bed, Phone, Camera, Users, MapPin } from "lucide-react"

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header/Hero Section */}
      <header className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center">
          <h1 className="text-5xl font-medium mb-6 tracking-tight">
            Select by SaiJaiAI
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto font-light">
            Hotels meet Instagram creators. Free stays for content. That's it.
          </p>
          <div className="flex gap-3 justify-center">
            <Button size="lg" className="px-8">
              Join Now
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Browse Listings
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* How It Works Section */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-medium text-center mb-16 tracking-tight">
              How It Works
            </h2>

            <div className="grid md:grid-cols-2 gap-16">
              {/* For Hotels */}
              <div>
                <h3 className="text-xl font-medium mb-8">For Hotels</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-foreground text-background p-2 rounded-md shrink-0">
                      <Bed className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">1. Post your offer</h4>
                      <p className="text-muted-foreground text-sm">Free stay in exchange for IG content</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-foreground text-background p-2 rounded-md shrink-0">
                      <Users className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">2. Browse creator profiles</h4>
                      <p className="text-muted-foreground text-sm">With upcoming travel plans</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-foreground text-background p-2 rounded-md shrink-0">
                      <Phone className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">3. Reach out directly</h4>
                      <p className="text-muted-foreground text-sm">To make arrangements</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* For Creators */}
              <div>
                <h3 className="text-xl font-medium mb-8">For Creators</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-foreground text-background p-2 rounded-md shrink-0">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">1. Post your travel calendar</h4>
                      <p className="text-muted-foreground text-sm">And IG profile</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-foreground text-background p-2 rounded-md shrink-0">
                      <Bed className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">2. Browse hotel offers</h4>
                      <p className="text-muted-foreground text-sm">At your destination</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-foreground text-background p-2 rounded-md shrink-0">
                      <Camera className="h-4 w-4" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">3. Reach out directly</h4>
                      <p className="text-muted-foreground text-sm">To claim stays</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Join Section */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-medium text-center mb-16 tracking-tight">
              Why Join
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">For Hotels</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">Reach new audiences without ad spend.</p>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg font-medium">For Creators</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">Travel more, stay free.</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="max-w-md mx-auto">
                <p className="text-muted-foreground text-sm">
                  <span className="font-medium text-foreground">Simple:</span> No middlemen, no escrow, no ratings — just a directory.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-medium text-center mb-16 tracking-tight">
              Pricing
            </h2>

            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <Card className="border-border">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg font-medium">Hotels</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-medium text-foreground">$99</span>
                    <span className="text-muted-foreground">/year</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full" size="sm">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="border-border">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-lg font-medium">Creators</CardTitle>
                  <CardDescription>
                    <span className="text-3xl font-medium text-foreground">$29</span>
                    <span className="text-muted-foreground">/year</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button className="w-full" size="sm">Get Started</Button>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-muted-foreground text-sm mt-12 max-w-md mx-auto">
              <span className="font-medium text-foreground">We do not take commissions.</span> Once connected, you work directly.
            </p>
          </div>
        </section>

        {/* Live Listings Preview */}
        <section className="py-24">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-medium text-center mb-16 tracking-tight">
              Live Listings
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-medium mb-8">Hotel Offers</h3>
                <div className="space-y-4">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-2">Bangkok Boutique Hotel</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        2 nights free stay, looking for IG posts July–Aug.
                      </p>
                      <Button variant="outline" size="sm" disabled className="text-xs">
                        View Contact Info (Sign up required)
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-2">Phuket Beach Resort</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        3 nights oceanview suite, need beach content September.
                      </p>
                      <Button variant="outline" size="sm" disabled className="text-xs">
                        View Contact Info (Sign up required)
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-8">Creator Profiles</h3>
                <div className="space-y-4">
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-2">@TravelWithAnna</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        25K followers, planning Bangkok July 10–14.
                      </p>
                      <Button variant="outline" size="sm" disabled className="text-xs">
                        View Contact Info (Sign up required)
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="border-border">
                    <CardContent className="p-6">
                      <h4 className="font-medium mb-2">@WanderlustMike</h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        50K followers, Southeast Asia tour August–October.
                      </p>
                      <Button variant="outline" size="sm" disabled className="text-xs">
                        View Contact Info (Sign up required)
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-muted/20">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="text-3xl font-medium text-center mb-16 tracking-tight">
              FAQ
            </h2>

            <div className="space-y-12">
              <div>
                <h3 className="text-lg font-medium mb-3">
                  Do you handle payments?
                </h3>
                <p className="text-muted-foreground text-sm">
                  No, all arrangements are direct.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">
                  Can I trust creators?
                </h3>
                <p className="text-muted-foreground text-sm">
                  We vet signups manually for legitimacy.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">
                  Why pay a fee?
                </h3>
                <p className="text-muted-foreground text-sm">
                  To keep listings high-quality and serious only.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-medium">Select by SaiJaiAI Inc</p>
            </div>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-background/70 hover:text-background transition-colors">Terms</a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">Privacy</a>
              <a href="#" className="text-background/70 hover:text-background transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
