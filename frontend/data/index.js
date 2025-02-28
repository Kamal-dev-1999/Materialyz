import logoDark from "@/images/logo/materialyz-logo-header.png";
import login1 from "@/images/logo/login.png";
import mycart from "@/images/logo/my-cart.png";
import logout from "@/images/logo/logout.png";
import profile from "@/images/logo/profile.png";

export const Logo = {
  dark: logoDark
};

export const Login = {
  dark: login1
};

export const MyCart = {
  dark: mycart
};

export const Logout = {
  dark: logout
};

export const Profile = {
  dark: profile
};

export const NavLinksData = [
  {
    name: "Home",
    url: "/",
    // subItems: [
    //   {
    //     name: "Home 01",
    //     url: "/"
    //   },
    //   {
    //     name: "Home 02",
    //     url: "/index-2"
    //   }
    // ]
  },
  {
    name: "Auctions",
    url: "/auction"
  },
  {
    name: "Digifactory",
    url: "/digifactory",
    subItems: [
      {
        name: "Fabrication Services",
        url: "/e-manufacture/fabrication"
      },
      {
        name: "Engineering and Design Service",
        url: "/e-manufacture/design-service"
      },
      {
        name: "3-D Printing Service",
        url: "/e-manufacture/3dprinting"
      },
      {
        name: "CNC Machining Service",
        url: "/e-manufacture/cnc-machining"
      },
      {
        name: "Metal Stamping Service",
        url: "/e-manufacture/stamping"
      },
      {
        name: "Injection Moulding",
        url: "/e-manufacture/moulding"
      },
    ]
  },
  {
    name: "Products",
    url: "/product",
    subItems: [
      {
        name: "Mechanical",
        url: "/products/mechanical"
      },
      {
        name: "Electrical",
        url: "/products/electrical"
      },
      {
        name: "Safety Supplies",
        url: "/products/safetysupplies"
      },
      {
        name: "Industrial Tools",
        url: "/products/industrialtools"
      }
    ]
  },
  // {
  //   name: "News",
  //   url: "/blog",
  //   subItems: [
  //     {
  //       name: "News Page",
  //       url: "/blog"
  //     },
  //     {
  //       name: "News Details",
  //       url: "/blog-details"
  //     }
  //   ]
  // },
  {
    name: "Contact Us",
    url: "/contact"
  },
];

import digiheader from "@/images/digifactory-header.png"
export const DigiHeader = [
  {
    image: digiheader,
  },
]

import auctionheader from "@/images/auctions-header.png"
export const AuctionHeader = [
  {
    image: auctionheader,
  },
]

import productheader from "@/images/products/products-header.jpg"
export const ProductHeader = [
  {
    image: productheader,
  },
]

import sliderOne1 from "@/images/slider-1.jpg";
import sliderOne2 from "@/images/banner-1-2.jpg";

export const SliderOneData = [
  {
    image: sliderOne1,
    title: "Copying and \n Printing Center",
    subText: "We bring design together with technology",
    button: {
      label: "Our Pricing",
      url: "/pricing"
    }
  },
  // {
  //   image: sliderOne2,
  //   title: "Copying and \n Printing Center",
  //   subText: "We bring design together with technology",
  //   button: {
  //     label: "Our Pricing",
  //     url: "/pricing"
  //   }
  // }
];

import sliderTwo1 from "@/images/banner-featured-1-1.png";

export const SliderTwoData = {
  image: sliderTwo1,
  posts: [
    {
      title: "Quality \n Printing \n Service",
      subTitle: "We believe in the power of great design",
      button: {
        label: "Our Pricing",
        url: "/pricing"
      }
    },
    {
      title: "Quality \n Printing \n Service",
      subTitle: "We believe in the power of great design",
      button: {
        label: "Our Pricing",
        url: "/pricing"
      }
    }
  ]
};

import video1 from "@/images/video-box-1-1.jpg";
export const VideoData = {
  image: video1,
  ID: "mUhcFs6v-Xw",
  caption: "Printfinity Makes \n Every Card \n Unique"
};

export const CallToActionData = {
  sectionContent: {
    subText: "Business stationery printing",
    title: "Even More Good \n Stuff",
    textAlignment: "left"
  },
  lists: [
    "Professional designs with added fizz",
    "Create an army of business stationery",
    "Take your attention to detail up a level",
    "Totally safe for laser printers"
  ],
  button: {
    label: "Learn More",
    url: "/about"
  }
};

import callToActionTwo1 from "@/images/free-sample-1-2.jpg";

export const CallToActionTwoData = {
  sectionContent: {
    subText: "Order a free sample",
    title: "Get a Feel For \n Colors",
    textAlignment: "left"
  },
  content:
    "Order a sample so you can touch and feel our premium range of papers and finishes for yourself. It’s free! Print full color on both sides of your business cards.",
  button: {
    label: "Get Sample",
    url: "/contact"
  },
  image: {
    name: callToActionTwo1,
    caption: "Professional designs \n with added fizz"
  }
};

export const CallToActionThreeData = {
  title: "Try Our New \n  Premium Extra \n  Thick Cards.",
  subText: "Thickest business card",
  button: {
    label: "Get Sample",
    url: "/contact"
  }
};

import Joinus from "@/images/certificate.jpg";

