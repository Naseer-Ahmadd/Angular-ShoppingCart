import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.scss"],
})
export class IndexComponent implements OnInit {
  carouselList = [
    {
      bannerImg: "./assets/banner_img/slide_1.jpg",
      title: "Kitchen appliances and home products",
      description: "Elevate your home with quality kitchen appliances and curated products for a stylish, functional space.",
    },
    {
      bannerImg: "./assets/banner_img/slide_2.jpg",
      title: "Holiday Toy List",
      description:
        "A festive curation of top holiday toys, ensuring delightful gifts for kids of all ages.",
    },
    {
      bannerImg: "./assets/banner_img/slide_3_.jpg",
      title: "Mega Fashion Days",
      description: "Mega Fashion Days: Unleash style with exclusive deals on the latest trends and must-have fashion items.",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
