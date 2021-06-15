import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { LoaderService } from '../../../core/services/loader/loader.service';
import { StoreImageService } from '../../../core/http/store-image/store-image.service';
@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  isShopHidden: boolean = false;

  categories: any = [];
  allCategories: any = [];
  topics: any = [];
  products: any = [];

  editObj: any = {};
  isEdit: boolean = false;

  // loading: any = "assets/img/loading.gif";
  preview: any = this.imageStore.preview;
  productPreview: any = "assets/img/img-upload-icon.png";

  imageUploaded: boolean = false;
  productImageUploaded: boolean = false;

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
    private router: Router,
    private loader: LoaderService,
    public imageStore: StoreImageService,
  ) {
    this.editObj = this.router.getCurrentNavigation().extras.state?.page;
  }

  ngOnInit(): void {
    this.formInit();
    this.getCategories();
    this.getTopics();

    if(this.editObj) {
      this.programForm.patchValue({
        ...this.editObj
      });
      this.isEdit = true;

      console.log('create page', this.editObj);
    }
  }

  formInit() {
    this.programForm = this.fb.group({
      topic_id:  ['', Validators.required],
      category_id: ['', Validators.required],
      title: ['', Validators.required],
      startDateTime: ['', Validators.required],
      endDateTime: ['', Validators.required],
      everyDay: [false, Validators.required],
      featured: [false, Validators.required],
      extraAvailability: ['', Validators.required],
      description: ['', Validators.required],
      descriptionUrl: ['', Validators.required],
      locationUrl: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      // product data
      product_id: ['', Validators.required],
      product_name: ['', Validators.required],
      product_image: ['', Validators.required],
      product_price: [0, Validators.required],
      // buttons
      button1WebsiteName: ['', Validators.required],
      button1WebsiteUrl: ['', Validators.required],
      button2Call: ['', Validators.required],
      button2TelephoneNumber: ['', Validators.required],
      button3FacebookInstagram: ['', Validators.required],
      button3FacebookInstagramUrl: ['', Validators.required],
      button4Line: ['', Validators.required],
      button4LineUrl: ['', Validators.required],
      button5Chat: ['', Validators.required],
      button5ChatUrl: ['', Validators.required],
      button6Ticket: ['', Validators.required],
      button6TicketUrl: ['', Validators.required],
    });
  }

  getTopics() {
    this.api.getAll(this.config.collections.topics_table).subscribe(res =>{
      this.topics = res;
    });
  }

  getCategories() {
    this.api.getAll(this.config.collections.categories_table).subscribe(res =>{
      this.allCategories = res;
    });
  }

  onChangeTopic(event) {
    let topic_id = event.target.value;
    this.categories = this.allCategories.filter(c => c.topicId == topic_id);

    // Show/Hide shop section
    if(topic_id == 'UTRJH4nGSuP9dOfOnwOL') this.isShopHidden = true;
    else this.isShopHidden = false;
  }

  onAddProduct() {
    if (this.programForm.value.product_name && this.programForm.value.product_price) {
      this.products.push({
        id: this.products.length + 1,
        image: '',
        name: this.programForm.value.product_name,
        price: this.programForm.value.product_price,
      });

      this.programForm.patchValue({
        product_name: '',
        product_price: 0
      })

      console.log(this.products);
    } else {
      alert('Details Missing!');
    }
  }

  editProduct(id) {
    let product = this.products.find(p => p.id == id);

    this.programForm.patchValue({
      product_id: product.id,
      product_name: product.name,
      product_image: product.image,
      product_price: product.price
    })
  }

  onUpdateProduct() {
    this.products.map((p, i) => {
      if (p.id == this.programForm.value.product_id) {
        this.products[i] = {
          id: this.programForm.value.product_id,
          image: this.programForm.value.product_image,
          name: this.programForm.value.product_name,
          price: this.programForm.value.product_price,
        }
      }
    });
  }

  deleteProduct(id) {
    this.products = this.products.filter(p => p.id != id);
  }

  createPage() {
    let data = {
      ...this.programForm.value,
      image: this.imageStore.preview,
    };

    let request = this.api.post(this.config.collections.pages_table, data);

    request.then(() => {
      this.programForm.reset();
      this.router.navigateByUrl("/homepage");
    })
    .catch((error) => {
      alert(error);
    });
  }

  updatePage() {
    let data = {
      ...this.programForm.value
    }

    let request = this.api.put(this.config.collections.pages_table, this.editObj.id, data);

    request.then(() => {
      this.programForm.reset();
      this.router.navigateByUrl("/homepage");
    })
    .catch((error) => {
      alert(error);
    });
  }

  deletePage() {
    let request = this.api.delete(this.config.collections.pages_table, this.editObj.id);

    request.then(() => {
      console.log('deleted successfully');
      this.router.navigateByUrl("/homepage");
    })
    .catch((error) => {
      alert(error);
    });
  }

  readURL(event: any) {
    this.imageStore.readURL(event);

    // store image in DB and get store URL
    this.imageStore.uploadFile(event);
  }

  productReadURL(event: any): void {
    if (event.target['files'] && event.target['files'][0]) {
      const file = event.target['files'][0];

      const reader = new FileReader();
      reader.onload = e => this.productPreview = reader.result;

      reader.readAsDataURL(file);
    }
  }

}