export const JoinusData = {
  // backgroundImage: aboutThree1,
  sectionContent: {
    // subText: "materialyz",
    title: "Join Us in Making a Difference.",
    textAlignment: "left"
  },
  content:
    "We invite manufacturers, buyers, and industry players to join us in our mission to create a more sustainable industrial landscape. Together, we can build a future where surplus materials find new life, resources are used efficiently, and environmental stewardship is at the forefront of industrial operations. If you have any specific questions or would like further information about Materialyz.com, please feel free to reach out. We look forward to being a part of your sustainable resource management journey. ",
  button: {
    label: "Learn More",
    url: "/about"
  },
}

import aboutThree1 from "@/images/certificate.jpg";

export const AboutThreeData = {
  backgroundImage: aboutThree1,
  sectionContent: {
    subText: "materialyz",
    title: "Quality Certifications",
    textAlignment: "left"
  },
  content:
    "Materialyz.com, under the banner of Mafco Industrial Solutions Private Limited, is recognized as a startup by the Government of India’s Department for Promotion of Industry and Internal Trade (DPIIT). Operating in the Green Technology and Waste Management sectors, Materialyz.com aims to transform surplus materials into valuable resources, contributing to a sustainable and circular economy.\n \n By redefining traditional manufacturing practices and serving as a virtual manufacturing hub, Materialyz.com optimizes resource utilization, reduces waste, and leads the way toward a more sustainable future.",
  button: {
    label: "Learn More",
    url: "/about"
  },
  phone: "000 8888 999",
  posts: [
    {
      title: "T-Shirt \nPrinting",
      icon: "printify-icon-t-shirt-with-square",
      url: "/service-details"
    },
    {
      title: "Flyer \nPrinting",
      icon: "printify-icon-brochure-folded",
      url: "/service-details"
    },
    {
      title: "Poster \n Printing",
      icon: "printify-icon-continuous-feed-paper",
      url: "/service-details"
    },
    {
      title: "Sticker  \n Printing",
      icon: "printify-icon-circular-sticker",
      url: "/service-details"
    }
  ]
};

import aboutTwo1 from "@/images/logo/materialyz-logo.png";

export const AboutTwoData = {
  sectionContent: {
    // subText: "Welcome to printify",
    title: "What is materialyz?",
    textAlignment: "left"
  },
  content:
  "Materialyz.com is a pioneering platform revolutionizing industrial resource management with a focus on sustainability and efficiency. As the world’s first hybrid industrial raw material platform, Materialyz.com leads the way in creating a circular economy by repurposing and redistributing surplus inventories to reduce waste and environmental impact. \n \n Our mission is to combat waste and enhance resource efficiency by connecting surplus materials with industries that can reuse, recycle, or upcycle them. This approach extends the lifespan of materials, fosters responsible consumption, and minimizes environmental costs.",
  url: "/about",
  image: aboutTwo1
};

export const FaqData = {
  sectionContent: {
    subText: "Question and answers",
    title: "Frequently \nAsked Questions",
    textAlignment: "left"
  },
  posts: [
    {
      title: "Want to make plan for retairment?",
      content:
        "Color Business Cards start at $19.99 for 50 cards. \n \n The final cost depends on which turnaround time and paperfinish options you've selected at checkout - you can get an accurate quote in seconds using our online cost calculator."
    },
    {
      title: "How I can get good plan for future for my children education?",
      content:
        "Color Business Cards start at $19.99 for 50 cards. \n \n The final cost depends on which turnaround time and paper/finish options you've selected at checkout - you can get an accurate quote in seconds using our online cost calculator."
    },
    {
      title: "I can get online appointmet with agent?",
      content:
        "Color Business Cards start at $19.99 for 50 cards. \n \n The final cost depends on which turnaround time and paper/finish options you've selected at checkout - you can get an accurate quote in seconds using our online cost calculator."
    },
    {
      title: "Need a good insurace for term plan?",
      content:
        "Color Business Cards start at $19.99 for 50 cards. \n \n The final cost depends on which turnaround time and paper/finish options you've selected at checkout - you can get an accurate quote in seconds using our online cost calculator."
    }
  ]
};

import featureCarousel1 from "@/images/we-belive-in-1-1.jpg";
import featureCarousel2 from "@/images/we-belive-in-1-2.jpg";

export const FeatureCarouselData = [
  {
    image: featureCarousel1,
    title: "We believe in the \n power of great \n design",
    text:
      "Design helps us stand out: from the clothes we wear, to the homes we live in, to the business cards we use. Design tells a story about \n us and what we stand for.",
    url: "/services"
  },
  {
    image: featureCarousel2,
    title: "We believe in the \n power of great \n design",
    text:
      "Design helps us stand out: from the clothes we wear, to the homes we live in, to the business cards we use. Design tells a story about \n us and what we stand for.",
    url: "/services"
  }
];

import services1 from "@/images/services/auction.jpg";
import services2 from "@/images/services/digifactory.jpg";
import services3 from "@/images/services/products.jpg";

