'use strict';
angular
  .module('com.module.index')
  .controller('index', function ($scope,Category) {
    $scope.myInterval = 4000;
    function getImage() {
      Category.findOne({
        filter: {
          order: 'created DESC',
          include: [
            'products'
          ],
          where:{
            name: 'indexSlide'
          }
        }
      },function (result) {
        console.log(result);
        $scope.slides = result.products
      });
    }
    getImage();
    $scope.changeStyle = false;
    $(window).scroll(function(){
      if($(document).scrollTop() > 200)
      {
        $scope.changeStyle = true;
      }
      else
      {
        $scope.changeStyle = false
      }
    });
  })
  .controller('slideCtrl', function ($scope) {
    $scope.myInterval = 3000;
    $scope.noWrapSlides = false;
    $scope.active = 0;
    $scope.slides = [
      {
        image: 'https://a0.muscache.com/im/pictures/69af284f-9716-4a6f-89bf-83197162fb50.jpg?aki_policy=profile_medium',
        content: 'A fantastic stay - 10 of us (5 adults and 5 children between 10-15). This is a part of a larger complex of villas located in between Hoi An and Da Nang - very quiet but great facilities. You need to take a taxi - which was organised with a request to Tai. Tai was the superstar of the show -he helped organise transport, an extra mattress, tour trip, restaurant recommendations and a booking - this blew us away in terms of experience - we were not even expecting something close. Many thanks ',
        id: 0,
        name: 'Amrish'
      },
      {
        image: 'https://a0.muscache.com/im/pictures/44e4a6f6-086d-4a01-86c5-83543a8ecd1b.jpg?aki_policy=profile_medium',
        id: 1,
        name: 'Winhola',
        content: 'Tai, was a great host, very responsive, very helpful, very friendly, excellent English communication skills. He always responded to my emails within 10mins and would help me book taxis, suggest restaurants, places to go and he also got me some Paracetomol when I fell ill! I highly recommend a large group to book with Tai! Thanks Tai!'
      },
      {
        image: 'https://a0.muscache.com/im/pictures/3200aec5-2196-46a0-880a-d36353b1e1a2.jpg?aki_policy=profile_medium',
        id: 2,
        name: 'Yang',
        content: "It might've rained the entire duration of our stay in da nang but we enjoyed the entirety of our time. This was due to our host Tai. His place was a fantastic base, but Tai himself was such an asset. Helpful and friendly, a straight-up awesome dude. Highly recommended! A+"
      },
      {
        image: 'https://a0.muscache.com/im/pictures/a617577a-bf43-461c-bcc0-deed33e08079.jpg?aki_policy=profile_medium',
        id: 3,
        name: 'Pip',
        content: 'Tai is a handsome ,warmhearted, considered host. With his kindness help, we have great time here! His house is beautiful and comfortable ~Though the house is not very near to the central city, but its convenient to take a taxi~ anytime, if u have problems in da nang ... ask Tai! :))'
      },
      {
        image: 'https://a0.muscache.com/im/pictures/a32ee45d-12d5-498d-b9e0-5920ce7bdbb5.jpg?aki_policy=profile_medium',
        id: 4,
        name: 'Lora',
        content: 'Tai has been our super host even before the trip started. During our trip, Tai took us to nice local restaurants, Sky 36, great food, amazing view. We loved the company of our super host Tai, his hospitality made our stay so easy and so fun. Super host Tai rocks'
      },
      {
        image: 'https://a0.muscache.com/im/users/1007065/profile_pic/1436392535/original.jpg?aki_policy=profile_medium',
        id: 5,
        name: 'Ha',
        content: 'Tai was an AMAZING host! Our flight arrived early and we asked for early check in which was not a problem. We ended up arriving even early to the studio and contacted him and he was there within a few minutes to let us in. The studio was a nice clean spot and walking distance to food and the beach! I had many questions about tours, food locations, taxi services etc and Tai always answered my questions right away. He helped call a taxi on our last day to take us to Hoi An as well. He was a fantastic host! If we come back to Danang we would definitely stay at his place again. Thanks for everything Tai!'
      },
      {
        image: 'https://a0.muscache.com/im/pictures/b947357b-26b8-4d8f-9871-66990c6cce35.jpg?aki_policy=profile_medium',
        id: 6,
        name :'DeNeige',
        content: "Clean and comfy, located just a short cab ride from airport (~10 mins), easy walking distance to beach and numerous coffee shops. Tai is an excellent host, very responsive to messages, and had great recommendations for dining in the area. We enjoyed our stay and would certainly recommend Tai's place to a friend!"
      },{
        image: 'https://a0.muscache.com/im/pictures/282cafeb-0af9-4f76-8a88-d32fd4f5aaf2.jpg?aki_policy=profile_medium',
        id: 7,
        name: 'Flore',
        content: "Tai's place is located in a nice neighbourhood not too far from the beach. The room is spacious and includes everything you need from a mini kitchen to a well equipped bathroom. The bed is really comfy and I slept like a baby! Tai has been really helpful making our stay enjoyable. He gave us recommendations on what to do, where to eat and even arranged a motorbike hire for us. We walked to the city centre by the Dragon bridge in less than 30 minutes otherwise if you are driving a motorbike you can go anywhere in less than 10/15 minutes. I enjoyed Tai's place so much I'm coming back on Wednesday before making my way back to Hanoi and then home in London. Thank you so much Tai and see you next week!"
      },{
        image: 'https://a0.muscache.com/im/pictures/fec8004a-9ce7-42cc-b500-cd5422c8002d.jpg?aki_policy=profile_medium',
        id: 8,
        name: 'Wiebe',
        content: "Tai's place is really nice, neat and just a short walk away from the beach. A great spot for a couple of days exploring the city. Tai is the best, very friendly and really helpful, you can literally wake him in the middle of the night for Help. To bad we only had one day here but i would definitely recommend this place!"
      },{
        image: 'https://a0.muscache.com/im/pictures/67a97544-bf14-4c21-aa8c-4bff44ed946f.jpg?aki_policy=profile_medium',
        id: 9,
        name : 'Mira',
        content: "The house is perfect for our needs, supermarket, coffee shop are all in close walking distance, and mainly reason is close to the downtown Meanwhile, many thanks the landlord Ms Chi Le & Mr Tai honest, We'll come back again if chance. ^_^ It's a amazing view apartment location, and very fast in responding to my queries, million tks. Mira"
      }

    ];
  })
  .controller('footerCtrl', function ($scope,$rootScope,$timeout) {
    $scope.showChat = false;
    $scope.close = true;
    // $timeout(function () {
    //   $scope.showChat = true;
    // },10000);
    $scope.hideChat = function () {
      $scope.showChat = !$scope.showChat;
    };
    $scope.closeChat = function () {
      $scope.close = true;
    };
    if( $rootScope.contentChat && $rootScope.contentChat.length > 0){

    } else {
      $rootScope.contentChat = [];
    }
    $scope.submitChat = function (content) {
      $scope.value = '';
      $rootScope.contentChat.push(content);
    };
  });


