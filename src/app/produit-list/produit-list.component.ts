import { Component, OnInit } from '@angular/core';
import { Produit } from '../entities/produit';
import { ProduitService } from '../services/produit.service';
import { PanierService } from 'src/app/services/panier.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { trigger, state, style, transition, animate } from '@angular/animations'; 
// import * from 'jquery';



@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent implements OnInit {
  slide = 'Look jQuery Animation working in action!';

  produits : Produit[]
  user:Object = {};
  constructor(private service : ProduitService,private UserService:UserService, private panier : PanierService, private router : Router) { }

  ngOnInit() {
    var $;

    this.service.getAllProduit().subscribe(value => {
      this.produits = value;
      console.log(value)
    })
    if (this.UserService.user) {
      this.user = this.UserService.user
      console.log(this.user);
      
    }

    $('.carousel').carousel({
      interval: 2000
    })
  }

  addProduitInPanier(produit) {
    
    this.panier.addProduit(produit)
    // console.log(this.panier.panier)
  }

  goToFiche(id){
    this.router.navigate(["produit-fiche", id])
  }
}