export const TeamOneData = {
  sectionContent: {
    title: "Our Services",
    // subText: "The leadership",
    content:
      "There are many variations of passages of lorem Ipsum available, but \nthe majority have suffered alteration in some form."
  },
  posts: [
    {
      name: "Auctions",
      designation: "materialyz",
      image: services1,
      content:
        "Join our innovative auction platform dedicated to upcycling industrial materials and supporting the circular economy, where buyers and sellers collaborate to create sustainable value to your store."
    },
    {
      name: "Digifactory",
      designation: "materialyz",
      image: services2,
      content:
        "Revolutionizing Industrial Resource Management for a Sustainable Future."
    },
    {
      name: "Products",
      designation: "materialyz",
      image: services3,
      content:
        "Explore our comprehensive product platform for industrial raw materials to streamline procurement and drive efficiency."
    }
  ]
};

import testimonials1 from "@/images/testi-1-1.jpg";
import testimonials2 from "@/images/testi-1-2.jpg";

export const TestimonialsOneData = [
  {
    image: testimonials1,
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.",
    name: "Christine Eve"
  },
  {
    image: testimonials2,
    content:
      "This is due to their excellent service, competitive pricing and customer support. It’s throughly refresing to get such a personal touch.",
    name: "Mildred Rodriguez"
  }
];

import em1 from "@/images/digifactory/fabrication.jpg";
import em2 from "@/images/digifactory/design-service.jpg";
import em3 from "@/images/digifactory/3d-printing.jpg";
import em4 from "@/images/digifactory/cnc-machining.jpg";
import em5 from "@/images/digifactory/stamping.jpg";
import em6 from "@/images/digifactory/injection-molding.jpg";

export const EMData = [
  {
    title: "Fabrication Services",
    image: em1,
    url: "/e-manufacture/fabrication"
  },
  {
    title: "Engineering and Design Service",
    image: em2,
    url: "/e-manufacture/design-service"
  },
  {
    title: "3-D Printing Service",
    image: em3,
    url: "/e-manufacture/3dprinting"
  },
  {
    title: "CNC Machining Service",
    image: em4,
    url: "/e-manufacture/cnc-machining"
  },
  {
    title: "Metal Stamping Service",
    image: em5,
    url: "/e-manufacture/stamping"
  },
  {
    title: "Injection Moulding Service",
    image: em6,
    url: "/e-manufacture/moulding"
  }
];

import aboutOne1 from "@/images/about-1-1.jpg";
import aboutOne2 from "@/images/about-1-2.jpg";
import aboutOne3 from "@/images/about-1-3.jpg";

export const AboutOneData = [
  {
    title: "About Company",
    text:
      "Praesent dapibus eleifend augue eget ipsum sollicitudin velit malesuada eu liquam bland diam ac venenatis.",
    image: aboutOne1,
    url: "/services"
  },
  {
    title: "Our Promises",
    text:
      "Praesent dapibus eleifend augue eget ipsum sollicitudin velit malesuada eu liquam bland diam ac venenatis.",
    image: aboutOne2,
    url: "/contact"
  },
  {
    title: "How We Work",
    text:
      "Praesent dapibus eleifend augue eget ipsum sollicitudin velit malesuada eu liquam bland diam ac venenatis.",
    image: aboutOne3,
    url: "/pricing"
  }
];

import serviceDetails1 from "@/images/service-details-1-1.jpg";
import serviceDetails2 from "@/images/service-details-1-2.jpg";
import serviceDetails3 from "@/images/service-details-1-3.jpg";

export const ServiceDetailsData = [
  {
    image: serviceDetails1,
    title: "World's First Industrial Raw Material Platform",
    lists: [
      "Our platform promotes responsible resource management. By creating a space for the seamless exchange of excess materials.",
      "We help industries optimize their resources and minimize waste.",
      "By enabling the reselling of excess inventories, we address the critical issue of waste and inefficiency."
    ]
  },
  {
    image: serviceDetails2,
    title: "Available in Matte or Gloss",
    lists: [
      "Matte is shine free, so no glare",
      "Gloss makes colors really “pop”",
      "Both come at no extra cost"
    ]
  },
  {
    image: serviceDetails3,
    title: "Versatile Finish Options",
    lists: [
      "Coat both sides for extra protection",
      "Leave one side uncoated to write on",
      'Or get that "traditional" Postcard feel'
    ]
  }
];

export const ServiceTabOneData = [
  {
    title: "T-Shirt\n Printing",
    icon: "printify-icon-t-shirt-with-square",
    content: {
      title: "T-Shirt Printing",
      subText: "Our services",
      content:
        "Choose the perfect flyer design, You can’t go wrong. We start at premium and go all the way to extra fancy. There’s \nOriginal single-sided flyers (writeable on one side) that you can send without an envelope, Original double-sided \nflyers (more impactful) and luxe flyers (extra thick and luxurious)."
    }
  },
  {
    title: "Flyer \n Printing",
    icon: "printify-icon-brochure-folded",
    content: {
      title: "Flyer Printing",
      subText: "Our services",
      content:
        "Choose the perfect flyer design, You can’t go wrong. We start at premium and go all the way to extra fancy. There’s \n Original single-sided flyers (writeable on one side) that you can send without an envelope, Original double-sided \n flyers (more impactful) and luxe flyers (extra thick and luxurious)."
    }
  },
  {
    title: "Poster \n Printing",
    icon: "printify-icon-continuous-feed-paper",
    content: {
      title: "Poster Printing",
      subText: "Our services",
      content:
        "Choose the perfect flyer design, You can’t go wrong. We start at premium and go all the way to extra fancy. There’s \n Original single-sided flyers (writeable on one side) that you can send without an envelope, Original double-sided \n flyers (more impactful) and luxe flyers (extra thick and luxurious)."
    }
  },
  {
    title: "Sticker\n Printing",
    icon: "printify-icon-circular-sticker",
    content: {
      title: "Sticker \n  Printing",
      subText: "Our services",
      content:
        "Choose the perfect flyer design, You can’t go wrong. We start at premium and go all the way to extra fancy. There’s \n Original single-sided flyers (writeable on one side) that you can send without an envelope, Original double-sided \n flyers (more impactful) and luxe flyers (extra thick and luxurious)."
    }
  },
  {
    title: "Postcard \n Printing",
    icon: "printify-icon-white-sheets",
    content: {
      title: "Postcard Printing",
      subText: "Our services",
      content:
        "Choose the perfect flyer design, You can’t go wrong. We start at premium and go all the way to extra fancy. There’s \n Original single-sided flyers (writeable on one side) that you can send without an envelope, Original double-sided \n flyers (more impactful) and luxe flyers (extra thick and luxurious)."
    }
  }
];

