import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Events() {
  const events = [
    { title: "90's Music", date: "Sat, 24 Jan", location: "Weed Lovers Market Fourways", ticket: false },
    { title: "4:20 Sunday Market", date: "Sun, 25 Jan", location: "Sandton", ticket: false },
    { title: "Sundays are for Weed Lovers", date: "Sun, 25 Jan", location: "Weed Lovers Market Marshalltown", ticket: false },
    { title: "To Jazz or Not To Jazz", date: "Sun, 01 Feb", location: "Weed Lovers Market Fourways", ticket: false },
    { title: "What the Funk?", date: "Sat, 07 Feb", location: "Weed Lovers Market Fourways", ticket: false },
    { title: "Frgmntd Space", date: "Sat, 28 Mar", location: "Weed Lovers Market Marshalltown", ticket: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">Events & Experiences</h1>
          <p className="text-gray-600 mb-12 max-w-3xl">
            Step into the heart of the action with our lineup of unforgettable events. From live music sessions and art showcases to Puff & Paint evenings and cultural gatherings, our events are designed to bring the community together in a vibrant, creative atmosphere.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-gray-200 h-48"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-1">{event.date}</p>
                  <p className="text-gray-600 mb-4">{event.location}</p>
                  {event.ticket ? (
                    <button className="w-full bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                      Buy Tickets
                    </button>
                  ) : (
                    <button className="w-full bg-gray-200 text-gray-700 px-4 py-2 rounded hover:bg-gray-300">
                      RSVP
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

