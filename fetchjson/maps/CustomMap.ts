import { User } from "./User";
import { Company } from "./Company";
// import '@types/google.maps';

export interface Mappale{
  location : {
    lat: number;
    lng: number;
  }
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.M ap;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappale): void {
    const marker = new google.maps.Marker({map: this.googleMap, position : {
      lat:mappable.location.lat,
      lng: mappable.location.lng
    }})
    marker.addListener('click', ()=> {
      const inforWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      inforWindow.open(this.googleMap, marker);
    });
  }

  // addCompanyMarker(company: Company): void{
  //   new google.maps.Marker({map: this.googleMap, position : {
  //     lat:company.location.lat,
  //     lng: company.location.lng
  //   }})
  // }
}
