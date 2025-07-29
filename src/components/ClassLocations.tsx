import React, { useState } from 'react';
import { MapPin, Clock, Calendar, Users, Navigation, Phone, Mail } from 'lucide-react';

export default function ClassLocations() {
  const [selectedLocation, setSelectedLocation] = useState('wasity');

  const locations = {
  wasity: {
    id: 'wasity',
    name: 'Wasity Higher Education Institute',
    address: '165 Kandy Rd, Kelaniya',
    coordinates: { lat: 6.976277793024513, lng: 79.92253257489934 }, // Kept same coords you had or update if you want exact from map
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2797969923818!2d79.92253257489934!3d6.976277793024513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257f980e934f1%3A0x203fd14311da04c6!2sWasity%20Higher%20Education%20Institute!5e0!3m2!1sen!2slk!4v1753692821698!5m2!1sen!2slk",
    classes: [
      {
        name: 'A/L ICT',
        date: 'Every Sunday',
        time: '10:30 AM - 12:30 PM',
        // students: '25 Students',
        level: 'A/L ICT',
        color: 'from-blue-500 to-purple-600'
      },
      {
        name: 'A/L ICT',
        date: 'Every Tuesday',
        time: '1:30 PM - 3:30 PM',
        // students: '20 Students',
        level: 'A/L ICT',
        color: 'from-purple-600 to-pink-500'
      }
    ],
    contact: {
      phone: '011 245 8352',
    //   email: 'wasity@ictclasses.lk'
    },
    plusCode: 'XWGG+G2 Kelaniya'
  },
  siyora: {
    id: 'siyora',
    name: 'Siyora Higher Education Center',
    address: '42 Savidma Institute Rd, Piliyandala 10300',
    coordinates: { lat: 6.802454975648595, lng: 79.91689207831935 },  // Again keep or update exact if you want precise from map
    googleMapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.731730517753!2d79.91689207831935!3d6.802454975648595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f00568915ed%3A0xe91f7efe8922db95!2sSiyora%20Higher%20Education%20Center!5e0!3m2!1sen!2slk!4v1753692878549!5m2!1sen!2slk",
    classes: [
      {
        name: 'A/L ICT',
        date: 'Every Saturday',
        time: '11:00 AM - 1:00 PM',
        students: '18 Students',
        level: 'A/L ICT',
        color: 'from-green-500 to-blue-500'
      },
    //   {
    //     name: 'Web Development',
    //     date: 'Every Tuesday',
    //     time: '1:30 PM - 3:30 PM',
    //     students: '22 Students',
    //     level: 'A/L ICT',
    //     color: 'from-orange-500 to-red-500'
    //   }
    ],
    contact: {
      phone: '076 666 8266',
    //   email: 'siyora@ictclasses.lk'
    },
    plusCode: 'RW2C+XP Piliyandala'
  }
};

  const currentLocation = locations[selectedLocation];

  // Real Google Maps component
  const MapComponent = () => (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden backdrop-blur-sm bg-gradient-to-br from-white/5 via-white/2 to-transparent border border-white/10 group hover:border-white/20 transition-all duration-500">
      {/* Real Google Maps Iframe */}
      <iframe
        src={currentLocation.googleMapEmbed}
        width="100%"
        height="100%"
        style={{ border: 0, borderRadius: '1rem' }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute inset-0 w-full h-full"
        title={`Map of ${currentLocation.name}`}
      ></iframe>
      
      {/* Overlay for styling and interactions */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10 rounded-2xl pointer-events-none"></div>
      
      {/* Location Badge */}
      <div className="absolute top-4 right-4 z-10">
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl backdrop-blur-md bg-black/60 border border-white/20 text-white shadow-lg">
          <MapPin className="h-4 w-4 text-primary animate-pulse" />
          <span className="text-sm font-medium">{currentLocation.name}</span>
        </div>
      </div>
      
      {/* Interactive Map Hint */}
      <div className="absolute bottom-4 right-4 z-10">
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg backdrop-blur-md bg-white/10 border border-white/20 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Navigation className="h-3 w-3" />
          <span>Click to interact</span>
        </div>
      </div>
      
      {/* Directions Button */}
     <div className="absolute bottom-4 w-full flex justify-center z-10 pointer-events-none">
        <button 
            onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${currentLocation.coordinates.lat},${currentLocation.coordinates.lng}`, '_blank')}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800/40 text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg pointer-events-auto"
        >
            <Navigation className="h-4 w-4" />
            <span className="text-sm">Get Directions</span>
        </button>
    </div>

    </div>
  );

  return (
    <section className="py-20 bg-background relative overflow-hidden" aria-label="Class Locations Section">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background/90 to-accent/5 pointer-events-none"></div>
      <div className="absolute top-40 left-1/3 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      
      {/* Floating Map Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/5 left-12 opacity-10 animate-float">
          <MapPin className="h-10 w-10 text-primary" />
        </div>
        <div className="absolute top-2/3 right-16 opacity-10 animate-float" style={{ animationDelay: "1s" }}>
          <Navigation className="h-8 w-8 text-accent" />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-2 animate-pulse">Find Us Here</h2>
          <h3 className="text-3xl md:text-4xl font-bold">
            Class <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Locations</span>
          </h3>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Join our ICT classes at convenient locations across wasity and siyora with expert instruction and modern facilities.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Location Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex rounded-2xl backdrop-blur-sm bg-gradient-to-r from-white/5 via-white/2 to-white/5 border border-white/10 p-2">
            {Object.entries(locations).map(([key, location]) => (
              <button
                key={key}
                onClick={() => setSelectedLocation(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedLocation === key
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <MapPin className="h-4 w-4" />
                {key === 'wasity' ? 'Wasity Institute' : 'Siyora Center'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Map Container */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-8">
              <MapComponent />
              
              {/* Location Info Card */}
              <div className="mt-6 p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/5 via-white/2 to-transparent border border-white/10 hover:border-white/20 transition-all duration-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-white/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-white mb-2">{currentLocation.name}</h4>
                    <p className="text-gray-300 mb-4">{currentLocation.address}</p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Phone className="h-4 w-4" />
                        {currentLocation.contact.phone}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-400">
                        <Mail className="h-4 w-4" />
                        {currentLocation.contact.email}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Classes List */}
          <div className="order-1 lg:order-2 space-y-6">
            <h4 className="text-2xl font-bold text-center lg:text-left">
              Available <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Classes</span>
            </h4>
            
            {currentLocation.classes.map((classItem, index) => (
              <div 
                key={index}
                className="group p-6 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/5 via-white/2 to-transparent border border-white/10 hover:border-white/20 transition-all duration-700 hover:scale-105 relative overflow-hidden"
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${classItem.color} opacity-0 group-hover:opacity-10 transition-opacity duration-700 rounded-2xl`}></div>
                
                {/* Floating Elements */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className={`w-3 h-3 bg-gradient-to-r ${classItem.color} rounded-full animate-ping`}></div>
                </div>
                
                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h5 className={`text-xl font-bold bg-gradient-to-r ${classItem.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                        {classItem.name}
                      </h5>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-white/10 to-white/5 border border-white/10 text-gray-300 mt-2">
                        {classItem.level}
                      </span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover/item:scale-110 transition-transform duration-300">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Schedule</p>
                        <p className="text-sm text-gray-300 font-medium">{classItem.date}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover/item:scale-110 transition-transform duration-300">
                        <Clock className="h-4 w-4 text-accent" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Time</p>
                        <p className="text-sm text-gray-300 font-medium">{classItem.time}</p>
                      </div>
                    </div>
                    
                    {/* <div className="flex items-center gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5 border border-white/10 group-hover/item:scale-110 transition-transform duration-300">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase tracking-wide">Capacity</p>
                        <p className="text-sm text-gray-300 font-medium">{classItem.students}</p>
                      </div>
                    </div> */}
                    
                    {/* <div className="flex items-center gap-3">
                      <button className={`flex-1 py-3 px-4 rounded-xl bg-gradient-to-r ${classItem.color} text-white font-medium hover:scale-105 transition-transform duration-300 shadow-lg`}>
                        Join Class
                      </button>
                    </div> */}
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full h-1 bg-white/10 rounded-full mt-4 overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${classItem.color} rounded-full group-hover:w-full transition-all duration-1000 w-0`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>

    </section>
  );
}