export const FeatureTwoData = {
  sectionContent: {
    title: "Printify Unique \n Features ",
    subText: " Next printing level ",
    content:
      "Take your business cards, Flyers and Stickers to the next level with exclusive and innovative features."
  },
  posts: [
    {
      name: "Business \n Cards",
      url: "/service-details",
      icon: "printify-icon-white-sheets"
    },
    {
      name: "Flyer \n Printing",
      url: "/service-details",
      icon: "printify-icon-brochure-folded"
    },
    {
      name: "Sticker \n Printing",
      url: "/service-details",
      icon: "printify-icon-circular-sticker"
    }
  ]
};

import feature1 from "@/images/what-we-do-3-1.jpg";
import feature2 from "@/images/what-we-do-3-1-1.jpg";
import feature3 from "@/images/what-we-do-3-1-2.jpg";
import feature4 from "@/images/what-we-do-3-1-3.jpg";

export const FeatureOneData = {
  sectionContent: {
    title: "What We Do",
    subText: " Our features",
    content:
      "There are many variations of passages of lorem Ipsum available, but \n the majority have suffered alteration in some form."
  },
  posts: [
    {
      image: feature1,
      title: "We Make Every Card Unique",
      content:
        "Print a different image on the back of every single card at no upcharge. Watch the video for inspiration on how to get creative with Printfinity.",
      url: "/about"
    },
    {
      image: feature2,
      title: "Free Full-Color Printing",
      content:
        "Print full color on both sides of your business cards – it’s always included in the price.",
      url: "/about"
    },
    {
      image: feature3,
      title: "Rounded Corners for All",
      content:
        "Print full color on both sides of your business cards – it’s always included in the price.",
      url: "/about"
    },
    {
      image: feature4,
      title: "Satisfaction Guaranteed",
      content:
        "Print full color on both sides of your business cards – it’s always included in the price.",
      url: "/about"
    }
  ]
};

import mediaImage1 from "@/images/media-features/euro.jpg";
import mediaImage2 from "@/images/media-features/space.jpg";

export const MediaFeaturesData = [
  {
    image: mediaImage1,
    title: "Euro News - 2nd Oct, 2024",
    count: 50,
    price: 19.99,
    text:
      "Materialyz co-founder Hitesh Mehta interviewed at Baku Climate Action Week",
    url: "https://www.euronews.com/embed/2644860"
  },
  {
    image: mediaImage2,
    title: "Space TV News - 2nd Oct, 2024",
    count: 50,
    price: 19.99,
    text:
      "Materialyz co-founder Vikram Mehta interviewed at Baku Climate Action Week",
    url: "https://www.youtube.com/watch?v=K5gVZg8GSqI&t=3m09s"
  },
  // {
  //   image: mediaImage1,
  //   title: "Euro News - 2nd Oct, 2024",
  //   count: 50,
  //   price: 19.99,
  //   text:
  //     "Materialyz co-founder Hitesh Mehta interviewed at Baku Climate Action Week",
  //   url: "https://www.euronews.com/embed/2644860"
  // },
]


// Product Content

import productImage1 from "@/images/products/main/carbon-valve.jpg";
import productImage2 from "@/images/products/main/cupro-nickel.jpg";
import productImage3 from "@/images/products/main/grounding-clamps.jpg";
import productImage4 from "@/images/products/main/lock-acc.jpg";
import productImage5 from "@/images/products/main/welding-wires.jpg";
import productImage6 from "@/images/products/main/inconel-rod-bar.jpg";

export let ProductData = [
  {
    image: productImage1,
    title: "Carbon Steel Bars",
    count: 50,
    price: 19.99,
    text: "Valves | Materialyz | 1 option",
    url: ""
  },
  {
    image: productImage2,
    title: "Cupro Nickel Pipes",
    count: 50,
    price: 19.99,
    text: "Pipes | Materialyz | 1 option",
    url: ""
  },
  {
    image: productImage3,
    title: "Grounding Clamps",
    count: 50,
    price: 19.99,
    text: "Electrical | Materialyz | 1 option",
    url: ""
  },
  {
    image: productImage4,
    title: "Lockouts and Accessories",
    count: 50,
    price: 19.99,
    text: "Materialyz | 1 option",
    url: ""
  },
  {
    image: productImage5,
    title: "Copper Welding Wires",
    count: 50,
    price: 19.99,
    text: "Materialyz | 1 option",
    url: ""
  },
  {
    image: productImage6,
    title: "Inconel Rods and Bars",
    count: 50,
    price: 19.99,
    text: "Rods & Bars | Materialyz | 1 option",
    url: ""
  }
];

