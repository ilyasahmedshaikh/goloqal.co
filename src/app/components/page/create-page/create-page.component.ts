import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ConfigService } from '../../../core/http/config/config.service'
import { ApiService } from '../../../core/http/api/api.service';
import { LoaderService } from '../../../core/services/loader/loader.service';
@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.scss']
})
export class CreatePageComponent implements OnInit {

  location: any = {
    lat: 51.678418,
    lng: 7.809007
  }

  isShopHidden: boolean = false;

  categories: any = [];
  allCategories: any = [];
  topics: any = [];
  products: any = [];

  editObj: any = {};
  isEdit: boolean = false;

  preview: string = '';
  imageUploaded: boolean = false;

  productPreview: string = '';
  productImageUploaded: boolean = false;

  programForm: any = FormGroup;

  constructor(
    private fb: FormBuilder,
    private config: ConfigService,
    private api: ApiService,
    private router: Router,
    private loader: LoaderService,
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
      button1WebsiteName: ['Website', Validators.required],
      button1WebsiteUrl: ['', Validators.required],
      button2Call: ['Call', Validators.required],
      button2TelephoneNumber: ['', Validators.required],
      button3FacebookInstagram: ['Facebook/Instagram', Validators.required],
      button3FacebookInstagramUrl: ['', Validators.required],
      button4Line: ['Line', Validators.required],
      button4LineUrl: ['', Validators.required],
      button5Chat: ['Chat', Validators.required],
      button5ChatUrl: ['', Validators.required],
      button6Ticket: ['Get Ticket', Validators.required],
      button6TicketUrl: ['', Validators.required],
    });
  }

  getTopics() {
    this.api.getAll(this.config.collections.topics_table).subscribe(res => {
      this.topics = res;
    });
  }

  getCategories() {
    this.api.getAll(this.config.collections.categories_table).subscribe(res => {
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
        image: this.productPreview,
        name: this.programForm.value.product_name,
        price: this.programForm.value.product_price,
      });

      this.programForm.patchValue({
        product_image: '',
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
          image: this.productPreview,
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
      image: this.preview,
      products: this.products
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

  onImagePreview(event) {
    this.preview = event.preview;
    this.imageUploaded = event.imageUploaded;
  }

  onProductImagePreview(event) {
    this.productPreview = event.preview;
    this.productImageUploaded = event.imageUploaded;
  }

}
