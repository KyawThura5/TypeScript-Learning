class Crud<T> {
  private items: T[] = [];

  // Create
  create(item: T): void {
    this.items.push(item);
    console.log(`Item added:`, item);
  }

  // Read
  read(): T[] {
    console.log(`All items:`, this.items);
    return this.items;
  }

  // Update
  update(index: number, newItem: T): void {
    if (index >= 0 && index < this.items.length) {
      console.log(`Item updated:`, this.items[index], "=>", newItem);
      this.items[index] = newItem;
    } else {
      console.log(`Invalid index: ${index}`);
    }
  }

  // Delete
  delete(index: number): void {
    if (index >= 0 && index < this.items.length) {
      console.log(`Item deleted:`, this.items[index]);
      this.items.splice(index, 1);
    } else {
      console.log(`Invalid index: ${index}`);
    }
  }
}

// Example usage
const crud = new Crud<string>();

crud.create("Item 1");
crud.create("Item 2");
crud.read();
crud.update(0, "Updated Item 1");
crud.delete(1);
crud.read();