export default ProductData;



import mechnicalImage1 from "@/images/products/mechanical/duplex-rod-bar.jpg";
import mechnicalImage2 from "@/images/products/mechanical/nickel-plate.jpg";
import mechnicalImage3 from "@/images/products/mechanical/diaphragm-vacuum-pump.jpg";
import mechnicalImage4 from "@/images/products/mechanical/inconel-valves.jpg";
import mechnicalImage5 from "@/images/products/main/welding-wires.jpg";
import mechnicalImage6 from "@/images/products/main/inconel-rod-bar.jpg";

export const MechanicalData = [
  {
    image: mechnicalImage1,
    title: "Duplex Rods and Bars",
    count: 50,
    price: 19.99,
    text:
      "Rods & Bars | Materialyz | 1 option",
    url: ""
  },
  {
    image: mechnicalImage2,
    title: "Cupro Nickel Sheets / Plates",
    count: 50,
    price: 19.99,
    text:
      "Sheet-Plate | Materialyz | 1 option",
    url: ""
  },
  {
    image: mechnicalImage3,
    title: "Diaphragm Vaccum Pumps",
    count: 50,
    price: 19.99,
    text:
      "Materialyz | 1 option",
    url: ""
  },
  {
    image: mechnicalImage4,
    title: "Inconel Valves",
    count: 50,
    price: 19.99,
    text:
      "Valves | Materialyz | 1 option",
    url: ""
  }
];

import electricalImage1 from "@/images/products/mechanical/duplex-rod-bar.jpg";
import electricalImage2 from "@/images/products/mechanical/nickel-plate.jpg";
import electricalImage3 from "@/images/products/mechanical/diaphragm-vacuum-pump.jpg";
import electricalImage4 from "@/images/products/mechanical/inconel-valves.jpg";
import electricalImage5 from "@/images/products/main/welding-wires.jpg";
import electricalImage6 from "@/images/products/main/inconel-rod-bar.jpg";

export const ElectricalData = [
  {
    image: electricalImage1,
    title: "Duplex Rods and Bars",
    count: 50,
    price: 19.99,
    text:
      "Rods & Bars | Materialyz | 1 option",
    url: ""
  },
  {
    image: electricalImage2,
    title: "Cupro Nickel Sheets / Plates",
    count: 50,
    price: 19.99,
    text:
      "Sheet-Plate | Materialyz | 1 option",
    url: ""
  },
  {
    image: electricalImage3,
    title: "Diaphragm Vaccum Pumps",
    count: 50,
    price: 19.99,
    text:
      "Materialyz | 1 option",
    url: ""
  },
  {
    image: electricalImage4,
    title: "Inconel Valves",
    count: 50,
    price: 19.99,
    text:
      "Valves | Materialyz | 1 option",
    url: ""
  }
];

import suppliesImage1 from "@/images/products/mechanical/duplex-rod-bar.jpg";
import suppliesImage2 from "@/images/products/mechanical/nickel-plate.jpg";
import suppliesImage3 from "@/images/products/mechanical/diaphragm-vacuum-pump.jpg";
import suppliesImage4 from "@/images/products/mechanical/inconel-valves.jpg";
import suppliesImage5 from "@/images/products/main/welding-wires.jpg";
import suppliesImage6 from "@/images/products/main/inconel-rod-bar.jpg";

export const SafetySuppliesData = [
  {
    image: suppliesImage1,
    title: "Duplex Rods and Bars",
    count: 50,
    price: 19.99,
    text:
      "Rods & Bars | Materialyz | 1 option",
    url: ""
  },
  {
    image: suppliesImage2,
    title: "Cupro Nickel Sheets / Plates",
    count: 50,
    price: 19.99,
    text:
      "Sheet-Plate | Materialyz | 1 option",
    url: ""
  },
  {
    image: suppliesImage3,
    title: "Diaphragm Vaccum Pumps",
    count: 50,
    price: 19.99,
    text:
      "Materialyz | 1 option",
    url: ""
  },
  {
    image: suppliesImage4,
    title: "Inconel Valves",
    count: 50,
    price: 19.99,
    text:
      "Valves | Materialyz | 1 option",
    url: ""
  }
];

import toolsImage1 from "@/images/products/mechanical/duplex-rod-bar.jpg";
import toolsImage2 from "@/images/products/mechanical/nickel-plate.jpg";
import toolsImage3 from "@/images/products/mechanical/diaphragm-vacuum-pump.jpg";
import toolsImage4 from "@/images/products/mechanical/inconel-valves.jpg";
import toolsImage5 from "@/images/products/main/welding-wires.jpg";
import toolsImage6 from "@/images/products/main/inconel-rod-bar.jpg";

