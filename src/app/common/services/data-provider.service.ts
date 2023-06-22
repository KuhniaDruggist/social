import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataProviderService {

  private data = new Map();

  public setData(data: any, storageName: string): void {
    this.data.set(storageName, data);
  }

  public getSavedData(storageName: string): any {
    return this.data.get(storageName);
  }

}
