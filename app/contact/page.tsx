export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">Book a Table</h1>
      <p className="text-muted-foreground mb-8">Reserve your dining experience or inquire about private events.</p>

      <div className="grid md:grid-cols-2 gap-10">
        <form className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input type="text" required placeholder="Chef Mario" className="w-full rounded-md border px-3 py-2 text-sm bg-background" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Date</label>
              <input type="date" required className="w-full rounded-md border px-3 py-2 text-sm bg-background" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Time</label>
              <input type="time" required className="w-full rounded-md border px-3 py-2 text-sm bg-background" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Guests</label>
            <select className="w-full rounded-md border px-3 py-2 text-sm bg-background">
              <option>1 - 2 People</option>
              <option>3 - 4 People</option>
              <option>5 - 8 People</option>
              <option>Large Party / Event (8+)</option>
            </select>
          </div>
          <button type="submit" className="mt-2 rounded-md bg-primary text-primary-foreground py-3 font-semibold text-sm hover:opacity-90">
            Confirm Reservation
          </button>
        </form>

        <div className="border rounded-xl p-6 bg-card flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg mb-2">Hours & Location</h3>
            <p className="text-sm text-muted-foreground mb-4">123 Culinary Boulevard, Downtown</p>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between border-b pb-1">
                <span>Mon - Thu:</span>
                <span className="font-medium">5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Fri - Sat:</span>
                <span className="font-medium">5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between border-b pb-1">
                <span>Sunday:</span>
                <span className="font-medium">4:00 PM - 9:30 PM</span>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t">
            <p className="text-xs text-muted-foreground">For party inquiries over 8 people, call us directly at <strong>(555) 019-2834</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  )
}