import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
const searchIcon = new URL("./searchicon.png", import.meta.url).href;
const backGround = new URL("./bg-img.jpg", import.meta.url).href;
{/* <img className="background" src={backGround} alt="search" /> */}
const Header = () => {
  return (
    
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://th.bing.com/th/id/OIP.0KuvW5b7W3js-U-yOHLD_QHaHa?w=170&h=180&c=7&r=0&o=7&cb=ucfimg2&dpr=1.3&pid=1.7&rm=3&ucfimg=1"
        />
      </div>
      <div className="search-wrapper">
        <input type="text" placeholder="Search...🍕 Pizza" className="search-input" />
        <img className="search-icon" src={searchIcon} alt="search" />
      </div>
      <div className="Nav-items">
        <ul>
          <li className="Nav-elements" >Home</li>
          <li className="Nav-elements" >About Us</li>
          <li className="Nav-elements" >Contact US</li>
          <li className="Nav-elements" >Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestaurantCard = (props) => {
  const { resData } = props;
  // console.log(resData.card.card);
  const data = resData.card.card.info;
  const CDNLINK =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="Food"
        src={CDNLINK + data.cloudinaryImageId}
      ></img>
      <h3>{data.name}</h3>
      <h5>{data.cuisines.join(", ")}</h5>
      <div style={{ display: "flex", gap: "10px" }}>
        <h5 style={{ margin: 0 }}>{data.avgRating}⭐</h5>
        <h5 style={{ margin: 0 }}>{data.costForTwo}</h5>
      </div>
    </div>
  );
};
const resObj = {
  data: {
    cards: [
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "1073472",
              name: "Charcoal Eats - Biryani & Beyond",
              cloudinaryImageId:
                "FOOD_CATALOG/IMAGES/CMS/2025/5/17/15510beb-0c24-40b5-9664-d51025ced5f1_949669eb-0693-4537-89be-513561f0c10b.jpg",
              locality: "Kurla",
              areaName: "Kurla",
              costForTwo: "₹550 for two",
              cuisines: ["Biryani", "Kebabs", "North Indian"],
              avgRating: 4.5,
              parentId: "5338",
              avgRatingString: "4.5",
              totalRatingsString: "241",
              promoted: true,
              adTrackingId:
                "cid=de99576e-2cf1-4199-a1d8-acd0b6082cb0~p=0~adgrpid=de99576e-2cf1-4199-a1d8-acd0b6082cb0#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1073472~plpr=COLLECTION~eid=f7aec9d1-7c38-4e0f-b13e-345ff84eede4~srvts=1763113955478~collid=83639",
              sla: {
                deliveryTime: 43,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "40-45 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-14 23:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textExtendedBadges: {},
                  textBased: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹129",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "de99576e-2cf1-4199-a1d8-acd0b6082cb0",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=1073472&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "47833",
              name: "Persian Darbar",
              cloudinaryImageId: "7aeb2bbff29d99d6e986240911ce0e71",
              locality: "Bandra Kurla Complex",
              areaName: "Bandra Kurla Complex",
              costForTwo: "₹1800 for two",
              cuisines: [
                "North Indian",
                "Biryani",
                "Mughlai",
                "Kebabs",
                "Seafood",
                "Chinese",
                "Desserts",
                "Beverages",
              ],
              avgRating: 4.3,
              parentId: "711",
              avgRatingString: "4.3",
              totalRatingsString: "19K+",
              sla: {
                deliveryTime: 39,
                lastMileTravel: 2.2,
                serviceability: "SERVICEABLE",
                slaString: "35-40 mins",
                lastMileTravelString: "2.2 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-15 03:00:00",
                opened: true,
              },
              badges: {
                imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          imageId: "newg.png",
                          description: "Gourmet",
                        },
                      },
                    ],
                  },
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹188",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: {
                aggregatedRating: { rating: "4.2", ratingCount: "6.3K+" },
                source: "GOOGLE",
                sourceIconImageId:
                  "v1704440323/google_ratings/rating_google_tag",
              },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=47833&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "790316",
              name: "House of Biryan- Biryani, Kepsa and More",
              cloudinaryImageId:
                "FOOD_CATALOG/IMAGES/CMS/2025/10/13/179ba968-5134-4b4a-b1ab-7bfd1f4981e1_76e68e27-eac0-473f-b03a-b2e78dc0d631.jpg",
              locality: "Janardan Patil Marg",
              areaName: "Chembur",
              costForTwo: "₹300 for two",
              cuisines: ["Biryani", "Kebabs", "Rolls"],
              avgRating: 4.3,
              parentId: "385250",
              avgRatingString: "4.3",
              totalRatingsString: "2.2K+",
              promoted: true,
              adTrackingId:
                "cid=bda25c8c-2714-454c-9eec-4ea8a3cc66c3~p=4~adgrpid=bda25c8c-2714-454c-9eec-4ea8a3cc66c3#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=790316~plpr=COLLECTION~eid=0311aa55-cf93-4f09-b0d0-6de65cfa032d~srvts=1763113955478~collid=83639",
              sla: {
                deliveryTime: 55,
                lastMileTravel: 6.5,
                serviceability: "SERVICEABLE",
                slaString: "50-60 mins",
                lastMileTravelString: "6.5 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-15 04:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹99",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "bda25c8c-2714-454c-9eec-4ea8a3cc66c3",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=790316&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "16640",
              name: "Behrouz Biryani",
              cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
              locality: "Kalina",
              areaName: "Santacruz East",
              costForTwo: "₹500 for two",
              cuisines: [
                "Biryani",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Beverages",
                "Desserts",
              ],
              avgRating: 4.3,
              parentId: "1803",
              avgRatingString: "4.3",
              totalRatingsString: "9.5K+",
              sla: {
                deliveryTime: 47,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "45-50 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-14 23:59:00",
                opened: true,
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "Rxawards/_CATEGORY-Biryani.png",
                    description: "Delivery!",
                  },
                  { imageId: "newg.png", description: "Gourmet" },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          imageId: "Rxawards/_CATEGORY-Biryani.png",
                          description: "Delivery!",
                        },
                      },
                      {
                        attributes: {
                          imageId: "newg.png",
                          description: "Gourmet",
                        },
                      },
                    ],
                  },
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹69",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=16640&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "744918",
              name: "Biryani Can - Pure Veg Biryanis",
              cloudinaryImageId:
                "FOOD_CATALOG/IMAGES/CMS/2024/3/27/8e43d297-b488-400a-8790-263cfb428a40_69638042-129a-495c-9f00-4d1dbfb9ff97.png",
              locality: "V N Puran Marg",
              areaName: "V N Puran Marg",
              costForTwo: "₹500 for two",
              cuisines: ["Biryani", "Kebabs", "Desserts"],
              avgRating: 4,
              veg: true,
              parentId: "448662",
              avgRatingString: "4.0",
              totalRatingsString: "1.1K+",
              promoted: true,
              adTrackingId:
                "cid=ec447e19-a97e-4d2a-a52c-53d103456e99~p=5~adgrpid=ec447e19-a97e-4d2a-a52c-53d103456e99#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=744918~plpr=COLLECTION~eid=aed9ecc8-5dc0-426f-80be-e1000e638d6c~srvts=1763113955478~collid=83639",
              sla: {
                deliveryTime: 62,
                lastMileTravel: 5.8,
                serviceability: "SERVICEABLE",
                slaString: "60-70 mins",
                lastMileTravelString: "5.8 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-15 03:00:00",
                opened: true,
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                          description: "pureveg",
                        },
                      },
                    ],
                  },
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹99",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "ec447e19-a97e-4d2a-a52c-53d103456e99",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=744918&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "186123",
              name: "The Biryani Life",
              cloudinaryImageId: "wrohceoglapcgvingtqe",
              locality: "Kalina",
              areaName: "Santacruz East",
              costForTwo: "₹250 for two",
              cuisines: [
                "Biryani",
                "Mughlai",
                "Lucknowi",
                "Hyderabadi",
                "Kebabs",
                "Desserts",
                "Beverages",
              ],
              avgRating: 4.2,
              parentId: "8496",
              avgRatingString: "4.2",
              totalRatingsString: "1.4K+",
              sla: {
                deliveryTime: 48,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "45-50 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-14 23:59:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹159",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=186123&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "246410",
              name: "Mughal Darbar",
              cloudinaryImageId: "c7df5d6925867d0951c654977a7a04a0",
              locality: "Janata Timber Market",
              areaName: "Chembur",
              costForTwo: "₹350 for two",
              cuisines: [
                "North Indian",
                "Mughlai",
                "Chinese",
                "Biryani",
                "Tandoor",
              ],
              avgRating: 4.2,
              parentId: "624328",
              avgRatingString: "4.2",
              totalRatingsString: "6.8K+",
              promoted: true,
              adTrackingId:
                "cid=e4c6f296-5f20-4115-8ade-140cc1a16506~p=6~adgrpid=e4c6f296-5f20-4115-8ade-140cc1a16506#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=246410~plpr=COLLECTION~eid=514eab93-4816-487c-b312-3d7003fcc68d~srvts=1763113955478~collid=83639",
              sla: {
                deliveryTime: 51,
                lastMileTravel: 6.2,
                serviceability: "SERVICEABLE",
                slaString: "50-60 mins",
                lastMileTravelString: "6.2 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-15 05:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textExtendedBadges: {},
                  textBased: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹59",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "e4c6f296-5f20-4115-8ade-140cc1a16506",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=246410&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "1073472",
              name: "Charcoal Eats - Biryani & Beyond",
              cloudinaryImageId:
                "FOOD_CATALOG/IMAGES/CMS/2025/5/17/15510beb-0c24-40b5-9664-d51025ced5f1_949669eb-0693-4537-89be-513561f0c10b.jpg",
              locality: "Kurla",
              areaName: "Kurla",
              costForTwo: "₹550 for two",
              cuisines: ["Biryani", "Kebabs", "North Indian"],
              avgRating: 4.5,
              parentId: "5338",
              avgRatingString: "4.5",
              totalRatingsString: "241",
              promoted: true,
              adTrackingId:
                "cid=de99576e-2cf1-4199-a1d8-acd0b6082cb0~p=0~adgrpid=de99576e-2cf1-4199-a1d8-acd0b6082cb0#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1073472~plpr=COLLECTION~eid=f7aec9d1-7c38-4e0f-b13e-345ff84eede4~srvts=1763113955478~collid=83639",
              sla: {
                deliveryTime: 43,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "40-45 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-14 23:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textExtendedBadges: {},
                  textBased: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹129",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "de99576e-2cf1-4199-a1d8-acd0b6082cb0",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=1073472&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "47833",
              name: "Persian Darbar",
              cloudinaryImageId: "7aeb2bbff29d99d6e986240911ce0e71",
              locality: "Bandra Kurla Complex",
              areaName: "Bandra Kurla Complex",
              costForTwo: "₹1800 for two",
              cuisines: [
                "North Indian",
                "Biryani",
                "Mughlai",
                "Kebabs",
                "Seafood",
                "Chinese",
                "Desserts",
                "Beverages",
              ],
              avgRating: 4.3,
              parentId: "711",
              avgRatingString: "4.3",
              totalRatingsString: "19K+",
              sla: {
                deliveryTime: 39,
                lastMileTravel: 2.2,
                serviceability: "SERVICEABLE",
                slaString: "35-40 mins",
                lastMileTravelString: "2.2 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-15 03:00:00",
                opened: true,
              },
              badges: {
                imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          imageId: "newg.png",
                          description: "Gourmet",
                        },
                      },
                    ],
                  },
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹188",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: {
                aggregatedRating: { rating: "4.2", ratingCount: "6.3K+" },
                source: "GOOGLE",
                sourceIconImageId:
                  "v1704440323/google_ratings/rating_google_tag",
              },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=47833&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "790316",
              name: "House of Biryan- Biryani, Kepsa and More",
              cloudinaryImageId:
                "FOOD_CATALOG/IMAGES/CMS/2025/10/13/179ba968-5134-4b4a-b1ab-7bfd1f4981e1_76e68e27-eac0-473f-b03a-b2e78dc0d631.jpg",
              locality: "Janardan Patil Marg",
              areaName: "Chembur",
              costForTwo: "₹300 for two",
              cuisines: ["Biryani", "Kebabs", "Rolls"],
              avgRating: 4.3,
              parentId: "385250",
              avgRatingString: "4.3",
              totalRatingsString: "2.2K+",
              promoted: true,
              adTrackingId:
                "cid=bda25c8c-2714-454c-9eec-4ea8a3cc66c3~p=4~adgrpid=bda25c8c-2714-454c-9eec-4ea8a3cc66c3#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=790316~plpr=COLLECTION~eid=0311aa55-cf93-4f09-b0d0-6de65cfa032d~srvts=1763113955478~collid=83639",
              sla: {
                deliveryTime: 55,
                lastMileTravel: 6.5,
                serviceability: "SERVICEABLE",
                slaString: "50-60 mins",
                lastMileTravelString: "6.5 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-15 04:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹99",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "bda25c8c-2714-454c-9eec-4ea8a3cc66c3",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=790316&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "16640",
              name: "Behrouz Biryani",
              cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
              locality: "Kalina",
              areaName: "Santacruz East",
              costForTwo: "₹500 for two",
              cuisines: [
                "Biryani",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Beverages",
                "Desserts",
              ],
              avgRating: 4.3,
              parentId: "1803",
              avgRatingString: "4.3",
              totalRatingsString: "9.5K+",
              sla: {
                deliveryTime: 47,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "45-50 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-14 23:59:00",
                opened: true,
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "Rxawards/_CATEGORY-Biryani.png",
                    description: "Delivery!",
                  },
                  { imageId: "newg.png", description: "Gourmet" },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          imageId: "Rxawards/_CATEGORY-Biryani.png",
                          description: "Delivery!",
                        },
                      },
                      {
                        attributes: {
                          imageId: "newg.png",
                          description: "Gourmet",
                        },
                      },
                    ],
                  },
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹69",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=16640&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "744918",
              name: "Biryani Can - Pure Veg Biryanis",
              cloudinaryImageId:
                "FOOD_CATALOG/IMAGES/CMS/2024/3/27/8e43d297-b488-400a-8790-263cfb428a40_69638042-129a-495c-9f00-4d1dbfb9ff97.png",
              locality: "V N Puran Marg",
              areaName: "V N Puran Marg",
              costForTwo: "₹500 for two",
              cuisines: ["Biryani", "Kebabs", "Desserts"],
              avgRating: 4,
              veg: true,
              parentId: "448662",
              avgRatingString: "4.0",
              totalRatingsString: "1.1K+",
              promoted: true,
              adTrackingId:
                "cid=ec447e19-a97e-4d2a-a52c-53d103456e99~p=5~adgrpid=ec447e19-a97e-4d2a-a52c-53d103456e99#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=744918~plpr=COLLECTION~eid=aed9ecc8-5dc0-426f-80be-e1000e638d6c~srvts=1763113955478~collid=83639",
              sla: {
                deliveryTime: 62,
                lastMileTravel: 5.8,
                serviceability: "SERVICEABLE",
                slaString: "60-70 mins",
                lastMileTravelString: "5.8 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-15 03:00:00",
                opened: true,
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                          description: "pureveg",
                        },
                      },
                    ],
                  },
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹99",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "ec447e19-a97e-4d2a-a52c-53d103456e99",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=744918&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "186123",
              name: "The Biryani Life",
              cloudinaryImageId: "wrohceoglapcgvingtqe",
              locality: "Kalina",
              areaName: "Santacruz East",
              costForTwo: "₹250 for two",
              cuisines: [
                "Biryani",
                "Mughlai",
                "Lucknowi",
                "Hyderabadi",
                "Kebabs",
                "Desserts",
                "Beverages",
              ],
              avgRating: 4.2,
              parentId: "8496",
              avgRatingString: "4.2",
              totalRatingsString: "1.4K+",
              sla: {
                deliveryTime: 48,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "45-50 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-14 23:59:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹159",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=186123&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "246410",
              name: "Mughal Darbar",
              cloudinaryImageId: "c7df5d6925867d0951c654977a7a04a0",
              locality: "Janata Timber Market",
              areaName: "Chembur",
              costForTwo: "₹350 for two",
              cuisines: [
                "North Indian",
                "Mughlai",
                "Chinese",
                "Biryani",
                "Tandoor",
              ],
              avgRating: 4.2,
              parentId: "624328",
              avgRatingString: "4.2",
              totalRatingsString: "6.8K+",
              promoted: true,
              adTrackingId:
                "cid=e4c6f296-5f20-4115-8ade-140cc1a16506~p=6~adgrpid=e4c6f296-5f20-4115-8ade-140cc1a16506#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=246410~plpr=COLLECTION~eid=514eab93-4816-487c-b312-3d7003fcc68d~srvts=1763113955478~collid=83639",
              sla: {
                deliveryTime: 51,
                lastMileTravel: 6.2,
                serviceability: "SERVICEABLE",
                slaString: "50-60 mins",
                lastMileTravelString: "6.2 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-15 05:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textExtendedBadges: {},
                  textBased: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹59",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "e4c6f296-5f20-4115-8ade-140cc1a16506",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=246410&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "1073472",
              name: "Charcoal Eats - Biryani & Beyond",
              cloudinaryImageId:
                "FOOD_CATALOG/IMAGES/CMS/2025/5/17/15510beb-0c24-40b5-9664-d51025ced5f1_949669eb-0693-4537-89be-513561f0c10b.jpg",
              locality: "Kurla",
              areaName: "Kurla",
              costForTwo: "₹550 for two",
              cuisines: ["Biryani", "Kebabs", "North Indian"],
              avgRating: 4.5,
              parentId: "5338",
              avgRatingString: "4.5",
              totalRatingsString: "241",
              promoted: true,
              adTrackingId:
                "cid=de99576e-2cf1-4199-a1d8-acd0b6082cb0~p=0~adgrpid=de99576e-2cf1-4199-a1d8-acd0b6082cb0#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=1073472~plpr=COLLECTION~eid=f7aec9d1-7c38-4e0f-b13e-345ff84eede4~srvts=1763113955478~collid=83639",
              sla: {
                deliveryTime: 43,
                lastMileTravel: 2,
                serviceability: "SERVICEABLE",
                slaString: "40-45 mins",
                lastMileTravelString: "2.0 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-14 23:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textExtendedBadges: {},
                  textBased: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹129",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "de99576e-2cf1-4199-a1d8-acd0b6082cb0",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=1073472&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "47833",
              name: "Persian Darbar",
              cloudinaryImageId: "7aeb2bbff29d99d6e986240911ce0e71",
              locality: "Bandra Kurla Complex",
              areaName: "Bandra Kurla Complex",
              costForTwo: "₹1800 for two",
              cuisines: [
                "North Indian",
                "Biryani",
                "Mughlai",
                "Kebabs",
                "Seafood",
                "Chinese",
                "Desserts",
                "Beverages",
              ],
              avgRating: 4.3,
              parentId: "711",
              avgRatingString: "4.3",
              totalRatingsString: "19K+",
              sla: {
                deliveryTime: 39,
                lastMileTravel: 2.2,
                serviceability: "SERVICEABLE",
                slaString: "35-40 mins",
                lastMileTravelString: "2.2 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-15 03:00:00",
                opened: true,
              },
              badges: {
                imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          imageId: "newg.png",
                          description: "Gourmet",
                        },
                      },
                    ],
                  },
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹188",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: {
                aggregatedRating: { rating: "4.2", ratingCount: "6.3K+" },
                source: "GOOGLE",
                sourceIconImageId:
                  "v1704440323/google_ratings/rating_google_tag",
              },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=47833&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "790316",
              name: "House of Biryan- Biryani, Kepsa and More",
              cloudinaryImageId:
                "FOOD_CATALOG/IMAGES/CMS/2025/10/13/179ba968-5134-4b4a-b1ab-7bfd1f4981e1_76e68e27-eac0-473f-b03a-b2e78dc0d631.jpg",
              locality: "Janardan Patil Marg",
              areaName: "Chembur",
              costForTwo: "₹300 for two",
              cuisines: ["Biryani", "Kebabs", "Rolls"],
              avgRating: 4.3,
              parentId: "385250",
              avgRatingString: "4.3",
              totalRatingsString: "2.2K+",
              promoted: true,
              adTrackingId:
                "cid=bda25c8c-2714-454c-9eec-4ea8a3cc66c3~p=4~adgrpid=bda25c8c-2714-454c-9eec-4ea8a3cc66c3#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=790316~plpr=COLLECTION~eid=0311aa55-cf93-4f09-b0d0-6de65cfa032d~srvts=1763113955478~collid=83639",
              sla: {
                deliveryTime: 55,
                lastMileTravel: 6.5,
                serviceability: "SERVICEABLE",
                slaString: "50-60 mins",
                lastMileTravelString: "6.5 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-15 04:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹99",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "bda25c8c-2714-454c-9eec-4ea8a3cc66c3",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=790316&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "16640",
              name: "Behrouz Biryani",
              cloudinaryImageId: "a4ffed13eb197c6df43dfe1c756560e5",
              locality: "Kalina",
              areaName: "Santacruz East",
              costForTwo: "₹500 for two",
              cuisines: [
                "Biryani",
                "North Indian",
                "Kebabs",
                "Mughlai",
                "Beverages",
                "Desserts",
              ],
              avgRating: 4.3,
              parentId: "1803",
              avgRatingString: "4.3",
              totalRatingsString: "9.5K+",
              sla: {
                deliveryTime: 47,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "45-50 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-14 23:59:00",
                opened: true,
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "Rxawards/_CATEGORY-Biryani.png",
                    description: "Delivery!",
                  },
                  { imageId: "newg.png", description: "Gourmet" },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          imageId: "Rxawards/_CATEGORY-Biryani.png",
                          description: "Delivery!",
                        },
                      },
                      {
                        attributes: {
                          imageId: "newg.png",
                          description: "Gourmet",
                        },
                      },
                    ],
                  },
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹69",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=16640&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "744918",
              name: "Biryani Can - Pure Veg Biryanis",
              cloudinaryImageId:
                "FOOD_CATALOG/IMAGES/CMS/2024/3/27/8e43d297-b488-400a-8790-263cfb428a40_69638042-129a-495c-9f00-4d1dbfb9ff97.png",
              locality: "V N Puran Marg",
              areaName: "V N Puran Marg",
              costForTwo: "₹500 for two",
              cuisines: ["Biryani", "Kebabs", "Desserts"],
              avgRating: 4,
              veg: true,
              parentId: "448662",
              avgRatingString: "4.0",
              totalRatingsString: "1.1K+",
              promoted: true,
              adTrackingId:
                "cid=ec447e19-a97e-4d2a-a52c-53d103456e99~p=5~adgrpid=ec447e19-a97e-4d2a-a52c-53d103456e99#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=744918~plpr=COLLECTION~eid=aed9ecc8-5dc0-426f-80be-e1000e638d6c~srvts=1763113955478~collid=83639",
              sla: {
                deliveryTime: 62,
                lastMileTravel: 5.8,
                serviceability: "SERVICEABLE",
                slaString: "60-70 mins",
                lastMileTravelString: "5.8 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-15 03:00:00",
                opened: true,
              },
              badges: {
                imageBadges: [
                  {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                ],
              },
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {
                    badgeObject: [
                      {
                        attributes: {
                          imageId: "v1695133679/badges/Pure_Veg111.png",
                          description: "pureveg",
                        },
                      },
                    ],
                  },
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹99",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "ec447e19-a97e-4d2a-a52c-53d103456e99",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=744918&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "186123",
              name: "The Biryani Life",
              cloudinaryImageId: "wrohceoglapcgvingtqe",
              locality: "Kalina",
              areaName: "Santacruz East",
              costForTwo: "₹250 for two",
              cuisines: [
                "Biryani",
                "Mughlai",
                "Lucknowi",
                "Hyderabadi",
                "Kebabs",
                "Desserts",
                "Beverages",
              ],
              avgRating: 4.2,
              parentId: "8496",
              avgRatingString: "4.2",
              totalRatingsString: "1.4K+",
              sla: {
                deliveryTime: 48,
                lastMileTravel: 2.7,
                serviceability: "SERVICEABLE",
                slaString: "45-50 mins",
                lastMileTravelString: "2.7 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-14 23:59:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  textBased: {},
                  imageBased: {},
                  textExtendedBadges: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹159",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=186123&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "246410",
              name: "Mughal Darbar",
              cloudinaryImageId: "c7df5d6925867d0951c654977a7a04a0",
              locality: "Janata Timber Market",
              areaName: "Chembur",
              costForTwo: "₹350 for two",
              cuisines: [
                "North Indian",
                "Mughlai",
                "Chinese",
                "Biryani",
                "Tandoor",
              ],
              avgRating: 4.2,
              parentId: "624328",
              avgRatingString: "4.2",
              totalRatingsString: "6.8K+",
              promoted: true,
              adTrackingId:
                "cid=e4c6f296-5f20-4115-8ade-140cc1a16506~p=6~adgrpid=e4c6f296-5f20-4115-8ade-140cc1a16506#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=246410~plpr=COLLECTION~eid=514eab93-4816-487c-b312-3d7003fcc68d~srvts=1763113955478~collid=83639",
              sla: {
                deliveryTime: 51,
                lastMileTravel: 6.2,
                serviceability: "SERVICEABLE",
                slaString: "50-60 mins",
                lastMileTravelString: "6.2 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2025-11-15 05:00:00",
                opened: true,
              },
              badges: {},
              isOpen: true,
              type: "F",
              badgesV2: {
                entityBadges: {
                  imageBased: {},
                  textExtendedBadges: {},
                  textBased: {},
                },
              },
              aggregatedDiscountInfoV3: {
                header: "ITEMS",
                subHeader: "AT ₹59",
                logoCtx: { text: "BENEFITS" },
              },
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
                commsStyling: {},
              },
              differentiatedUi: {
                displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                differentiatedUiMediaDetails: {
                  mediaType: "ADS_MEDIA_ENUM_IMAGE",
                  lottie: {},
                  video: {},
                },
              },
              reviewsSummary: {},
              displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              restaurantOfferPresentationInfo: {},
              externalRatings: { aggregatedRating: { rating: "--" } },
              ratingsDisplayPreference:
                "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              campaignId: "e4c6f296-5f20-4115-8ade-140cc1a16506",
            },
            analytics: {},
            cta: {
              link: "swiggy://menu?restaurant_id=246410&source=collection&query=Biryani",
              text: "RESTAURANT_MENU",
              type: "DEEPLINK",
            },
            widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food",
          },
          relevance: {
            type: "RELEVANCE_TYPE_ON_MENU_RETURN",
            sectionId: "MENU_RETURN_FOOD",
          },
        },
      },
    ],
  },
};
const Body = () => {
  return (
    <div className="body">

      <div className="res-container">
        {resObj.data.cards.map((x, index) => {
          // console.log(index);
          return <RestaurantCard key={index} resData={x} />;
        })}
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