export const ToolsData = [
  {
    image: toolsImage1,
    title: "Duplex Rods and Bars",
    count: 50,
    price: 19.99,
    text:
      "Rods & Bars | Materialyz | 1 option",
    url: ""
  },
  {
    image: toolsImage2,
    title: "Cupro Nickel Sheets / Plates",
    count: 50,
    price: 19.99,
    text:
      "Sheet-Plate | Materialyz | 1 option",
    url: ""
  },
  {
    image: toolsImage3,
    title: "Diaphragm Vaccum Pumps",
    count: 50,
    price: 19.99,
    text:
      "Materialyz | 1 option",
    url: ""
  },
  {
    image: toolsImage4,
    title: "Inconel Valves",
    count: 50,
    price: 19.99,
    text:
      "Valves | Materialyz | 1 option",
    url: ""
  }
];

import serviceImage1 from "@/images/service-1-1.jpg";
import serviceImage2 from "@/images/service-1-2.jpg";
import serviceImage3 from "@/images/service-1-3.jpg";
import serviceImage4 from "@/images/service-1-4.jpg";
import serviceImage5 from "@/images/service-1-5.jpg";
import serviceImage6 from "@/images/service-1-6.jpg";

export const ServiceOneData = [
  {
    image: serviceImage1,
    title: "Business Cards",
    count: 50,
    price: 19.99,
    text:
      "Cut through the networking clutter and say hello with Printify Business Cards.",
    url: "/service-details"
  },
  {
    image: serviceImage2,
    title: "Postcards",
    count: 50,
    price: 19.99,
    text:
      "Cut through the networking clutter and say hello with Printify Business Cards.",
    url: "/service-details"
  },
  {
    image: serviceImage3,
    title: "Stickers and Labels",
    count: 50,
    price: 19.99,
    text:
      "Cut through the networking clutter and say hello with Printify Business Cards.",
    url: "/service-details"
  },
  {
    image: serviceImage4,
    title: "Flyers",
    count: 50,
    price: 19.99,
    text:
      "Cut through the networking clutter and say hello with Printify Business Cards.",
    url: "/service-details"
  },
  {
    image: serviceImage5,
    title: "Envelopes",
    count: 50,
    price: 19.99,
    text:
      "Cut through the networking clutter and say hello with Printify Business Cards.",
    url: "/service-details"
  },
  {
    image: serviceImage6,
    title: "Greeting Cards",
    count: 50,
    price: 19.99,
    text:
      "Cut through the networking clutter and say hello with Printify Business Cards.",
    url: "/service-details"
  }
];

import projectImage1 from "@/images/project-1-1.jpg";
import projectImage2 from "@/images/project-1-2.jpg";
import projectImage3 from "@/images/project-1-3.jpg";
import projectImage4 from "@/images/project-1-4.jpg";
import projectImage5 from "@/images/project-1-5.jpg";
import projectImage6 from "@/images/project-1-6.jpg";
export const ProjectOneData = [
  {
    image: projectImage1,
    category: "printing",
    title: "Thick Paper Book",
    url: "/project-details"
  },
  {
    image: projectImage2,
    category: "printing",
    title: "Ninety Nine You",
    url: "/project-details"
  },
  {
    image: projectImage3,
    category: "printing",
    title: "Colorful Photo Print",
    url: "/project-details"
  },
  {
    image: projectImage4,
    category: "printing",
    title: "Square Paper Book",
    url: "/project-details"
  },
  {
    image: projectImage5,
    category: "printing",
    title: "Book Copy",
    url: "/project-details"
  },
  {
    image: projectImage6,
    category: "printing",
    title: "C Creative Mess",
    url: "/project-details"
  }
];

import errorImage from "@/images/404-text.png";
export const errorData = {
  title: "Oops! This page is not available",
  text: "Please go back to home and try to find out once again.",
  image: errorImage
};

import progressImage1 from "@/images/what-we-do-2-1.jpg";

export const ProgressData = {
  sectionImage: progressImage1,
  sectionContent: {
    title: "You’ll get a \n perfect fit for \n your business.",
    subText: "What we do",
    content:
      "Handing out a business card is often the first impression people take of your business, so you need to get it right. Using your own photography or artwork to create custom business cards can help, and PRINTIFY makes the process easy with our simple online tools and templates."
  },
  posts: [
    {
      title: "Flyer \n Printing",
      price: "8.99",
      percentCount: "90"
    },
    {
      title: "Sticker \n Printing",
      price: "9.99",
      percentCount: "70"
    }
  ]
};

import auction1 from "@/images/auctions/auction1.png";
import auction2 from "@/images/auctions/auction2.png";

