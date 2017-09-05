export class ServiceModel {

  description: string;
  propertyA: string;
  propertyB: string;
  propertyC: string;
  bandwidth: string;
  startdate: string;
  enddate: string;

  constructor(
      private id: string,
      private name: string
  ) {

  }
}
