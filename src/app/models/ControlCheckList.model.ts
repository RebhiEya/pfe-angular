
export class ControlCheckList {
  category: string;
  criteria: string;
  operation: string;
  conformity: string;
  defects: string;
  measures: Number;
  description: string;


  constructor(category: string, criteria: string,  operation: string, conformity: string, defects: string ,  measures: Number,
    description: string ) {
    this.category = category;
    this.criteria = criteria;
    this.operation = operation;
    this.conformity = conformity;
    this.defects = defects;
    this.measures = measures;
    this.description = description
  }
}
