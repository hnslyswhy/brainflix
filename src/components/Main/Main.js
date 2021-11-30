import MainVideo from "../MainVideo/MainVideo";
import VideoList from "../VideoList/VideoList";

function Main() {
  let fakeData = [
    {
      title: "BMX Rampage: 2021 Highlights",
      channel: "Red Cow",
      image: "https://i.imgur.com/l2Xfgpl.jpg",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      views: "1,001,023",
      likes: "110,985",
      duration: "4:01",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: 1626032763000,
      comments: [
        {
          name: "Micheal Lyons",
          comment:
            "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
          likes: 0,
          timestamp: 1628522461000,
        },
        {
          name: "Gary Wong",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
          likes: 0,
          timestamp: 1626359541000,
        },
        {
          name: "Theodore Duncan",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He’s definitely my favorite ever!",
          likes: 0,
          timestamp: 1626011132000,
        },
      ],
      id: "84e96018-4022-434e-80bf-000ce4cd12b8",
    },
    {
      title: "Become A Travel Pro In One Easy Lesson",
      channel: "Todd Welch",
      image: "https://i.imgur.com/5qyCZrD.jpg",
      description:
        "Luxury is something everyone deserves from time to time. Such an indulgence can make a vacation a truly rejuvenating experience. This video will focus a lot on helping the first time or inexperienced traveler head out prepared and confident in themselves.",
      views: "2,043,765",
      likes: "400,058",
      duration: "7:26",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: 1625158995000,
      comments: [
        {
          name: "Mattie Casarez",
          comment:
            "This is exactly the kind of advice I’ve been looking for! One minute you’re packing your bags, the next you’re dancing around in the streets without a care in the world.",
          likes: 0,
          timestamp: 1625250720000,
        },
        {
          name: "Taylor Jade",
          comment:
            "Excellent tips! Another idea is to keep all of your important belongings like your passport inside a waterproof bag. Perfect for those last minute trips to the beach, trust me.",
          likes: 0,
          timestamp: 1625238122000,
        },
        {
          name: "Adnan Natt",
          comment:
            "Who ever knew travel could be so easy? Looking forward to getting to put this into practice when I fly away in the near future. Wish me good luck!",
          likes: 0,
          timestamp: 1625177192000,
        },
      ],
      id: "c05b9a93-8682-4ab6-aff2-92ebb4bbfc14",
    },
    {
      title: "Les Houches The Hidden Gem Of The Chamonix",
      channel: "Cornelia Blair",
      image: "https://i.imgur.com/yFS8EBr.jpg",
      description:
        "Les Houches, located 6 kilometres from Chamonix, is a ski resort with a domain which extends from an altitude of 950 metres up to 1900 metres. Long descents through tree-lined slopes are combined with impressive views of the Mont Blanc massif and the Chamonix valley. Les Houches is twinned with the Russian villages of Sochi and Krasnaya-Polyana and was chosen by the International Olympic Committee to assist in the organization of the 2014 Winter Olympic Games. Watch for more fun facts!",
      views: "16,950",
      likes: "3,856",
      duration: "4:13",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: 1622991672000,
      comments: [
        {
          name: "Giovana Alpine",
          comment:
            "Wow! You can bet that we’ll be checking this place out when we’re in the area. The views look absolutely breathtaking. Thank you so much for sharing this with the world!",
          likes: 0,
          timestamp: 1623104591000,
        },
        {
          name: "Victoire Lesage",
          comment:
            "Skiing is a lifestyle! This may be hard to believe now, but I once competed here for the World Cup. The Alps are at their most beautiful when you’re shredding down them FAST.",
          likes: 0,
          timestamp: 1623071160000,
        },
        {
          name: "Sharon Tillson",
          comment:
            "Amazing footage of an amazing spot! It’s so inspiring to watch the sun rising over a landscape like this. I can only imagine how fresh the air must feel there on a snowy morning.",
          likes: 3,
          timestamp: 1623002522000,
        },
      ],
      id: "25ce5d91-a262-4dcf-bb87-42b87546bcfa",
    },
  ];

  return (
    <main>
      <MainVideo video={fakeData[0]} />
      <VideoList videos={fakeData.slice(1)} />
    </main>
  );
}

export default Main;
