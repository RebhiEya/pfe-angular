export class Audit {
  category: string;
  designation: string;
  state: string;
  reference: string;
  startDate: Date;
  endDate: Date;

  constructor(category: string, designation: string, state: string, reference: string, startDate: Date, endDate: Date) {
    this.category = category;
    this.designation = designation;
    this.state = state;
    this.reference = reference;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}
