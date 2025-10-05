import BreadCumb from "@/app/Components/Common/BreadCumb";
import React from "react";

export const metadata = {
  title:
    "Air Conditioning Services All Melbourne Suburbs | Local Technicians | Same-Day Service",
  description:
    "Professional air conditioning services across ALL Melbourne suburbs. Local licensed technicians in your area. Split system, ducted, evaporative cooling. Same-day service, emergency repairs. Servicing CBD, North, South, East & West Melbourne. Call 0405 133 761!",
  keywords:
    "air conditioning Melbourne suburbs, local air conditioning technician Melbourne, air conditioning services Melbourne CBD, North Melbourne air conditioning, South Melbourne aircon service, East Melbourne cooling service, West Melbourne air conditioning, Melbourne metro air conditioning, suburbs air conditioning service Melbourne, local AC repair Melbourne",
  openGraph: {
    title:
      "Air Conditioning Services All Melbourne Suburbs | Local Licensed Technicians",
    description:
      "Professional AC services across ALL Melbourne suburbs. Local technicians, same-day service, emergency repairs. Split system, ducted, evaporative cooling. Call 0405 133 761!",
    url: "https://coolingservicemelbourne.com.au/service-areas/melbourne-suburbs",
    images: [
      {
        url: "/assets/img/hero_bg_1.jpg",
        width: 1200,
        height: 630,
        alt: "Air Conditioning Services All Melbourne Suburbs - Local Technicians",
      },
    ],
  },
  alternates: {
    canonical:
      "https://coolingservicemelbourne.com.au/service-areas/melbourne-suburbs",
  },
};

