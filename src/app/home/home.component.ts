import {
  Component,
  ViewChild,
  TemplateRef,
  ChangeDetectionStrategy,
  OnInit
} from "@angular/core";
import {
  Gallery,
  GalleryItem,
  ThumbnailsPosition,
  ImageSize
} from "ng-gallery";
import { Lightbox } from "ng-gallery/lightbox";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  items: GalleryItem[];
  @ViewChild("itemTemplate", { static: true }) itemTemplate: TemplateRef<any>;

  imageData = data;

  constructor(public gallery: Gallery, public lightbox: Lightbox) {}

  ngOnInit() {
    /** Basic Gallery Example */

    // Creat gallery items
    this.items = this.imageData.map(item => {
      return {
        type: "imageViewer",
        data: {
          src: item.srcUrl,
          thumb: item.previewUrl
        }
      };
    });

    /** Lightbox Example */

    // Get a lightbox gallery ref
    const lightboxRef = this.gallery.ref("lightbox");

    // Add custom gallery config to the lightbox (optional)
    lightboxRef.setConfig({
      imageSize: ImageSize.Cover,
      thumbPosition: ThumbnailsPosition.Top,
      itemTemplate: this.itemTemplate,
      gestures: false
    });

    // Load items into the lightbox gallery ref
    lightboxRef.load(this.items);
  }
}

const data = [
  {
    srcUrl: "https://preview.ibb.co/jrsA6R/img12.jpg",
    previewUrl: "https://preview.ibb.co/jrsA6R/img12.jpg"
  },
  {
    srcUrl: "https://preview.ibb.co/kPE1D6/clouds.jpg",
    previewUrl: "https://preview.ibb.co/kPE1D6/clouds.jpg"
  },
  {
    srcUrl: "https://preview.ibb.co/mwsA6R/img7.jpg",
    previewUrl: "https://preview.ibb.co/mwsA6R/img7.jpg"
  },
  {
    srcUrl: "https://preview.ibb.co/kZGsLm/img8.jpg",
    previewUrl: "https://preview.ibb.co/kZGsLm/img8.jpg"
  }
];
