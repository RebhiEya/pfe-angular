import Guid from "devextreme/core/guid";


export interface ControlCheckList {
    id: Guid;
    controlId : Guid;
    productId:Guid;
    criteria : string;
    category : string;
    operation : string;
    controlMeans : string;
    requirement : string;
    defects : string;
    conformity : boolean;
    measure : number;
    comments : string;
    nonConformities : string;
    crud:number;
  }


