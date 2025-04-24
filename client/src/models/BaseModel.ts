export abstract class BaseModel {
    constructor(
      public id: string = '',
      public createdAt: Date = new Date()
    ) {}
    
    abstract validate(): boolean;
  }