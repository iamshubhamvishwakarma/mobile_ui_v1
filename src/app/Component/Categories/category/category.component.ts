import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  items = [
    {
      id: 1,
      title: 'Loot deals',
      url: '/loot-deal',
      image: 'assets/TopCategories/smartphone.svg'
    },
    {
      id: 1,
      title: 'Mobile deals',
      url: '/loot-deal',
      image: 'assets/TopCategories/smartphone.svg'
    },
    {
      id: 1,
      title: 'Coupon code',
      url: '/loot-deal',
      image: 'assets/TopCategories/voucher.svg'
    },
    {
      id: 1,
      title: 'Clothing',
      url: '/loot-deal',
      image: 'assets/TopCategories/women-dress.svg'
    },
    {
      id: 1,
      title: 'Food deals',
      url: '/loot-deal',
      image: 'assets/TopCategories/pizza-slice.svg'
    },
    {
      id: 1,
      title: 'Travel deals',
      url: '/loot-deal',
      image: 'assets/TopCategories/plane.svg'
    },
    {
      id: 1,
      title: 'Loot deals',
      url: '/loot-deal',
      image: 'assets/TopCategories/smartphone.svg'
    },
    {
      id: 1,
      title: 'Loot deals',
      url: '/loot-deal',
      image: 'assets/TopCategories/smartphone.svg'
    },
    {
      id: 1,
      title: 'Loot deals',
      url: '/loot-deal',
      image: 'assets/TopCategories/smartphone.svg'
    },
    {
      id: 1,
      title: 'Loot deals',
      url: '/loot-deal',
      image: 'assets/TopCategories/smartphone.svg'
    }
  ];
  constructor() {}

  ngOnInit() {}
}