// export const AuctionData = {
//   // sectionContent: {
//   //   title: "Plans & Pricing",
//   //   subText: "Choose best plan",
//   //   content:
//   //     "There are many variations of passages of lorem Ipsum available, but \n the majority have suffered alteration in some form."
//   // },
//   posts: [
//     {
//       name: "Starting Bid",
//       price: "37,000.00",
//       image: auction1,
//       icon: "printify-icon-continuous-feed-paper",
//       url: "/contact",
//       lists: [
//         {
//           name: "MS Heavy Scrap: Casting and Forging - 40 Ton"
//         },
//         // {
//         //   name: "Preimum Paper"
//         // },
//         // {
//         //   name: "Extra Thick"
//         // }
//       ]
//     },
//     {
//       name: "Starting Bid",
//       price: "75,000.00",
//       image: auction2,
//       icon: "printify-icon-brochure-folded",
//       url: "/contact",
//       lists: [
//         {
//           name: "MS Slit Coil - 10 Ton"
//         },
//         // {
//         //   name: "Preimum Paper"
//         // },
//         // {
//         //   name: "Extra Thick"
//         // }
//       ]
//     },
//     // {
//     //   name: "Ultimate plan",
//     //   price: "45.00",
//     //   icon: "printify-icon-circular-sticker",
//     //   url: "/contact",
//     //   lists: [
//     //     {
//     //       name: "Rounded & Colored"
//     //     },
//     //     {
//     //       name: "Preimum Paper"
//     //     },
//     //     {
//     //       name: "Extra Thick"
//     //     }
//     //   ]
//     // }
//   ]
// };

export const AuctionData = {
  posts: [
    {
      name: "Starting Bid",
      price: "37,000.00",
      image: auction1, // Static Image for fallback
      icon: "printify-icon-continuous-feed-paper",
      url: "/login",
      lists: [
        {
          name: "MS Heavy Scrap: Casting and Forging - 40 Ton"
        },
      ],
      // Array of images for the image slider
      images: [auction1, auction2]
    },
    {
      name: "Starting Bid",
      price: "75,000.00",
      image: auction2, // Static Image for fallback
      icon: "printify-icon-brochure-folded",
      url: "/login",
      lists: [
        {
          name: "MS Slit Coil - 10 Ton"
        },
      ],
      // Array of images for the image slider
      images: [auction2, auction1]
    }
  ]
};


export const PricingData = {
  sectionContent: {
    title: "Plans & Pricing",
    subText: "Choose best plan",
    content:
      "There are many variations of passages of lorem Ipsum available, but \n the majority have suffered alteration in some form."
  },
  posts: [
    {
      name: "Standard plan",
      price: "25.00",
      icon: "printify-icon-continuous-feed-paper",
      url: "/contact",
      lists: [
        {
          name: "Rounded & Colored"
        },
        {
          name: "Preimum Paper"
        },
        {
          name: "Extra Thick"
        }
      ]
    },
    {
      name: "Premium plan",
      price: "35.00",
      icon: "printify-icon-brochure-folded",
      url: "/contact",
      lists: [
        {
          name: "Rounded & Colored"
        },
        {
          name: "Preimum Paper"
        },
        {
          name: "Extra Thick"
        }
      ]
    },
    {
      name: "Ultimate plan",
      price: "45.00",
      icon: "printify-icon-circular-sticker",
      url: "/contact",
      lists: [
        {
          name: "Rounded & Colored"
        },
        {
          name: "Preimum Paper"
        },
        {
          name: "Extra Thick"
        }
      ]
    }
  ]
};

import clientImage1 from "@/images/brand-1-1.png";
import clientImage2 from "@/images/brand-1-2.png";
import clientImage3 from "@/images/brand-1-3.png";
import clientImage4 from "@/images/brand-1-4.png";
import clientImage5 from "@/images/brand-1-5.png";

export const ClientCarouselData = [
  {
    image: clientImage1
  },
  {
    image: clientImage2
  },
  {
    image: clientImage3
  },
  {
    image: clientImage4
  },
  {
    image: clientImage5
  }
];

import sidebarImage from "@/images/widget-1-1.png";

export const sidebarTextWidgetData = {
  text:
    "Lorem Ipsum is simply dummy text of the rinting and typesetting industry has been the industry.",
  title: "Image with text",
  image: sidebarImage
};

import blogImage1 from "@/images/blog-1-1.jpg";
import blogImage2 from "@/images/blog-1-2.jpg";
import blogImage3 from "@/images/blog-1-3.jpg";
import blogImage4 from "@/images/blog-1-4.jpg";
import blogImage5 from "@/images/blog-1-5.jpg";
import blogImage6 from "@/images/blog-1-6.jpg";

export const BlogPostsData = [
  {
    title: "What final touches can i add",
    text:
      "We offer Letterpress, Spot Gloss, Raised Spot Gloss or Gold Foil. There are many people variation of passages of lorem Ipsum available in the majority alteration in some.",
    image: blogImage1,
    author: "admin",
    date: "20 March, 2018",
    commentCount: "3 Comments",
    url: "/blog-details"
  },
  {
    title: "How to brand a tattoo studio",
    text:
      "We offer Letterpress, Spot Gloss, Raised Spot Gloss or Gold Foil. There are many people variation of passages of lorem Ipsum available in the majority alteration in some.",
    image: blogImage2,
    author: "admin",
    date: "20 March, 2018",
    commentCount: "3 Comments",
    url: "/blog-details"
  },
  {
    title: "What file types do you accept",
    text:
      "We offer Letterpress, Spot Gloss, Raised Spot Gloss or Gold Foil. There are many people variation of passages of lorem Ipsum available in the majority alteration in some.",
    image: blogImage3,
    author: "admin",
    date: "20 March, 2018",
    commentCount: "3 Comments",
    url: "/blog-details"
  },
  {
    title: "Do you offer design services",
    text:
      "We offer Letterpress, Spot Gloss, Raised Spot Gloss or Gold Foil. There are many people variation of passages of lorem Ipsum available in the majority alteration in some.",
    image: blogImage4,
    author: "admin",
    date: "20 March, 2018",
    commentCount: "3 Comments",
    url: "/blog-details"
  },
  {
    title: "Bleed, trim and safe area",
    text:
      "We offer Letterpress, Spot Gloss, Raised Spot Gloss or Gold Foil. There are many people variation of passages of lorem Ipsum available in the majority alteration in some.",
    image: blogImage5,
    author: "admin",
    date: "20 March, 2018",
    commentCount: "3 Comments",
    url: "/blog-details"
  },
  {
    title: "Can I use my own logo",
    text:
      "We offer Letterpress, Spot Gloss, Raised Spot Gloss or Gold Foil. There are many people variation of passages of lorem Ipsum available in the majority alteration in some.",
    image: blogImage6,
    author: "admin",
    date: "20 March, 2018",
    commentCount: "3 Comments",
    url: "/blog-details"
  }
];