const MelbourneSuburbsPage = () => {
  const suburbs = [
    // CBD & Inner Melbourne
    "Melbourne CBD",
    "Carlton",
    "Collingwood",
    "Fitzroy",
    "Richmond",
    "South Melbourne",
    "Port Melbourne",
    "Docklands",

    // North Melbourne
    "Brunswick",
    "Coburg",
    "Preston",
    "Reservoir",
    "Thornbury",
    "Northcote",
    "Heidelberg",
    "Ivanhoe",
    "Fairfield",
    "Pascoe Vale",
    "Oak Park",
    "Hadfield",
    "Glenroy",
    "Broadmeadows",
    "Craigieburn",
    "Epping",
    "Mill Park",
    "Bundoora",

    // South Melbourne
    "St Kilda",
    "Brighton",
    "Sandringham",
    "Moorabbin",
    "Bentleigh",
    "Caulfield",
    "Malvern",
    "Toorak",
    "Armadale",
    "Prahran",
    "Windsor",
    "Elsternwick",
    "Ormond",
    "McKinnon",
    "Highett",
    "Cheltenham",
    "Mentone",
    "Mordialloc",
    "Aspendale",
    "Frankston",
    "Seaford",
    "Carrum",
    "Patterson Lakes",
    "Edithvale",

    // East Melbourne
    "Hawthorn",
    "Camberwell",
    "Kew",
    "Balwyn",
    "Box Hill",
    "Mitcham",
    "Nunawading",
    "Blackburn",
    "Forest Hill",
    "Vermont",
    "Ringwood",
    "Croydon",
    "Mooroolbark",
    "Lilydale",
    "Chirnside Park",
    "Doncaster",
    "Templestowe",
    "Eltham",
    "Diamond Creek",
    "Hurstbridge",
    "Warrandyte",
    "Park Orchards",

    // West Melbourne
    "Footscray",
    "Yarraville",
    "Seddon",
    "Williamstown",
    "Newport",
    "Altona",
    "Werribee",
    "Hoppers Crossing",
    "Point Cook",
    "Tarneit",
    "Truganina",
    "Caroline Springs",
    "Deer Park",
    "St Albans",
    "Sunshine",
    "Braybrook",
    "Maribyrnong",
    "Essendon",
    "Moonee Ponds",
    "Ascot Vale",
    "Flemington",
    "Kensington",
    "North Melbourne",

    // South East Melbourne
    "Dandenong",
    "Berwick",
    "Pakenham",
    "Cranbourne",
    "Narre Warren",
    "Hallam",
    "Hampton Park",
    "Lyndhurst",
    "Carrum Downs",
    "Skye",
    "Sandhurst",
    "Lynbrook",
    "Botanic Ridge",
    "Clyde North",
  ];

  return (
    <div>
      <BreadCumb
        bgImg="/assets/img/hero_bg_2.jpg"
        Title="Air Conditioning Services - All Melbourne Suburbs"
      />

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-8">
            <div className="section-header mb-4">
              <h1 className="section-title">
                Professional Air Conditioning Services Across All Melbourne
                Suburbs
              </h1>
              <p className="lead">
                At Cooling Service Melbourne, we proudly service every suburb
                across the Melbourne metropolitan area. Our local licensed
                technicians are strategically positioned to provide same-day
                service wherever you are in Melbourne.
              </p>
            </div>

            <div className="service-content">
              <h2>Why Choose Our Local Melbourne Air Conditioning Services?</h2>
              <div className="row mt-4">
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      ✅ <strong>Local Technicians in Your Area</strong> - Fast
                      response times
                    </li>
                    <li className="mb-2">
                      ✅ <strong>Same-Day Service Available</strong> -
                      Don&apos;t wait days for repairs
                    </li>
                    <li className="mb-2">
                      ✅ <strong>Licensed & Insured</strong> - Fully qualified
                      professionals
                    </li>
                    <li className="mb-2">
                      ✅ <strong>All Major Brands Serviced</strong> - Daikin,
                      Mitsubishi, LG, Panasonic
                    </li>
                    <li className="mb-2">
                      ✅ <strong>24/7 Emergency Service</strong> - Available
                      when you need us most
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      ✅ <strong>Transparent Pricing</strong> - No hidden fees
                      or surprises
                    </li>
                    <li className="mb-2">
                      ✅ <strong>5-Year Warranty</strong> - Peace of mind
                      guarantee
                    </li>
                    <li className="mb-2">
                      ✅ <strong>Free Quotes</strong> - No obligation estimates
                    </li>
                    <li className="mb-2">
                      ✅ <strong>Energy Efficient Solutions</strong> - Save on
                      electricity bills
                    </li>
                    <li className="mb-2">
                      ✅ <strong>15+ Years Experience</strong> - Trusted
                      Melbourne specialists
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="mt-5">Our Complete Air Conditioning Services</h2>
              <div className="row mt-3">
                <div className="col-md-4">
                  <div className="service-item p-3 border rounded">
                    <h4>Split System Services</h4>
                    <ul className="list-unstyled">
                      <li>• Installation</li>
                      <li>• Repairs</li>
                      <li>• Maintenance</li>
                      <li>• Replacement</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-item p-3 border rounded">
                    <h4>Ducted Systems</h4>
                    <ul className="list-unstyled">
                      <li>• Full Installation</li>
                      <li>• Zone Control</li>
                      <li>• Duct Cleaning</li>
                      <li>• System Upgrades</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="service-item p-3 border rounded">
                    <h4>Evaporative Cooling</h4>
                    <ul className="list-unstyled">
                      <li>• New Installations</li>
                      <li>• Service & Repairs</li>
                      <li>• Filter Replacement</li>
                      <li>• Water Treatment</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="mt-5">Melbourne Suburbs We Service</h2>
              <p>
                No matter where you&apos;re located in Melbourne, our
                experienced technicians can reach you quickly:
              </p>

              <div className="suburbs-grid mt-4">
                <div className="row">
                  <div className="col-md-3">
                    <h5>Melbourne CBD & Inner</h5>
                    <ul className="list-unstyled small">
                      <li>Melbourne CBD</li>
                      <li>Carlton</li>
                      <li>Collingwood</li>
                      <li>Fitzroy</li>
                      <li>Richmond</li>
                      <li>South Melbourne</li>
                      <li>Port Melbourne</li>
                      <li>Docklands</li>
                    </ul>
                  </div>

                  <div className="col-md-3">
                    <h5>North Melbourne</h5>
                    <ul className="list-unstyled small">
                      <li>Brunswick</li>
                      <li>Coburg</li>
                      <li>Preston</li>
                      <li>Thornbury</li>
                      <li>Northcote</li>
                      <li>Heidelberg</li>
                      <li>Ivanhoe</li>
                      <li>Bundoora</li>
                      <li>+ 15 more suburbs</li>
                    </ul>
                  </div>

                  <div className="col-md-3">
                    <h5>South Melbourne</h5>
                    <ul className="list-unstyled small">
                      <li>St Kilda</li>
                      <li>Brighton</li>
                      <li>Sandringham</li>
                      <li>Bentleigh</li>
                      <li>Caulfield</li>
                      <li>Malvern</li>
                      <li>Toorak</li>
                      <li>Frankston</li>
                      <li>+ 20 more suburbs</li>
                    </ul>
                  </div>

                  <div className="col-md-3">
                    <h5>East & West Melbourne</h5>
                    <ul className="list-unstyled small">
                      <li>Hawthorn</li>
                      <li>Box Hill</li>
                      <li>Ringwood</li>
                      <li>Footscray</li>
                      <li>Werribee</li>
                      <li>Sunshine</li>
                      <li>Essendon</li>
                      <li>Dandenong</li>
                      <li>+ 30 more suburbs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="cta-section bg-primary text-white p-4 rounded mt-5 text-center">
                <h3>Need Air Conditioning Service in Your Melbourne Suburb?</h3>
                <p className="mb-3">
                  Our local technicians are ready to help with same-day service
                  across all Melbourne areas.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <a
                      href="tel:0405133761"
                      className="btn btn-light btn-lg w-100 mb-2"
                    >
                      📞 Call 0405 133 761
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a
                      href="/contact"
                      className="btn btn-outline-light btn-lg w-100"
                    >
                      Get Free Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sidebar">
              <div className="widget bg-light p-4 rounded mb-4">
                <h4>Quick Service Request</h4>
                <p>
                  Need urgent air conditioning service? Get immediate
                  assistance:
                </p>
                <div className="contact-info">
                  <p>
                    <strong>📞 Emergency Service:</strong>
                    <br />
                    <a href="tel:0405133761" className="text-primary">
                      0405 133 761
                    </a>
                  </p>

                  <p>
                    <strong>📧 Email:</strong>
                    <br />
                    <a
                      href="mailto:servicefirsthampton@gmail.com"
                      className="text-primary"
                    >
                      servicefirsthampton@gmail.com
                    </a>
                  </p>

                  <p>
                    <strong>⏰ Service Hours:</strong>
                    <br />
                    24/7 Emergency Service
                    <br />
                    Mon-Fri: 7am-6pm
                    <br />
                    Sat-Sun: 8am-5pm
                  </p>
                </div>
              </div>

              <div className="widget bg-light p-4 rounded">
                <h4>Service Guarantee</h4>
                <ul className="list-unstyled">
                  <li>✅ Licensed & Insured Technicians</li>
                  <li>✅ 5-Year Warranty on All Work</li>
                  <li>✅ Same-Day Service Available</li>
                  <li>✅ Transparent, Upfront Pricing</li>
                  <li>✅ 1,200+ Happy Customers</li>
                  <li>✅ All Major Brands Serviced</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MelbourneSuburbsPage;