import blogDetailsImage1 from "@/images/blog-details-1-1.jpg";

export const BlogDetailsData = {
  title: "What final touches can i add",
  text:
    "We offer Letterpress, Spot Gloss, Raised Spot Gloss or Gold Foil. There are many people variation of passages of lorem Ipsum available in the majority alteration in some.",
  image: blogDetailsImage1,
  author: "admin",
  date: "20 March, 2018",
  commentCount: "3 Comments",
  url: "/blog-details"
};

import commentImage1 from "@/images/comment-1-1.png";
import commentImage2 from "@/images/comment-1-2.png";
import Mechanical from './../pages/products/mechanical';
import { SuppliesData } from '@/data';

export const BlogCommentData = {
  sectionContent: {
    title: "2 Comments",
    subText: "Read comments"
  },
  posts: [
    {
      image: commentImage1,
      title: "Jayme Secord",
      date: "20 Mar, 2018",
      time: "4:00 pm",
      content:
        "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer nullam condimentum purus. In non ex at ligula fringilla lobortis et mauris auctor aliquet."
    },
    {
      image: commentImage2,
      title: "Lottie Golda",
      date: "20 Mar, 2018",
      time: "4:00 pm",
      content:
        "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer nullam condimentum purus. In non ex at ligula fringilla lobortis et mauris auctor aliquet."
    }
  ]
};

export const CommentFromData = {
  sectionContent: {
    title: "Write comment",
    subText: "Leave Comment"
  }
};

export const ContactFromData = {
  sectionContent: {
    title: "Send Message",
    subText: "Contact with us"
  }
};

export const ContactInfosData = {
  sectionContent: {
    title: "Details",
    subText: "Contact info",
    textAlignment: "center"
  },
  posts: [
    {
      title: "Address",
      text: "CP Tank, VP Road, Bhuleshwar, \n Gulal Wadi, Charni Road (East)"
    },
    {
      title: "Phone",
      text: "Local: 222 999 888  \n  Mobile: 000 8888 999"
    },
    {
      title: "Email",
      text: "contact@materialyz.com  \n"
    },
    // {
    //   title: "Follow",
    //   socials: [
    //     {
    //       icon: "fab fa-twitter",
    //       url: "#"
    //     },
    //     {
    //       icon: "fab fa-pinterest",
    //       url: "#"
    //     },
    //     {
    //       icon: "fab fa-facebook-f",
    //       url: "#"
    //     },
    //     {
    //       icon: "fab fa-youtube",
    //       url: "#"
    //     }
    //   ]
    // }
  ]
};

export const FooterAboutData = {
  title: "Materialyz",
  text:
    "Focusing on upscaling of raw materials.",
  subtitle: "Newsletter"
};

export const FooterLinksData = {
  title: "Explore",
  links: [
    {
      label: "Auctions",
      url: "/about"
    },
    {
      label: "Digifactory",
      url: "/digifactory"
    },
    {
      label: "Products",
      url: "/product"
    },
    {
      label: "Contact Us",
      url: "/contact"
    },
    // {
    //   label: "How it Works",
    //   url: "/about"
    // }
  ]
};

export const FooterPostsData = {
  title: "Latest Posts",
  posts: [
    // {
    //   title: "A Clean Website Gives More Experience To The Visitors",
    //   date: "July 12, 2019",
    //   url: "/blog-details"
    // },
    // {
    //   title: "A Clean Website Gives More Experience To The Visitors",
    //   date: "July 12, 2019",
    //   url: "/blog-details"
    // }
  ]
};

export const FooterContactData = {
  title: "Contact",
  infos: [
    {
      text: "000 8888 999",
      url: "tel:000-8888-999"
    },
    {
      text: "contact@materialyz.com",
      url: "mailto:contact@materialyz.com"
    },
    {
      text: "CP Tank, VP Road, Bhuleshwar, Gulal Wadi, Charni Road (East)",
      url: ""
    }
  ]
};

export const FooterBottomData = {
  social: [
    // {
    //   icon: "fab fa-twitter",
    //   url: "#"
    // },
    // {
    //   icon: "fab fa-pinterest",
    //   url: "#"
    // },
    // {
    //   icon: "fab fa-facebook-f",
    //   url: "#"
    // },
    // {
    //   icon: "fab fa-youtube",
    //   url: "#"
    // }
  ]
};
